import React from 'react';

export default function SecondaryButton({ handleOnHover, handleOnClick, disabled, customClass, children }){
  return (
    <button 
      className={`py-1 px-4 rounded-md 
        ${disabled ? 'cursor-not-allowed disabled:opacity-55' : 'cursor-pointer'} 
        border border-blue-300 
        enabled:hover:bg-blue-600 enabled:hover:text-white enabled:hover:border-blue-600
        ${customClass}`}
      disabled={disabled}
      onMouseEnter={handleOnHover}
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}