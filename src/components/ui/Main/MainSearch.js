// @flow

import React, {PureComponent} from 'react';
import './Main.css'


type Props = {}

class MainSearch extends PureComponent<Props> {
    render() {
        return (
            <div className="app-main-text is-visible">
                <h1>Новый таб</h1>
            </div>
        )
    }
}

export default MainSearch;