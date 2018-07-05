// @flow

import React from 'react';

import MenuContainer from '../../../containers/MenuContainer';
import HeaderContainer from '../../../containers/HeaderContainer';
import MainContainer from '../../../containers/MainContainer';

const App = () => {
    return (
        <main className="wrapper">
            <div className="container">
                <div className="app-grid">
                    <HeaderContainer />
                    <MenuContainer />
                    <MainContainer />
                </div>
            </div>
        </main>
    )
}

export default App;