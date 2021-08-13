import axios from "axios";

export const baseURL = 'http://localhost:4000/api';
export const convertApi = 'https://api.fastforex.io/';
export const convertApiKey = 'c3bc1cadee-1ad458dd4a-qxsjrq';

export const combineURLs = (baseURL, url) => {
    return url ?
        baseURL.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '')
        : baseURL
}


export const postRequest = ({url, obj, success, setError, headers = {}}) => {
    axios.post(`${combineURLs(baseURL, url)}`, obj, {
        headers
    })
        .then(res => success(res.data))
        .catch(error => setError(error))
}

export const getRequest = ({url, success, setError}) => {
    axios.get(`${combineURLs(baseURL, url)}`)
        .then(res => success(res.data))
        .catch(error => setError(error))
}

export const convertCurrency = (fromCurrency, toCurrency, success, setError) => {
    axios.get(`${convertApi}fetch-one?from=${fromCurrency}&to=${toCurrency}&api_key=${convertApiKey}`)
        .then(res => success(res))
        .catch(err => console.log(err))
}
