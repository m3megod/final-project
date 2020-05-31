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
import products from '../products.json'


function Product() {

    
        return (
            <>
                {products.data.map(items =>
                    <div className='items'>

                        {items.free && <div className="freeshipping">Free Shipping</div>}
                        <div className='name'>{items.name}</div>
                        <div className='price'>{items.price}</div>
                        <input type='button' onClick='addToCart' value='+ Add To Cart' />
                    </div>
                )}
            </>
        )
    
}

export default Product;