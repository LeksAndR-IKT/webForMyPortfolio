import { InitialStateFree, addChitatActionCreater } from '../../Reducers/FreeBestChitatsReducer.ts';
import { connect } from 'react-redux';
import Free from './Free.tsx';
import {StoreType} from '../../store.ts'
type MSTP = {
    Free: InitialStateFree
}
type MDTP = {
    addChitat: (text: string) => void
}

let mapStateToProps = (state: StoreType): MSTP => {
    return {
        Free: state.Free
    }
}
let mapDispatchToProps = (dispatch: any): MDTP => {
    return {
        addChitat: (text: string) => {
            dispatch(addChitatActionCreater(text))
        }
    }
}
export type TypeProps = MSTP & MDTP
const FreeContainer = connect(mapStateToProps, mapDispatchToProps)(Free)

export default FreeContainer;