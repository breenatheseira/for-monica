// serializing the response from backend because 
//  it's more 
export const serializeProduct = (product) => {
  if(product.error){
    return product
  }
  console.log(product)
  const serializedProduct = {
    ...product,
    newPrice: product.new_price + ' ' + product.currency,
    oldPrice: product.old_price + ' ' + product.currency,
    images: product.image_urls,
    display: true
  }

  delete serializedProduct.currency
  delete serializedProduct.new_price
  delete serializedProduct.old_price
  delete serializedProduct.image_urls

  return serializedProduct;
}