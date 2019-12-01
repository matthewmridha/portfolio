import React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const name = "Matthew Mridha";
const title = "web developer"

class Intro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            title : ""
        }
    };
    componentDidMount(){
        let nameArray =  name.split("");
        let arrayLength = nameArray.length;
        let i = 0;
        
        let fillName = setInterval(() => {
            if (arrayLength === 1){
                clearInterval(fillName);
                setTimeout(function(){addTitle()}, 1000);
            }
            let name = this.state.name;
            this.setState( state => {
                  return { 
                      name : name += nameArray[i] 
                    }
                });
            i++;
            arrayLength --;
        }, 200);
        
        let addTitle = () => {
            this.setState({ title : title })
        };
    
    };
    render() {
        return ( 
            <div className = "intro" >
                <div id="name">{ this.state.name }<span className="blink">|</span></div>
                <div id="title">{ this.state.title }</div>
        <div><a className='arrow' href='#about'><FontAwesomeIcon id="arrowIcon" icon={ faArrowDown }/>Explore</a></div>
                <div className='star starSmall star0'></div>
                <div className='star starSmall srat1'></div>
                <div className='star starSmall star3'></div>
                <div className='star starMedium star2'></div>
                <div className='star starMedium star4'></div>
                <div className='star starSmall star5'></div>
                <div className='star starSmall star6'></div>
                <div className='star starLarge star7'></div>
                <div className='star starLarge star8'></div>
            </div>
        )
    }
};

export default Intro;