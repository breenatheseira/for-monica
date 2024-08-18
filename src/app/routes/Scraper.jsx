import Input from '../../components/Input.jsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProduct, selectProductsTotal } from '../../features/products/stores/productSlice.js';
import ProductsList from '../../features/products/ProductsList.jsx';
import Card from '../../components/card/Card.jsx';
import CardHeading from '../../components/card/CardHeading.jsx';
import Title from '../../components/card/Title.jsx';
import CardBody from '../../components/card/CardBody.jsx';
import SecondaryButton from '../../components/button/SecondaryButton.jsx';
import CopyProductLinksButton from '../../features/products/CopyProductLinksButton.jsx';
import DeleteProductsButton from '../../features/products/DeleteProductsButton.jsx';

export default Scraper = () => {
  const [showInput, setShowInput] = useState(true);
  const [linkText, setLinkText] = useState('');
  const totalProducts = useSelector(selectProductsTotal);  

  const dispatch = useDispatch();
  function handleTextChange(value){
    // send a dispatch
    setLinkText(value)
    dispatch(fetchProduct(value))
      .then(() => {
        setLinkText('')
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <>
      <Card>
        <CardHeading>
          <Title text="EDM Scraper" />
          <div>
            <CopyProductLinksButton total={totalProducts} />
            <SecondaryButton
              customClass='ml-3'
              handleOnClick={() => { setShowInput(!showInput) }}
              disabled={totalProducts === 0}
            >
              { showInput ? 'Collapse' : 'Show' }
            </SecondaryButton>
            <DeleteProductsButton total={totalProducts} />
          </div>
        </CardHeading>
        <CardBody>
          { showInput 
            ? <Input 
                autoFocus={true}
                linkText={linkText}
                onTextChange={handleTextChange}
                placeholder='https://www.shopjoyeus.com/collections/dresses/products/brianna-dress-more-colors-9'
              />
            : <></>
          }
        </CardBody>
      </Card>

      <ProductsList/>
    </>
  )
}