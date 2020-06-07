import React, { Component } from 'react';
import '../css/Home.css';
import products from '../products.json';
import { Link } from 'react-router-dom';
import Cart from './Cart'

class Home extends Component {
  constructor(props) {
    super(props);

    window.$skartebi = []

    this.addToCart = this.addToCart.bind(this);
  }


  addToCart(items) {
    var skartebi = window.$skartebi
    skartebi.push(items)
    localStorage.setItem('itm', JSON.stringify(skartebi))
    this.refs.btn.setAttribute("disabled", "disabled");
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
                    <div className='container'>
                      <img src={items.image} className='homeimg' />
                      {items.free && (
                        <div className="freeshipping">Free Shipping</div>
                      )}
                    </div>

                  </Link>

                  <div className='pricediv'>
                    <div className="name"><p>{items.name}</p></div>
                    <div className="price">
                      <p>{items.price} GEL</p>
                    </div>
                  </div>
                  <input
                    type="button"
                    onClick={() => this.addToCart(items)}
                    value="+ Add To Cart"
                    id={items.id}
                    className='but'
                    ref='btn'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </>

    );
  }
}

export default Home;
