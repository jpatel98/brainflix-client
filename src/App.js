import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Nav';
import Upload from './pages/Upload/Upload';
import MainPage from './pages/MainPage/MainPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
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
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
};

export default App;
