import React from 'react';
import './SingleCard.scss';

const SingleCard = props => {
    const  style = {
        wrapper: props.fullscreen ? {height: '100vh', opacity: props.opacity} : {opacity: props.opacity},
        title: props.fullscreen ? 0 : 1,
        card: props.fullscreen ? 'fullscreen' : '',
        cardContained: props.fullscreen ? 80 : 90,
    };

    return (
        <div className='singlePage__cardsContainer__wrapper' onClick={props.onClick} style={style.wrapper}>
            <h2 className='singlePage__cardTitle' style={{opacity: style.title}}>{props.title}</h2>
            <div className={`singlePage__card ${style.card}`}>
                <div style={{transition: 'ease-in-out 1s', border: '1px solid rgba(0, 0, 0, .4)', width: `${style.cardContained}%`, height: `${style.cardContained}%`}}></div>
            </div>
        </div>
    );
}

export default SingleCard;