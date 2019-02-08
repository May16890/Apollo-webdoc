import React, { Component } from 'react';
import './Timeline.scss';
import TimelinePeriod from '../TimelinePeriod/TimelinePeriod.js';
import TimelineDate from '../TimelineDate/TimelineDate.js';

class Timeline extends Component {
    state = {
        // isClosed: this.props.isClosed,
        isClosed: false,
        targets: [],
        currentPeriod: this.props.currentPeriod,
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (!prevState.isClosed && (prevState.targets === this.state.targets)) {
    //         this.setState({
    //             isClosed: true,
    //         })
    //     }
    // }

    // closeTimeline = () => {
    //     this.setState({
    //         isClosed: true,
    //     })
    // }

    // openTimeline = () => {
    //     this.setState({
    //         isClosed: false,
    //     })
    // }

    // toggleTimeline = () => {
    //     if (!this.state.isClosed) {
    //         this.closeTimeline();
    //         return null;
    //     }
    //     this.openTimeline();
    // }
    // componentDidUpdate() {
    //     this.setState({
    //         currentPeriod: this.props.currentPeriod,
    //     })
    // }

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
        const { currentPeriod } = this.props;
        // const { color } = this.props;
        const color = 'white';

        const toggleBtn = !isClosed ? 
            (<div className='timeline__toggleBtn' style={{borderColor: color}} onClick={this.toggleTimeline}>
                <div className='timeline__toggleBtn__cross1' style={{background: color}}></div>
                <div className='timeline__toggleBtn__cross2' style={{background: color}}></div>
            </div>) : 
            (<div className='timeline__openBtnContainer' onClick={this.toggleTimeline}>
                <div className='timeline__openBtn' style={{borderColor: color}}>
                    <div className='timeline__openBtn__arrow1' style={{background: color}}></div>
                    <div className='timeline__openBtn__arrow2' style={{background: color}}></div>
                </div>
                <p className='timeline__openBtn__text' style={{color: color}}>TIMELINE</p>
            </div>);
        
        return (
            <div className={`timelineBlackContainer`}>
                <div className={`timelineContainer ${isClosed ? 'hidden' : ''}`}>
                    <div className='timeline'>
                        <TimelineDate color={color} date='1950' isRed={(targets[0] === 1 || targets[1]  === 1 || currentPeriod === 'premice')}/>
                        <TimelinePeriod color={color} text='Prémice' link='/singlePage/premice' targets={[1, 2]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'premice' ? true : false}/>
                        <TimelineDate color={color} date='1966' isRed={(targets[0] === 2 || targets[1]  === 2 || currentPeriod === 'premice' || currentPeriod === 'apollo1')}/>
                        <TimelinePeriod color={color} text='Début du programme' link='/singlePage/apollo1' targets={[2, 3]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'apollo1' ? true : false}/>
                        <TimelineDate color={color} date='1969' isRed={(targets[0] === 3 || targets[1]  === 3 || currentPeriod === 'apollo1' || currentPeriod === 'apollo2')}/>
                        <TimelinePeriod color={color} text='Apollo 11' link='/singlePage/apollo2' targets={[3, 4]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'apollo2' ? true : false}/>
                        <TimelineDate color={color} date='1969' isRed={(targets[0] === 4 || targets[1]  === 4 || currentPeriod === 'apollo2' || currentPeriod === 'apollo3')}/>
                        <TimelinePeriod color={color} text="L'après Apollo 11" link='/singlePage/apollo3' targets={[4, 5]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'apollo3' ? true : false}/>
                        <TimelineDate color={color} date='1972' isRed={(targets[0] === 5 || targets[1]  === 5 || currentPeriod === 'apollo3' || currentPeriod === 'apolloSoyuz')}/>
                        <TimelinePeriod color={color} text='Fin du programme' link='/singlePage/apolloSoyuz' targets={[5, 6]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'apolloSoyuz' ? true : false}/>
                        <TimelineDate color={color} date='1975' isRed={(targets[0] === 6 || targets[1]  === 6 || currentPeriod === 'apolloSoyuz' || currentPeriod === 'today')}/>
                        <TimelinePeriod color={color} text="Aujourd'hui" link='/singlePage/today' targets={[6, 7]} setTargets={this.setTargets} removeTargets={this.removeTargets} isDisplayed={currentPeriod === 'today' ? true : false}/>
                        <TimelineDate color={color} date='2019'  isRed={(targets[0] === 7 || targets[1]  === 7 || currentPeriod === 'today')}/>
                        {/* {toggleBtn} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;