import React, { Component, useState } from 'react'
import '../css/Header.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import products from '../products.json'


function Product() {
    
        let { aidi } = useParams()

        const [currentprod, setCurrentprod] = useState(products.data.find((product) => product.id === aidi))

        console.log(aidi) 

        return (
            <>
                <div>
                    
                </div>
                <div>
                    {
                    currentprod.free
                    }
                </div>

            </>
        )

    

}


export default Product;