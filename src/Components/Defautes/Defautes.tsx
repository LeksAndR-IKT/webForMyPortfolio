import React from 'react';
import s from './Defautes.module.css'

let Defautes:React.FC<any> = () => {
    return(
        <div className={s.osnov}>
            <h1>Инструкция по эксплуатации данного сайта:</h1> <br/>
            Для изменения текста ("Лучшие цитаты & Свои мысли") используйте двойное нажатие мышью по тексту, а после изменения текста - нажмите <b>Enter</b><br/>
            Остальное - интуитивно понятно :)
        </div>
    )
}

export default Defautes;