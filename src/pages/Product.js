import React, { Component, useState } from 'react';
import '../css/Header.css';

import { useParams } from 'react-router-dom';
import products from '../products.json';

function Product() {
  let { aidi } = useParams();

  const [currentprod, setCurrentprod] = useState(
    products.data.find((product) => product.id === +aidi)
  );

  return (
    <>
      <div></div>
      <div>{currentprod && currentprod.name}</div>
    </>
  );
}

export default Product;
