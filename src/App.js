import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi(){
  alert('hi')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React也不过如此吗？
          </p>
          <button onClick={sayHi}>点我</button>
        </header>
      </div>
    );
  }
}

export default App;
