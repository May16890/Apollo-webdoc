import React, { Component } from 'react';
import './NavettesPage.scss';
import Navette from '../Navette/Navette';
import NavetteModal from '../NavetteModal/NavetteModal';
import testImg from "../../assets/img/Astronaute.png";
// import { Link } from 'react-router-dom';

const NavettesMockup = [
  {
    name: "Blabla 1",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 2",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 3",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 4",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 5",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 6",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 7",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 8",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 9",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 10",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 11",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 12",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
  {
    name: "Blabla 13",
    src: testImg,
    desc: `Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
    Je suis un blabla e suis un blabla e suis un blabla 
    e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
    target: ['Premice', 3],
  },
]

class NavettesPage extends Component {
  state = {
    isOpen: false,
    src: null,
    name: null,
    desc: null,
    target: null,
    currIndex: 0,
  }

  openModal = () => {
    this.setState({
      isOpen: true,
      src: testImg,
      name: 'truc1',
      desc: NavettesMockup[0].desc,
      target: 0,
      currIndex: 0,
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { isOpen, src, name, desc, target, currIndex } = this.state;

    return (
      <section className="Navettes">
        <div className="Navettes__container">
          {isOpen &&
            <NavetteModal src={src} name={name} desc={desc} target={target} currIndex={currIndex} closeModal={this.closeModal}/>
          }
          <Navette name="truc1" src={testImg} handleClick={this.openModal}/>
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