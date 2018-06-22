import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="App-intro">
          Here is where the front-end of our app will live
        </h1>
      </div>
    );
  }
}

export default App;
