import { connect } from "react-redux";
import Match from "./Match"
import {startGame} from "../../data/actions/state"

const mapStateToProps = ({ matches, matchView, matchPointer, players}) => (
    {
        matches,
        matchView, 
        matchPointer,
        players,
    }
);


const mapDispatchToProps = (dispatch) =>{
    return{
        start: () => dispatch(startGame()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Match);