import React from 'react';
import Hero from '../Hero/Hero';
import VideoInfo from '../VideoInfo/VideoInfo';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import vidDataDetails from '../../data/video-details.json';
import vidData from '../../data/videos.json'

class MainPage extends React.Component{

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

export default MainPage;