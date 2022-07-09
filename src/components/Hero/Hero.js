import React from 'react';
import './Hero.scss';


const hero = props => {
    let currentVidImg = props.currentVid.image;
    return (
        <div className="hero">
            <video className="hero__video" controls poster={currentVidImg}></video>
        </div>
        
    );
};

export default hero;