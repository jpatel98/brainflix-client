import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Nav';
import Hero from './components/Hero/Hero';
import vidData from './data/video-details.json';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';


class App extends React.Component {

  state = {
    videoData: vidData,
  }
  

  render(){
    // Setting vidArr variable from state object
    let vidArr = this.state.videoData;
    // console.log(vidArr);
    // Mapping through the vidArr array and sending details to child component
    const vidArrTitles = vidArr.map(i => i.title)
    const vidArrChannels = vidArr.map(i => i.channel)
    const vidArrViews = vidArr.map(i => i.views)
    const vidArrLikes = vidArr.map(i=>i.likes)
    const vidArrDesc = vidArr.map(i => i.description)
    // converting numeric timestamps to dates
    const vidArrDates = vidArr.map((i) => {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
      return new Date (i.timestamp).toLocaleDateString("en-US", options);
    })

    //passing all comments from vidArr to comments component
    const commentsArr = vidArr.map(i => i.comments)
    return (
      <>
        <NavBar/>
        <Hero/>
        <VideoInfo 
          title={vidArrTitles} 
          channel={vidArrChannels} 
          views={vidArrViews} 
          date={vidArrDates} 
          likes={vidArrLikes}
          description={vidArrDesc}
        />
        <Comments commentsArr={commentsArr}/>
      </>
    );
  }
};

export default App;
