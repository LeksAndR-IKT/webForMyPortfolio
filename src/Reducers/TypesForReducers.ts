import { ThunkAction } from "redux-thunk"

/****************************************************************
*                   TYPING OF USERS SECTION                     *
*****************************************************************/

export type InitialStateUsers = {
    users: Array<any>
    numberPage: number
    usersCountInPage: number
    totalUsersCount:  number
    currentPage:      number 
}

const setUsersToState = "setUsersToState"
const setTotalUsersCount = "setTotalUsersCount"
const switching = "switching"
const getTotalCount = "getTotalCount"

export type getTotalCountType = {
    type: typeof getTotalCount
    countUsers: number
}

export type setUsersACType = {
    type: typeof setUsersToState
    users: Array<any>
}

export type updateCountUsersACType = {
    type: typeof setTotalUsersCount
    totalCount: number
}

export type switchingACType = {
    type: typeof switching
    numberPage: number
}

export type Thunks = ThunkAction<Promise<void>, any, unknown, ActionsTypes>

export type ActionsTypes = switchingACType | updateCountUsersACType | setUsersACType | getTotalCountType



/****************************************************************
*                   TYPING OF BOOKS SECTION                     *
*****************************************************************/

export type InitialStateBook = {
    booksRead: Array<{nameAfter: string, nameBook: string, id: number}>
    recommendedBooks: Array<{nameAfter: string, nameBook: string, id: number}>
}

const DELETE_BOOKS_READ = "DELETE_BOOKS_READ"
const deleteBookRecomend = "deleteBookRecomend"
const SvapRight = "SvapRight"

export type DeleteBookReadACType = {
    type: typeof DELETE_BOOKS_READ
    id: number
}

export type deleteBookRecomen = {
    type: typeof deleteBookRecomend
    id: number
}

export type SvapRightACType = {
    type: typeof SvapRight
    id: number
}

export type ActionsTypesBook = DeleteBookReadACType | deleteBookRecomen | SvapRightACType

/****************************************************************
*                   TYPING OF FORE SECTION                      *
*****************************************************************/

const addOneThought = "addOneThought"
const deleteZapiss = "deleteZapiss"
const reverte = "reverte"
const downEnter = "downEnter"
const refactorText = "refactorText"

export type InitialStateFore = {
    currentText: string
    str: Array<{ text: string, id: number, result: boolean }>
}

export type deleteZapissActionCreatorType = {
    id: number
    type: typeof deleteZapiss
}

export type reverteActionCreatorType = {
    type: typeof reverte
    id: number
}

export type downEnterActionCreatorType = {
    type: typeof downEnter
    id: number
}

export type refactorTextActionCretorType = {
    type: typeof refactorText
    id: number
    text: string
}

export type addOneThoughtActionCreaterType = {
    type: typeof addOneThought
    text: string
}

/****************************************************************
*                   TYPING OF FREE SECTION                      *
*****************************************************************/

const deleteChitat = "deleteChitat"
const addNewChitat = "addNewChitat"
const StateTrueOfChitats = "StateTrueOfChitats"
const StateFalseOfChitats = "StateFalseOfChitats"
const refactorTextFree = "refactorTextFree"

export type InitialStateFree = {
    DataMass: Array<{text: string, id: number, result: boolean}>
}

export type deleteChitatesType = {
    type: typeof deleteChitat
    id: number
}

export type addChitatType = {
    type: typeof addNewChitat
    text: string
}

export type StateTrueOfChitatsType = {
    type: typeof StateTrueOfChitats
    id: number
}

export type StateFalseOfChitatsType = {
    type: typeof StateFalseOfChitats
    id: number
}

export type refactorTextType = {
    type: typeof refactorTextFree
    id: number
    text: string
}

/****************************************************************
*                   TYPING OF NASA SECTION                      *
*****************************************************************/

const pushNewNumberPageOfFoto = "pushNewNumberPageOfFoto"
const getNewPageFoto = "getNewPageFoto"

export type objects = {
    foto: Array<string  | undefined>
    info: {date: Array<string | null>, dop_info: Array<string| null>}
}

export type initialStateNASAType = {
    objects: objects
    countPage: number
    numberPage: number
}

export type getNewPageFotoType = {
    type: typeof getNewPageFoto
    foto: Array<any>
}

export type NewPageType = {
    type: typeof pushNewNumberPageOfFoto
    numberPage: number
}

/****************************************************************
*                  TYPING OF APIwork SECTION                    *
*****************************************************************/

const getIp = "getIp" // Получение ip адреса
const getGeoLoc = "getGeoLoc"//Получение геолокации по ip адресу
const getPriceBTC = "getPriceBTC"

export type InitialStateAPI = {
    users: Array<any>
    ip: null | string
    city: string
    region: string
    result: string
}

export type GetIpACType = {
    type: typeof getIp
    ip: string
}

export type GetGeoLocationACType = {
    type: typeof getGeoLoc
    city: string
    region: string
}

export type getPriceBTCType = {
    type: typeof getPriceBTC
    result:string
}