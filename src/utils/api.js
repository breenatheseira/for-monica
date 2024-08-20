const paths = {
  wakeServer: `${process.env.SERVER_ENDPOINT}/up`,
  getOneProduct: (productUrl) => `${process.env.SERVER_ENDPOINT}/?url=${productUrl}`,
  login: `${process.env.SERVER_ENDPOINT}/login`,
}

const callEndpoint = async (url, { body, customConfig } = {}) => {

  let config = {
    mode: 'cors',
    credentials: 'include',
    ...customConfig,
    headers: {
      'Origin': window.location.origin,
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': customConfig.method,
      ...customConfig.headers
    }
  }

  let data
  if(body){
    config.body = JSON.stringify(body)
  }

  const token = getSessionToken();

  if(token){
    config.headers['Authorization'] = 'Bearer ' + token
  }

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
    const customConfig = { method: 'GET' }
    return callEndpoint(paths.getOneProduct(url), { customConfig })
  },
  async wakeServer(){
    const customConfig = { method: 'GET' }
    return callEndpoint(paths.wakeServer, { customConfig })
  },
  async login(body){
    const customConfig = { method: 'POST' }
    return callEndpoint(paths.login, { body, customConfig })
  }
}

export default api;

function getSessionToken(){
  const session = sessionStorage.getItem('session')

  if(session)
    return JSON.parse(session)?.token 

  return undefined
}