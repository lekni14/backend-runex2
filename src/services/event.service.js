import { API_URL } from '../utils/constants'
import axios from 'axios'
import { alertActions } from '../actions'
import { alertConstants } from '../utils/constants'

export const eventService = {
    addEvent,
    getCategories,
    uploadImage,
    getEvents,
    getEventInfo,
    regEvent,
    sendSlip,
    myEvents,
    checkUserRegisteredEvent,
    updateRegEvent
}

function getEvents() {
    alertActions.error(alertConstants.LOADING)
    return axios({
        method: "GET",
        url: `${API_URL}/event/all`
    }).then(response => {
        alertActions.error(alertConstants.SUCCESS)
        return response
    }).catch(error => {
        alertActions.error(alertConstants.ERROR)
        return { code: error.status, msg: "Can not load event" }
    })
}

function getEventInfo(eventID) {
    return axios({
        method: "GET",
        url: `${API_URL}/event/eventInfo/${eventID}`
    }).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        return {code:302, status: error.status, msg: "Can not load event" }
    })
}

function addEvent (data) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    return axios({
        headers: headers,
        method: "POST",
        url: `${API_URL}/event`,
        data: data
    }).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        return { status: error.status, msg: "Can not add event" }
    })

}

function getCategories () {

    const headers = {
        'Content-Type': 'application/json'
    }

    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/category/all`
    }).then(response => {
        console.log('getCategories res', response)
        return response
    }).catch(error => {
        console.log('getCategories error ', error)
        return { status: error.status, msg: "Can not get categories" }
    })

}

async function uploadImage (data) {
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    const bodyFormData = new FormData()
    bodyFormData.append('upload', data);

    return axios({
        headers: headers,
        method: "POST",
        url: `${API_URL}/uploads`,
        data: bodyFormData
    }).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        return { status: error.status, msg: "Can not upload image" }
    })

}

function regEvent (data) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    return axios({
        headers: headers,
        method: "POST",
        url: `${API_URL}/register/add`,
        data: data
    }).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        return { status: error.status, msg: "Can not add event" }
    })

}

function updateRegEvent (data) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    return axios({
        headers: headers,
        method: "PUT",
        url: `${API_URL}/register/edit/${data.id}`,
        data: data
    }).then(response => {
        return response
    }).catch(error => {
        return { status: error.status, msg: "Can not add event" }
    })

}

function sendSlip (id, data) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    return axios({
        headers: headers,
        method: "POST",
        url: `${API_URL}/register/sendSlip/`+id,
        data: data
    }).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        return { status: error.status, msg: "Can not add event" }
    })

}

function myEvents() {
    alertActions.error(alertConstants.LOADING)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/event/myEvent`
    }).then(response => {
        console.log(response)
        alertActions.error(alertConstants.SUCCESS)
        return response
    }).catch(error => {
        alertActions.error(alertConstants.ERROR)
        return { code: 302, status: error.status, msg: "Can not load event" }
    })
}

function checkUserRegisteredEvent(id) {
    alertActions.error(alertConstants.LOADING)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }

    return axios({
        headers: headers,
        method: "GET",
        url: `${API_URL}/register/checkUserRegisterEvent/${id}`
    }).then(response => {
        console.log(response)
        alertActions.error(alertConstants.SUCCESS)
        return response
    }).catch(error => {
        alertActions.error(alertConstants.ERROR)
        return { code: 302, status: error.status, msg: "Can not load event" }
    })
}