import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LeftMenu.css';

class LeftMenu extends Component {
  render() {
    return (
      <div className="LeftMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/editor">Create new page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftMenu;
