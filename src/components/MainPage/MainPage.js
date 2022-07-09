import React from 'react';
import Hero from '../Hero/Hero';
import VideoInfo from '../VideoInfo/VideoInfo';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import axios from 'axios';
// import vidDataDetails from '../../data/video-details.json';
// import vidData from '../../data/videos.json'

const API_URL = 'https://project-2-api.herokuapp.com';
const API_KEY = '519f047c-62a1-461d-bc03-07a951d18617';

class MainPage extends React.Component{

  state = {
    videos: [],
    currentVid: null
  }

  selectVideo = (videoId) => {
    // https://project-2-api.herokuapp.com/videos/videoId?api_key=<API_KEY>
    axios
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          currentVid: response.data
        });
      })
      .catch((error) => {
        console.log(error);
    })
    console.log(videoId);
    window.scrollTo(0, 0);
  }

  componentDidMount(){
     const currVideoId = this.props.match.params.videoId;
      //https://project-2-api.herokuapp.com/videos?api_key=<API_KEY>
     axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then(response => {
        this.setState({
          videos: response.data
        });
        return response.data[0].id;
      })
      .then(firstVideoId => {
        const videoToLoad = currVideoId !== undefined ? currVideoId : firstVideoId;
        this.selectVideo(videoToLoad) 
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  componentDidUpdate(prevProps) {
    const newVideoId = this.props.match.params.videoId;
    console.log(prevProps);
    if (prevProps.match.params.videoId !== newVideoId){
      const videoToLoad = newVideoId !== undefined ? newVideoId : this.state.videos[0].id;
      this.selectVideo(videoToLoad);
    }
  }
  
  render(){
    // console.log(this.state.videos.length);
      // filtering through the videos to find the current video based on the id

      if (this.state.currentVid == null) {
        return <p>Loading...</p>
      } else {
          const filteredVid = this.state.videos.filter(video => video.id !== this.state.currentVid.id);
          return (
            <main>
                <Hero currentVid={this.state.currentVid}/>
                <div className='div1'>
                    <div className='div2'>
                    <VideoInfo currentVid={this.state.currentVid}/>
                    <Comments currentVid={this.state.currentVid}/>
                    </div>
                    <div className='div3'><VideoList vidList = {filteredVid} onSelectVid = {this.selectVideo}/></div>
                </div>   
            </main>
          );
        }
  }
}

export default MainPage;