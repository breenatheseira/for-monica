import copyToClipboard from "../utils/copyToClipboard"

export default ClickToCopyText = ({value, customClass}) => {
  function copyText(){
    copyToClipboard(value);
    console.log('copied: ', value);
  }

  return (
    <div 
      onClick={() => copyText()}
      className={`p-3 grow text-center cursor-pointer
        hover:bg-blue-600 hover:text-white hover:border-blue-600
        ${customClass}`}
    >
        {value}
    </div>
  )
}