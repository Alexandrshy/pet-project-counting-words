// @flow

import { combineReducers } from "redux";

import fragments from "./fragments";
import menu from "./menu";
import timerRunning from "./timerRunning";
import timerVisible from "./timerVisible";
import activeID from "./activeID";
import result from "./result";
import bookList from "./bookList";
import emptySearchResult from "./emptySearchResult";
import loadingSearchResult from "./loadingSearchResult";
import navBook from "./navBook";
import bookLog from "./bookLog";
import listLogID from "./bookListID";

const reducer = combineReducers({
  fragments,
  menu,
  timerRunning,
  timerVisible,
  activeID,
  result,
  bookList,
  emptySearchResult,
  loadingSearchResult,
  navBook,
  bookLog,
  listLogID
});

export default reducer;
