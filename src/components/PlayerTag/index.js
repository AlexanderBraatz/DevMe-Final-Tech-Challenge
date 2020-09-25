import { connect } from "react-redux";
import PlayerTag from "./PlayerTag"
// import {savePlayer,removePlayer} from "../../data/actions/state"

const mapStatetoProps = (props) => (props);

const mapDispatchToProps = (dispatch) =>{
    return{
        // save: (playerInfo) => { dispatch(savePlayer(playerInfo));
        // remove: (playerInfo)=> { dispatch(removePlayer(playerInfo))}
        
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(PlayerTag);