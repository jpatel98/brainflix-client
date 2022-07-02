import React from 'react';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import './_comments.scss'

const Comments = props => {
    // getting a nested array of comment data so mapping through it two times
    // console.log(props.commentsArr);
    let dynamicComments = props.commentsArr.map(nested => nested.map((i) => {

        //converting numeric timestamps to dates
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
        const dateStr = new Date (i.timestamp).toLocaleDateString("en-US", options);

        return <div className='comments__dynamic body-copy'>
            <div><div className='comments__dynamic-img'></div></div>
            <div className='comments__dynamic-container'>
                <div className='comments__dynamic-container-top'>
                    <p className='comments__dynamic-container-top-name'>{i.name}</p>
                    <p className='comments__dynamic-container-top-date'>{dateStr}</p>
                </div>
                <p className='comments__dynamic-container-text'>{i.comment}</p>
            </div>
        </div>
        

    })) 
    // console.log(dynamicComments);
    return (
        <div className='comments'>
            <p className='comments__length section-header'>
                {props.commentsArr[0].length} Comments
            </p>
            {/* Div for comments form */}
            <div className="comments__input">
                    <img className="comments__input-img" src={userImg} alt="UserId"/>
                    <form className="comments__input-info-form">
                        <label className="section-header" for="comment-field">JOIN THE CONVERSATION</label>
                        <textarea required className="comments__input-info-form-comment body-copy" id="comment-field" name="comment" placeholder="Add a new comment"></textarea>
                        <button className="comments__input-info-form-btn">COMMENT</button>
                    </form>
            </div>
        {dynamicComments[0]}
        </div>
    );
};


export default Comments;