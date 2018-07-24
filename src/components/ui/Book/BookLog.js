// @flow

import React, { PureComponent } from 'react';
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
  onRemoveBookLog: Function;
}

class BookLog extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onRemoveBookLog = this.onRemoveBookLog.bind(this);
  }

  onRemoveBookLog: () => void;

  onRemoveBookLog(event: SyntheticEvent<HTMLButtonElement>) {
    const { onRemoveBookLog, bookList } = this.props;
    const bookID = event.currentTarget.getAttribute('bookID');
    onRemoveBookLog(bookID, bookList);
  }

  render() {
    const { bookList, result, navSelected } = this.props;
    const wordsPage = 250;
    const totalWords = Number(bookList.reduce((acc: number, book) => (
      acc + Number(book.pageCount)
    ), 0)) * wordsPage;
    const totalMin = Math.floor(totalWords / result.speedReadingWords);

    return (
      <div className={`log-list-book-wrapper book-block-item${navSelected === 'bookLog' ? ' is-active' : ''}`}>
        <div className="app-main-text-title">
          <h2>
            Коллекция
          </h2>
        </div>
        {result.speedReadingWords > 0
          ? (
            <div className="app-main-text-result-book">
              <h3>
                Если вы будете читать
                {' '}
                <span className="special">
                  по 60 минут в день.
                </span>
                <br />
                  Вы прочитаете...
              </h3>
              <ul className="search-list-book">
                {bookList.map(item => (
                  <li className="search-item-book" key={item.id}>
                    <ResultLine
                      title={item.title}
                      author={item.authors}
                      day={
                        countNumberDays(
                          60,
                          result.speedReadingWords,
                          Number(item.pageCount) * wordsPage,
                        )
                      }
                    />
                    <button
                      type="button"
                      bookID={item.id}
                      className="button-delete-book"
                      onClick={this.onRemoveBookLog}
                    >
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M18.83 16l12.584-12.584c0.782-0.781 0.782-2.049 0-2.83s-2.048-0.782-2.83 0l-12.584 12.584-12.584-12.584c-0.782-0.782-2.048-0.782-2.83 0s-0.782 2.049 0 2.83l12.584 12.584-12.584 12.584c-0.782 0.781-0.782 2.049 0 2.83 0.391 0.39 0.903 0.586 1.415 0.586s1.024-0.195 1.415-0.586l12.584-12.584 12.584 12.584c0.391 0.391 0.903 0.586 1.415 0.586s1.024-0.195 1.415-0.586c0.782-0.781 0.782-2.049 0-2.83l-12.584-12.583z" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <h3>
                На весь список вам потребуется
                {' '}
                <span className="special">
                  {`${Math.floor(totalMin / 60)} ч. ${totalMin % 60} мин. `}
                </span>
              </h3>
            </div>
          )
          : (
            <p>
              Для того чтобы посчитать время необходимое для прочтения
              вашего журнала сначала пройдите тест на скорость чтения.
            </p>
          )
        }
      </div>
    );
  }
}

export default BookLog;
