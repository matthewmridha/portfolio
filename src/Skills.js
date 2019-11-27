import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import react from  './assets/react.png';
import bootstrap from './assets/bootstrap.png';
import jquery from './assets/jquery.png';
import psql from './assets/psql.png';
import python from './assets/python.png';
import django from './assets/django.png';
import flask from './assets/flask.png';
import git from './assets/git.png';

let openCurly = "{";
let closeCurly = "}";
let arrayOpen = "[";
let arrayClose = "]"

const Skills = () => {
        
    return ( 
        <div className='skills'>
            <span className="highLight">Tech Stack</span> = { arrayOpen + " " } 
            <div className="front-end">
                <span className="brackets">{openCurly + " " }</span>
                Front-End  
                <span className="brackets"> : </span>
                <span className="brackets">{ arrayOpen + " " }</span>
                <img  className="skillsLogo" src={html} id="htmllogo" href="#" alt="HTML" />
                <UncontrolledTooltip placement="top" target="htmllogo">
                HTML
                </UncontrolledTooltip>
                <span className="brackets">,</span> 
                <img  className="skillsLogo" src={css} id="css" href="#" alt="CSS" />
                <UncontrolledTooltip placement="top" target="css">
                CSS
                </UncontrolledTooltip>
                <span className="brackets">,</span> 
                <img  className="skillsLogo" src={js} id="js" alt="javascript" />
                <UncontrolledTooltip placement="top" target="js">
                JavaScript
                </UncontrolledTooltip>
                <span className="brackets">,</span>
                { arrayOpen + " " }
                <img  className="skillsLogo" src={react} id="react" alt="react" />
                <UncontrolledTooltip placement="top" target="react">
                React.js
                </UncontrolledTooltip>
                <span className="brackets">,</span> 
                <img  className="skillsLogo" src={bootstrap} id="bootstrap" alt="bootstrap" />
                <UncontrolledTooltip placement="top" target="bootstrap">
                Bootstrap / Reactstrap
                </UncontrolledTooltip>
                <span className="brackets">,</span>
                <img  className="skillsLogo" src={jquery} id="jquery" alt="jquery" />
                <UncontrolledTooltip placement="top" target="jquery">
                JQuery
                </UncontrolledTooltip>
                <span className="brackets">{ " " + arrayClose }</span>
                <span className="brackets">{ " " + arrayClose }</span>
                <span className="brackets">{ " " + closeCurly}</span>
                <span className="brackets">,</span>
            </div>
            <div className="database">
                <span className="brackets">{openCurly + " " }</span>
                Database
                <span className="brackets"> : </span>
                <img  className="skillsLogo" src={psql} id="psql" alt="psql" />
                <UncontrolledTooltip placement="top" target="psql">
                PostgresSQL
                </UncontrolledTooltip>
                <span className="brackets">{ " " + closeCurly}</span>
                <span className="brackets">,</span>
            </div>
            <div className="server-side">
            <span className="brackets">{openCurly + " " }</span>
                Back-End
                <span className="brackets"> : </span>
                <img  className="skillsLogo" src={python} id="python" alt="python" />
                <UncontrolledTooltip placement="top" target="python">
                Python
                </UncontrolledTooltip>
                {" "} + {" "} ( {" "}
                <img  className="skillsLogo" src={django} id="django" alt="django" />
                <UncontrolledTooltip placement="top" target="django">
                Django
                </UncontrolledTooltip>
                {" "} || {" "}
                <img  className="skillsLogo" src={flask} id="flask" alt="flask" />
                <UncontrolledTooltip placement="top" target="flask">
                Flask
                </UncontrolledTooltip>
                {" "} )
                <span className="brackets">{ " " + closeCurly}</span>
                <span className="brackets">,</span>
            </div>
            <div className="version-control">
                <span className="brackets">{openCurly + " " }</span>
                Version-Control
                <span className="brackets"> : </span>
                <img  className="skillsLogo" src={git} id="git" alt="git" />
                <UncontrolledTooltip placement="top" target="git">
                Git
                </UncontrolledTooltip>
                <span className="brackets">{ " " + closeCurly}</span>
            </div>
            { arrayClose };
        </div>
    )
};

export default Skills