export type InitialStateFore = {
  currentText: string
  str: Array<{text: string, id: number, result: boolean}>
}
class onePost {
  text: string
  id: number
  result: boolean
  constructor(text: string, id: number, result: boolean){
    this.text = text
    this.id = id
    this.result = result
  }
}
let firstState: InitialStateFore = {
  currentText: '',
  str: [
    {
      text: 'Отличное настроение – это только твой выбор. Плохое настроение – это только твой выбор. Грусть – это только твой выбор. Все зависит только от тебя самого. Расстался с девушкой? Проиграл деньги? Потерял мотивацию? Так кто тебе виноват? – Только ты сам! Ты сделал неправильный выбор девушки или неправильно поступил с ней, ты решил положиться на удачу и проиграл, ты не заряжаешь себя мотивацией каждый день и не напоминаешь себе самому каждый день ради чего ты начинал.',
      id: 0,
      result: false
    },
    {
      text: 'Достижение великой цели – это очень длинный и тернистый путь, который смогут пройти только те, кто прикладывает постоянные усилия для этого. Не страшно, если вы в очередной раз сбились с пути, это значит, что вы нашли еще один неправильный путь.',
      id: 1,
      result: false
    },
    { 
      text: 'Прежде чем рассуждать о чем-то, убедись, что поставил правильные вопросы и получил удовлетворительный ответ. Изменяя всего лишь одно слово в вопросе, можно найти совершенно другой ответ или другую мысль.',
      id: 2,
      result: false
    },
    {
      text: 'Мне необходимо больше работать над задуманным, слишком мало времени осталось, уже прожито 22 года, а целей не так уж и много достигнуто',
      id: 3,
      result: false
    },
    {
      text: 'Думал будет немного проще перейти в другое направление разработки, но я уже очень близок к этому',
      id: 4,
      result: false
    },
    {
      text: 'Разработка ПО на чистом Си дала хороший опыт в плане взаимодействия с командой и поиска максимально эффективного и оптимизированного решения проблемы',
      id: 5,
      result: false
    },
    {
      text: 'Осталось сделать несколько шагов: 0) Привести в порядок этот мини-проект, созданный для знакомства и тренировки с определенными технологиями, 1) Сдать экзамен, 2) Написать мотивационное письмо, 3) Пройти стажировку. А дальше останется только повышать свою значимость и свои хард-скилы',
      id: 6,
      result: false
    }
  ]
}

const addOneThought = "addOneThought"
const deleteZapiss = "deleteZapiss"
const reverte = "reverte"
const downEnter = "downEnter"
const refactorText = "refactorText"


const ForeMyThroudReducer = (state = firstState, action: ActionsTypes): InitialStateFore => {
  //debugger
  switch (action.type) {

    case addOneThought://добавление новой цитаты ( Fore.jsx )
      return {
        ...state,
        str: [...state.str, new onePost(action.text, state.str.length, false)]
      }
    case (deleteZapiss)://Удаление записи ( ContentZapis.jsx )
      {
        return {
          ...state,
          str: [...state.str.filter((el) => el.id !== action.id).map((el, item) => ({...el, id: item}))]
        }
      }
    case (reverte)://Открыть поле для редактирования
      {
        return {
          ...state,
          str: [...state.str.map((el) => (action.id === el.id)? {...el, result: true}: el)]
        }
      }

    case (downEnter)://Закрыть поле для редактирования
      {
        return {
          ...state,
          str: [...state.str.map((el) => (action.id === el.id)? {...el, result: false}: el)]
        }
      }

    case (refactorText): //Редактирование текста
      {
        return {
          ...state,
          str: [...state.str.map((el) => (action.id === el.id)? {...el, text: action.text}:el)]
        }
      }

    default:
      return state
  }

}
export type ActionsTypes = deleteZapissActionCreatorType | reverteActionCreatorType | downEnterActionCreatorType | 
refactorTextActionCretorType | addOneThoughtActionCreaterType

type deleteZapissActionCreatorType = {
  id: number
  type: typeof deleteZapiss
}
export let deleteZapissActionCreator = (id: number): deleteZapissActionCreatorType => { return ({ id, type: deleteZapiss }) }//Удаление записи ( ContentZapis.jsx )
type reverteActionCreatorType = {
  type: typeof reverte
  id: number
}
export let reverteActionCreator = (id: number): reverteActionCreatorType => { return ({ id, type: reverte }) }//Открыть поле для редактирования
type downEnterActionCreatorType = {
  type: typeof downEnter
  id: number
}
export let downEnterActionCreator = (id: number): downEnterActionCreatorType => { return ({ id, type: downEnter }) }//Закрыть поле для редактирования
type refactorTextActionCretorType = {
  type: typeof refactorText
  id: number
  text: string
}
export let refactorTextActionCretor = (id: number, text: string): refactorTextActionCretorType => { return ({ id, text, type: refactorText }) }//Редактирование текста
type addOneThoughtActionCreaterType = {
  type: typeof addOneThought
  text: string
}
export let addOneThoughtActionCreater = (text: string): addOneThoughtActionCreaterType => { return ({ text, type: addOneThought }) } //добавление новой цитаты ( Fore.jsx )


export default ForeMyThroudReducer;