import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import InputOne from '../InputOne/InputOne.js';
import InputTwo from '../InputTwo/InputTwo.js';
import InputThree from '../InputThree/InputThree.js';
import InputFour from '../InputFour/InputFour.js';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <div>
         <div className ="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
          </div>
        <Router>
          <div>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/1" component = {InputOne}/>
            <Route path = "/2" component = {InputTwo}/>
            <Route path = "/3" component = {InputThree}/>
            <Route path = "/4" component = {InputFour}/>
            <Route path = "/admin" component = {Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
