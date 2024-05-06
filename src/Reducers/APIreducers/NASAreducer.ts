import { ThunkAction } from 'redux-thunk';
import axios from "axios"
import { StoreType } from '../../store';
export type objects = {
    foto: Array<string  | undefined>
    info: {date: Array<string | null>, dop_info: Array<string| null>}
}
export type initialStateNASAType = {
objects: objects
countPage: number
numberPage: number
}
let initialStateNASA: initialStateNASAType = {
    objects: {
        foto: [],
        info: {
            date: [],
            dop_info: []
        }
    },
    countPage: 1,//количество фотографий
    numberPage: 0//текущая страничка
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
        case(getNewPageFoto): //получение фотографий с марсоходов
        {
            const fotos = action.foto.map((el) => el.img_src)//фотографии
            const info_date = action.foto.map((el) => el.earth_date)//дата фотографий
            const info_dop = action.foto.map((el) => el.camera.full_name)//инфа о фотографиях
            return {
                ...state,
                objects: {
                    foto: [...fotos],
                    info: {
                        date: [...info_date],
                        dop_info: [...info_dop]
                    }
                },
                countPage: action.foto.length //количество фотографий
            }
        }
        
        default:
        {
            return state
        }
    }
}
export type ActionsTypes = NewPageType | getNewPageFotoType

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
export const getPhotoSpaceTC = (numberPage: number): ThunkAction<Promise<void>, StoreType, unknown, ActionsTypes> => {//запрос
    return async (dispatch) => {
        let fot = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=${numberPage}`)
        dispatch(getNewPageFotoTypeAC(fot.data.photos))
        console.log(fot.data.photos.length)//338
        
    }
}

export default NASAreducer;