import React from 'react';

export default function Card({ children }){
  return (
    <div className="m-8 py-5 px-8 bg-white rounded-lg flex flex-col shadow-lg transition ease-in-out duration-300">
      {children}
    </div>
  )
}