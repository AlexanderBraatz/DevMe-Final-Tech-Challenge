import { connect } from "react-redux";
import Start from "./Start"
import {startGame} from "../../data/actions/state"

const mapStateToProps = ({ startView}) => ({startView});


const mapDispatchToProps = (dispatch) =>{
    return{
        start: () => dispatch(startGame()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Start);