import React from 'react';
import './Timeline.scss';
import TimelinePeriod from '../TimelinePeriod/TimelinePeriod.js';
import TimelineDate from '../TimelineDate/TimelineDate.js';

const Timeline = () => (
    <div className='timelineContainer'>
        <div className='timeline'>
            <TimelineDate date='1950' />
            <TimelinePeriod text='Premice' link='/singlePage/premice'/>
            <TimelineDate date='1966' />
            <TimelinePeriod text='Apollo 1' link='/singlePage/apollo1'/>            
            <TimelineDate date='1969' />
            <TimelinePeriod text='Apollo 2' link='/singlePage/apollo2'/>
            <TimelineDate date='1969' />
            <TimelinePeriod text='Apollo 3' link='/singlePage/apollo3'/>
            <TimelineDate date='1972' />
            <TimelinePeriod text='Apollo Soyuz' link='/singlePage/apolloSoyuz'/>
            <TimelineDate date='1975' />
            <TimelinePeriod text='Today' link='/singlePage/today'/>
            <TimelineDate date='2019' />
            <div className='timeline__closeBtn'>
                <div className='timeline__closeBtn__cross1'></div>
                <div className='timeline__closeBtn__cross2'></div>
            </div>
        </div>
    </div>
)

export default Timeline;