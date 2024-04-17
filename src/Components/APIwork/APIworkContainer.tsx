import { connect } from "react-redux"
import APIwork from "./APIwork.tsx"
import {getIpTC, getGeoLocation, ActionsTypes, InitialStateAPI, getPriceBTC_TC } from '../../Reducers/APIworkReducer.ts'
import {StoreType} from '../../store.ts'
import { ThunkDispatch } from "redux-thunk"

let mapStateToProps = (state:StoreType): MSTP => {
    return {
        APIwork: state.APIwork
    }
}
type MSTP = {
APIwork: InitialStateAPI
}
type MDTP = {
    getIp: () => void
    getGeoLocation: () => void
    getPriceBTC: () => void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<StoreType, {}, ActionsTypes>): MDTP => {
    return {
        getIp: () => { //получение ip адреса
            dispatch(getIpTC())
        },
        getGeoLocation: () => {//получение местоположения по ip адресу
            dispatch(getGeoLocation())
        },
        getPriceBTC: () => {
            dispatch(getPriceBTC_TC()) //получение цены биткоина
        }
    }
}
export type TypeProps = MSTP & MDTP 
let APIworkContiner = connect(mapStateToProps, mapDispatchToProps)(APIwork)


export default APIworkContiner