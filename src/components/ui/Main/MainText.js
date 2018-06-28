// @flow

import React, { PureComponent } from 'react';
import './Main.css';

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string,
        img: string
    }>;
    timerRunning: boolean;
    timerVisible: boolean;
    activeTextID: string;
}

class MainText extends PureComponent<Props> {
    render() {
        const { options, activeTextID, timerRunning, timerVisible } = this.props;
        const activeFragment = options.filter((item) => item.id === activeTextID)[0];

        return (
            <div id="main-text" className={`app-main-text${timerRunning === true && timerVisible === true ? ' is-visible' : ''}`}>
                <h2>{activeFragment.title}</h2>
                <h3>{activeFragment.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeFragment.textHTML }} />
            </div>
        )
    }
}

export default MainText;