import React, {Component} from 'react';
import './App.css';
import './css/lux.css';
import Summary from './components/Summary/Summary';
import PageManager from './components/PageManager/PageManager';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Editor from "./components/Editor/Editor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Summary} />
          <Route exact path="/manager" component={PageManager} />
          <Route path="/editor" component={Editor} />

        </Switch>
      </div>
    );
  }
}

export default App;
