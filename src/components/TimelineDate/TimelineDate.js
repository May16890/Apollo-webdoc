import React from 'react';
import './TimelineDate.scss';

const TimelineDate = props => (
    <div className='timeline__dateContainer'>
        <div className='timeline__dateContainer__traitUp'></div>
        <p className='timeline__dateContainer__date'>{props.date}</p>
    </div>
);

export default TimelineDate;