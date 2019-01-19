import React, { Component } from 'react';
import './SinglePage.scss';
// import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';

class SinglePage extends Component {
  render() {
    return (
      <section>
        <Timeline color='grey' isClosed={true}/>
      </section>
    );
  }
}

export default SinglePage;