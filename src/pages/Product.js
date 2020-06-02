import React, { useState } from 'react';
import '../css/Header.css';
import '../css/Product.css'
import { useParams } from 'react-router-dom';
import products from '../products.json';

function Product() {
  let { aidi } = useParams();

  const [currentprod, setCurrentprod] = useState(
    products.data.find((product) => product.id === +aidi)
  );

  return (
    <>
      <div className='product-main-div'>
        <div className='product-img'><img src={currentprod.image} className='product-img' /></div>
        <div className='aghwera-div'>
          <div>
            <h2 className='saxeli'>{currentprod.name}</h2>
          </div>
          <p className='aghwera'>{currentprod.description}</p>
          <h3>{currentprod.price} GEL</h3>
          <div className='filter-div'>
            <div className="size-div">
              <label>Size: </label>
              <label>
                <input type="radio" /> XS
              </label>
              <label>
                <input type="radio" /> S
              </label>
              <label>
                <input type="radio" /> M
              </label>
              <label>
                <input type="radio" /> L
              </label>
              <label>
                <input type="radio" /> XL
              </label>
              <label>
                <input type="radio" /> XXL
              </label>
            </div>
          </div>
          <input type='button' value='+ Add to cart' className='prodbut' />
        </div>

      </div>

    </>
  );
}

export default Product;
