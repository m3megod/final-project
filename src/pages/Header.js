import React, { Component } from 'react';
import '../css/Header.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.toggleShowMenu = this.toggleShowMenu.bind(this);
    this.shouldShowMenu = this.shouldShowMenu.bind(this);
  }

  toggleShowMenu(event) {
    this.setState((state) => ({ showMenu: !state.showMenu }));
  }

  //
  shouldShowMenu() {
    if (this.state.showMenu) {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" className="linki">
            Home
          </Link>
          <Link to="/about" className="linki">
            About
          </Link>
          <Link to="/contact" className="linki">
            Contact Us
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <>
        <header>
          <div className="menu_nav_button_div">
            <button
              className="menu_nav_button"
              onClick={this.toggleShowMenu}
            ></button>
            {this.shouldShowMenu()}
          </div>
          <div className="logo">
            <div className="t">T</div>
            <div className="b">B</div>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
