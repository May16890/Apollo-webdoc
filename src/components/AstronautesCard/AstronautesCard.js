import React from 'react';
import { Link } from 'react-router-dom';
import './AstronautesCard.scss';


const AstronautesCard = (data) => {
    const { src, name, mission, date, target, timeline } = data;
    return (
        <div className="astronautesPage__cardsContainer__wrapper">
            <img className="astronautePictures" alt="astronautePicture" src={src}></img>
            <div className="astronauteText">
                <div className="astronauteText__container">
                    <h3>{name}</h3>
                    <p className="astronauteText__mission">{mission}</p>
                </div>
                <div>
                    <h3>{date}</h3>
                    <Link className='linkAstronaute' to={{ pathname: `/singlePage/${target[0]}`, state: { currentCard: target[1], fullscreen: true,} }}>{timeline ? timeline : 'retour'}</Link>
                </div>
            </div>
        </div>
    )
}

export default AstronautesCard;
