import React from 'react';
import './SingleCard.scss';

const SingleCard = props => (
    <div className='singlePage__cardsContainer__wrapper'>
        <h2 className='singlePage__cardTitle'>{props.title}</h2>
        <div className='singlePage__card'></div>
    </div>
);

export default SingleCard;