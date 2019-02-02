import React from 'react';
import './NavetteModal.scss';

const NavetteModal = ({src, name, desc, target, handleClick, closeModal}) => (
    <div className='navetteModal'>
        <div className="navetteModal__closeBtn" onClick={closeModal}>
            x
        </div>
        <div className="navetteModal__imgWrapper">
            <img className='navetteModal__img' src={src} alt="Navette"/>
        </div>
        <h3 className="navetteModal__name">{name}</h3>
        <p className="navetteModal__desc">{desc}</p>
        <button className="navetteModal__btn" onClick={() => handleClick(target)}>CTA</button>
    </div>
)

export default NavetteModal;