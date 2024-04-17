import { connect } from "react-redux"
import Books from "./Books.tsx"
import {ActionsTypes, deleteBookReadAC, deleteBookRecomendAC, SvapRightAC} from '../../Reducers/BooksReducer.ts'
import {StoreType} from '../../store.ts'
import { Dispatch } from "redux"

type MSTP = {
    booksRead: Array<{nameAfter: string, nameBook: string, id: number}>
    recommendedBooks: Array<{nameAfter: string, nameBook: string, id: number}>
}
type MDTP = {
    deleteBookRead: (id: number) => void
    deleteBookRecomend: (id: number) => void
    SvapRight: (id: number) => void
}


let mapStateToProps = (state: StoreType): MSTP => {
    return {
        booksRead: state.Books.booksRead,
        recommendedBooks: state.Books.recommendedBooks,
    }
}

let mapDispatchToProps = (dispatch : Dispatch<ActionsTypes>): MDTP => {
    return {
        deleteBookRead: (id) => {
            dispatch(deleteBookReadAC(id))
        },
        deleteBookRecomend: (id) => {
            dispatch(deleteBookRecomendAC(id))
        },
        SvapRight: (id) => {
            dispatch(SvapRightAC(id))
        }
    }
}
export type TypeProps = MSTP & MDTP
let BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books)

export default BooksContainer
