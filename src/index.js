// @flow

import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import dataArray from './data/fragments';
import Header from './components/ui/Header/Header';
import Menu from './components/ui/Menu/Menu';
import Main from './components/ui/Main/Main';
import './style/style.css';

type Props = {}

type State = {
    fragments: Array<{
        id: string,
        title: string,
        author: string,
        text: string
    }>;
    navSelected: string;
    timerRunning: boolean;
    timerVisible: boolean;
    activeTextID: string;
}

class App extends PureComponent<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            fragments: dataArray,
            navSelected: 'stopwatch',
            timerRunning: false,
            timerVisible: false,
            activeTextID: "0ff0c770-3198-495d-aff1-8e4ee41197fb"
        }

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleTimerRunning = this.handleTimerRunning.bind(this);
        this.handleTimerVisible = this.handleTimerVisible.bind(this);
    }

    handleNavClick = (event) => {
        event.preventDefault();
        this.setState({navSelected: event.currentTarget.getAttribute('name')});
        this.handleTimerRunning(false);
        this.handleTimerVisible(false);
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
        const { fragments, navSelected } = this.state;

        return (
            <main className="wrapper">
                <div className="container">
                    <div className="app-grid">
                        <Header 
                            options={fragments}
                            timerRunning={this.state.timerRunning}
                            timerVisible={this.state.timerVisible}
                            handleTimerRunning={this.handleTimerRunning}
                            handleTimerVisible={this.handleTimerVisible}
                            handleRefActiveTextID={this.handleRefActiveTextID}
                            activeTextID={this.state.activeTextID} />
                        <Menu 
                            navSelected={navSelected}
                            onNavClick={this.handleNavClick} />
                        <Main 
                            options={fragments} 
                            navSelected={navSelected}
                            activeTextID={this.state.activeTextID} />
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