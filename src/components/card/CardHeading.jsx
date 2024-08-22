import React from 'react';

export default function CardHeading({ children }){
  return (
    <div className="flex justify-between">
      {children}
    </div>
  )
}