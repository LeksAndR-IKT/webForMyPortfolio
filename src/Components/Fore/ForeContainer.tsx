import { ActionsTypes, InitialStateFore, addOneThoughtActionCreater } from '../../Reducers/ForeMyThroudReducer.ts';
import { connect } from 'react-redux';
import Fore from './Fore.tsx';
import {StoreType} from '../../store.ts'
import { Dispatch } from 'redux';

type MapDispatchToProps = {
    addOneThought: (text: string) => void
}
type MpStateToProps = {
    Fore: InitialStateFore
}
let mapStateToProps = (state: StoreType): MpStateToProps => {
    return {
        Fore: state.Fore
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchToProps => {
    return {
        addOneThought: (text: string) => {
            dispatch(addOneThoughtActionCreater(text))
        }
    }
}
const ForeContainer = connect<MpStateToProps, MapDispatchToProps>(mapStateToProps, mapDispatchToProps)(Fore)
export default ForeContainer;