// @flow

import React, {PureComponent} from 'react';
import './Main.css'


type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string
    }>;
    activeTextID: string;
}

class MainText extends PureComponent<Props> {
    render() {
        let activeText = this.props.options.filter((item) => item.id === this.props.activeTextID)[0];

        return (
            <div className="app-main-text">
                <h2>{activeText.title}</h2>
                <h3>{activeText.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeText.text }} />
            </div>
        )
    }
}

export default MainText;