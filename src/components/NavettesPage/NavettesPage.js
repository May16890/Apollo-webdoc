import React, { Component } from 'react';
import './NavettesPage.scss';
// import { Link } from 'react-router-dom';

class NavettesPage extends Component {
  render() {
    return (
      <section className="Navettes">
        <div className="Navettes__container">
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
          <div className="Navettes__navetteWrapper"></div>
        </div>
      </section>
    );
  }
}

export default NavettesPage;