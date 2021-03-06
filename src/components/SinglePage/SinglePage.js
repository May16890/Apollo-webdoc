import React, { Component } from 'react';
import './SinglePage.scss';
import { withRouter } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import SingleCard from '../SingleCard/SingleCard';
import { Link } from 'react-router-dom';
import erasDatas from '../../datas/singlePage.js';
import bgStars from '../../assets/img/bgStars.png';
import bgMoon from '../../assets/img/bgMoon.png';

var scrollDir = true;
var isScrolling;

class SinglePage extends Component {
  state = {
    currentCard: this.props.location.state ? this.props.location.state.currentCard : 0,
    fullscreen: this.props.location.state ? this.props.location.state.fullscreen : false,
    currentPage: this.props.page,
  }

  handleScroll = event => {
    if (document.querySelector('.mouse')) {
      document.querySelector('.mouse').style.display = 'none';
    }
    if (this.state.fullscreen) {
      return null;
    }
    if (scrollDir) {
      if (event.deltaY < 0 ) {
        this.setState({
          currentCard: this.state.currentCard === erasDatas[this.props.page].length - 1 ? this.state.currentCard : this.state.currentCard + 1,
        })
      }
      if (event.deltaY > 0 ) {
        this.setState({
          currentCard: this.state.currentCard === 0 ? this.state.currentCard : this.state.currentCard - 1,
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
        currentPage: this.props.page,
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
    const cards = document.querySelectorAll('.singlePage__card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].scrollTop = 0;
    }

    this.setState({
      fullscreen: false,
    })
  }

  nextCard = () => {
    this.setState({
      currentCard: this.state.currentCard + 1,
    })
  }

  render() {
    const { currentCard, fullscreen } = this.state;
    const { page } = this.props;
    const marginLeft = 20 + (currentCard * -72.5);

    // console.log(page)
    // console.log(erasDatas[this.props.page].length)
    console.log(erasDatas[page])

    const singleCards = erasDatas[page].map((singleCard, index) => (
      <SingleCard index={index} erasDatas={erasDatas[page]} key={`singleCard__${index}`} title={page} onClick={() => this.handleClickCard(index)} fullscreen={currentCard === index ? fullscreen : false} opacity={fullscreen && (currentCard !== index) ? 0 : 1} singleCard={singleCard} closeFS={this.closeFS} nextCard={this.nextCard}/>
    ));

    const dots = erasDatas[page].map((dot, index) => (
      <div key={`dot__${index}`} className={`singlePage__dot ${currentCard === index ? 'redDot' : ''}`} onClick={() => this.handleClickDot(index)}></div>
    ));

    return (
      <section className='singlePage' onWheel={event => this.handleScroll(event)}>
        <div className="mouse">
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
        </div>
        <img className="bgStars" alt="bgStars" src={bgStars}/>
        <img className="bgMoon" alt="bgMoon" src={bgMoon}/>
        <div className="bgFilter"></div>
        <Timeline color='grey' isClosed={true} currentPeriod={this.state.currentPage}/>

        <div className='singlePage__cardsContainer' style={{marginLeft: `${marginLeft}vw`}}>
          {singleCards}
        </div>

        <div className='singlePage__dotsContainer'>
          {dots}
          {/* <span className='singlePage__closeFS' style={fullscreen ? {opacity: 1} : {opacity: 0}} onClick={this.closeFS}>FERMER</span> */}
        </div>
        <Link className="Navettes__inroLin" to='/intro' style={{position: 'absolute', bottom: 20, right: 20, color: 'rgba(255, 255, 255, 0.8)', zIndex:'99'}}>Retour</Link>
      </section>
    );
  }
}

export default withRouter(SinglePage);