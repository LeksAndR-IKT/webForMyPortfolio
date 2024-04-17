import React from 'react'
import s from './Books.module.css'
import BooksRead from './booksRead/booksRead.tsx'
import RecommendedBooks from './recommendedBooks/recommendedBooks.tsx'
import { TypeProps } from './BooksContainer'

export type BookReadingType = {
    deleteBookRead: (id:number) => void
    id: number
    booksRead: Array<{nameAfter: string, nameBook: string, id: number}>
    SvapRight: (id: number) => void
}

export type BookRecomendType = {
    id: number
    recommendedBooks: Array<{nameAfter: string, nameBook: string, id: number}>
    deleteBookRecomend: (id: number) => void
}

let Books: React.FC<TypeProps> = (props) => {



    let booksReadData = props.booksRead.map((el) => <BooksRead booksRead={props.booksRead} key={el.id} id={el.id} deleteBookRead={props.deleteBookRead} SvapRight={props.SvapRight}/>)
    let booksRecomendData = props.recommendedBooks.map((el) => <RecommendedBooks recommendedBooks={props.recommendedBooks} key={el.id} id={el.id} deleteBookRecomend={props.deleteBookRecomend}/>)

    return (
        <div className={s.osnov}>
            <div className={s.oneContainer}>
                {booksReadData}
            </div>

            <div className={s.twoContainer}>
                {booksRecomendData}
            </div>

        </div>
    )
}

export default Books