// @flow

import React, { PureComponent } from 'react';
import { v4 } from 'uuid';

type Props = {
  updateStatusLoading: Function;
  updateBookList: Function;
  bookList: Array<{
    id: string,
    title: string,
    author: string,
    text: string,
    textHTML: string,
    img: string
  }>;
}

type State = {
  search: string;
}

class SearchForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange: () => void;

  handleChange(event: SyntheticEvent<HTMLButtonElement>) {
    const search = event.target.value;
    this.setState({ search });
  }

  handleSubmit: () => void;

  handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { updateStatusLoading, updateBookList } = this.props;
    const { search } = this.state;
    updateStatusLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(response => response.json())
      .then(listBook => {
        const formattedList = (listBook.items ? listBook.items.map(book => {
          const { title, authors, description, pageCount, imageLinks } = book.volumeInfo
          const bookID = (book.id ? book.id : v4());
          const bookTitle = (title ? title : '');
          const bookAuthors = (authors ? authors : []);
          const bookDescription = (description ? description : 'Описание отсутствует');
          const bookPageCount = (pageCount ? pageCount : 0);
          const bookImageLinks = (imageLinks ? (imageLinks.thumbnail ? imageLinks.thumbnail : '') : '');
          const inLog = false;

          return {
            id: bookID,
            title: bookTitle,
            authors: bookAuthors.join(' '),
            description: (bookDescription.length > 150 ? `${bookDescription.slice(0, 147)}...` : bookDescription),
            pageCount: bookPageCount,
            imageLinks: bookImageLinks,
            inLog
          }
        }) : []);
        const filterList = formattedList.filter((book) =>
          book.pageCount > 0
        );
        updateStatusLoading(false);
        updateBookList(filterList);
      })
      .catch(() => {
        updateStatusLoading(false);
      });
  }

  render() {
    const { bookList } = this.props;
    const { search } = this.state;

    return (
      <div className="search-form-wrpper">
        <form
          id="search-form"
          className="search-form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="input search-input"
            type="text"
            value={search}
            placeholder="Введите название книги"
            onChange={this.handleChange}
          />
          <button
            className="button search-button"
            type="submit"
            form="search-form"
            value="Submit"
          >
            <span>
              Найти
            </span>
          </button>
        </form>
        {(bookList.length === 0
          ? (
            <p>
              Найдите интересующие вас книги и добавьте их в собственную коллекцию.
            </p>
          )
          : (
            ''
          )
        )}
      </div>
    );
  }
}

export default SearchForm;
