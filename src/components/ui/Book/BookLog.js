// @flow

import React, {PureComponent } from 'react';
import countNumberDays from '../../../func/countNumberDays';
import ResultLine from '../ResultLine/ResultLine';

type Props = { 
    result: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
        selectedItem: {};
    };
    bookList: Array<{
        id: string;
        title: string;
        authors: string;
        description: string;
        pageCount: string;
        imageLinks: string;
        inLog: boolean;
    }>;
    navSelected: string;
}

class BookLog extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { bookList, result, navSelected } = this.props;
        
        return(
            <div className={`log-list-book-wrapper book-block-item${navSelected === 'bookLog' ? ' is-active' : ''}`}>
                <div className="app-main-text-title">
                    <h2>Журнал чтения</h2>
                </div>
                {result.speedReadingWords > 0 ?
                    <ul className="search-list-book">
                        {bookList.map((item) =>
                            <li className="search-item-book" key={item.id}>
                                <ResultLine 
                                    title={item.title} 
                                    author={item.authors}
                                    day={countNumberDays(60, result.speedReadingWords, Number(item.pageCount) * 250)} />
                            </li>
                        )}
                    </ul>
                    :
                    <p>Для того чтобы посчитать время необходимое для прочтения вашего журнала сначала пройдите тест на скорость чтения.</p>
                }
            </div>
        )
    }
}

export default BookLog;