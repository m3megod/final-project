import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
        this.cartItems = this.cartItems.bind(this);

        const cartitem = this.props
        console.log(cartitem)
    }

    



    cartItems() {
        if (this.state.cart.length === 0) {
           return <h1>Cart is empty</h1>
        }
        else{
            this.setState({
                cart: this.props
              });
              return <div>
                  {this.cart.name}
              </div>
        }
    }

    

    render(){
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