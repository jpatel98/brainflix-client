import React from 'react';
import './_videoinfo.scss';
import viewsLogo from '../../assets/icons/views.svg'
import likesLogo from '../../assets/icons/likes.svg'

const VideoInfo = props => {
    // receiving the array from parent component 
    let currVidInfo = props.currentVid;
    
    //Setting up date from timestamp
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
    const currVidDate = new Date (currVidInfo.timestamp).toLocaleDateString("en-US", options);

    return (
        <div className='viddetails'>
            <h1 className='viddetails__title page-header'>{currVidInfo.title}</h1>
            {/* Div to hold video meta data */}
            <div className='viddetails__data'>
                {/* Div 1 to hold channel name and views */}
                <div className='viddetails__data-container body-copy'>
                    <p className="viddetails__data-container-channel">By {currVidInfo.channel}</p>
                    <div className="viddetails__data-container-views">
                        <img src={viewsLogo} alt="views icon"/>
                        <p>{currVidInfo.views}</p>
                    </div>
                </div>
                {/* Div 2 to hold upload date and likes */}
                <div className='viddetails__data-container body-copy'>
                    <p className="viddetails__data-container-date">{currVidDate}</p>
                    <div className="viddetails__data-container-likes">
                        <img src={likesLogo} alt="views icon"/>
                        <p>{currVidInfo.likes}</p>
                    </div>
                </div>
            </div>
            {/* Div to hold video description */}
            <div className='viddetails__description body-copy'>
                <p>{currVidInfo.description}</p>
            </div>
        </div>
    );
};

export default VideoInfo;