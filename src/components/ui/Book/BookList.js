// @flow

import React, { PureComponent } from "react";

type Props = {
  onAddBookLog: Function,
  onRemoveBookLog: Function,
  onNavClick: Function,
  books: Array<{
    id: string,
    title: string,
    authors: string,
    description: string,
    pageCount: string,
    imageLinks: string,
    inLog: boolean
  }>,
  emptyResult: boolean,
  listLogID: Array<string>
};

class BookList extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onAddBookLog = this.onAddBookLog.bind(this);
    this.onRemoveBookLog = this.onRemoveBookLog.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick: () => void;

  onNavClick(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { onNavClick } = this.props;
    const nav = event.currentTarget.getAttribute("name");
    onNavClick(nav);
  }

  onAddBookLog: () => void;

  onAddBookLog(event: SyntheticEvent<HTMLButtonElement>) {
    const { onAddBookLog, books } = this.props;
    const bookID = event.currentTarget.getAttribute("bookID");
    onAddBookLog(bookID, books);
  }

  onRemoveBookLog: () => void;

  onRemoveBookLog(event: SyntheticEvent<HTMLButtonElement>) {
    const { onRemoveBookLog } = this.props;
    const bookID = event.currentTarget.getAttribute("bookID");
    onRemoveBookLog(bookID);
  }

  render() {
    const { books, listLogID, emptyResult } = this.props;

    return (
      <div className="search-list-book-wrapper">
        {emptyResult === true ? (
          <p className="is-error">
            По вашему запросу ничего не найдено. Попробуйте другое название.
          </p>
        ) : (
          <ul className="search-list-book">
            {books.map(item => (
              <li className="search-item-book" key={item.id}>
                <div className="search-item-book-wrapper">
                  <div className="search-item-book-img">
                    <img src={item.imageLinks} alt="" />
                  </div>
                  <div className="search-item-book-text">
                    <p className="search-item-book-title">{item.title}</p>
                    <p className="search-item-book-authors">{item.authors}</p>
                    <p className="search-item-book-description">
                      {item.description}
                    </p>
                    {listLogID.indexOf(item.id) === -1 ? (
                      <div className="search-item-book-button-wrapper">
                        <button
                          type="button"
                          bookID={item.id}
                          className="button search-item-book-button"
                          onClick={this.onAddBookLog}
                        >
                          <span>Добавить в коллекцию</span>
                        </button>
                      </div>
                    ) : (
                      <div className="search-item-book-button-wrapper">
                        <button
                          type="button"
                          bookID={item.id}
                          name="bookLog"
                          className="button is-success search-item-book-button"
                          onClick={this.onNavClick}
                        >
                          <span>Перейти в коллекцию</span>
                        </button>
                        <button
                          type="button"
                          bookID={item.id}
                          className="button is-cancel search-item-book-button"
                          onClick={this.onRemoveBookLog}
                        >
                          <span>Удалить</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BookList;
