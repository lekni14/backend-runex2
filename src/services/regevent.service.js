import { API_URL } from '../utils/constants'
import axios from 'axios'
import { alertActions } from '../actions'
import { alertConstants } from '../utils/constants'

export const regEventService = {
    myRegEvents,
    getRegEventDetail,
    getPromoCodeInfo
}

function myRegEvents() {
    alertActions.error(alertConstants.LOADING)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/register/myRegEvent`
    }).then(response => {
        alertActions.error(alertConstants.SUCCESS)
        return response
    }).catch(error => {
        alertActions.error(alertConstants.ERROR)
        return { code: 302, status: error.status, msg: "Can not load event" }
    })
}

function getRegEventDetail(regEventID) {
    alertActions.error(alertConstants.LOADING)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/register/getRegEvent/${regEventID}`
    }).then(response => {
        alertActions.error(alertConstants.SUCCESS)
        return response
    }).catch(error => {
        alertActions.error(alertConstants.ERROR)
        return { code: 302, status: error.status, msg: "Can not load event" }
    })
}

function getPromoCodeInfo(code) {
    alertActions.error(alertConstants.LOADING)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/coupon/couponInfo/${code}`
    }).then(response => {
        return response
    }).catch(error => {
        return { code: 302, status: error.status, msg: "code not found" }
    })
}