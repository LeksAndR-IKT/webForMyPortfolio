import { StoreType } from './../store';
import axios from "axios"
import { ThunkAction } from "redux-thunk"

export type InitialStateAPI = {
    users: Array<any>
    ip: null | string
    city: string
    region: string
    result: string
}
let localState: InitialStateAPI = {
    users: [],
    ip: null,
    city: "",
    region: "",
    result: ""
}

const getIp = "getIp" // Получение ip адреса
const getGeoLoc = "getGeoLoc"//Получение геолокации по ip адресу
const getPriceBTC = "getPriceBTC"

const APIworkReducer = (state = localState, action: ActionsTypes): InitialStateAPI => {
    switch (action.type) {
        case (getIp):// Получение ip адреса
            {
                return {
                    ...state,
                    ip: action.ip
                }
            }
        case (getGeoLoc): //Получение геолокации по ip адресу
            {
                return {
                    ...state,
                    city: action.city,
                    region: action.region
                }
            }
        case (getPriceBTC): 
        {
            return {
                ...state,
                result: action.result
            }
        }
        default:
            {
                return state
            }
    }
}
export type ActionsTypes = GetIpACType | GetGeoLocationACType | getPriceBTCType


type GetIpACType = {
    type: typeof getIp
    ip: string
}
export let getIpAC = (ip: string): GetIpACType => ({ type: getIp, ip }) // Получение ip адреса
type GetGeoLocationACType = {
    type: typeof getGeoLoc
    city: string
    region: string
}
export let getGeoLocationAC = (city: string, region: string): GetGeoLocationACType => ({ type: getGeoLoc, city, region })//Получение геолокации по ip адресу
export type getPriceBTCType = {
    type: typeof getPriceBTC
    result:string
}
export let getPriceBTC_AC = (result: string): getPriceBTCType => ({type: getPriceBTC, result})

export const getPriceBTC_TC = (): ThunkAction<Promise<void>, StoreType, unknown, ActionsTypes> => {
    return async function(dispatch) {
        try{
            let result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            dispatch(getPriceBTC_AC(result.data.bpi.USD.rate))
            alert((result.data.bpi.USD.rate) + ' $')
        }
        catch(e){
            console.error(e)
            alert(e)
        }
    }
}

export const getIpTC = (): ThunkAction<Promise<void>, StoreType, unknown, ActionsTypes> => {//получение ip адреса (TC = Thunc Creator)
    return async function(dispatch) {
            try {
                let res = await axios.get("https://api.ipify.org?format=json")
                dispatch(getIpAC(res.data.ip))
                alert(res.data.ip)
            }
            catch (e) {
                console.error(e)
                alert(e)
            }
    }
}

export const getGeoLocation = (): ThunkAction<Promise<void>, StoreType, unknown, ActionsTypes> => {//получение местоположения по ip адресу
    return async (dispatch) => {
        try {
            let res = await axios.get("https://api.ipify.org?format=json")
            let location = await axios.get(`https://ipinfo.io/${res.data.ip}/geo`)
            dispatch(getGeoLocationAC( location.data.city, location.data.region))
            alert(location.data.city + '   ' + location.data.region + ' oblast')
        }
        catch (e) {
            console.error(e)
            alert(e)
        }

    }
} 

export default APIworkReducer