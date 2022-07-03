import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/Nav';
import Hero from './components/Hero/Hero';
import vidDataDetails from './data/video-details.json';
import vidData from './data/videos.json';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList'


class App extends React.Component {

  state = {
    videos: vidData,
    currentVid: vidDataDetails[0]
  }

  selectVideo = (videoId) => {
    const selectedVideo = vidDataDetails.find(video => video.id === videoId);
    this.setState({
      currentVid: selectedVideo
    })
  }

  render(){
   // filtering through the videos to find the current video based on the id
    const filteredVid = this.state.videos.filter(video => video.id !== this.state.currentVid.id);
    return (
      <>
        <NavBar/>
        <Hero currentVid={this.state.currentVid}/>
        <div className='div1'>
          <div className='div2'>
            <VideoInfo currentVid={this.state.currentVid}/>
            <Comments currentVid={this.state.currentVid}/>
          </div>
          <div className='div3'><VideoList vidList = {filteredVid} onSelectVid = {this.selectVideo}/></div>
        </div>
      </>
    );
  }
};

export default App;
