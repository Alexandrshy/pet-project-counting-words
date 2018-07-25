// @flow

import React from "react";
import BookListContainer from "../../../containers/BookListContainer";
import LoaderContainer from "../../../containers/LoaderContainer";
import SearchFormContainer from "../../../containers/SearchFormContainer";
import "./BookSearch.css";

const BookSearch = ({ navSelected }: { navSelected: string }) => (
  <div
    className={`book-search book-block-item${
      navSelected === "bookSearch" ? " is-active" : ""
    }`}
  >
    <div className="app-main-text-title">
      <h2>Поиск книг</h2>
    </div>
    <SearchFormContainer />
    <LoaderContainer />
    <BookListContainer />
  </div>
);

export default BookSearch;
