import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'

// 创建axios实例


const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    baseURL: 'http://yytv.jycais.cn',
    timeout: 15000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {

    // config.headers['X-Guzzu-Access-Token'] = '5757gh76'
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {

        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default service