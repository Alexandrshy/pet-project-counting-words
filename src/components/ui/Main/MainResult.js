// @flow

import React, { PureComponent } from 'react';
import './Main.css'


type Props = {
    result: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
    }
}

class MainResult extends PureComponent<Props> {
    render() {
        const { symbols, words, time, speedReadingSymbols, speedReadingWords } = this.props.result;
        const sec = time;
        const min = Math.floor(time / 60);
        const timetring = `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`

        return (
            <div className="app-main-text is-visible">
                <div className="app-main-text-title">
                    <h2>Результаты теста</h2>
                </div>
                {(time > 0) ?
                    <div className="app-main-text-result">
                        <p><b>Количество знаков в тексте:</b> {symbols}</p>
                        <p><b>Количество слов:</b> {words}</p>
                        <p><b>Время чтения:</b> {timetring}</p>
                        <p><b>Скорость чтения:</b> {`${speedReadingWords} слов в минуту (${speedReadingSymbols} знаков в минуту)`}</p>
                    </div>
                    :
                    <p>Тест был завершен слишком быстро, повторите попытку.</p>
                }
            </div>
        )
    }
}

export default MainResult;