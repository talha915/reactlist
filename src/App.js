import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './component/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
