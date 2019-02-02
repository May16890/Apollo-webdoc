import React from 'react';
import { Link } from "react-router-dom";
import './NavetteModal.scss';

const NavetteModal = ({data, handleClick, closeModal}) => {
    const { src, name, desc, target } = data;
    return (
        <div className='navetteModal'>
            <div className="navetteModal__closeBtn" onClick={closeModal}>
                x
            </div>
            <div className="navetteModal__imgWrapper">
                <img className='navetteModal__img' src={src} alt="Navette"/>
            </div>
            <h3 className="navetteModal__name">{name}</h3>
            <p className="navetteModal__desc">{desc}</p>
            <Link to={{ pathname: `/singlePage/${target[0]}`, state: { currentCard: target[1]} }} className="navetteModal__btn">CTA</Link>
        </div>
    )
}

export default NavetteModal;