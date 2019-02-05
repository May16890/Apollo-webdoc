import React, { Component } from 'react';
import './AstronautesPage.scss';
import { Link } from 'react-router-dom';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import AstronautesCard from '../AstronautesCard/AstronautesCard';
import AstronautesMockup from '../../datas/astronautesPage';

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
      <AstronautesCard key={`astronaute__${index}`} index={index} name={astronaute.name} src={astronaute.src} mission={astronaute.mission} date={astronaute.date} target={astronaute.target}/>
    ));

    return (
      <section className="Home">
        <div className="astronautesPage__cardsContainer"> 
        <h1 style={{ color: 'black', display:'flex', alignItems:'center', justifyContent:'center'}}>ASTRONAUTES</h1> 
     

       
        <ViewPager style={{ marginTop: '15vh', marginBottom:'30vh'}}>
          <Frame style={{margin: '0 auto',outline: 0}}>
            <Track viewsToShow="auto" align={0.5} animations={animations}>
              <View>
                {astronautes}
              </View>
            </Track>
          </Frame>
        </ViewPager>
        

        <Link to='/intro' style={{display:'flex', alignSelf:'center', justifyContent:'center'}}>BACK TO INTRO</Link> 
        </div>
      </section>
    );
  }
}

export default AstronautesPage;