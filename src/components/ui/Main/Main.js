// @flow

import React, {PureComponent} from 'react';
import MainText from './MainText';
import './Main.css'

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string
    }>;
    navSelected: string;
    activeTextID: string;
}

class Main extends PureComponent<Props> {
    render() {
        return (
            <div className="app-main">
                <div className={`app-main-item${this.props.navSelected === 'stopwatch' ? ' is-active' : ''}`}>
                    <MainText 
                        options={this.props.options} 
                        activeTextID={this.props.activeTextID} />
                </div>
                <div className={`app-main-item${this.props.navSelected === 'list' ? ' is-active' : ''}`}>
                    <div className="app-main-text">
                        <h1>Новый таб</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;