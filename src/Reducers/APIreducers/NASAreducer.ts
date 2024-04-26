import axios from "axios"

export type initialStateNASAType = {
objects: any
numberPage: number
}
let initialStateNASA: initialStateNASAType = {
    objects: {
        foto: [],
        info: {

        }
    },
    numberPage: 0
}

const NASAreducer = (state: initialStateNASAType = initialStateNASA, action: ActionsTypes): initialStateNASAType => {
    switch(action.type){
        case(pushNewNumberPageOfFoto): //Переход по страничкам
        {
            return {
                ...state,
                numberPage: action.numberPage
            }
        }
        case(getNewPageFoto): 
        {
            //let newFoto = action.fotos
            return {
                ...state,
                objects: {...state.objects}
            }
        }
        
        default:
        {
            return state
        }
    }
}
type ActionsTypes = NewPageType | getNewPageFotoType

const pushNewNumberPageOfFoto = "pushNewNumberPageOfFoto"
const getNewPageFoto = "getNewPageFoto"

type getNewPageFotoType = {
    type: typeof getNewPageFoto
    foto: Array<any>
}
export const getNewPageFotoTypeAC = (foto: Array<any>):getNewPageFotoType => {//получение новой пачки фото
    return ({type: getNewPageFoto, foto})
}

type NewPageType = {
    type: typeof pushNewNumberPageOfFoto
    numberPage: number
}
export const setNumberPageAC = (numberPage: number):NewPageType => {//переключение страничек
    return ({type: pushNewNumberPageOfFoto, numberPage})
}
export const getPhotoSpaceTC = () => {//запрос
    return async (dispatch) => {
        let fot = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000")

        console.log(fot.data.photos[0].img_src)
    }
}

export default NASAreducer;