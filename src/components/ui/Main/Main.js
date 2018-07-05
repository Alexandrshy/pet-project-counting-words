// @flow

import React, { PureComponent } from 'react';
import MainText from './MainText';
import MainBook from './MainBook';
import MainResult from './MainResult';
import './Main.css'

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string,
        img: string
    }>;
    navSelected: string;
    activeTextID: string;
    timerRunning: boolean;
    timerVisible: boolean;
    result: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
        selectedItem: {};
    };
}

const Main = ({ options, navSelected, activeTextID, timerRunning, timerVisible, result }: Props) => {
    return (
        <div className="app-main">
            <div className={`app-main-item${navSelected === 'stopwatch' ? ' is-active' : ''}`}>
                <MainText
                    options={options}
                    timerRunning={timerRunning}
                    timerVisible={timerVisible}
                    activeTextID={activeTextID} />
            </div>
            <div className={`app-main-item${navSelected === 'list' ? ' is-active' : ''}`}>
                <MainBook />
            </div>
            <div className={`app-main-item${navSelected === 'result' ? ' is-active' : ''}`}>
                <MainResult 
                    options={options}
                    result={result} />
            </div>
        </div>
    )
}

export default Main;