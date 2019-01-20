import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    componentDidMount() {
        const scriptAstro = document.createElement("script");
        const scriptLuz = document.createElement("script");
        const scriptMouse = document.createElement("script");

        scriptAstro.src = "./js/astro.js";
        scriptAstro.async = true;

        document.head.appendChild(scriptAstro);
        
        scriptLuz.src = "./js/luz.js";
        scriptLuz.async = true;
        document.head.appendChild(scriptLuz);
        
        scriptMouse.src = "./js/mouse.js";
        scriptMouse.async = true;
        document.head.appendChild(scriptMouse);

        const script = document.createElement("script");

        script.src = "./js/script.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <section className="Home">
                <div id="canvas" style={{width:'100%',height:'100%',}}></div>
                <h1 style={{fontSize:'2.3em',position:'absolute',zIndex:9999,color:'white',top:80,}}>APOLLO PROJECT</h1>
                <Link to='/intro' style={{border: '1px solid white',
                    fontSize: '1.2em',
                    color:'white',
                    width: 255,
                    height: 56,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 24,
                    textTransform: 'uppercase',
                    cursor: 'pointer',position:'absolute',zIndex:9999,bottom:80,}}>Start documentary</Link>
                <div className="right" style={{opacity:'.1',backgroundColor:'white',width:'10%',height:'100vh',position:'absolute',right:0,top:0,zIndex:9999}}></div>
                <div className="left" style={{opacity:'.1',backgroundColor:'white',width:'10%',height:'100vh',position:'absolute',left:0,top:0,zIndex:9999}}></div>
            </section>
        );
    }
}

export default HomePage;