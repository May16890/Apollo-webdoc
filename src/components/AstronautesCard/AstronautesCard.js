import React from 'react';
import { Link } from 'react-router-dom';
import './AstronautesCard.scss';
import astronautePicture from '../../assets/img/astronautePicture.jpg';


// const handleClick = e => {
//     console.log(e.type);
// }

const AstronautesCard = (data) => {
    const { src, name, mission, date, target } = data;
    return (
        <div className="astronautesPage__cardsContainer__wrapper">
            <img className="astronautePictures" alt="astronautePicture" src={src}></img>
            <h3>{name}</h3>
            <h3>{date}</h3>
            <p>{mission}</p>
            <Link to={{ pathname: `/singlePage/${target[0]}`, state: { currentCard: target[1]}}}>CLICK</Link>
        </div>
    )
}

export default AstronautesCard;
