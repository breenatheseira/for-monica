import React from 'react'

export default function Input ({ 
    linkText, 
    onTextChange, 
    placeholder, 
    autoFocus, 
    customClass, 
    type = 'text' 
  }){

  function handleOnChange(e){
    onTextChange(e.target.value.trim())
  }

  return (
    <input
      autoFocus={autoFocus}
      type={type}
      placeholder={placeholder}
      value={linkText}
      onChange={handleOnChange}
      className={`border border-gray-300 text-gray-900 
        text-sm bg-gray-50 rounded-lg p-2.5 block w-full
        focus:outline-blue-600 focus:border-blue-500 ${customClass}`}
    />
  )
}