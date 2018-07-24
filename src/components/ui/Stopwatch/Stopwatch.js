// @flow

import React from 'react';
import './Stopwatch.css';

type Props = {
  time: string;
}

const Stopwatch = ({ time = '00:00' }: Props) => (
  <div className="app-stopwatch">
    <div className="app-stopwatch-time">
      {time}
    </div>
  </div>
);

export default Stopwatch;
