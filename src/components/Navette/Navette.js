import React from 'react';
import './Navette.scss';

const Navette = ({name, src}) => (
    <div className="Navettes__navetteWrapper">
        <div className="Navettes__imgWrapper">
            <img className='Navettes__img' src={src} alt="Navette"/>
        </div>
        <h3 className="Navettes__name">{name}</h3>
    </div>
)

export default Navette;