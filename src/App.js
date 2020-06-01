import React from 'react';
import './App.css';
import Header from './pages/Header';
import { render } from '@testing-library/react';
import Product from './pages/Product';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Header />

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
        <Route path="/products/:aidi">
          <Product />
        </Route>
      </Switch>
    </>
  );
}

export default App;
