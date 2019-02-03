import React from 'react';
import './SingleCardImg.scss';

const SingleCardImg = ({content}) => (
    <div className="singleCardImg__wrapper">
        <img className="singleCardImg__content" src={content} alt='AH'/>
    </div>
)

export default SingleCardImg;