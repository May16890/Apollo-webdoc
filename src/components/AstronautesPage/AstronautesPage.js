import React, { Component } from 'react';
import './AstronautesPage.scss';
import { Link } from 'react-router-dom';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import AstronautesCard from '../AstronautesCard/AstronautesCard';
import AstronautesMockup from '../../datas/astronautesPage';

import bgIntro from '../../assets/img/Galaxy.png';

const animations = [
  // {
  //   prop: 'scale',
  //   stops: [[-200, 0.85], [0, 1], [200, 0.85]],
  // },
  // {
  //   prop: 'opacity',
  //   stops: [[-200, 0.15], [0, 1], [200, 0.15]],
  // },
]

class AstronautesPage extends Component {
  state = {
    currGlobalIndex: 0
  }

  render() {
    const { currGlobalIndex } = this.state;

    const astronautes = AstronautesMockup[currGlobalIndex].map((astronaute, index) => (
      <View key={`astronaute__${index}`}>
        <AstronautesCard index={index} name={astronaute.name} src={astronaute.src} mission={astronaute.mission} date={astronaute.date} target={astronaute.target}/>
      </View>
    ));

    return (
      <section className="Home">
        <div className="blackOverlay"></div>
        <img className="bgIntro" alt="bgIntro" src={bgIntro}/>
        <h1 className="astronautesPage__title">ASTRONAUTES</h1> 
        <div className="astronautesPage__cardsContainer"> 
        <div className="bgBehind"></div>
     

       
        <ViewPager>
          <Frame style={{margin: '0 auto',outline: 0}}>
            <Track viewsToShow="auto" align={0.4} animations={animations}>
              {/* <View className='astronautesContainer'> */}
                {astronautes}
              {/* </View> */}
            </Track>
          </Frame>
        </ViewPager>
        

        </div>
        <Link to='/intro' className='introLink'>Retour</Link> 
      </section>
    );
  }
}

export default AstronautesPage;