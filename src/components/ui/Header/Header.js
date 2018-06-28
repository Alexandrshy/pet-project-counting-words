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
        text: string
    }>;
    timerRunning: boolean;
    timerVisible: boolean;
    handleTimerRunning: Function;
    handleTimerVisible: Function;
    handleRefActiveTextID: Function;
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
    }

    handlePause: () => void;
    handlePause() {
        this.props.handleTimerRunning(false);
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
        let time = this.format(this.state.elapsed);

        return (
            <header className="app-header">
                <h1 className="app-header-title">Определите скорость чтения</h1>
                <p className="app-header-text">Выберите язык и сложность текста и нажмите кнопку «Старт», постарайтесь прочитать текст как можно быстрее. Когда вы закончите, нажмите кнопку «Завершить».</p>
                <div className="app-header-select">
                    <SelectTextList
                        blocked={(!this.props.timerVisible && !this.props.timerRunning) ? false : true}
                        options={this.props.options}
                        onRefActiveTextID={this.props.handleRefActiveTextID} />
                </div>
                {(this.props.timerVisible) ?
                    <div className="app-header-timer">
                        {(this.props.timerRunning) ?
                            <button
                                className="button app-header-timer-button"
                                onClick={this.handlePause}>
                                <span>Пауза</span>
                            </button>
                            :
                            <button
                                className="button app-header-timer-button"
                                onClick={this.handleStart}>
                                <span>Старт</span>
                            </button>
                        }
                        <button
                            className="button app-header-timer-button"
                            onClick={this.handleStop}>
                            <span>Стоп</span>
                        </button>
                        <Stopwatch time={time} />
                    </div>
                    :
                    <div className="app-header-timer">
                        <button
                            className="button app-header-timer-button"
                            onClick={() => {
                                this.handleStart();
                                this.handleSubmitForm()
                            }}>
                            <span>Старт</span>
                        </button>
                    </div>
                }
            </header>
        )
    }
}

export default Header;