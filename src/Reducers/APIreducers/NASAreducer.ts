export type initialStateNASAType = {
foto: Array<any>
}
let initialStateNASA: initialStateNASAType = {
    foto: []
}

const NASAreducer = (state: initialStateNASAType = initialStateNASA, action: any) => {
    switch(action.type){
        default:
        {
            return state
        }
    }
}

export default NASAreducer;