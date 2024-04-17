import { connect } from "react-redux"
import Profile from "./Profile.tsx"
import { StoreType } from "../../store"
import { Dispatch } from "redux"
import { ActionsTypes } from "../../Reducers/UsersReducer"

type MSTP = {
    users: any
}
type MDTP = {

}

let mapStateToProps = (state: StoreType): MSTP => {
    return {
        users: state.Users.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MDTP => {
    return {
        setUsers: () => {
            
        }
    }
}
let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer