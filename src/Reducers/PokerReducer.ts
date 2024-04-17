/**********************************************************************
*       Описание: Заготовка для локального покера против компа        *
*                                                                     *
*                                                                     *
*                                                                     *
*                                                                     *
*                                                                     *
*                                                                     *
*                                                                     *
*                                                                     *
**********************************************************************/

class SolutionFromKomp {
    name: string
    id: number
    countManyForTyrnir: number
    countMany: number
    kards: Array<number>
    statet: null | boolean
    constructor(i: number) {
      this.name = `Артемка ${i}`
      this.id = i
      this.countManyForTyrnir = 1000
      this.countMany = 10000
      this.kards = []
      this.statet = null
    }
  }
export type firstStateType = {
    Karts: any
    Users:Array<any>
    Bank: Array<number>
    getNumber: any
    localstatet: null | boolean 
    unicKart:Array<number>
}
let firstState: firstStateType = {
    Karts: {},
    Users:[],//НАЧАЛЬНЫЙ МАССИВ УЧАСТНИКОВ
    Bank: [],
    getNumber: null,
    localstatet: null, // отслеживание действий игрока
    unicKart: []
}

let getRandom = () => {//ФУНКЦИЯ РАНДОМА
    let max = 52
    return Math.floor(Math.random() * max)
}

const getKartForPlayers = "getKartForPlayers"
const createNewPlayers = "createNewPlayers"



const PokerReducer = (state=firstState, action: any): firstStateType => {

    switch (action.type) {

        case (getKartForPlayers)://ПОЛУЧЕНИЕ КАРТ УЧАСТНИКАМИ
            {
                for (let i = 0; i < 2; i++) {
                    for (let k = 0; k < action.mass.length; k++) //выдача поочередно каждому игроку по первой карте
                    {
                        let result = 0
                        action.mass[k].kards[i] = getRandom()
                        while (result === 0) //проверка на уникальность выданной карты
                        {
                            let count = 0
                            for (let j = 0; j < state.unicKart.length; j++) {
                                if (action.mass[k].kards[i] === state.unicKart[j]) 
                                {
                                    action.mass[k].kards[i] = getRandom()
                                }
                                else {
                                    count++
                                }
                            }
                            result = (count === state.unicKart.length) ? 1 : 0
                        }
                        state.unicKart.push(action.mass[k].kards[i])//добавление карты в массив уникальных карт(разданных)
                    }
                }
                return state
            }
        case (createNewPlayers)://СОЗДАНИЕ ОПРЕДЕЛЕННОГО КОЛИЧЕСТВА УЧАСТНИКОВ
            {
                for (let i = 0; i < action.count; i++) {
                    let PlayerComp = new SolutionFromKomp(i)
                    state.Users.push(PlayerComp)
                }
                return state
            }
        default:
            return state
    }
}

export default PokerReducer;