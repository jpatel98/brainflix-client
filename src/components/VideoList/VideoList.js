import React from 'react';
import './_videolist.scss';

const VideoList = props => {
    const vidListArr = props.vidArrList;
    const vidList = vidListArr.map((nested) => {
        return <div className='vidlist__container-item'>
            <div><img src={nested.image} alt="placeholder" className='vidlist__container-item-image'/></div>
            <div className='vidlist__container-item-details'>
                <p className='vidlist__container-item-details-title body-copy'>{nested.title}</p>
                <p className='vidlist__container-item-details-channel body-copy'>{nested.channel}</p>
            </div>
        </div>
    })
    console.log(vidList);

    return (
        <div className='vidlist'>
            <p className='vidlist__title section-header'>NEXT VIDEOS</p>
            <div className='vidlist__container'>{vidList}</div>
        </div>
    );
};

export default VideoList;