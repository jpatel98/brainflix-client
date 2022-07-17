import React from 'react';
import Hero from '../../components/Hero/Hero';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from '../../components/Comments/Comments';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import PageNotFound from '../PageNotFound/PageNotFound';

class MainPage extends React.Component{

  state = {
    videos: [],
    currentVid: null
  }

  handleSelectVideo = (videoId) => {
    axios
      .get(`http://localhost:8080/videos/${videoId}`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          currentVid: response.data
        });
        (videoId !== "84e96018-4022-434e-80bf-000ce4cd12b8") ? document.title = `${response.data.title} - BrainFlix` : document.title = `Home - BrainFlix`
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          currentVid: undefined
        })
    })
    // console.log(videoId);
    window.scrollTo(0, 0);
  }

  componentDidMount(){
    document.title = "BrainFlix - Home"
     const currVideoId = this.props.match.params.videoId;
     axios
      .get("http://localhost:8080/videos")
      .then(response => {
        this.setState({
          videos: response.data
        });
        return response.data[0].id;
      })
      .then(firstVideoId => {
        const videoToLoad = currVideoId !== undefined ? currVideoId : firstVideoId;
        this.handleSelectVideo(videoToLoad);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  componentDidUpdate(prevProps) {
    const newVideoId = this.props.match.params.videoId;
    if (prevProps.match.params.videoId !== newVideoId){
      const videoToLoad = newVideoId !== undefined ? newVideoId : this.state.videos[0].id;
      this.handleSelectVideo(videoToLoad);
    }
  }
  
  render(){

      // filtering through the videos to find the current video based on the id

      if (this.state.currentVid === null) {
        return <Loading />
      } else if (this.state.currentVid === undefined) {
        return <PageNotFound />
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
                    <div className='div3'><VideoList vidList = {filteredVid} onSelectVid = {this.handleSelectVideo}/></div>
                </div>   
            </main>
          );
        }
  }
}

export default MainPage;