// serializing the response from backend because 
//  it's more 
export const serializeProduct = (product) => {
  if(product.error){
    return product
  }
  console.log(product)
  const serializedProduct = {
    ...product,
    newPrice: product.new_price,
    oldPrice: product.old_price,
    images: product.image_urls
  }

  delete serializedProduct.new_price
  delete serializedProduct.old_price
  delete serializedProduct.image_urls

  return serializedProduct;
}