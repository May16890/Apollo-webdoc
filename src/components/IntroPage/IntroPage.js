import React, { Component } from 'react';
import './IntroPage.scss';
import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import bgIntro from '../../assets/img/Galaxy.png';

class IntroPage extends Component {
  render() {
    return (
      <section className="intro">
        {/* <Link to='/'>BACK HOME</Link>
        <hr />
        <Link to='/navettes'>NAVETTES</Link>
        <hr />
        <Link to='/astronautes'>ASTRONAUTES</Link> */}
        <h1 style={{ color: 'black', position: 'absolute', bottom: 10, left: 10}}>INTRO</h1>
        <div className="blackOverlay"></div>
        <img className="bgIntro" alt="bgIntro" src={bgIntro}/>
        <div className="intro__timelineContainer">
          <Timeline />
        </div>
      </section>
    );
  }
}

export default IntroPage;