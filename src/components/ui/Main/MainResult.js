// @flow

import React from 'react';
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
  }
}

const MainResult = ({
  result,
}: Props) => {
  const {
    symbols,
    words,
    time,
    speedReadingSymbols,
    speedReadingWords,
  } = result;
  const sec = time;
  const min = Math.floor(time / 60);
  const timetring = `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`;

  return (
    <div className="app-main-text is-visible">
      <div className="app-main-text-title">
        <h2>
          Результаты теста
        </h2>
      </div>
      {(time > 0)
        ? (
          <div className="app-main-text-result">
            <p>
              <b>
                Количество знаков в тексте:
              </b>
              {' '}
              {symbols}
            </p>
            <p>
              <b>
                Количество слов в тексте:
              </b>
              {' '}
              {words}
            </p>
            <p>
              <b>
                Время чтения:
              </b>
              {' '}
              {timetring}
            </p>
            <p>
              <b>
                Скорость чтения:
              </b>
              {' '}
              {`${speedReadingWords} слов в минуту (${speedReadingSymbols} знаков в минуту)`}
            </p>
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
              <ResultLine
                title={result.selectedItem[0].title}
                author={result.selectedItem[0].author}
                day={countNumberDays(60, speedReadingWords, result.selectedItem[0].allWords)}
              />
            </div>
          </div>
        )
        : (
          <p>
            Тест был завершен слишком быстро, повторите попытку.
          </p>
        )
      }
    </div>
  );
};

export default MainResult;
