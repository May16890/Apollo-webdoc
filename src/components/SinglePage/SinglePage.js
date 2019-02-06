import React, { Component } from 'react';
import './SinglePage.scss';
import { withRouter } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import SingleCard from '../SingleCard/SingleCard';
import { Link } from 'react-router-dom';
import erasDatas from '../../datas/singlePage.js';

var scrollDir = true;
var isScrolling;

class SinglePage extends Component {
  state = {
    currentCard: this.props.location.state ? this.props.location.state.currentCard : 0,
    fullscreen: false,
  }

  handleScroll = event => {
    if (scrollDir) {
      if (event.deltaY < 0 ) {
        this.setState({
          currentCard: this.state.currentCard === 0 ? this.state.currentCard : this.state.currentCard - 1,
        })
      }
      if (event.deltaY > 0 ) {
        this.setState({
          currentCard: this.state.currentCard === erasDatas[this.props.page].length - 1 ? this.state.currentCard : this.state.currentCard + 1,
        })
      }
    }
    scrollDir = false;
    window.clearTimeout( isScrolling );
    isScrolling = setTimeout(() => {
      scrollDir = true;
    }, 66);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.setState({
        currentCard: 0,
        fullscreen: 0,
      })
    }
  }

  handleClickDot = index => {
    this.setState({
      currentCard: index,
      fullscreen: false,
    })
  }

  handleClickCard = index => {
    if (this.state.currentCard === index) {
      this.setState({
        fullscreen: true,
      })
      return null;
    }

    this.setState({
      currentCard: index,
    })
  }

  closeFS = () => {
    this.setState({
      fullscreen: false,
    })
  }

  render() {
    const { currentCard, fullscreen } = this.state;
    const { page } = this.props;
    const marginLeft = 25 + (currentCard * -62.5);

    console.log(page)
    console.log(erasDatas[this.props.page].length)

    const singleCards = erasDatas[page].map((singleCard, index) => (
      <SingleCard key={`singleCard__${index}`} title={page} onClick={() => this.handleClickCard(index)} fullscreen={currentCard === index ? fullscreen : false} opacity={fullscreen && (currentCard !== index) ? 0 : 1} singleCard={singleCard}/>
    ));

    const dots = erasDatas[page].map((dot, index) => (
      <div key={`dot__${index}`} className={`singlePage__dot ${currentCard === index ? 'redDot' : ''}`} onClick={() => this.handleClickDot(index)}></div>
    ));

    return (
      <section className='singlePage' onWheel={event => this.handleScroll(event)}>
        <Timeline color='grey' isClosed={true}/>

        <div className='singlePage__cardsContainer' style={{marginLeft: `${marginLeft}vw`}}>
          {singleCards}
        </div>

        <div className='singlePage__dotsContainer'>
          {dots}
          <span className='singlePage__closeFS' style={fullscreen ? {opacity: 1} : {opacity: 0}} onClick={this.closeFS}>FERMER</span>
        </div>
        <Link className="Navettes__inroLin" to='/intro' style={{position: 'absolute', bottom: 20, right: 20}}>Retour</Link>
      </section>
    );
  }
}

export default withRouter(SinglePage);