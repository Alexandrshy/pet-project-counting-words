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
    };
}

class Main extends PureComponent<Props> {
    render() {

        return (
            <div className="app-main">
                <div className={`app-main-item${this.props.navSelected === 'stopwatch' ? ' is-active' : ''}`}>
                    <MainText
                        options={this.props.options}
                        timerRunning={this.props.timerRunning}
                        timerVisible={this.props.timerVisible}
                        activeTextID={this.props.activeTextID} />
                </div>
                <div className={`app-main-item${this.props.navSelected === 'list' ? ' is-active' : ''}`}>
                    <MainBook />
                </div>
                <div className={`app-main-item${this.props.navSelected === 'result' ? ' is-active' : ''}`}>
                    <MainResult result={this.props.result} />
                </div>
            </div>
        )
    }
}

export default Main;