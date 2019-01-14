import React, { Component } from 'react';
import './Home.scss';
import logo from '../../assets/img/logo.png';
import bgHome from '../../assets/img/bgHome.png';

class Home extends Component {
  render() {
    return (
      <section className="Home">

        <div className="blackOverlay"></div>        
        <div className="Home__container">

            <div className="top-right">
                <img className="Home__logo" alt="logo" src={logo}/>
            </div>

            <img className="bgHome" alt="bgHome" src={bgHome}/>

            <div className="bottom-left">
                <div className="Home__textDiv">
                    <div className="Home__textDiv__container">
                        <h1 className="Home__textDiv__title">the apollo program</h1>
                        <h2 className="Home__textDiv__subtitle">a travel in time</h2>
                        <div className="Home__textDiv__whiteLine"></div>
                        <p className="Home__textDiv__text">
                            Web documentaire vous présentant le projet Apollo sous un angle nouveau.
                            Vous replongerez dans le contexte géopolitique de l'époque avec la course
                            à l'espace entre les USA et l'URSS, et découvrirez les enjeux ayant marqué
                            à tout jamais notre Histoire.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom-right">
                <div className="Home__chaptersDiv">
                    <div className="Home__chaptersDiv__container">
                        <div className="Home__chaptersDiv__button1">
                            <p>chapitre 1</p>
                        </div>
                        <div className="Home__chaptersDiv__button2">
                            <p>chapitre 2</p>
                        </div>
                        <div className="Home__chaptersDiv__button3">
                            <p>bonus</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>
    );
  }
}

export default Home;