import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <section className="Home">
            {/* <h1 style={{ color: 'black', position: 'absolute', top: 10, left: 10}}>HOME</h1>
            <hr />
            <Link to='/intro' style={{ position: 'absolute', bottom: 10, right: 10 }}>START EXPERIENCE</Link> */}
      </section>
    );
  }
}

export default HomePage;