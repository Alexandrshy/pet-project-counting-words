// @flow

import React, {PureComponent} from 'react';
import './Main.css'


type Props = {
    result: {}
}

class MainResult extends PureComponent<Props> {
    render() {
        const { symbols, words, time, speedReadingSymbols, speedReadingWords } = this.props.result;

        return (
            <div className="app-main-text is-visible">
                <div className="app-main-text-title">
                    <h2>Результаты теста</h2>
                </div>
                <p><b>Количество знаков в тексте:</b> { symbols }</p>
                <p><b>Количество слов:</b> { words }</p>
                <p><b>Время чтения:</b> { time }</p>
                <p><b>Скорость чтения:</b> {`${ speedReadingWords } слов в минуту (${ speedReadingSymbols } знаков в минуту)`}</p>
            </div>
        )
    }
}

export default MainResult;