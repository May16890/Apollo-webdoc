import React, { Component } from 'react';
import './IntroPage.scss';
import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import bgIntro from '../../assets/img/Galaxy.png';
import astroLongTuyauxImg from '../../assets/img/Astronaute_longtuyaux.png';

class IntroPage extends Component {
  render() {
    return (
      <section className="intro">
        <div className="blackOverlay"></div>
        <img className="bgIntro" alt="bgIntro" src={bgIntro}/>
        <Timeline color='white' isClosed={false}/>
        <div className='intro__introContainer'>
          {/* <Link className='intro__introContainer__homeLink' to='/'>Accueil</Link> */}
          <a className='intro__introContainer__homeLink' href='/'>Accueil</a>
          <div className='intro__introContainer__wrapper'>
            <h1 className='intro__introContainer__title'>BIENVENUE À BORD</h1>
            <h2 className='intro__introContainer__subtitle'>APOLLO VOUS ATTENDS</h2>
            <p className='intro__introContainer__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
              commodo consequat.</p>
            <div className='intro__introContainer__linksContainer'>
              <Link className='intro__introContainer__links' to='/astronautes'>ASTRONAUTES</Link>
              <Link className='intro__introContainer__links' to='/navettes'>NAVETTES</Link>
            </div>
          </div>
          <div className='intro__introContainer__introOverlay'>

          </div>
        </div>
        <img className="astroImg" alt="astroImg" src={astroLongTuyauxImg}/>
      </section>
    );
  }
}

export default IntroPage;