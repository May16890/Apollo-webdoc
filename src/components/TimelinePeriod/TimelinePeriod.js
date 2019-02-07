import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TimelinePeriod.scss';
import { withRouter } from 'react-router-dom';

class TimelinePeriod extends Component {
    state = {
        isAppear: false,
        isIndicator: true,
    }

    componentDidMount() {
        if (this.props.isDisplayed) {
            this.textAppear();
        } else {
            this.textDisappear();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isDisplayed !== this.props.isDisplayed) {
            if (this.props.isDisplayed) {
                this.textAppear();
            } else {
                this.textDisappear();
            }
        }
      }

    textAppear = () => {
        if (document.querySelector('.timelineIndicator')) {
            document.querySelector('.timelineIndicator').style.display = 'none';
        }
        this.setState({
            isAppear: true,
        })
        this.props.setTargets(this.props.targets);
    }

    textDisappear = () => {
        if (!this.props.isDisplayed) {
            this.setState({
                isAppear: false,
            })
        }
        this.props.removeTargets();
    }

    render() {
        const { link, text, isDisplayed } = this.props;
        const isAppearClass = this.state.isAppear ? 'appear' : '';

        const location = this.props.location ? this.props.location.pathname : null;

        const styled = isDisplayed ? {
            height: 11,
            transform: 'translateY(-5px)',
            background: '#CC2F2F',
            opacity: 1,
        } : {
            backgroundColor: this.props.color,
        }

        return (
            <Link style={styled} onMouseOver={this.textAppear} onMouseLeave={this.textDisappear} className='timeline__period' to={`${link}`}>
                <span className={`timeline__period__text ${isAppearClass}`}>{text}</span>
                {text === 'Premice' && location === '/intro' &&
                    <div className='timelineIndicator'>
                        <svg width="28" height="24">
                            <g>
                                <path transform="rotate(-90 15.935171127319341,16.008811950683597) " id="Arrow_Forward" fillRule="evenodd" fill="#FFF" d="m31.935171,16.009c0,-0.267 -0.11,-0.522 -0.293,-0.714l-9.899,-9.999c-0.391,-0.395 -1.024,-0.394 -1.414,0c-0.391,0.394 -0.391,1.034 0,1.428l8.193,8.275l-27.587,0c-0.552,0 -1,0.452 -1,1.01s0.448,1.01 1,1.01l27.586,0l-8.192,8.275c-0.391,0.394 -0.39,1.034 0,1.428c0.391,0.394 1.024,0.394 1.414,0l9.899,-9.999c0.187,-0.189 0.29,-0.449 0.293,-0.714z" clipRule="evenodd"/>
                            </g>
                        </svg>
                        <p>click</p>
                    </div>
                }
            </Link>
        )
    }
}

export default withRouter(TimelinePeriod);