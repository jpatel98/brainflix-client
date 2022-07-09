import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Nav';
import Upload from './components/Upload/Upload';
import MainPage from './components/MainPage/MainPage';
import './App.scss';


class App extends React.Component {

  render(){

    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/videos/:videoId' exact component={MainPage} />
          <Route path='/upload' exact component={Upload} />
        </Switch>
      </Router>
    );
  }
};

export default App;
