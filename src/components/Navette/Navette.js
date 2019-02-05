import React, { Component } from 'react';
import './Navette.scss';

class Navette extends Component {
    render() {
        const { styled, index, name, src } = this.props;
        return (
            <div style={styled} className="Navettes__navetteWrapper" onClick={() => this.props.handleClick({index})}>
                <div className="Navettes__imgWrapper">
                    <img className='Navettes__img' src={src} alt="Navette"/>
                </div>
                <h3 className="Navettes__name">{name}</h3>
            </div>
        )
    }
}

export default Navette;