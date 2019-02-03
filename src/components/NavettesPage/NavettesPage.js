import React, { Component } from 'react';
import './NavettesPage.scss';
import Navette from '../Navette/Navette';
import NavetteModal from '../NavetteModal/NavetteModal';
import testImg from "../../assets/img/Astronaute.png";
import { Link } from 'react-router-dom';

const NavettesMockup = [
  [{
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
  }],
  [{
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
  }]
]

class NavettesPage extends Component {
  state = {
    isOpen: false,
    currIndex: 0,
    currGlobalIndex: 0,
    navetteTotal: NavettesMockup.reduce((acc, valC) => acc + valC.length, 0)
  }

  openModal = ({index}) => {
    this.setState({
      isOpen: true,
      currIndex: index,
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  changeIndexes = val => {
    const { isOpen, currGlobalIndex, currIndex } = this.state;

    if (!isOpen) {
      this.setState({
        currGlobalIndex: currGlobalIndex + val,
      })
      return null;
    }

    if ((currIndex + val) < 0) {
      this.setState({
        currIndex: NavettesMockup[currGlobalIndex - 1].length - 1,
        currGlobalIndex: currGlobalIndex - 1,
      })
      return null;
    }
    if ((currIndex + val) > 8) {
      this.setState({
        currIndex: 0,
        currGlobalIndex: currGlobalIndex + 1,
      })
      return null;
    }
    this.setState({
      currIndex: currIndex + val,
    })
  }

  render() {
    const { isOpen, currIndex, currGlobalIndex, navetteTotal } = this.state;

    const navettes = NavettesMockup[currGlobalIndex].map((navette, index) => (
      <Navette key={`navette__${index}`} index={index} name={navette.name} src={navette.src} desc={navette.desc} target={navette.target} handleClick={this.openModal}/>
    ));

    const leftArrow = () => {
      if (!isOpen) {
        if (NavettesMockup[currGlobalIndex - 1]) {
          return <div className='Navettes__leftArrow' onClick={() => this.changeIndexes(-1)}>></div>
        } else {
          return null;
        }
      } else {
        if (currIndex === 0 && currGlobalIndex === 0) {
          return null;
        } else {
          return <div className='Navettes__leftArrow' onClick={() => this.changeIndexes(-1)}>></div>
        }
      }
    }

    const rightArrow = () => {
      if (!isOpen) {
        if (NavettesMockup[currGlobalIndex + 1]) {
          return <div className="Navettes__rightArrow" onClick={() => this.changeIndexes(1)}>></div>
        } else {
          return null;
        }
      } else {
        if ((currIndex === ((navetteTotal % 9) - 1)) && (currGlobalIndex === NavettesMockup.length - 1)) {
          return null;
        } else {
          return <div className="Navettes__rightArrow" onClick={() => this.changeIndexes(1)}>></div>
        }
      }
    }

    return (
      <section className="Navettes">
        {leftArrow()}
        <div className="Navettes__container">
          {isOpen &&
            <NavetteModal data={NavettesMockup[currGlobalIndex][currIndex]} currIndex={currIndex} closeModal={this.closeModal}/>
          }
          {navettes}
        </div>
        {rightArrow()}
        <Link className="Navettes__inroLink" to='/intro' style={{position: 'absolute', bottom: 20, right: 20}}>Intro</Link>
      </section>
    );
  }
}

export default NavettesPage;