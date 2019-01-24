import React, { Component } from 'react';
import './NavettesPage.scss';
import Navette from '../Navette/Navette';
import testImg from "../../assets/img/Astronaute.png";
// import { Link } from 'react-router-dom';

class NavettesPage extends Component {
  render() {
    return (
      <section className="Navettes">
        <div className="Navettes__container">
          <Navette name="truc1" src={testImg} />
          <Navette name="truc2" src={testImg} />
          <Navette name="truc3" src={testImg} />
          <Navette name="truc4" src={testImg} />
          <Navette name="truc5" src={testImg} />
          <Navette name="truc6" src={testImg} />
          <Navette name="truc7" src={testImg} />
          <Navette name="truc8" src={testImg} />
          <Navette name="truc9" src={testImg} />
        </div>
      </section>
    );
  }
}

export default NavettesPage;