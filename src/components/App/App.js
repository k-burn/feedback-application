import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import InputOne from '../InputOne/InputOne.js';
import InputTwo from '../InputTwo/InputTwo.js';
import InputThree from '../InputThree/InputThree.js';
import InputFour from '../InputFour/InputFour.js';
import Admin from '../Admin/Admin.js';
import Complete from '../Complete/Complete.js';
import Home from '../Home/Home.js';
import Header from '../Header/Header.js';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
    }
  }

  goToAdmin = () => {
    console.log('clicked');
    //this.props.history.push('Admin');
    
  }

  render() {
    return (
      <div>
        <Header />
        <div className ="App">
          <button onClick ={this.goToAdmin}>Admin.</button>
        </div>
        <Router>
          <div>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/1" component = {InputOne}/>
            <Route path = "/2" component = {InputTwo}/>
            <Route path = "/3" component = {InputThree}/>
            <Route path = "/4" component = {InputFour}/>
            <Route path = "/admin" component = {Admin}/>
            <Route path = "/complete" component = {Complete}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;