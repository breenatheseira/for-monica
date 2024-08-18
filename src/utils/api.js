const headers = { 
  'Origin': window.location.origin,
  'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN,
  'Access-Control-Request-Method': 'GET',
  'Content-Type': 'application/json'
}

const config = {
  mode: 'cors',
  headers: headers
}

const paths = {
  wakeServer: process.env.SERVER_ENDPOINT + '/up',
  getOneProduct: (productUrl) => process.env.SCRAPER_URL + '/?url=' + productUrl,
}

const callEndpoint = async (url) => {
  let data;

  try {
    const response = await window.fetch(url, config)
    if(response.ok){
      return await response.json()
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

const api = {
  async getProduct(url){
    return callEndpoint(paths.getOneProduct(url))
  },
  async wakeServer(){
    return callEndpoint(paths.wakeServer)
  }
}

export default api;