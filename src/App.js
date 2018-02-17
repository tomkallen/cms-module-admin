import React, {Component} from 'react';
import './App.css';
import './css/lux.css';
import Summary from './components/Summary/Summary';
import Editor from './components/Editor/Editor';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Summary} />
          <Route exact path="/editor" component={Editor} />
        </Switch>
      </div>
    );
  }
}

export default App;
