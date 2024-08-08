// import Card from "../../components/Card.jsx";
import React, { useState } from 'react';

export default Scraper = () => {
  const [showInput, setShowInput] = useState(true);
  return (
    <>
      <div className="m-8 py-5 px-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold pb-5">Scraper</h1>
          <div>
            <button 
              className="py-1 px-4 rounded-md border border-blue-300 focus:bg-blue-600 focus:text-white focus:outline-none focus:border-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600"
              onClick={() => { setShowInput(!showInput) }}
            >
              { showInput ? 'Collapse' : 'Show' }
            </button>
            <button className="py-1 px-4 ml-3 rounded-md border border-rose-200 bg-rose-200 focus:bg-rose-600 focus:text-white focus:outline-none focus:border-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600">
              Clear
            </button>
          </div>
        </div>
        
        { showInput 
          ? <input type="text"
              placeholder="https://www.shopjoyeus.com/collections/dresses/products/brianna-dress-more-colors-9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-blue-600 focus:border-blue-500 block w-full"
            />
          : <></>
        }
      </div>
    </>
  )
}