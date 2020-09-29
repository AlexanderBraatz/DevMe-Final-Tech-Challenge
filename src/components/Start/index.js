import { connect } from "react-redux";
import Start from "./Start"
import {startGame} from "../../data/actions/state"




const mapDispatchToProps = (dispatch) =>{
    return{
        start: () => dispatch(startGame()),
    }
        
}

export default connect(null,mapDispatchToProps)(Start);