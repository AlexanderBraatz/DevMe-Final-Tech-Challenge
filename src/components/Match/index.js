import { connect } from "react-redux";
import Match from "./Match"
import {nextMatch} from "../../data/actions/state"

const mapStateToProps = ({ matches, matchView, matchPointer, players, roundCounter}) => (
    {
        matches,
        matchView, 
        matchPointer,
        players,
        roundCounter,
    }
);


const mapDispatchToProps = (dispatch) =>{
    return{
        endMatch: (id) => dispatch(nextMatch(id)),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Match);