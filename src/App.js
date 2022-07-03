import React from 'react';
import './App.css';
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
    // console.log(selectedVideo);
    this.setState({
      currentVid: selectedVideo
    })
  }

  render(){
    // Setting vidArr variable from state object
    // let vidArr = this.state.videoData;
    // console.log(vidArr);
    // Mapping through the vidArr array and sending details to child component
    // const vidArrTitles = vidArr.map(i => i.title);
    // const vidArrChannels = vidArr.map(i => i.channel);
    // const vidArrViews = vidArr.map(i => i.views);
    // const vidArrLikes = vidArr.map(i=>i.likes);
    // const vidArrDesc = vidArr.map(i => i.description);
    // converting numeric timestamps to dates
    // const vidArrDates = vidArr.map((i) => {
    //   const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
    //   return new Date (i.timestamp).toLocaleDateString("en-US", options);
    // })
    // console.log(this.state.videoDataDetails)
    //passing all comments from vidArr to comments component
    // const commentsArr = vidArr.map(i => i.comments);

    const filteredVid = this.state.videos.filter(video => video.id !== this.state.currentVid.id);
    return (
      <>
        <NavBar/>
        <Hero currentVid={this.state.currentVid}/>
        <VideoInfo currentVid={this.state.currentVid}/>
        <Comments currentVid={this.state.currentVid}/>
        <VideoList vidList = {filteredVid} onSelectVid = {this.selectVideo}/>
      </>
    );
  }
};

export default App;
