import React from 'react';
import videos from '../../data/videos.json';
import './_hero.scss'
let vidBanner = videos[0].image

const hero = () => {
    
    return (
        <div className="hero">
            <video className="hero__video" controls poster={vidBanner}></video>
        </div>
        
    );
};

export default hero;