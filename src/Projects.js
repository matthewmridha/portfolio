import React from 'react';
import projectList from './projectList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faInfo, faLink, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {  UncontrolledTooltip } from 'reactstrap';

const style = {
    fontSize: "20px",
    color: "white"
};

const modalOn = "block";
const modalOff = "none";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            infoModal: modalOff,
            info : "hi"
        }
      
    };
    showButtons = (arg) => {
        let id = "link" + arg;
        document.getElementById(id).style.animationName = "projectInfoSliderIn";
    };
    hideButtons = (arg) => {
        let id = "link" + arg;
        let target = document.getElementById(id);
        target.style.animationName = "projectInfoSliderOut";
        //target.style.animationPlayState="running"
        
    };
    showInfo = (arg) => {
        this.setState( state => {
            return {
                info : arg
            }
        });
        this.toggleInfoModal();
    };
    toggleInfoModal = () => {
        if ( this.state.infoModal === modalOff ){
            this.setState( state => {
                return {
                    infoModal : modalOn
                }
            });
        } else{
            this.setState( state => {
                return {
                    infoModal : modalOff
                }
            });
        }
    };
    render() {
    return ( 
        <div className="projects" id="projects">
            <span className="highLight">Projects</span>
            <div className="projectContainer">
                <div id="infoModal" style={{  display: this.state.infoModal }}>
                    <div id="closeX" onClick={this.toggleInfoModal}>
                        <FontAwesomeIcon icon={faWindowClose}/>
                    </div>
                    <div className="infoText"><p>{this.state.info}</p></div>
                </div>
               {
               projectList.map( (project, i) => (
                    <div key={project.id}>
                        <div className="projectCard" 
                        id={ "project" + project.id }
                        onMouseEnter = {this.showButtons.bind(this, project.id)} 
                        onMouseLeave = {this.hideButtons.bind(this, project.id)}
                        style={{backgroundImage:`url(/screenshots/${ project.image })`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
                            <div className="projectInfoContainer">
                                <div className="projectLinks" id={"link" + project.id}>
                                    <button className="livePage projectButton">
                                        <a href={ project.liveLink } className="link" target="_blank" rel="noopener noreferrer" id={ 'live' + project.id }>
                                            <FontAwesomeIcon 
                                            icon={ faLink } 
                                            style={ style }/>
                                        </a>
                                    </button>
                                    <UncontrolledTooltip placement="top" target={ "live" + project.id }>
                                    Visit the Page
                                    </UncontrolledTooltip>
                                    <button className="gitLink projectButton">
                                        <a href={ project.githubLink } className="link" target="_blank" rel="noopener noreferrer" id={ "code" + project.id}>
                                            <FontAwesomeIcon 
                                            icon={ faCode } 
                                            style={ style }/>
                                        </a>
                                    </button>
                                    <UncontrolledTooltip placement="top" target={ "code" + project.id }>
                                    See the Code
                                    </UncontrolledTooltip>
                                    <button className="description projectButton" 
                                    id={ "info" + project.id }
                                    onClick={this.showInfo.bind(this, project.description)}>
                                        <FontAwesomeIcon 
                                        icon={ faInfo } 
                                        style={ style } />
                                    </button>
                                    <UncontrolledTooltip placement="top" target={ "info" + project.id }>
                                    Read about It
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                        </div>
                        <div className="projectName">{ project.name }</div>
                    </div>
               ))
               } 
            </div>

        </div>
    )
            }
};
 export default Projects;