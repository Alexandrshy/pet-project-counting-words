// @flow

import React, {PureComponent} from 'react';
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
        let activeText = this.props.options.filter((item) => item.id === this.props.activeTextID)[0];

        return (
            <div className={`app-main-text${this.props.timerRunning === true && this.props.timerVisible === true ? ' is-visible' : ''}`}>
                <h2>{activeText.title}</h2>
                <h3>{activeText.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeText.textHTML }} />
            </div>
        )
    }
}

export default MainText;