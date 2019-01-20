import React, { Component } from 'react';
import './SinglePage.scss';
// import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import SingleCard from '../SingleCard/SingleCard';

class SinglePage extends Component {
  render() {
    return (
      <section className='singlePage'>
        <Timeline color='grey' isClosed={true}/>

        <div className='singlePage__cardsContainer'>
          <SingleCard title='GF'/>
          <SingleCard title='FF'/>
          <SingleCard title='WESH'/>
        </div>

        <div className='singlePage__dotsContainer'>
          <div className='singlePage__dot'></div>
          <div className='singlePage__dot'></div>
          <div className='singlePage__dot'></div>
          <div className='singlePage__dot'></div>
          <div className='singlePage__dot'></div>
          <div className='singlePage__dot'></div>
        </div>
      </section>
    );
  }
}

export default SinglePage;