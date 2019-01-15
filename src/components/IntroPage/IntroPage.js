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
        <h1 style={{ color: 'black', }}>INTRO</h1>
        <Timeline />
      </section>
    );
  }
}

export default IntroPage;