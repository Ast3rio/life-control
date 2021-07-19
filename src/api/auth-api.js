import axios from "axios";
import {URL} from './api';

export const registartionApi = (email, password, success, setError, dispatch) => {
    axios.post(`${URL}/auth/registration`, {
        email,
        password
    }).then(res =>
        dispatch(success(res.data))
    ).catch(err =>
        dispatch(setError(err))
    )
}
