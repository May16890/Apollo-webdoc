import React, { Fragment } from 'react';
import './SingleCard.scss';
import SingleCardText from '../SingleCardText/SingleCardText.js';
import SingleCardImg from '../SingleCardImg/SingleCardImg.js';
import SingleCardVid from '../SingleCardVid/SingleCardVid.js';
import SingleCardAudio from '../SingleCardAudio/SingleCardAudio.js';
import moonSingleCard from '../../assets/img/moonSingleCard.png';

const SingleCard = ({nextCard, index, erasDatas, fullscreen, opacity, onClick, title, singleCard, closeFS}) => {
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
    const { logo, titleCard, intro, astro1, astro2, astro3, content, audio, navetteName, navette, teamImg, teamImg1, moon, intro1, geminiPic, AtlasContent, journal} = singleCard;
    return (
        <Fragment>
            <span className='singlePage__closeFS' style={fullscreen ? {opacity: 1} : {opacity: 0}} onClick={closeFS}>FERMER</span>
            {fullscreen ?
                <div className='singlePage__head' style={{opacity: 1, transition: '2.2s ease-in-out'}}>
                    <img src={logo} alt={'logo'}/>
                    <div dangerouslySetInnerHTML={{__html: titleCard}}/>
                </div>
                :
                <div className='singlePage__head' style={{opacity: 0, transition: '0s ease-in-out', zIndex: 0}}>
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
                            {
                                astro1 &&
                                <div className="singlePage__astroWrapper">
                                    <img className='singlePage__astro' src={astro1} alt='astro1' style={!fullscreen ? {width: 95, height: 140,} : {}}/>
                                    <img className='singlePage__astro' src={astro2} alt='astro2' style={!fullscreen ? {width: 95, height: 140,} : {}}/>
                                    <img className='singlePage__astro' src={astro3} alt='astro3' style={!fullscreen ? {width: 95, height: 140,} : {}}/>
                                </div>
                            }
                            {
                                navette &&
                                <div className='singlePage__navetteWrapper'>
                                    <h3 className='singlePage__navetteTitle'>{navetteName}</h3>
                                    <img className='singlePage__navette' src={navette} alt='navette'/>
                                </div>
                            }
                            {
                                intro1 && 
                                <div className="singlePage__intro1Wrapper">
                                    <img className='singlePage__intro1' src={intro1} alt='intro1'/>
                                </div>
                            }
                         
                            {
                                AtlasContent &&
                                <div className="singlePage__atlasWrapper">
                                    <h3 className='singlePage__navetteTitle'>{navetteName}</h3>
                                    <img className='singlePage__atlas' src={AtlasContent} alt='atlas'/>
                                </div>
                            }
                            {
                                geminiPic && 
                                <div className="singlePage__geminiWrapper">
                                    <img className='singlePage__geminiPic' src={geminiPic} alt='geminiPic'/>
                                </div>

                            }

                           
                        </div>
                    </div>
                    <div className="singlePage__bottomWrapper2">
                        <div className='singlePage__teamImgWrapper'>
                        {
                                moon && <img className='singlePage__teamImg' src={moon} alt='moon'/>
                        }
                        {
                            teamImg1 &&  <img className='singlePage__teamImg1' src={teamImg1} alt='teamImg'/>
                        }
                           {
                            teamImg &&  <img className='singlePage__teamImg' src={teamImg} alt='teamImg'/>
                        } 
                        {
                            journal && 
                                <img style={{width: '80%;'}} className='singlePage__journal' src={journal} alt='journal'/>

                        }
                       
                          
                        </div>
                        {/* <div className='singlePage__moonWrapper'> */}
                            {erasDatas[index + 1] && <span onClick={nextCard} className='singlePage__nextPage'>SUIVANT</span>}
                            <img className='singlePage__moon' src={moonSingleCard} alt='moon' />
                        {/* </div> */}
                        <div className='singlePage__bgOverlay'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SingleCard;