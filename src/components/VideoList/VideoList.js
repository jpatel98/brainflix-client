import React from 'react';
import { NavLink } from 'react-router-dom';
import './VideoList.scss';

const VideoList = props => {
    const vidListArr = props.vidList;

    const vidList = vidListArr.map((nested) => {

        // const handleVideoSelect = (event) => {
        //     event.preventDefault();
        
        //     props.onSelectVid(nested.id);
        // }
        return <div key={nested.id} className='vidlist__container-item'>
            <NavLink to={`/videos/${nested.id}`}>
                <div><img src={nested.image} alt="placeholder" className='vidlist__container-item-image'/></div>
                <div className='vidlist__container-item-details'>
                    <p className='vidlist__container-item-details-title body-copy'>{nested.title}</p>
                    <p className='vidlist__container-item-details-channel body-copy'>{nested.channel}</p>
                </div>
            </NavLink>
        </div>
    })

    return (
        <div className='vidlist'>
            <p className='vidlist__title section-header'>NEXT VIDEOS</p>
            <div className='vidlist__container'>{vidList}</div>
        </div>
    );
};

export default VideoList;