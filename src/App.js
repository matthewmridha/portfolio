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
                <Projects />
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