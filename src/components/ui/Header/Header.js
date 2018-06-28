// @flow

import React, { PureComponent } from 'react';
import Stopwatch from '../Stopwatch/Stopwatch';
import SelectText from '../SelectText/SelectText';
import SelectTextList from '../SelectText/SelectTextList';
import './Header.css';

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string
    }>;
    timerRunning: boolean;
    timerVisible: boolean;
    handleTimerRunning: Function;
    handleTimerVisible: Function;
    handleRefActiveTextID: Function;
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
        this.props.handleTimerRunning(true);
        this.props.handleTimerVisible(true);

        this.setState({
            lastTick: Date.now()
        })

        this.props.onChangeNav('stopwatch');
    }

    handlePause: () => void;
    handlePause() {
        this.props.handleTimerRunning(false);
    }

    handleFinish: () => void;
    handleFinish() {
        const selectedItem = this.props.options.filter((item) => item.id === this.props.activeTextID);
        const quantityWordsText = selectedItem[0].words;
        const quantitySymbolsText = selectedItem[0].text.length + selectedItem[0].title.length + selectedItem[0].author.length;
        const elapsedMin = Math.floor(Math.floor(this.state.elapsed / 1000)) / 60;
        const speedReadingSymbols = Math.floor(quantitySymbolsText / elapsedMin);
        const speedReadingWords = Math.floor(quantityWordsText / elapsedMin);

        this.props.onSaveResult({
            words: quantityWordsText,
            symbols: quantitySymbolsText,
            time: elapsedMin,
            speedReadingWords,
            speedReadingSymbols
        });

        this.props.onChangeNav('result');
        this.handleStop();
    }

    handleStop: () => void;
    handleStop() {
        this.props.handleTimerRunning(false);
        this.props.handleTimerVisible(false);

        this.setState({
            elapsed: 0,
            lastTick: 0
        })
    }

    handleSubmitForm: () => void;
    handleSubmitForm() {
        var element = document.getElementById('button-submit-form');
        if (element) {
            element.click();
        }
    }

    render() {
        const { options, timerVisible, timerRunning, handleRefActiveTextID } = this.props;
        const { elapsed } = this.state;
        let time = this.format(elapsed);

        return (
            <header className="app-header">
                <h1 className="app-header-title">Определите скорость чтения</h1>
                <p className="app-header-text">Выберите язык и сложность текста и нажмите кнопку «Начать», постарайтесь прочитать текст как можно быстрее. Когда вы закончите, нажмите кнопку «Завершить».</p>
                <div className="app-header-select">
                    <SelectTextList
                        blocked={(!timerVisible && !timerRunning) ? false : true}
                        options={options}
                        onRefActiveTextID={handleRefActiveTextID} />
                </div>
                {(timerVisible) ?
                    <div className="app-header-timer">
                        <button
                            id="app-button-finish"
                            className="button is-finish app-header-timer-button"
                            onClick={this.handleFinish}>
                            <span>Завершить</span>
                        </button>
                        <button
                            id="app-button-stop"
                            className="button is-stop app-header-timer-button"
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