import React from 'react';
import thumbnail from '../../assets/images/Upload-preview.jpg'
import './upload.scss'

function Upload() {
    return (
        <div className="upload">
      <div className="upload__margin">
        <h1 className="upload__title page-title">Upload Video</h1>
        <form className="upload__flex">
          <div className="upload__flex-one">
            <h4 className="upload__description section-subheader">VIDEO THUMBNAIL</h4>
            <img className="upload__image" src={thumbnail} alt="thumbnail" />
          </div>
          <div className="upload__flex-two">
            <label className="upload__description section-subheader" htmlFor='title'>TITLE YOUR VIDEO</label>
            <input className="upload__form-title" name="title" id="title" placeholder="Add a title to your video" />
            <label className="upload__description section-subheader" htmlFor='description'>ADD A VIDEO DESCRIPTION</label>
            <input className="upload__form-description" name="description" id="description" placeholder="Add a description of your video" />
          </div>
        </form>
        <div className="upload__button-container">
          <button className="upload__button-publish button-text">PUBLISH</button>
          <button className="upload__button-cancel button-text">CANCEL</button>
        </div>
      </div>
    </div>
    );
}

export default Upload;