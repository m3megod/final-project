import React, { Component } from 'react';
import '../css/Home.css';
import products from '../products.json';
import { Link } from 'react-router-dom';
import Cart from './Cart'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passProduct: {}
    }

  }

  addToCart(items) {
    this.setState({
      passProduct: items 
    });

    
  }
  render() {
    return (
      <>
        <div className="home-main-div">
          <div className="filter-div">
            <div className="size-div">
              <label>Size: </label>
              <label>
                <input type="checkbox" /> XS
              </label>
              <label>
                <input type="checkbox" /> S
              </label>
              <label>
                <input type="checkbox" /> M
              </label>
              <label>
                <input type="checkbox" /> L
              </label>
              <label>
                <input type="checkbox" /> XL
              </label>
              <label>
                <input type="checkbox" /> XXL
              </label>
            </div>
            <div className="products-number">
              <h4>{products.data.length} Product Found</h4>
            </div>
            <div className="order-div">
              <select id="order" name="Order By">
                <option value="low">Low to high</option>
                <option value="high">High to low</option>
              </select>
            </div>
          </div>
          <div className="products-div">
            <div className="prodebi">
              {products.data.map((items) => (
                <div className="items">
                  <Link to={`/products/${items.id}`}>
                    <img src={items.image} className='homeimg' />
                  </Link>
                  {items.free && (
                    <div className="freeshipping">Free Shipping</div>
                  )}
                  <div className="name">{items.name}</div>
                  <div className="price">
                    {items.price}
                    <p>GEL</p>
                  </div>
                  <input
                    type="button"
                    onClick={() => this.addToCart(items)}
                    value="+ Add To Cart"
                    id={items.id}
                    className='but'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Cart itm={this.state.passProduct} /> */}
      </>
      
    );
  }
}

export default Home;
