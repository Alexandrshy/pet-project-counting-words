// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import dataArray from './data/fragments';
import Header from './components/ui/Header/Header';
import Menu from './components/ui/Menu/Menu';
import Main from './components/ui/Main/Main';
import './style/style.css';

type Props = {}

type State = {
    navSelected: string;
    timerRunning: boolean;
    timerVisible: boolean;
    activeTextID: string;
    result: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
        selectedItem: {}
    };
}

class App extends PureComponent<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            navSelected: 'stopwatch',
            timerRunning: false,
            timerVisible: false,
            activeTextID: '0ff0c770-3198-495d-aff1-8e4ee41197fb',
            result: {
                words: 0,
                symbols: 0,
                time: 0,
                speedReadingWords: 0,
                speedReadingSymbols: 0,
                selectedItem: {}
            }
        }

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.handleSaveResult = this.handleSaveResult.bind(this);
        this.handleTimerRunning = this.handleTimerRunning.bind(this);
        this.handleTimerVisible = this.handleTimerVisible.bind(this);
    }

    handleSaveResult = (data: {
        words: number;
        symbols: number;
        time: number;
        speedReadingWords: number;
        speedReadingSymbols: number;
    }) => {
        this.setState(prevState => ({
            result: {
                ...prevState.result,
                ...data
            }
        }))
    }

    handleNavClick = (event) => {
        event.preventDefault();
        this.handleChangeNav(event.currentTarget.getAttribute('name'));
    }

    handleChangeNav = (name) => {
        this.setState({ navSelected: name })
    }

    handleTimerRunning = (item) => {
        this.setState({ timerRunning: item })
    }

    handleTimerVisible = (item) => {
        this.setState({ timerVisible: item });
    }

    handleRefActiveTextID = (activeTextID) => {
        this.setState({ activeTextID });
    }

    render() {
        const { navSelected, timerRunning, timerVisible, activeTextID, result } = this.state;

        return (
            <main className="wrapper">
                <div className="container">
                    <div className="app-grid">
                        <Header
                            options={dataArray}
                            timerRunning={timerRunning}
                            timerVisible={timerVisible}
                            activeTextID={activeTextID}
                            handleTimerRunning={this.handleTimerRunning}
                            handleTimerVisible={this.handleTimerVisible}
                            handleRefActiveTextID={this.handleRefActiveTextID}
                            onSaveResult={this.handleSaveResult}
                            onChangeNav={this.handleChangeNav} />
                        <Menu
                            navSelected={navSelected}
                            result={result}
                            onNavClick={this.handleNavClick} />
                        <Main
                            options={dataArray}
                            navSelected={navSelected}
                            timerRunning={timerRunning}
                            timerVisible={timerVisible}
                            result={result}
                            activeTextID={activeTextID} />
                    </div>
                </div>
            </main>
        )
    }
}

const entryPoint = document.getElementById('React-app');

if (entryPoint) {
    render(
        <App />,
        entryPoint
    )
}