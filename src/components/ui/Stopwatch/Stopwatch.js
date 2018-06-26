// @flow

import React from 'react';
import './Stopwatch.css'

const Stopwatch = ({time}: {time: string}) => {

    return(
        <div className="app-stopwatch">
            <div className="app-stopwatch-time">{time}</div>
        </div>
    )
}

export default Stopwatch;