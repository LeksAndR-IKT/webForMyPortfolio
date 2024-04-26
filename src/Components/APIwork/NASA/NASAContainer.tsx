import { connect } from "react-redux"
import NASA from "./NASA"


type MSTP = {}
type MDTP = {}
let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

let NASAContainer = connect(mapStateToProps, mapDispatchToProps)(NASA)
export default NASAContainer