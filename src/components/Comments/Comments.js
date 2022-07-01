import React from 'react';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import './_comments.scss'

const Comments = props => {
    console.log(props)
    return (
        <div className='comments'>
            <p className='comments__length body-copy'>
                {props.length[0]} Comments
            </p>
            {/* Div for comments form */}
            <div className="comments__input">
                    <img className="comments__input-img" src={userImg} alt="UserId"/>
                    <form className="comments__input-info-form">
                        <label className="body-copy" for="comment-field">JOIN THE CONVERSATION</label>
                        <textarea required className="comments__input-info-form-comment body-copy" id="comment-field" name="comment" placeholder="Add a new comment"></textarea>
                        <button className="comments__input-info-form-btn">COMMENT</button>
                    </form>
            </div>
        </div>
    );
};


export default Comments;