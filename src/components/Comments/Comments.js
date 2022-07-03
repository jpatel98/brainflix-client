import React from 'react';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import './_comments.scss'

const Comments = props => {
    // getting an array of data of current video being displayed.

    // console.log(props.currentVid.comments);
    let dynamicComments = props.currentVid.comments.map(i => {
        
        //converting numeric timestamps to dates
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
        const dateStr = new Date (i.timestamp).toLocaleDateString("en-US", options);
        // console.log(dateStr);

        return <div className='comments__dynamic body-copy'>
            <div className = 'comments__dynamic-div'>
                <div className='comments__dynamic-img'></div>
            </div>
            <div className='comments__dynamic-container'>
                <div className='comments__dynamic-container-top'>
                    <p className='comments__dynamic-container-top-name'>{i.name}</p>
                    <p className='comments__dynamic-container-top-date'>{dateStr}</p>
                </div>
                <p className='comments__dynamic-container-text'>{i.comment}</p>
            </div>
        </div>
    })

    // console.log(dynamicComments);
    return (
        <div className='comments'>
            <p className='comments__length section-header'>
                {dynamicComments.length} Comments
            </p>
            {/* Div for comments form */}
            <div className="comments__input">
                    <img className="comments__input-img" src={userImg} alt="UserId"/>
                    <form className="comments__input-info-form">
                        <label className="section-header" for="comment-field">JOIN THE CONVERSATION</label>
                        <div className='comments__input-info-form-container'>
                            <textarea required className="comments__input-info-form-comment body-copy" id="comment-field" name="comment" placeholder="Add a new comment"></textarea>
                            <button className="comments__input-info-form-btn">COMMENT</button>
                        </div>
                    </form>
            </div>
        {dynamicComments}
        </div>
    );
};


export default Comments;