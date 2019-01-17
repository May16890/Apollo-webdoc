import React, { Component } from 'react';
import './Timeline.scss';
import TimelinePeriod from '../TimelinePeriod/TimelinePeriod.js';
import TimelineDate from '../TimelineDate/TimelineDate.js';

class Timeline extends Component {
    state = {
        isClosed: false,
        targets: [],
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

    setTargets = targets => {
        this.setState({
            targets: targets,
        })
    }

    removeTargets = () => {
        this.setState({
            targets: [],
        })
    }

    render() {
        const { isClosed, targets } = this.state;
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
                        <TimelineDate date='1950' isRed={(targets[0] === 1 || targets[1]  === 1)}/>
                        <TimelinePeriod text='Premice' link='/singlePage/premice' targets={[1, 2]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='1966' isRed={(targets[0] === 2 || targets[1]  === 2)}/>
                        <TimelinePeriod text='Apollo 1' link='/singlePage/apollo1' targets={[2, 3]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='1969' isRed={(targets[0] === 3 || targets[1]  === 3)}/>
                        <TimelinePeriod text='Apollo 2' link='/singlePage/apollo2' targets={[3, 4]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='1969' isRed={(targets[0] === 4 || targets[1]  === 4)}/>
                        <TimelinePeriod text='Apollo 3' link='/singlePage/apollo3' targets={[4, 5]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='1972' isRed={(targets[0] === 5 || targets[1]  === 5)}/>
                        <TimelinePeriod text='Apollo Soyuz' link='/singlePage/apolloSoyuz' targets={[5, 6]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='1975' isRed={(targets[0] === 6 || targets[1]  === 6)}/>
                        <TimelinePeriod text='Today' link='/singlePage/today' targets={[6, 7]} setTargets={this.setTargets} removeTargets={this.removeTargets}/>
                        <TimelineDate date='2019'  isRed={(targets[0] === 7 || targets[1]  === 7)}/>
                        {toggleBtn}
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;