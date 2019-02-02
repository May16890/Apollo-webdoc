import React, { Component } from 'react';
import './SinglePage.scss';
import { withRouter } from 'react-router-dom';
import Timeline from '../Timeline/Timeline';
import SingleCard from '../SingleCard/SingleCard';

class SinglePage extends Component {
  state = {
    currentCard: this.props.location.state ? this.props.location.state.currentCard : 0,
    fullscreen: false,
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
    return (
      <section className='singlePage'>
        <Timeline color='grey' isClosed={true}/>

        <div className='singlePage__cardsContainer' style={{marginLeft: `${marginLeft}vw`}}>
          <SingleCard title={page}onClick={() => this.handleClickCard(0)} fullscreen={currentCard === 0 ? fullscreen : false} opacity={fullscreen && (currentCard !== 0) ? 0 : 1}/>
          <SingleCard title={page}onClick={() => this.handleClickCard(1)} fullscreen={currentCard === 1 ? fullscreen : false} opacity={fullscreen && (currentCard !== 1) ? 0 : 1}/>
          <SingleCard title={page} onClick={() => this.handleClickCard(2)} fullscreen={currentCard === 2 ? fullscreen : false} opacity={fullscreen && (currentCard !== 2) ? 0 : 1}/>
          <SingleCard title={page} onClick={() => this.handleClickCard(3)} fullscreen={currentCard === 3 ? fullscreen : false} opacity={fullscreen && (currentCard !== 3) ? 0 : 1}/>
          <SingleCard title={page} onClick={() => this.handleClickCard(4)} fullscreen={currentCard === 4 ? fullscreen : false} opacity={fullscreen && (currentCard !== 4) ? 0 : 1}/>
          <SingleCard title={page} onClick={() => this.handleClickCard(5)} fullscreen={currentCard === 5 ? fullscreen : false} opacity={fullscreen && (currentCard !== 5) ? 0 : 1}/>
        </div>

        <div className='singlePage__dotsContainer'>
          <div className={`singlePage__dot ${currentCard === 0 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(0)}></div>
          <div className={`singlePage__dot ${currentCard === 1 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(1)}></div>
          <div className={`singlePage__dot ${currentCard === 2 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(2)}></div>
          <div className={`singlePage__dot ${currentCard === 3 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(3)}></div>
          <div className={`singlePage__dot ${currentCard === 4 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(4)}></div>
          <div className={`singlePage__dot ${currentCard === 5 ? 'redDot' : ''}`} onClick={() => this.handleClickDot(5)}></div>
          <span className='singlePage__closeFS' style={fullscreen ? {opacity: 1} : {opacity: 0}} onClick={this.closeFS}>FERMER</span>
        </div>
      </section>
    );
  }
}

export default withRouter(SinglePage);