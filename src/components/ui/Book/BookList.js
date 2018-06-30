// @flow

import React, {PureComponent } from 'react';

type Props = {
    onAddBookLog: Function;
    onRemoveBookLog: Function;
    books: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
        inLog: boolean;
    }>;
    emptyResult: boolean;
    listLogID: Array<string>;
}

class BookList extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        this.onAddBookLog = this.onAddBookLog.bind(this);
        this.onRemoveBookLog = this.onRemoveBookLog.bind(this);
    }

    onAddBookLog: () => void;
    onAddBookLog(event: SyntheticEvent<HTMLButtonElement>) {
        const bookID = event.currentTarget.getAttribute('bookID');
        this.props.onAddBookLog(bookID);
    }

    onRemoveBookLog: () => void;
    onRemoveBookLog(event: SyntheticEvent<HTMLButtonElement>) {
        const bookID = event.currentTarget.getAttribute('bookID');
        this.props.onRemoveBookLog(bookID);
    }

    render() {
        const { books, listLogID, emptyResult } = this.props;

        return(
            <div className="search-list-book-wrapper">
                {(emptyResult === true ?
                    <p>По вашему запросу ничего не найдено. Попробуйте другое название.</p>
                :
                    <ul className="search-list-book">
                        {books.map((item) =>
                            <li className="search-item-book" key={item.id}>
                                <div className="search-item-book-wrapper">
                                    <div className="search-item-book-img">
                                        <img src={item.imageLinks} />
                                    </div>
                                    <div className="search-item-book-text">
                                        <p className="search-item-book-title">{item.title}</p>
                                        <p className="search-item-book-authors">{item.authors}</p>
                                        <p className="search-item-book-description">{item.description}</p>
                                        { listLogID.indexOf(item.id) === -1 ?
                                            <button 
                                                bookID={item.id}
                                                className="button search-item-book-button"
                                                onClick={this.onAddBookLog}><span>Добавить в Список Чтения</span></button>
                                            :
                                            <button 
                                                bookID={item.id}
                                                className="button is-cancel search-item-book-button"
                                                onClick={this.onRemoveBookLog}><span>Удалить из списка</span></button>
                                        }
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        )
    }
} 

export default BookList;