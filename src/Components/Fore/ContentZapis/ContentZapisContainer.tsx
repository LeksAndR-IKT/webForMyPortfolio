import ContentZapis from './ContentZapis.tsx'
import { deleteZapissActionCreator, reverteActionCreator,
     downEnterActionCreator, refactorTextActionCretor, 
     ActionsTypes,
     InitialStateFore} from '../../../Reducers/ForeMyThroudReducer.ts'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {StoreType} from '../../../store.ts'

let mapStateToProps = (state: StoreType): MSTP => {
    return {
        Fore: state.Fore
    }
}
type MSTP = {
Fore: InitialStateFore
}
type OwnProps = {
    id: number
}
type MDTP = {
    downEnter: (id:number) => void
    refactorText: (id:number, text:string) => void
    reverte: (id:number) => void
    deleteZapiss: (id:number) => void
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MDTP => {
    return {
        downEnter: (id) => {
            dispatch(downEnterActionCreator(id))
        },
        refactorText: (id, text) => {
            dispatch(refactorTextActionCretor(id, text))
        },
        reverte: (id) => {
            dispatch(reverteActionCreator(id))
        },
        deleteZapiss: (id) => {
            dispatch(deleteZapissActionCreator(id))
        }
    }
}
export type TypeProps = MSTP & MDTP & OwnProps

let ContentZapisContainer = connect(mapStateToProps, mapDispatchToProps)(ContentZapis)

export default ContentZapisContainer;