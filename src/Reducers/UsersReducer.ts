import axios from "axios"
import {InitialStateUsers, getTotalCountType, setUsersACType, updateCountUsersACType,
    switchingACType, ActionsTypes, Thunks
} from "./TypesForReducers"

let localState = {
    users: [],//пользователи
    numberPage:1000,//номер страницы пользователей
    usersCountInPage:5,//количество пользователей из одного запроса
    totalUsersCount:0, // все пользователи
    currentPage: 1,
}

const setUsersToState = "setUsersToState"
const setTotalUsersCount = "setTotalUsersCount"
const switching = "switching"
const getTotalCount = "getTotalCount"

const UsersReducer = (state = localState, action: ActionsTypes): InitialStateUsers => {
    switch(action.type){
        case(setUsersToState): 
        {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case(setTotalUsersCount):
        {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case(switching): 
        {
            return {
                ...state,
                currentPage: action.numberPage
            }
        }
        case(getTotalCount): 
        {
            return {
                ...state,
                totalUsersCount: Math.ceil(action.countUsers/5)
            }
        }
        default:
            {
                return state
            }
    }
}

export let getTotalCountAC = (countUsers: number): getTotalCountType => ({type: getTotalCount, countUsers})

export let setUsersAC = (users: Array<any>): setUsersACType => {return ({type: setUsersToState, users})}

export let updateCountUsersAC = (totalCount: number): updateCountUsersACType => {return ({type:setTotalUsersCount , totalCount})}

export let switchingAC = (numberPage: number):switchingACType => {return ({numberPage, type: switching})}

export const setUsersTC = (page: number, count: number): Thunks => {
    return async function (dispatch) {
        let res = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
        dispatch(setUsersAC(res.data.items))
        dispatch(updateCountUsersAC(res.data.totalCount))
        dispatch(getTotalCountAC(res.data.totalCount))
    }
}


export default UsersReducer