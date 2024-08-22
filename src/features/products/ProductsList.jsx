import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllProducts } from './stores/productSlice.js';
import ProductItem from './ProductItem.jsx'

export default function ProductsList() {
  const products = useSelector(selectAllProducts)
  
  return (
    <div>
      <div>
        {products.map(product => {
          return <ProductItem key={product.id} product={product}/>
        })}
      </div>
    </div>
  )
}