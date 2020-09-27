import { connect } from "react-redux";
import Match from "./Match"
import {startGame} from "../../data/actions/state"

const mapStateToProps = ({ matches}) => ({matches});


const mapDispatchToProps = (dispatch) =>{
    return{
        start: () => dispatch(startGame()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Match);