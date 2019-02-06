import React, { Fragment } from 'react';
import './SingleCard.scss';
import SingleCardText from '../SingleCardText/SingleCardText.js';
import SingleCardImg from '../SingleCardImg/SingleCardImg.js';
import SingleCardVid from '../SingleCardVid/SingleCardVid.js';
import SingleCardAudio from '../SingleCardAudio/SingleCardAudio.js';

const SingleCard = ({fullscreen, opacity, onClick, title, singleCard, closeFS}) => {
    const  style = {
        wrapper: fullscreen ? {height: '100vh', opacity: opacity} : {opacity: opacity},
        title: fullscreen ? 0 : 1,
        card: fullscreen ? 'fullscreen' : '',
        cardContained: fullscreen ? 80 : 90,
    };

    // const blocksDisplayed = singleCard.map((block, index) => {
    //     if (block[0] === 'text') {
    //         return <SingleCardText key={`block__${index}`} content={block[1]}/>
    //     }
    //     if (block[0] === 'img') {
    //         return <SingleCardImg key={`block__${index}`} content={block[1]}/>
    //     }
    //     if (block[0] === 'vid') {
    //         return <SingleCardVid key={`block__${index}`} content={block[1]}/>
    //     }
    //     if (block[0] === 'audio') {
    //         return <SingleCardAudio key={`block__${index}`} content={block[1]}/>
    //     }
    //     return null;
    // });
    const { logo, titleCard, intro, astro1, astro2, astro3, content, audio, navetteName, navette, teamImg } = singleCard;

    return (
        <Fragment>
            <span className='singlePage__closeFS' style={fullscreen ? {opacity: 1} : {opacity: 0}} onClick={closeFS}>FERMER</span>
            {fullscreen ?
                <div className='singlePage__head' style={{opacity: 1, transition: '2.2s ease-in-out'}}>
                    <img src={logo} alt={'logo'}/>
                    <div dangerouslySetInnerHTML={{__html: titleCard}}/>
                </div>
                :
                <div className='singlePage__head' style={{opacity: 0, transition: '0s ease-in-out'}}>
                    <img src={logo} alt={'logo'}/>
                    <div dangerouslySetInnerHTML={{__html: titleCard}}/>
                </div>
            }
            <div className='singlePage__cardsContainer__wrapper' onClick={onClick} style={style.wrapper}>
                {/* <h2 className='singlePage__cardTitle' style={{opacity: style.title}}>{title}</h2> */}
                <div className={`singlePage__card ${style.card}`}>
                {/* {!fullscreen ?
                    <div className='singlePage__head' style={{opacity: 1}}>
                        <img src={logo} alt={'logo'}/>
                        <div dangerouslySetInnerHTML={{__html: titleCard}}/>
                    </div>
                    : */}
                    <div className='singlePage__head' style={{opacity: 1}}>
                        <img src={logo} alt={'logo'}/>
                        <div dangerouslySetInnerHTML={{__html: titleCard}}/>
                    </div>
                {/* } */}
                    {/* <p className='singlePage__intro' >{intro}</p> */}
                    <div className='singlePage__intro' dangerouslySetInnerHTML={{__html: intro}} />
                    <br /><br /><br /><br />
                    <div className='singlePage__bottomWrapper'>
                        {/* <p className='singlePage__content'>{content}</p> */}
                        <div className='singlePage__content' dangerouslySetInnerHTML={{__html: content}} />
                        <div className='singlePage__mediasWrapper'>
                        </div>
                    </div>
                    {/* <div style={{transition: 'ease-in-out 1s', border: '1px solid rgba(0, 0, 0, .4)', width: `${style.cardContained}%`, height: `${style.cardContained}%`, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center',}}>
                        {blocksDisplayed}
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default SingleCard;