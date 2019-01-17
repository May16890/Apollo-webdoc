import React, { Component } from 'react';
import './Timeline.scss';
import TimelinePeriod from '../TimelinePeriod/TimelinePeriod.js';
import TimelineDate from '../TimelineDate/TimelineDate.js';

class Timeline extends Component {
    state = {
        isClosed: false,
    }

    closeTimeline = () => {
        this.setState({
            isClosed: true,
        })
    }

    openTimeline = () => {
        this.setState({
            isClosed: false,
        })
    }

    toggleTimeline = () => {
        if (!this.state.isClosed) {
            this.closeTimeline();
            return null;
        }
        this.openTimeline();
    }

    render() {
        const { isClosed } = this.state;
        const toggleBtn = !isClosed ? 
            (<div className='timeline__toggleBtn' onClick={this.toggleTimeline}>
                <div className='timeline__toggleBtn__cross1'></div>
                <div className='timeline__toggleBtn__cross2'></div>
            </div>) : 
            (<div className='timeline__openBtnContainer' onClick={this.toggleTimeline}>
                <div className='timeline__openBtn'>
                    <div className='timeline__openBtn__arrow1'></div>
                    <div className='timeline__openBtn__arrow2'></div>
                </div>
                <p className='timeline__openBtn__text'>TIMELINE</p>
            </div>);
        return (
            <div className={`timelineBlackContainer`}>
                <div className={`timelineContainer ${this.state.isClosed ? 'hidden' : ''}`}>
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
                        {toggleBtn}
                        {/* <div className='timeline__closeBtn' onClick={this.toggleTimeline}>
                            <div className='timeline__closeBtn__cross1'></div>
                            <div className='timeline__closeBtn__cross2'></div>
                        </div> */}
                    </div>
                </div>
                {/* <div className={`timeline__openBtn ${this.state.isClosed ? 'showOpenButton' : ''}`} onClick={this.openTimeline}>
                    <div className='timeline__openBtn__cross1'></div>
                    <div className='timeline__openBtn__cross2'></div>
                </div> */}
            </div>
        )
    }
}

export default Timeline;