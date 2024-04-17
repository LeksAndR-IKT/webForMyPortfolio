import React, {useRef, useState} from 'react';
import s from './Free.module.css'
import BestChitatsContainer from './BestChitats/BestChitatsContainer.tsx';
import { TypeProps } from './FreeContainer.tsx';

let Free: React.FC<TypeProps> = (props) => {
    let refText = useRef<HTMLTextAreaElement>(null)
    const [text, setText] = useState('')

    let Mass = props.Free.DataMass.map((el) => <BestChitatsContainer id={el.id} key={el.id}/>)
    
    let addChitat = (e: React.MouseEvent<HTMLElement>) => {//добавление новой цитаты ( Free.jsx )
        e.preventDefault()
        if (refText.current){
            props.addChitat(text)
            setText('')
        }  
    }

    let updateText = () => {
        if (refText.current){
            setText(refText.current.value)
        }
    }

    return (
        <div className={s.osnov}>
            <div className={s.logik}>
                <textarea ref={refText} value={text} onChange={updateText}/><br/>
                <button   onClick={addChitat}>Добавить цитату</button>
            </div>

            <div className={s.content}>
                {Mass}
            </div>
        </div>
    )
}

export default Free;