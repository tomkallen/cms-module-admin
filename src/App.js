import React, {Component} from 'react';
import './App.css';
import Left from './left';
import {Switch, Route} from 'react-router-dom';

const Right = () => <div>Right</div>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Left} />
          <Route exact path="/right" component={Right} />
        </Switch>
      </div>
    );
  }
}

export default App;
