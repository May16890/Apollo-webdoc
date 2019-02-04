import React from 'react';
import './AstronautesCard.scss';
import astronautePicture from '../../assets/img/astronautePicture.jpg';

const handleClick = e => {
    console.log(e.type);
}

const AstronautesCard = (props) => {
    return (
        <div className="astronautesPage__cardsContainer__wrapper">
            <img className="astronautePictures" alt="astronautePicture" src={astronautePicture}></img>
            <h3>Harrison Schmitt{props.name}</h3>
            <h3>April 1966{props.date}</h3>
            <p>Apollo 11{props.mission}</p>
            <button onClick={e => handleClick(e)}>CLICK</button>
        </div>
    )
}

export default AstronautesCard;
