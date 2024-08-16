import copyToClipboard from '../../utils/copyToClipboard.js';

export default ProductImage = ({url}) => {

  function copyUrl(){
    copyToClipboard(url);
    console.log('copied: ', url)
  }

  return (
    <div className='flex'>
      <img 
        className='basis-1/4 hover:basis-full rounded'
        src={url}
        onClick={() => copyUrl()}  
      />
    </div>
  )
}