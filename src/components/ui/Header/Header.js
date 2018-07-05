// @flow

import React, { PureComponent } from 'react';
import Stopwatch from '../Stopwatch/Stopwatch';
import SelectTextList from '../SelectText/SelectTextList';
import './Header.css';

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string,
        language: string,
        level: string,
        words: string
    }>;
    timerRunning: boolean;
    timerVisible: boolean;
    onChangeTimerRunning: Function;
    onChangeTimerVisible: Function;
    onChangeActiveTextID: Function;
    onChangeNav: Function;
    onSaveResult: Function;
    activeTextID: string;
}

type State = {
    elapsed: number;
    lastTick: number;
}

class Header extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            elapsed: 0,
            lastTick: 0
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.tick = this.tick.bind(this);
        this.format = this.format.bind(this);
    }

    interval: IntervalID;

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick: () => void;
    tick() {
        if (this.props.timerRunning) {
            let now = Date.now();
            let diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    format: () => string;
    format(ms: number) {
        let totalSec = Math.floor(ms / 1000);
        let min = Math.floor(totalSec / 60);
        let sec = totalSec % 60;

        return `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`;
    }

    handleStart: () => void;
    handleStart() {
        this.props.onChangeTimerRunning(true);
        this.props.onChangeTimerVisible(true);

        this.setState({
            lastTick: Date.now()
        })

        this.props.onChangeNav('stopwatch');
    }

    handlePause: () => void;
    handlePause() {
        this.props.onChangeTimerRunning(false);
    }

    handleFinish: () => void;
    handleFinish() {
        const elapsedSec = Math.floor(this.state.elapsed / 1000);
        this.handleStop();
        if (elapsedSec > 0) {
            const selectedItem = this.props.options.filter((item) => item.id === this.props.activeTextID);
            const quantityWordsText = Number(selectedItem[0].words);
            const quantitySymbolsText = selectedItem[0].text.length + selectedItem[0].title.length + selectedItem[0].author.length;
            const elapsedMin = elapsedSec / 60;
            const speedReadingSymbols = Math.floor(quantitySymbolsText / elapsedMin);
            const speedReadingWords = Math.floor(quantityWordsText / elapsedMin);
    
            this.props.onSaveResult({
                words: quantityWordsText,
                symbols: quantitySymbolsText,
                time: elapsedSec,
                speedReadingWords,
                speedReadingSymbols,
                selectedItem
            });
    
            this.props.onChangeNav('result');
        }
    }

    handleStop: () => void;
    handleStop() {
        let element = document.getElementById('main-text');
        if (element) {
            element.scrollTop = 0;
        }

        this.props.onChangeTimerRunning(false);
        this.props.onChangeTimerVisible(false);

        this.setState({
            elapsed: 0,
            lastTick: 0
        })
    }

    handleSubmitForm: () => void;
    handleSubmitForm() {
        let element = document.getElementById('button-submit-form');
        if (element) {
            element.click();
        }
    }

    render() {
        const { options, timerVisible, timerRunning, onChangeActiveTextID } = this.props;
        const { elapsed } = this.state;
        const time = this.format(elapsed);

        return (
            <header className="app-header">
                <h1 className="app-header-title">Тест на скорость чтения</h1>
                <p className="app-header-text">Выберите язык и сложность текста и нажмите кнопку «Начать», постарайтесь прочитать текст как можно быстрее. Когда вы закончите, нажмите кнопку «Завершить».</p>
                <div className="app-header-select">
                    <SelectTextList
                        blocked={(!timerVisible && !timerRunning) ? false : true}
                        options={options}
                        onRefActiveTextID={onChangeActiveTextID} />
                </div>
                {(timerVisible) ?
                    <div className="app-header-timer">
                        <button
                            id="app-button-finish"
                            className="button is-success app-header-timer-button"
                            onClick={this.handleFinish}>
                            <span>Завершить</span>
                        </button>
                        <button
                            id="app-button-stop"
                            className="button is-cancel app-header-timer-button"
                            onClick={this.handleStop}>
                            <span>Отменить</span>
                        </button>
                        <Stopwatch time={time} />
                    </div>
                    :
                    <div className="app-header-timer">
                        <button
                            id="app-button-start"
                            className="button app-header-timer-button"
                            onClick={() => {
                                this.handleStart();
                                this.handleSubmitForm()
                            }}>
                            <span>Начать</span>
                        </button>
                    </div>
                }
            </header>
        )
    }
}

export default Header;