import React, { Component } from 'react';
import './SinglePage.scss';
import { Link } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';

class SinglePage extends Component {
  render() {
    return (
      <section>
        <Link to='/intro'>BACK INTRO</Link>
        <hr />
        <h1 style={{ color: 'black', fontSize:'2em', }}>SINGLE PAGE {this.props.page}</h1>
        <Timeline />
      </section>
    );
  }
}

export default SinglePage;