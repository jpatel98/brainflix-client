import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Nav';
import Upload from './components/Upload/Upload';
import Hero from './components/Hero/Hero';
import vidDataDetails from './data/video-details.json';
import vidData from './data/videos.json';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList'
import './App.scss';


class App extends React.Component {

  state = {
    videos: vidData,
    currentVid: vidDataDetails[0]
  }

  selectVideo = (videoId) => {
    const selectedVideo = vidDataDetails.find(video => video.id === videoId);

    window.scrollTo(0, 0);
    
    this.setState({
      currentVid: selectedVideo
    })
  }
  
  render(){
   // filtering through the videos to find the current video based on the id
    const filteredVid = this.state.videos.filter(video => video.id !== this.state.currentVid.id);
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact>
            <Hero currentVid={this.state.currentVid}/>
            <div className='div1'>
              <div className='div2'>
                <VideoInfo currentVid={this.state.currentVid}/>
                <Comments currentVid={this.state.currentVid}/>
              </div>
              <div className='div3'><VideoList vidList = {filteredVid} onSelectVid = {this.selectVideo}/></div>
            </div>
          </Route>
          <Route path='/upload' exact component={Upload} />
        </Switch>
      </Router>
    );
  }
};

export default App;
