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
            <div className="astonauteText">
                <div>
                    <h3>{name}</h3>
                    <p>{mission}</p>
                </div>
                <div>
                    <h3>{date}</h3>
                    <Link className='linkAstronaute' to={{ pathname: `/singlePage/${target[0]}`, state: { currentCard: target[1]}}}>click</Link>
                </div>
            </div>
        </div>
    )
}

export default AstronautesCard;
