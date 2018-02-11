import React, {Component} from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Summary from './components/Summary/Summary';
import Editor from './components/Editor/Editor';
import {Switch, Route} from 'react-router-dom';

const Right = () => <div>Right</div>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftMenu />
        <Switch>
          <Route exact path="/" component={Summary} />
          <Route exact path="/editor" component={Editor} />
        </Switch>
      </div>
    );
  }
}

export default App;
