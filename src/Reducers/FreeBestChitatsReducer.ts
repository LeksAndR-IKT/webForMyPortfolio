export type InitialStateFree = {
  DataMass: Array<{text: string, id: number, result: boolean}>
}

let firstState = {
  DataMass:
    [
      {
        text: 'Разве можно помочь кому-то другому, если ты не помог себе?',
        id: 0,
        result: false
      },
      {
        text: 'Неудачи в личной или профессиональной жизни — все это уроки личностного роста. Тот, кто правильно усвоит эти уроки, без награды не останется. Не жалей о прошлом. Прошлое — это великий учитель.',
        id: 1,
        result: false
      },
      {
        text: 'Ведь если человек начнет тупеть – это отразится на власти над самим собой, точным пониманием своих обязанностей, способности разобраться в происходящем',
        id: 2,
        result: false
      },
      {
        text: 'Я несчастен потому, что со мной случилось то-то и то-то. Отнюдь нет. Наоборот, я счастлив потому, что, хотя это и случилось со мной, я все же не предаюсь печали, не сломлен настоящим, не трепещу перед грядущим',
        id: 3,
        result: false
      },
      {
        text: 'Ценность каждого человека определяется ценностью предметов его стремлений ',
        id: 4,
        result: false
      },
      {
        text: 'Представь себе, что ты уже умер, что жил только до настоящего момента, и остающееся время жизни как доставшееся тебе сверх ожидания время ',
        id: 5,
        result: false
      },
      {
        text: 'Пусть только разум сам не причиняет себе огорчения',
        id: 6,
        result: false
      },
      {
        text: 'Оставайся постоянно в пределах первых представлений, ничего не примышляя к ним сам от себя, и с тобой ничего не будет ',
        id: 7,
        result: false
      },
      {
        text: 'Заблуждение другого не касается тебя',
        id: 8,
        result: false
      },
    ]
}

const deleteChitat = "deleteChitat"
const addNewChitat = "addNewChitat"
const StateTrueOfChitats = "StateTrueOfChitats"
const StateFalseOfChitats = "StateFalseOfChitats"
const refactorText = "refactorText"

type deleteChitatesType = {
  type: typeof deleteChitat
  id: number
}
export let deleteChitatesactioneCreater = (id: number): deleteChitatesType => { return ({ id, type: deleteChitat }) }//Удаление цитаты ( BestChitats.jsx )
type addChitatType = {
  type: typeof addNewChitat
  text: string
}
export let addChitatActionCreater = (text: string): addChitatType => { return ({ text, type: addNewChitat }) } //добавление новой цитаты ( Free.jsx )
type StateTrueOfChitatsType = {
  type: typeof StateTrueOfChitats
  id: number
}
export let StateTrueOfChitatsActionCreater = (id: number): StateTrueOfChitatsType => { return ({ id, type: StateTrueOfChitats }) }//Открытие поля для редактирования цитаты (BestChitatsContainer.jsx)
type StateFalseOfChitatsType = {
  type: typeof StateFalseOfChitats
  id: number
}
export let StateFalseOfChitatsActionCreater = (id: number): StateFalseOfChitatsType => { return ({ id, type: StateFalseOfChitats }) }//Закрытие поля для редактирования цитаты (BestChitatsContainer.jsx)
type refactorTextType = {
  type: typeof refactorText
  id: number
  text: string
}
export let refactorTextActionCreator = (id: number, text: string): refactorTextType => { return ({ id, text, type: refactorText }) }

export type ActionsTypes = deleteChitatesType | addChitatType | 
StateTrueOfChitatsType | StateFalseOfChitatsType | refactorTextType



const FreeBestChitatsReducer = (state = firstState, action: ActionsTypes): InitialStateFree => {

  switch (action.type) {

    case (addNewChitat)://добавление новой цитаты ( Free.jsx )
      {
        return {
          ...state,
          DataMass: [...state.DataMass, {text: action.text, id: state.DataMass.length, result: false}]
        }
      }
    case (deleteChitat)://Удаление цитаты ( BestChitats.jsx )
      {
        let newDataMass = state.DataMass
        .filter((el) => el.id !== action.id)
        newDataMass.forEach((el, item) => el.id = item)
        return {
          ...state,
          DataMass: [...newDataMass]
        }
      }
    case (StateTrueOfChitats)://Открытие поля для редактирования цитаты (BestChitatsContainer.jsx)
      {
        return {
          ...state,
          DataMass: [...state.DataMass.map((el) => (action.id === el.id)? {...el, result: true}: el)]
        }
      }

    case (StateFalseOfChitats)://Закрытие поля для редактирования цитаты (BestChitatsContainer.jsx)
      {
        return {
          ...state,
          DataMass: [...state.DataMass.map((el) => (action.id === el.id)? {...el, result: false}: el )]
        }
      }

    case (refactorText)://Реадктирование текста (BestChitatsContainer.jsx)
      {
        return {
          ...state,
          DataMass: [...state.DataMass.map((el, item) => {
            return (item !== action.id)? el: {...el, text: action.text}
          })]
        }
      }
    default:
      //alert("error method from dispatch to path 'FreeBestChitatsReducer.js'")
      return state
  }

}
export default FreeBestChitatsReducer;