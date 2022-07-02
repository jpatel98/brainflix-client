import React from 'react';
import './_videolist.scss';

const VideoList = props => {
    // console.log(props);
    const vidListArr = props.vidList;
    // console.log(vidId);
    // console.log(vidId);
    // const handleVideoSelect = (e) => {
    //     e.preventDefault();

    //     props.onSelectVid();
    // }

    const vidList = vidListArr.map((nested) => {

        const handleVideoSelect = (event) => {
            event.preventDefault();
        
            props.onSelectVid(nested.id);
        }

        return <div className='vidlist__container-item'>
            <a 
                href={`/videos/${nested.id}`}
                onClick={handleVideoSelect}
            >
                <div><img src={nested.image} alt="placeholder" className='vidlist__container-item-image'/></div>
                <div className='vidlist__container-item-details'>
                    <p className='vidlist__container-item-details-title body-copy'>{nested.title}</p>
                    <p className='vidlist__container-item-details-channel body-copy'>{nested.channel}</p>
                </div>
            </a>
        </div>
    })
    // console.log(vidList);

    return (
        <div className='vidlist'>
            <p className='vidlist__title section-header'>NEXT VIDEOS</p>
            <div className='vidlist__container'>{vidList}</div>
        </div>
    );
};

export default VideoList;