import LinkInput from '../../components/LinkInput.jsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProduct } from '../../features/listings/stores/productSlice.js'

export default Scraper = () => {
  const [showInput, setShowInput] = useState(true);
  const [linkText, setLinkText] = useState('');

  const dispatch = useDispatch();

  function handleTextChange(value){
    // send a dispatch
    setLinkText(value)
    console.log('1. handleTextChange')
    dispatch(fetchProduct(value))
  }

  return (
    <>
      <div className="m-8 py-5 px-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold pb-5">Scraper</h1>
          <div>
            <button className="py-1 px-4 rounded-md border border-green-200 bg-green-200 focus:bg-green-600 focus:text-white focus:outline-none focus:border-green-600 hover:bg-green-600 hover:text-white hover:border-green-600">
              Copy All Links
            </button>
            <button 
              className="py-1 px-4 ml-3 rounded-md border border-blue-300 focus:bg-blue-600 focus:text-white focus:outline-none focus:border-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600"
              onClick={() => { setShowInput(!showInput) }}
            >
              { showInput ? 'Collapse' : 'Show' }
            </button>
            <button className="py-1 px-4 ml-3 rounded-md text-blue-600 border border-white focus:bg-rose-600 focus:text-white focus:outline-none focus:border-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600">
              Clear
            </button>
          </div>
        </div>
        
        { showInput 
          ? <LinkInput 
              linkText={linkText}
              onTextChange={handleTextChange}
              placeholder='https://www.shopjoyeus.com/collections/dresses/products/brianna-dress-more-colors-9'
            />
          : <></>
        }
      </div>
    </>
  )
}