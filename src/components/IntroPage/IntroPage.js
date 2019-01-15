import React, { Component } from 'react';
import './IntroPage.scss';
import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';

class IntroPage extends Component {
  render() {
    return (
      <section className="Home">
        <Link to='/'>BACK HOME</Link>
        <hr />
        <Link to='/navettes'>NAVETTES</Link>
        <hr />
        <Link to='/astronautes'>ASTRONAUTES</Link>
        <h1 style={{ color: 'black', position: 'absolute', top: 10, left: 10}}>INTRO</h1>
        <Timeline />
      </section>
    );
  }
}

export default IntroPage;