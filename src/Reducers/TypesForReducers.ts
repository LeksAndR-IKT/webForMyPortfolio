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