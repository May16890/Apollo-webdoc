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
            <p className='intro__introContainer__text'>Web documentaire vous présentant le projet Apollo sous un angle 
            nouveau. <br/>Vous replongerez dans le contexte géopolitique de l'époque avec la course à l'espace entre les USA 
            et l'URSS, et découvrirez les enjeux de chaque missions ainsi que leurs aboutissements ayant marqué à tout 
            jamais notre Histoire.</p>
            <Link className='intro__premiceBtn' to='/singlePage/premice'>PREMICE</Link>
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