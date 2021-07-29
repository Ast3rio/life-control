import axios from "axios";

export const baseURL = 'http://localhost:4000/api';
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
        .catch(error => setError())
}
