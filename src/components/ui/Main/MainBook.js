// @flow

import React from 'react';
import BookSearchContainer from '../../../containers/BookSearchContainer';
import BookLogContainer from '../../../containers/BookLogContainer';
import BookNavPanelContainer from '../../../containers/BookNavPanelContainer';

const MainBook = () => (
  <div className="app-main-text app-main-text--incr-padding is-visible">
    <BookSearchContainer />
    <BookLogContainer />
    <BookNavPanelContainer />
  </div>
);

export default MainBook;
