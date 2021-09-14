import axios from "axios";

export const baseURL = 'http://localhost:4000/api';
export const convertApi = 'https://free.currconv.com';
export const convertApiKey = '24902e6882bd4fdf7f4b';

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
    axios.get(`${convertApi}/api/v7/convert?q=${fromCurrency}_${toCurrency},${toCurrency}_${fromCurrency}&compact=ultra&callback=sampleCallback&apiKey=${convertApiKey}`)
        .then(res => success(res))
        .catch(err => console.log(err))
}
