import React from 'react'
import s from './booksRead.module.css'
import { BookReadingType } from '../Books'

let BooksRead: React.FC<BookReadingType> = (props) => {
    debugger
    let deleteBookRead = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.deleteBookRead(props.id)
    }
    let SvapRight = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.SvapRight(props.id)
    }
    return (
        <div className={s.osnov}>
            <div className={s.nameBook}>
                    {props.booksRead[props?.id]?.nameBook}
            </div>
            <div className={s.nameAfter}>
                
                {props.booksRead[props?.id]?.nameAfter}
                <button className={s.delete} onClick={deleteBookRead}></button>
                <button className={s.svapRight} onClick={SvapRight}></button>
            </div>
            
        </div>
    )
}

export default BooksRead