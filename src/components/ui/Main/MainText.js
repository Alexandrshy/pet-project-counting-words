// @flow

import React, { PureComponent } from 'react';
import './Main.css'


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
    activeTextID: string;
}

class MainText extends PureComponent<Props> {
    render() {
        const { options, activeTextID, timerRunning, timerVisible } = this.props;
        const activeFragment = options.filter((item) => item.id === activeTextID)[0];
        console.log('options', activeFragment);
        console.log('options.img', activeFragment.img);
        return (
            <div className={`app-main-text${timerRunning === true && timerVisible === true ? ' is-visible' : ''}`}>
                <img src={window.location.origin + activeFragment.img} />
                <h2>{activeFragment.title}</h2>
                <h3>{activeFragment.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeFragment.textHTML }} />
            </div>
        )
    }
}

export default MainText;