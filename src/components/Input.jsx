const Input = ({ linkText, onTextChange, placeholder, autoFocus }) => {

  function handleOnChange(e){
    onTextChange(e.target.value.trim())
  }

  return (
    <input
      autoFocus={autoFocus}
      type="text"
      placeholder={placeholder}
      value={linkText}
      onChange={handleOnChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-blue-600 focus:border-blue-500 block w-full"
    />
  )
}

export default Input