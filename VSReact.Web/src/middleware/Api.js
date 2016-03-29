import 'whatwg-fetch'

export const Api = {
  get: (endpoint, params) => {
    return fetch(endpoint)
    .then((res) => {
      return res.json().then(json => ({ json, res }));  
    })
  }
}