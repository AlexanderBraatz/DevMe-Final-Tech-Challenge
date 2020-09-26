import { connect } from "react-redux";
import PlayerTag from "./PlayerTag"
import {savePlayer} from "../../data/actions/state"

const mapStatetoProps = (state,{player}) => ({player});

const mapDispatchToProps = (dispatch) =>{
    return{
        save: (id, name, colour) => { 
            dispatch(savePlayer(id, name, colour));
        }
        // remove: (playerInfo)=> { dispatch(removePlayer(playerInfo))}
    }
        
}

export default connect(mapStatetoProps,mapDispatchToProps)(PlayerTag);