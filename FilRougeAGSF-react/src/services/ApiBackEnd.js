import ApiConfigUrl from './ApiConfigUrl';
import TokenService from './TokenService';
import Axios from 'axios';

const ApiBackEnd = Axios.create({
    baseURL : ApiConfigUrl.localhost
})

ApiBackEnd.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer ' + TokenService.getToken()
    return req
})

export default ApiBackEnd;