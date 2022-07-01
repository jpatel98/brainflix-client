import React from 'react';
import './_videoinfo.scss';
import viewsLogo from '../../assets/icons/views.svg'
import likesLogo from '../../assets/icons/likes.svg'

const VideoInfo = props => {
    // receiving the title array from parent component 
    // console.log(props.channel);
    return (
        <div className='viddetails'>
            <h1 className='viddetails__title page-header'>{props.title[0]}</h1>
            {/* Div to hold video meta data */}
            <div className='viddetails__data'>
                {/* Div 1 to hold channel name and views */}
                <div className='viddetails__data-container body-copy'>
                    <h3 className="viddetails__data-container-channel">By {props.channel[0]}</h3>
                    <div className="viddetails__data-container-views">
                        <img src={viewsLogo} alt="views icon"/>
                        <p>{props.views[0]}</p>
                    </div>
                </div>
                {/* Div 2 to hold upload date and likes */}
                <div className='viddetails__data-container body-copy'>
                    <p className="viddetails__data-container-date">{props.date[0]}</p>
                    <div className="viddetails__data-container-likes">
                        <img src={likesLogo} alt="views icon"/>
                        <p>{props.likes[0]}</p>
                    </div>
                </div>
            </div>
            {/* Div to hold video description */}
            <div className='viddetails__description body-copy'>
                <p>{props.description[0]}</p>
            </div>
        </div>
    );
};

export default VideoInfo;