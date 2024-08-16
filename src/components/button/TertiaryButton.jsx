export default function TertiaryButton({ handleOnHover, handleOnClick, disabled, customClass, children }){
  return (
    <button
      className={`py-1 px-4 rounded-md 
        ${disabled ? 'cursor-not-allowed disabled:opacity-55' : 'cursor-pointer'} 
        text-blue-600 border border-white
        hover:bg-rose-600 hover:text-white hover:border-rose-600
        ${customClass}`}
      disabled={disabled}
      onMouseEnter={handleOnHover}
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}