import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithub, faCodepen, faFreeCodeCamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component {

    render() {
        return ( 
            <div className = "social connect" >
                <h3 className = "connectHeader" > Connect with me </h3> 
                <div className = "socialLinks" >
                    <a className = "socialLogo"
                    href = "https://github.com/matthewmridha"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        <FontAwesomeIcon icon = { faGithub }
                        size = "2x"
                        color = "black" 
                        /> 
                        {"    "}Github 
                    </a> 
                    <a className = "socialLogo"
                    href = "https://codepen.io/matthewmridha"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        <FontAwesomeIcon icon = { faCodepen }
                        size = "2x"
                        color = "black" 
                        /> 
                        {"    "}Codepen 
                    </a> 
                    <a className = "socialLogo"
                    href = "https://www.freecodecamp.org/matthew_mridha"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        <FontAwesomeIcon icon = { faFreeCodeCamp }
                        size = "2x"
                        color = "black" 
                        /> 
                        {"    "}Free-Code-camp
                    </a> 
                    <a className = "socialLogo"
                    href = "https://twitter.com/matt_mridha"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        <FontAwesomeIcon icon = { faTwitterSquare }
                        size = "2x"
                        color = "black" 
                        /> 
                        {"    "}Twitter 
                    </a> 
                    <a className = "socialLogo"
                    href = "https://www.linkedin.com/in/matthew-mridha-370b1370/"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        <FontAwesomeIcon icon = { faLinkedin }
                        size = "2x"
                        color = "black" 
                        />
                        {"    "}LinkedIn 
                    </a> 
                </div> 
            </div>
        )
    }
};

export default Social