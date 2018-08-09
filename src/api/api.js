import request from './request'
// import axios from 'axios'

export function doPost(url, params) {
    return request({
        url: url,
        method: 'post',
        data: params,
    })
}