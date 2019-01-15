import React, { Component } from 'react';
import './AstronautesPage.scss';
import { Link } from 'react-router-dom';

class AstronautesPage extends Component {
  render() {
    return (
      <section className="Home">
        <Link to='/intro'>BACK INTRO</Link>
        <hr />
        <h1 style={{ color: 'black', position: 'absolute', top: 10, left: 10}}>ASTRONAUTES</h1>
      </section>
    );
  }
}

export default AstronautesPage;