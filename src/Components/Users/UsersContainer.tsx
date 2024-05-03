import { ConnectedProps, connect } from "react-redux"
import Users from "./UsersClasses.jsx"
import { switchingAC, setUsersTC, ActionsTypes} from '../../Reducers/UsersReducer.ts'
import { StoreType } from "../../store.ts"
import { ThunkDispatch } from "redux-thunk"

interface MSTP {
    Users: Array<any>
    numberPage: number
    usersCountInPage: number
    totalUsersCount:  number
    currentPage:      number 
}

interface MDTP {
    setUsers: (page: number, count: number) => void
    switching: (numberPage: number) => void
}

let mapStateToProps = (state:StoreType): MSTP => {
    return {
        Users: state.Users.users,
        numberPage: state.Users.numberPage,
        usersCountInPage: state.Users.usersCountInPage,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<StoreType, {}, ActionsTypes>): MDTP => {
    return {
        setUsers: (page: number, count: number) => {
            dispatch(setUsersTC(page, count))
        },
        switching: (numberPage:number) => {
            dispatch(switchingAC(numberPage))
        },
    }
}

let firstCallConnect = connect(mapStateToProps, mapDispatchToProps)
export type UsersPropsType = ConnectedProps<typeof firstCallConnect>
let UsersContainer = firstCallConnect(Users as any)

export default UsersContainer