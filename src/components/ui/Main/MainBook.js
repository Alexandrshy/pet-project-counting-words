// @flow

import React, {PureComponent} from 'react';
import './Main.css'
import BookSearch from '../BookSearch/BookSearch';


type Props = {}

class MainBook extends PureComponent<Props> {
    render() {
        return (
            <div className="app-main-text is-visible">
                <h1>Поиск книг</h1>
                <BookSearch />
            </div>
        )
    }
}

export default MainBook;