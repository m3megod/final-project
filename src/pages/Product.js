import React, { useState } from 'react';
import '../css/Header.css';
import '../css/Product.css'
import { useParams } from 'react-router-dom';
import products from '../products.json';

function Product() {
  let { aidi } = useParams();

  window.$skartebi = []

  const [currentprod, setCurrentprod] = useState(
    products.data.find((product) => product.id === +aidi)
  );

   function addToCart(currentprod){
    var skartebi = window.$skartebi
    skartebi.push(currentprod)
    localStorage.setItem('itm' , JSON.stringify(skartebi))
  }

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
          </div>
          <input type='button' value='+ Add to cart' className='prodbut' onClick={() => addToCart(currentprod)} />
        </div>

      </div>

    </>
  );
}

export default Product;
