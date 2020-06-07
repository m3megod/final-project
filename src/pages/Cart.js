import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home'
import '../css/Cart.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cali: 1
        }
        this.cartItems = this.cartItems.bind(this);
        this.removeItems = this.removeItems.bind(this)
        this.gazrda = this.gazrda.bind(this)
    }

    removeItems(itemebi) {
        itemebi = null
        window.location.reload(true);
        return <div>
            {itemebi}
        </div>
    }

    gazrda(itemebi) {

    }

    cartItems() {
        const itm = JSON.parse(localStorage.getItem('itm'))

        if (window.localStorage.length == 0) {
            return <h1>Cart is empty</h1>
        }
        else {
            return <>
                <h1 className='karti'>Cart</h1>
                <div className='cart-main-div'>
                    {itm.map(itemebi =>
                        <div className='cart-items'>
                            <div className='one'>
                                <div className='cart-img-div'>
                                    <img src={itemebi.image} className='cart-img' />
                                </div>
                                <div className='fasebi'>
                                    <h3>{itemebi.name}</h3>
                                    <p>Price: {itemebi.price}</p>
                                    <p>Total: </p>
                                </div>
                            </div>

                            <div className='mesame'>
                                <div>
                                    <input type='button' value='Delete' onClick={() => this.removeItems(itemebi)} id={itemebi.id} />
                                </div>

                                <div className='increment'>
                                    <input type='button' value='+' className='cartbut' onClick={() => this.gazrda(itemebi)} />
                                    <p>{itemebi.cali}</p>
                                    <input type='button' value='-' className='cartbut' onClick='dakleba' />
                                </div>
                            </div>
                            
                        </div>
                    )}
                    {/* <h4>
                    Total: {itm.map(fuli => <p> {fuli.price++}</p>)}
                    </h4> */}
                </div>


            </>
        }


    }



    render() {
        return (
            <>
                <div>
                    {this.cartItems()}
                </div>

            </>
        )

    }
}
export default Cart;