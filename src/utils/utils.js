import moment from "moment";
import { IMAGE_URL } from "./constants";

export class utils {
    static getStatusKey(status){
        if(status === "Publish"){
            return "5d453e2a1e79ab8688d1bd1b";
        }else if(status === "Unpublish"){
            return "5d453e2f1e79ab8688d1bd1c";
        }else if(status === "Hidden"){
            return "5d453e351e79ab8688d1bd1d";
        }else{
            return "";
        }
    }

    static dateNow(){
        return moment().toISOString(true)
    }

    static convertDateToApi(dated){
        console.log(moment(dated).toISOString(true))
        // console.log(moment(dated).format('YYYY-MM-DD hh:mm:sss'))
        return moment(dated).toISOString(true)
        //"2019-09-17T14:05:29.526Z"
    }

    static convertDateApiToMMMM_DD_YYYY(dated){
        if (dated === '') {
            return ''
        }
        return moment(dated).format('MMMM DD, YYYY')
        //"2019-09-17T14:05:29.526Z"
    }

    static convertDateApiToString(dated){
        console.log(dated)
        if (dated === '' || dated === '0001-01-01T00:00:00Z') {
            return ''
        }
        return moment(dated).format('YYYY-MM-DD')
        //"2019-09-17T14:05:29.526Z"
    }

    static convertDateTimeToDay(dated){
        if (dated === '') {
            return ''
        }
        return moment(dated).format('DD')
        //"2019-09-17T14:05:29.526Z"
    }

    static convertDateTimeToMonth(dated){
        if (dated === '') {
            return ''
        }
        return moment(dated).format('MMM')
        //"2019-09-17T14:05:29.526Z"
    }

    static convertDateTimeToDate(dated){
        console.log(dated)
        if (dated === '') {
            return ''
        }
        return moment(dated).format('DD MMM (hh:mm)')
        //"2019-09-17T14:05:29.526Z"
    }

    static getImageProfile(path){
        if (path.includes('http')){
            return path
        }
        return IMAGE_URL+path
    }

    static combineDateTimeUpload(date, time) {
        if ((date === '') || (time === '')) {
            return ''
        }

        const dateFormat = moment(date).utc('Asia/Bangkok').format('YYYY-MM-DD')
        const timeFormat = moment(time).utc('Asia/Bangkok').format('HH:mm:ss')

        return moment(`${dateFormat} ${timeFormat}`).utc().format('YYYY-MM-DDTHH:mm:ss\\Z')
    }
}