import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, Icon} from 'react-materialize'
import './App.css';

import CardPublish from './components/CardPublish/CardPublish';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>

        <CardPublish> </CardPublish>
      </div>

    );
  }
}

export default App;
