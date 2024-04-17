import React from 'react'
import s from './recommendedBooks.module.css'
import { BookRecomendType } from '../Books'

let RecommendedBooks: React.FC<BookRecomendType> = (props) => {
    let deleteBookRecomend = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.deleteBookRecomend(props.id)
    }
    return (
        <div className={s.osnov}>
            <div className={s.nameBook}>
                    {props.recommendedBooks[props?.id]?.nameBook}
            </div>
            <div className={s.nameAfter}>
                
                {props.recommendedBooks[props?.id]?.nameAfter}
                <button className={s.delete} onClick={deleteBookRecomend}></button>
            </div>
            
        </div>
    )
}

export default RecommendedBooks