import React from 'react';
import { Link } from "react-router-dom";
import './NavetteModal.scss';

const NavetteModal = ({data, handleClick, closeModal}) => {
    const { src, name, desc, target } = data;
    return (
        <div className='navetteModal'>
            <div className="navetteModal__closeBtn" onClick={closeModal}>
                <svg viewBox="0 0 21.9 21.9" width="16px" height="16px">
                    <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill='rgba(255, 255, 255, 0.7)'/>
                </svg>
            </div>
            <div className="navetteModal__imgWrapper">
                <img className='navetteModal__img' src={src} alt="Navette"/>
            </div>
            <h3 className="navetteModal__name">{name}</h3>
            <p className="navetteModal__desc">{desc}</p>
            <Link to={{ pathname: `/singlePage/${target[0]}`, state: { currentCard: target[1], fullscreen: true,} }} className="navetteModal__btn">Période correspondante</Link>
        </div>
    )
}

export default NavetteModal;