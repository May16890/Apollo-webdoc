import React, { Component } from 'react';
import './AstronautesPage.scss';
import { Link } from 'react-router-dom';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import AstronautesCard from '../AstronautesCard/AstronautesCard';

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
  render() {
    return (
      <section className="Home">
        {/* <div className="astronautesPage__cardsContainer">
          <AstronautesCard/>
          <AstronautesCard/>
          <AstronautesCard/>
          <AstronautesCard/>
          <AstronautesCard/>
        </div>
        <Link to='/intro'>BACK INTRO</Link>
        <hr />
        <h1 style={{ color: 'black', position: 'absolute', top: 10, left: 10}}>ASTRONAUTES</h1> */}
        <ViewPager>
          <Frame
            style={{
              margin: '0 auto',
              outline: 0,
            }}
          >
            <Track viewsToShow="auto" align={0.5} animations={animations}>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
              <View><AstronautesCard/></View>
            </Track>
          </Frame>
        </ViewPager>
      </section>
    );
  }
}

export default AstronautesPage;