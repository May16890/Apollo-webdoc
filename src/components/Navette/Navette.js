import React, { Component } from 'react';
import './Navette.scss';

class Navette extends Component {
    render() {
        const { src, name } = this.props
        return (
            <div className="Navettes__navetteWrapper" onClick={this.props.handleClick}>
                <div className="Navettes__imgWrapper">
                    <img className='Navettes__img' src={src} alt="Navette"/>
                </div>
                <h3 className="Navettes__name">{name}</h3>
            </div>
        )
    }
}

export default Navette;