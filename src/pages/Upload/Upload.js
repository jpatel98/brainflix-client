import React from 'react';
import thumbnail from '../../assets/images/Upload-preview.jpg'
import { Link, Redirect } from 'react-router-dom';
import './Upload.scss'
import axios from 'axios';


class Upload extends React.Component {

  state = {
    published: false,
    redirect: false
  }
  handlePublish = (event) => {
    event.preventDefault();
    let newTitle = event.target.title.value;
    let newDescription = event.target.description.value;

    axios
      .post("http://localhost:8080/videos", {
        title: newTitle,
        description: newDescription
      })
      .then(response => {
        setTimeout(() => {
          this.setState({
            published: true
            
            });
        }, 1000);
    
        setTimeout(() => {
          this.setState({
            redirect: true
          })
        }, 2000);
      })
      


  }

  render(){
    return (
      <div className="upload">
        <div className="upload__margin">
          <h1 className="upload__title page-title">Upload Video</h1>
          <form className="upload__form" onSubmit={this.handlePublish}>
            <div className='upload__form-container'>
              <div className="upload__form-one">
                <h4 className="upload__description section-subheader">VIDEO THUMBNAIL</h4>
                <img className="upload__image" src={thumbnail} alt="thumbnail" />
              </div>
              <div className="upload__form-two">
                <label className="upload__description section-subheader" htmlFor='title'>TITLE YOUR VIDEO</label>
                <input className="upload__form-title body-copy" name="title" id="title" placeholder="Add a title to your video" required/>
                <label className="upload__description section-subheader" htmlFor='description'>ADD A VIDEO DESCRIPTION</label>
                <textarea className="upload__form-description body-copy" name="description" id="description" placeholder="Add a description of your video" required/>
              </div>
            </div>
            <div className="upload__button-container">
              <button type="submit" className="upload__button-publish button-text">
                {/* Button text will notify video has been published after 1 seconds of button click to mimic uploading time */}
                {this.state.published ? <span className='redirect'>Success</span> : <span className='no-redirect'>Publish</span>}
                {/* Page will redirect 2 seconds after button click to mimic processing time */}
                {this.state.redirect ? <Redirect to='/' /> : <Redirect to='/upload' />}
              </button>
              {/* Goes back to home if cancelled */}
              <Link to='/' className="upload__button-cancel button-text">CANCEL</Link>
            </div>
          </form>
      </div>
  </div>
  );
  }
}

export default Upload;
