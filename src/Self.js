import React from 'react';
import ProfilePic from './assets/profile.jpg'

const Self = () => {
    let style = {
        maxWidth: '250px',
        maxHeight: '250px',
        minWidth: '100px',
        minHeight: '100px',
        marginLeft: '10px',
        marginRight: '10px'
    }
    return ( 
        <div className = "connect" >
        <div className = "profile-picture-wrapper" >
        <img className = "profile-picture"
        src = { ProfilePic }
        style = { style }
        alt = "profile-pic" /> 
        </div> 
        <div className = "nameTag" >
        <h3> Matthew Mridha </h3> 
        </div> 
        </div>
    )
}

export default Self;