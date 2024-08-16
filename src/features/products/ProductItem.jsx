import TertiaryButton from '../../components/button/TertiaryButton.jsx';
import Card from '../../components/card/Card.jsx';
import CardBody from '../../components/card/CardBody.jsx';
import CardHeading from '../../components/card/CardHeading.jsx';
import Title from '../../components/card/Title.jsx';
import ClickToCopyText from '../../components/ClickToCopyText.jsx';
import ProductImage from './ProductImage.jsx';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideProduct } from './stores/productSlice.js'
import SecondaryButton from '../../components/button/SecondaryButton.jsx';

const ProductItem = ({product}) => {
  const [showImages, setShowImages] = useState(true)
  const dispatch = useDispatch();

  function onRemoveButtonClick(id){
    dispatch(hideProduct({id, display: false}))
  }

  return (
    <>
      {product.display
        ? <Card>
            <CardHeading>
              <Title text={product.name}/>
              <div>
                <TertiaryButton
                  handleOnClick={() => onRemoveButtonClick(product.id)}
                >
                  Remove
                </TertiaryButton>
              </div>
            </CardHeading>
            <CardBody>
              <div className='flex flex-col border-2 rounded-lg mb-4 border-blue-300 overflow-hidden'>
                <ClickToCopyText 
                  customClass='text-base font-semibold border-blue-300 border-b-2'
                  value={product.link}
                />
                <div className='flex flex-row justify-around'>
                  <ClickToCopyText value={product.name} />
                  <ClickToCopyText value={product.newPrice} customClass='border-x-2 border-blue-300'/>
                  <ClickToCopyText value={product.oldPrice} />
                </div>
              </div>
              <div className='flex justify-end'>
                <SecondaryButton
                  customClass='my-4'
                  handleOnClick={() => setShowImages(!showImages)}
                >
                  {showImages ? 'Collaspe Images' : 'Show Images'}
                </SecondaryButton>
              </div>
              {showImages 
                ? <div className='grid grid-cols-6 sm:grid-cols-4 gap-4 md:grid-cols-6'>
                    {product.images.map( image => {
                      return <ProductImage url={image} key={image} />
                    })}
                  </div>
                : <></>
              }
            </CardBody>
          </Card>
        : <></>
      }
    </>
  )
}

export default ProductItem;