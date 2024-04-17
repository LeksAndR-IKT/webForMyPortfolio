import { connect } from 'react-redux'
import { deleteChitatesactioneCreater, StateFalseOfChitatsActionCreater, StateTrueOfChitatsActionCreater, 
    refactorTextActionCreator, ActionsTypes,
    InitialStateFree} from '../../../Reducers/FreeBestChitatsReducer.ts'
import BestChitats from './BestChitats.tsx'
import { Dispatch } from 'redux'
import { StoreType } from '../../../store.ts'

type MSTP = {
Free: InitialStateFree
}

type MDTP = {
    deleteChitates: (id:number) => void
    OpenFildForChitats: (id:number) => void
    CloseFildForChitats: (id:number) => void
    refactorText: (id:number, text : string) => void
}
type OwnProps = {
    id:number
}

let mapStateToProps = (state: StoreType): MSTP => {
    return {
        Free: state.Free
    }
}

let mapDispathToProps = (dispatch: Dispatch<ActionsTypes>): MDTP => {
    return {
        deleteChitates: (id: number) => {//Удаление цитаты 
            dispatch(deleteChitatesactioneCreater(id))
        },
        OpenFildForChitats: (id:number) => {//Открытие поля для редактирования цитаты
            dispatch(StateTrueOfChitatsActionCreater(id))
        },
        CloseFildForChitats: (id:number) => {//Закрытие поля для редактирования цитаты
            dispatch(StateFalseOfChitatsActionCreater(id))
        },
        refactorText: (id:number,text:string) => {//Редактирование текста цитаты
            dispatch(refactorTextActionCreator(id, text))
        }
    }
}
export type TypeProps = MSTP & MDTP &OwnProps
let BestChitatsContainer = connect(mapStateToProps, mapDispathToProps)(BestChitats)


export default BestChitatsContainer;