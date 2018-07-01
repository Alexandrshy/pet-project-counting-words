// @flow

import React, {PureComponent} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../Book/BookList';
import Loader from '../Loader/Loader';
import './BookSearch.css';

type Props = {
    onChangeBookSearchList: Function;
    onAddBookLog: Function;
    onRemoveBookLog: Function;
    onNavClick: Function;
    books: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
        inLog: boolean;
    }>;
    listLogID: Array<string>;
    navSelected: string;

}

type State = {
    emptyResult: boolean;
    loading: boolean;
}

class BookSearch extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            emptyResult: false,
            loading: false
        }

        this.handleLoading = this.handleLoading.bind(this);
        this.handleBookList = this.handleBookList.bind(this);
    }

    handleLoading: () => void;
    handleLoading(loading: boolean) {
        this.setState({loading})
    }

    handleBookList: () => void;
    handleBookList(books: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
    }>) {
        if (books.length) {
            this.setState({emptyResult: false});
            this.props.onChangeBookSearchList(books);
        } else {
            this.setState({emptyResult: true});
        }
    }

    render() {
        const { onAddBookLog, onRemoveBookLog, onNavClick, books, listLogID, navSelected } = this.props;
        const { emptyResult, loading } = this.state;

        return (
            <div className={`book-search book-block-item${navSelected === 'bookSearch' ? ' is-active' : ''}`}>
                <div className="app-main-text-title">
                    <h2>Поиск книг</h2>
                </div>
                <SearchForm 
                    updateBookList={this.handleBookList}
                    updateStatusLoading={this.handleLoading} />
                <Loader 
                    loading={loading} />
                <BookList 
                    books={books} 
                    listLogID={listLogID} 
                    emptyResult={this.state.emptyResult}
                    onAddBookLog={onAddBookLog}
                    onRemoveBookLog={onRemoveBookLog}
                    onNavClick={onNavClick} />
            </div>
        )
    }
}

export default BookSearch;