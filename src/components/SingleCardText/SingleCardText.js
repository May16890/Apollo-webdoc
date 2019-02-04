import React from 'react';
import './SingleCardText.scss';

const SingleCardText = ({content}) => (
    <div className="singleCardText__wrapper">
        <p className="singleCardText__content">{content}</p>
    </div>
)

export default SingleCardText;