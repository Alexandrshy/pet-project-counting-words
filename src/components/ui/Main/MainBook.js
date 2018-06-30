// @flow

import React, { PureComponent } from 'react';
import BookSearch from '../Book/BookSearch';
import BookLog from '../Book/BookLog';
import BookNavPanel from '../Book/BookNavPanel';


type Props = {
    result: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
        selectedItem: {};
    }
}

type State = {
    bookSearch: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
        inLog: boolean;
    }>;
    bookLog: Array<{
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

class MainBook extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            bookSearch: [],
            bookLog: [],
            listLogID: [],
            navSelected: 'bookSearch'
        }

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleBookSearchList = this.handleBookSearchList.bind(this);
        this.handleAddBookLog = this.handleAddBookLog.bind(this);
        this.handleRemoveBookLog = this.handleRemoveBookLog.bind(this);
    }
    
    handleNavClick: () => void;
    handleNavClick = (nav: string) => {
        this.setState({ navSelected: nav});
    }

    handleBookSearchList: () => void;
    handleBookSearchList(bookSearch: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
        inLog: boolean;
    }>) {
        this.setState({ bookSearch });
    }

    handleAddBookLog: () => void;
    handleAddBookLog(id: string) {
        const book =  this.state.bookSearch.filter((book) => book.id === id ); 
        const bookLog = [ ...this.state.bookLog, book[0] ];
        const listLogID = [ ...this.state.listLogID, id]
        this.setState({ bookLog, listLogID });
    }
    
    handleRemoveBookLog: () => void;
    handleRemoveBookLog(id: string) {
        const bookLog =  this.state.bookLog.filter((book) => book.id !== id );
        const listLogID =  this.state.listLogID.filter((item) => item !== id );
        this.setState({ bookLog, listLogID })
    }

    render() {
        const { bookSearch, bookLog, listLogID, navSelected } = this.state;
        const { result } = this.props;
        
        return (
            <div className="app-main-text app-main-text--incr-padding is-visible">
                <BookSearch 
                    books={bookSearch}
                    listLogID={listLogID}
                    navSelected={navSelected}
                    onChangeBookSearchList={this.handleBookSearchList}
                    onAddBookLog={this.handleAddBookLog} 
                    onRemoveBookLog={this.handleRemoveBookLog} />
                <BookLog 
                    bookList={bookLog}
                    navSelected={navSelected}
                    result={result} />
                {bookLog.length ?
                    <BookNavPanel 
                        navSelected={navSelected}
                        onNavClick={this.handleNavClick} />
                    :
                    ''
                }
            </div>
        )
    }
}

export default MainBook;