import s from './ContentZapis.module.css'
import { TypeProps } from './ContentZapisContainer.tsx'
import delet from './delet.png'
import React, { useRef, useState } from 'react'


let ContentZapis: React.FC<TypeProps> = (props) => {
    
    let refTextarea = useRef<HTMLTextAreaElement>(null)

    let deleteZapiss = (e: React.MouseEvent<HTMLElement>) => {//Удаление записи ( ContentZapis.jsx )
        e.preventDefault();
        props.deleteZapiss(props.id)
    }
    
    let reverte = (e: React.MouseEvent<HTMLElement>) => { //Открыть поле для редактирования
        e.preventDefault();
        props.reverte(props.id)
    }

    let downEnter = (e: React.KeyboardEvent<HTMLElement>) => {//Закрыть поле для редактирования
        if (e.key === 'Enter') {
            props.refactorText(props.id, newText)
            props.downEnter(props.id)
            setNewText(props.Fore.str[props.id].text)
        }
    }

    const [newText, setNewText] = useState(props.Fore.str[props.id].text)
    
    let refactorText = () => {//Редактирование текста
        if (refTextarea.current){
            setNewText(refTextarea.current.value)
            props.refactorText(props.id, refTextarea.current.value)
        }
    }
    return (

        <div >
            {   !props?.Fore?.str[props?.id]?.result &&
                <div className={s.osnov}>
                    <div className={s.content} onDoubleClick={reverte}>{props.Fore.str[props.id].text}</div><br />
                    <div className={s.logik}><button onClick={deleteZapiss}><img src={delet} alt='' /></button></div>
                </div>
            }
                
            {
                props?.Fore?.str[props?.id]?.result &&
                <div className={s.osnov} >
                    <textarea className={s.inpat} value = {newText}
                        onKeyPress={downEnter} onChange={refactorText} ref={refTextarea}/><br />
                </div>
            }
        </div>

    )
}

export default ContentZapis;