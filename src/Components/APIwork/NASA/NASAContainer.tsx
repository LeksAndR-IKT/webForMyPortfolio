import { connect } from "react-redux"
import NASA from "./NASA.tsx"
import { ActionsTypes, getPhotoSpaceTC, objects } from "../../../Reducers/APIreducers/NASAreducer.ts"
import { StoreType } from "../../../store"
import { ThunkDispatch } from "redux-thunk"


type MSTP = {
    numberPage: number
    DATA: objects
    countPage: number
}
type MDTP = {
    switchingFotos: (numberPage: number) => void
}
type OwnProps = { /**/ }
export type PropsToNasa = OwnProps & MSTP & MDTP

let mapStateToProps = (state: StoreType): MSTP => {
    return {
        numberPage: state.NASA.numberPage,
        DATA: state.NASA.objects,
        countPage: state.NASA.countPage
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<StoreType, {}, ActionsTypes>):MDTP => {
    return {
        switchingFotos: (numberPage: number) => {
            dispatch(getPhotoSpaceTC(numberPage))
        },
    }
}

let NASAContainer = connect(mapStateToProps, mapDispatchToProps)(NASA)
export default NASAContainer