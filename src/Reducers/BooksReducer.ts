import {InitialStateBook, DeleteBookReadACType, deleteBookRecomen, SvapRightACType, ActionsTypesBook} from './TypesForReducers'

let locationState: InitialStateBook = {
    booksRead: [
        {
            nameAfter: "Тони Роббинс",
            nameBook: "Разбуди в себе Исполина",
            id: 0
        },
        {
            nameAfter: "Виктор Пелевин",
            nameBook: "Непобедимое солнце",
            id: 1
        },
        {
            nameAfter: "Марк Аврелий",
            nameBook: "Наедине с собой",
            id: 2
        },
        {
            nameAfter: "Брайан Трейси",
            nameBook: "Достижение максимума",
            id: 3
        },
    ],
    recommendedBooks: [
        {
            nameAfter: "Робин Шарма",
            nameBook: "Монах, который продал свой феррари",
            id: 0
        },
        {
            nameAfter: "Тони Робинсон",
            nameBook: "Разбуди в себе Исполина",
            id: 1
        },
        {
            nameAfter: "Наполеон Хилл",
            nameBook: "Думай и богатей",
            id: 2
        },
    ]
}

const DELETE_BOOKS_READ = "DELETE_BOOKS_READ"
const deleteBookRecomend = "deleteBookRecomend"
const SvapRight = "SvapRight"

const BooksReducer = (state = locationState, action: ActionsTypesBook): InitialStateBook => {
    switch(action.type){
        case(DELETE_BOOKS_READ):
        {
            let newBookRead = state.booksRead.filter((el) => el.id !== action.id)
            newBookRead.forEach((el,item) => el.id = item)
            return {
                ...state,
                booksRead: [...newBookRead]
            }
        }
        case(deleteBookRecomend):
        {
            let NewrecommendedBooks = state.recommendedBooks.filter((el) => el.id !== action.id)
            NewrecommendedBooks.forEach((el,item) => el.id = item)
            return {
                ...state,
                recommendedBooks: [...NewrecommendedBooks]
            }
        }
        case (SvapRight): 
        {
            return {
                ...state,
                recommendedBooks: [...state.recommendedBooks, {...state.booksRead[action.id], id: state.recommendedBooks.length}]
            }
        }
        default: 
        {
            return state
        }
    }
}

export const deleteBookReadAC = (id: number): DeleteBookReadACType => {return ({type:DELETE_BOOKS_READ, id})}

export const deleteBookRecomendAC = (id: number): deleteBookRecomen => ({type: deleteBookRecomend, id})

export const SvapRightAC = (id: number): SvapRightACType => ({type: SvapRight, id})

export default BooksReducer