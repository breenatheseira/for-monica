import React from 'react';
import TertiaryButton from '../../components/button/TertiaryButton';
import { useDispatch } from 'react-redux';

import { clearProductStore } from './stores/productSlice';

export default function DeleteProductsButton({ total }){

  const dispatch = useDispatch();
  
  function clearAllProducts(){
    dispatch(clearProductStore())
    console.log('cleared all links')
  }

  return (
    <>
      {total === 0 
        ? <></> 
        : <TertiaryButton
            customClass='ml-3'
            handleOnClick={() => clearAllProducts()}
          >
            Clear
          </TertiaryButton>
      }
    </>
  )
}

