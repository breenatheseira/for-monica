import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllProducts, selectProductsTotal } from './stores/productSlice.js';

const ProductsList = () => {
  const products = useSelector(selectAllProducts)
  const totalProducts = useSelector(selectProductsTotal);

  const results = []

  products.forEach( product => {
    console.log('product: ',product)
      results.push(
        <div className='block' key={product.id}>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-100 '>{product.link}</div>
            </div>
            <div className='flex flex-row'>
              <div>{product.name}</div>
              <div>{product.newPrice} {product.currency}</div>
              <div>{product.oldPrice} {product.currency}</div>
            </div>
            <div>{product.images}</div>
          </div>
        </div>
      )
    })

  return (
    <div>
      <div>{totalProducts}</div>
      <div>{results}</div>
    </div>
  )
}

export default ProductsList;