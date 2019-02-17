
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from './components/MainRouter';
import Mapimp from './components/Mapimp';

class App extends Component {
  render() {
    return (
      <div id="app">
        <MainRouter appClient={this.props.appClient}></MainRouter>
        <Mapimp/>
      </div>
    )
  }
}


export default App;