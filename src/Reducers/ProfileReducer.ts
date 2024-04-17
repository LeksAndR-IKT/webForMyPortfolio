export type InitialStateProfile = {
    Users: Array<number>
}
let stateLocation: InitialStateProfile = {
    Users: []
}

const ProfileReducer = (state = stateLocation, action: any): InitialStateProfile => {
    switch(action.type){
        default:
            {
                return state
            }
    }
}

export default ProfileReducer