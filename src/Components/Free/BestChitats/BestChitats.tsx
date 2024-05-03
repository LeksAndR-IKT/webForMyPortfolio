// @ts-ignore
import s from './BestChitats.module.css'
import { TypeProps } from './BestChitatsContainer'
// @ts-ignore
import delet from './delet.png'
import React, { useRef } from 'react'

let BestChitats: React.FC<TypeProps> = (props) => {
    debugger
    let refOfTextarea = useRef<HTMLTemplateElement>(null)

    let deleteChitates = (e: React.MouseEvent<HTMLElement>) => {//Удаление цитаты 
        e.preventDefault();
        props.CloseFildForChitats(props.id)
        props.deleteChitates(props.id)
    }

    let OpenFildForChitats = () => {//Открытие поля для редактирования цитаты
        props.OpenFildForChitats(props.id)
    }

    let CloseFildForChitats = (e: React.MouseEvent<HTMLElement>) => {//Закрытие поля для редактирования цитаты
        if (e.key === 'Enter') {
            props.CloseFildForChitats(props.id)
        }
    }

    let refactorText = () => {//Редактирование текста цитаты
        if (refOfTextarea.current){
            props.refactorText(props.id, refOfTextarea.current.value)
        }
    }

    return (
        <div className={s.osnov}>
            {!props?.Free?.DataMass[props?.id]?.result &&
                <div onDoubleClick={OpenFildForChitats}>
                
                <div className={s.content}>{props.Free.DataMass[props.id].text}</div><br />
                <div className={s.logik}>
                    <button onClick={deleteChitates}><img src={delet} alt='' /></button>
                </div>
            </div>
            }
            {props?.Free?.DataMass[props?.id]?.result &&
            
                <div className={s.sdf}>
                    <textarea className={s.inpat} type="text" value={props.Free.DataMass[props.id].text}
                        onKeyPress={CloseFildForChitats}   onChange={refactorText} ref={refOfTextarea}/><br />
                </div>
            }
        </div>
    )
}

export default BestChitats;