import React, { Component } from 'react';
import { TimelineMax } from 'gsap/TweenMax';
import './HomePage.scss';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    componentDidMount () {
        const bg = document.createElement("script");

        bg.src = "./js/bg.js";
        bg.async = true;

        document.body.appendChild(bg);

        const script = document.createElement("script");

        script.src = "./js/script.js";
        script.async = true;

        document.body.appendChild(script);

        this.initGSAP()
    }
    
    initGSAP = () => {
        const welcome = document.getElementsByClassName("Home__welcome");
        const toThe = document.getElementsByClassName("Home__toThe");
        const bgBlack = document.getElementsByClassName("Home__bgBlack");
        const title = document.getElementsByClassName("Home__titleWrapper");
        const button = document.getElementsByClassName("Home__button");

        let tl = new TimelineMax({delay: 3});
        tl.to(welcome, 2, {opacity: 0, top: '35%'})

        tl = new TimelineMax({delay: 3});
        tl.to(toThe, 1, {opacity: 1, top: '50%'})

        tl = new TimelineMax({delay: 6});
        tl.to(toThe, 1, {opacity: 0});

        tl = new TimelineMax({delay: 8});
        tl.to(bgBlack, 1, {opacity: 0});
        tl.to(title, 3, {top: '80px'});
        
        tl = new TimelineMax({delay: 9});
        tl.to(bgBlack, 1, {display: "none"});
        
        tl = new TimelineMax({delay: 14});
        tl.to(button, 1, {opacity: 1, bottom: '80px'});
        
    }

    render() {
        return (
            <section className="Home">
                <div className="Home__bgBlack">
                    <h2 className="Home__welcome">WELCOME</h2>
                    <h2 className="Home__toThe">TO THE</h2>
                </div>
                <div id="canvas" style={{width:'100%',height:'100%',}}></div>
                <canvas id='canvasBG' style={{position:"absolute", top:0, left:0, width:'100vw', height: '100vh', zIndex: -1}}></canvas>
                <div className='Home__titleWrapper'>
                    <div className="Home__titleTraitTop"></div>
                    <h1 className='Home__title'>APOLLO PROJECT</h1>
                    <div className="Home__titleTraitBottom"></div>
                </div>
                <Link to='/intro' className="Home__button">Commencer</Link>
                {/* <div className="right" style={{opacity:'.1',backgroundColor:'white',width:'10%',height:'100vh',position:'absolute',right:0,top:0,zIndex:9999}}></div>
                <div className="left" style={{opacity:'.1',backgroundColor:'white',width:'10%',height:'100vh',position:'absolute',left:0,top:0,zIndex:9999}}></div> */}
            </section>
        );
    }
}

export default HomePage;