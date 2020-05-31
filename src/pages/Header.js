import React, { Component } from 'react'
import '../css/Header.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';

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
            return <div style={{ display: 'flex', justifyContent: 'space-between',}}>
                <Link  to="/" className='linki'>Home</Link>
                <Link to="/about" className='linki'>About</Link>
                <Link to="/contact" className='linki'>Contact Us</Link>
            </div>
        }
    }
    render() {
        return (
            <>
                <header>
                    <div className='menu_nav_button_div'>
                        <button className='menu_nav_button' onClick={this.toggleShowMenu}></button>
                        {this.shouldShowMenu()}
                    </div>
                    <div className='logo'>
                        T B
                    </div>
                    <div>
                        <Link to="/cart">Cart</Link>
                    </div>
                </header>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
            </>
        )
    }
}

export default Header