import React, { Component } from 'react';
import './NavettesPage.scss';
import Navette from '../Navette/Navette';
import NavetteModal from '../NavetteModal/NavetteModal';
import { Link } from 'react-router-dom';
import NavettesMockup from '../../datas/navettesPage.js';
import bgIntro from '../../assets/img/Galaxy.png';

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
    const styled = isOpen ? {display: 'none'} : {};

    console.log(navetteTotal)

    const navettes = NavettesMockup[currGlobalIndex].map((navette, index) => (
      <Navette styled={styled} key={`navette__${index}`} index={index} name={navette.name} src={navette.src} desc={navette.desc} target={navette.target} handleClick={this.openModal}/>
    ));

    const leftArrow = () => {
      if (!isOpen) {
        if (NavettesMockup[currGlobalIndex - 1]) {
          return <div className='Navettes__leftArrow' onClick={() => this.changeIndexes(-1)}>
                    <svg version="1.1" width="40px" height="40px" viewBox="0 0 451.846 451.847">
                      <g>
                      <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                      </g>
                    </svg>
                  </div>
        } else {
          return null;
        }
      } else {
        if (currIndex === 0 && currGlobalIndex === 0) {
          return null;
        } else {
          return <div className='Navettes__leftArrow' onClick={() => this.changeIndexes(-1)}>
                    <svg version="1.1" width="40px" height="40px" viewBox="0 0 451.846 451.847">
                      <g>
                      <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                      </g>
                    </svg>
                  </div>
        }
      }
    }

    const rightArrow = () => {
      if (!isOpen) {
        if (NavettesMockup[currGlobalIndex + 1]) {
          return <div className='Navettes__rightArrow' onClick={() => this.changeIndexes(1)}>
                    <svg version="1.1" width="40px" height="40px" viewBox="0 0 451.846 451.847">
                      <g>
                      <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                      </g>
                    </svg>
                  </div>
        } else {
          return null;
        }
      } else {
        if (currIndex === 8 && navetteTotal % 9 === 0 && (currGlobalIndex === NavettesMockup.length - 1)) {
          return null;
        }
        if ((currIndex === ((navetteTotal % 9) - 1)) && (currGlobalIndex === NavettesMockup.length - 1)) {
          return null;
        } else {
          return <div className='Navettes__rightArrow' onClick={() => this.changeIndexes(1)}>
                    <svg version="1.1" width="40px" height="40px" viewBox="0 0 451.846 451.847">
                      <g>
                      <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                      </g>
                    </svg>
                  </div>
        }
      }
    }

    return (
      <section className="Navettes">
        <div className="blackOverlay"></div>
        <img className="bgIntro" alt="bgIntro" src={bgIntro}/>
        {leftArrow()}
        <div className="Navettes__container">
          {isOpen &&
            <NavetteModal data={NavettesMockup[currGlobalIndex][currIndex]} currIndex={currIndex} closeModal={this.closeModal}/>
          }
          {navettes}
        </div>
        {rightArrow()}
        <Link className="Navettes__inroLink" to='/intro'>Retour</Link>
      </section>
    );
  }
}

export default NavettesPage;