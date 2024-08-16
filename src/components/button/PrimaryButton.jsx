export default function PrimaryButton({ handleOnHover, handleOnClick, disabled, customClass, children }){
  return (
    <button 
      className={`py-1 px-4 rounded-md 
        ${disabled ? 'cursor-not-allowed disabled:opacity-55' : 'cursor-pointer'} 
        border border-green-600 bg-green-600 text-white
        enabled:active:bg-green-500
        enabled:hover:bg-green-700 enabled:hover:bg-green-700
        ${customClass}`}
      disabled={disabled}
      onMouseEnter={handleOnHover}
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}