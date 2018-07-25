// @flow

import React from "react";
import "./ResultLine.css";

type Props = {
  title: string,
  author: string,
  day: number
};

const ResultLine = ({ title = "", author = "", day = 1 }: Props) => (
  <div className="result-line-wrapper">
    <h4 className="result-line-title">{title}</h4>
    <p className="result-line-author">{author}</p>
    <div className="result-line-box">
      <span className="result-line">
        <span
          className="result-line-painted"
          style={{ width: `${(1 / day) * 100}%` }}
        />
      </span>
      <span className="result-line-day">за {day} день</span>
    </div>
  </div>
);

export default ResultLine;
