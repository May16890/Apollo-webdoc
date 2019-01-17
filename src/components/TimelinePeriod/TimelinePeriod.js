import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TimelinePeriod.scss';

class TimelinePeriod extends Component {
    state = {
        isAppear: false,
    }

    textAppear = () => {
        this.setState({
            isAppear: true,
        })
        this.props.setTargets(this.props.targets);
    }

    textDisappear = () => {
        this.setState({
            isAppear: false,
        })
        this.props.removeTargets();
    }

    render() {
        const { link, text } = this.props;
        const isAppearClass = this.state.isAppear ? 'appear' : '';
        return (
            <Link onMouseOver={this.textAppear} onMouseLeave={this.textDisappear} className='timeline__period' to={`${link}`}>
                <span className={`timeline__period__text ${isAppearClass}`}>{text}</span>
            </Link>
        )
    }
}

export default TimelinePeriod;