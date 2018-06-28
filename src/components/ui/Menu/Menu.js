// @flow

import React from 'react';
import IconStopwatch from '../Icon/IconStopwatch';
import IconList from '../Icon/IconList';
import IconResult from '../Icon/IconResult';
import './Menu.css';

const Menu = ({ onNavClick = f => f, navSelected, result }: { onNavClick: Function, navSelected: string, result: {} }) =>
    <nav className="app-menu">
        <ul className="nav-list">
            <li className={`nav-item${navSelected === 'stopwatch' ? ' is-active' : ''}`}>
                <button
                    className="nav-button"
                    name="stopwatch"
                    onClick={onNavClick}><IconStopwatch color="#595959" /></button>
            </li>
            <li className={`nav-item${navSelected === 'list' ? ' is-active' : ''}`}>
                <button
                    className="nav-button"
                    name="list"
                    onClick={onNavClick}><IconList color="#595959" /></button>
            </li>
            <li className={`nav-item${navSelected === 'result' ? ' is-active' : `${result.words > 0 ? '' : ' is-hidden'}`}`}>
                <button
                    className="nav-button"
                    name="result"
                    onClick={onNavClick}><IconResult color="#595959" /></button>
            </li>
        </ul>
    </nav>

export default Menu;