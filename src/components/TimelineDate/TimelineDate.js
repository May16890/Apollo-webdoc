import React from 'react';
import './TimelineDate.scss';

const TimelineDate = props => (
    <div className='timeline__dateContainer'>
        <div style={props.isRed ? {background: 'red',} : {background: props.color} } className='timeline__dateContainer__traitUp'></div>
        <p style={props.isRed ? {color: 'red',} : {color: props.color} } className='timeline__dateContainer__date'>{props.date}</p>
    </div>
);

export default TimelineDate;