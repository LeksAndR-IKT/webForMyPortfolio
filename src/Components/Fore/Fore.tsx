import s from './Fore.module.css'
import React, { useRef, useState } from 'react';
import ContentZapisContainer from './ContentZapis/ContentZapisContainer.tsx';

let Fore: React.FC <any> = (props) => {
   
    let refForNewZapis = useRef<HTMLTextAreaElement>(null)
    const [value, setValue] = useState('')
    let addOneThought = (e: React.MouseEvent<HTMLElement>) => {//добавление новой цитаты ( Fore.jsx )
        e.preventDefault()
        props.addOneThought(value)
        setValue('')
    }
    let printText = () => {
        if (refForNewZapis.current){
        setValue(refForNewZapis.current.value)
        }
        
    }
    debugger
    let ContentZapisMassData = props.Fore.str.map(el => <ContentZapisContainer id={el.id} key= {el.id}/> )
    
    return (
        <div className={s.osnov}>
            <div className={s.func}>
                <textarea ref={refForNewZapis} value = {value} onChange={printText}/><br />
                <button className={s.buttons} onClick={addOneThought}>Добавить запись</button>
            </div>

            <div className={s.fraz}>
                {ContentZapisMassData}
            </div>

        </div>
    )
}

export default Fore;