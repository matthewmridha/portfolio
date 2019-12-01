import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm.js';
import Social from './Social.js';
import Self from './Self.js';
import Skills from './Skills.js';
import Intro from './Intro.js';
import NavBar from './Navbar.js';
import About from './About.js';
import Projects from './Projects.js';

class App extends React.Component {
   
    componentDidMount(){
        
        
        window.onscroll = () => {
            
            let y = window.scrollY;
            let homeHeight = document.getElementById('home').offsetHeight;
            let aboutHeight = document.querySelector('.about').offsetHeight;
            let skillsHeight = document.getElementById('skills').offsetHeight;
            
            if ( y + window.innerHeight >=  homeHeight ){
                document.querySelector('#aboutTitle').style.animationPlayState = 'running';
                document.querySelector('#aboutP').style.animationPlayState = 'running';
            } 
            if (y  + window.innerHeight >=   homeHeight + aboutHeight) {
                document.querySelector('#skillsTitle').style.animationPlayState = 'running';
                document.querySelector('.front-end').style.animationPlayState = 'running';
                document.querySelector('.server-side').style.animationPlayState = 'running';
                document.querySelector('.database').style.animationPlayState = 'running';
                document.querySelector('.version-control').style.animationPlayState = 'running';
            } 
            if (y + window.innerHeight >=  homeHeight + aboutHeight + skillsHeight ) {
                for(let i = 1; i <= 13; i++){
                    document.querySelector(`#project${i}`).style.animationPlayState = 'running';
                }
               
            };
        };
        
    };
    render() {
        return ( 
            <div id="App">
                <NavBar/>
                <div id='home'>
                <Intro />
                </div>
                <div id='about' >
                    <About />
                </div>
                <div id = "skills" >
                <Skills />
                </div>
                <div id = ' works ' >
                <Projects />
                </div>
                <div className = 'social-contact' id = 'social-contact'>
                <Self />
                <Social />
                <ContactForm />
                </div> 
            </div>
        )
    }
};

export default App;