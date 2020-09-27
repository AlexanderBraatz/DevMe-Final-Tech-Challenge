import { connect } from "react-redux";
import PlayerTag from "./PlayerTag"
import {savePlayer, removePlayer} from "../../data/actions/state"

const mapStatetoProps = (state,{player}) => ({player});

const mapDispatchToProps = (dispatch) =>{
    return{
        save: (id, name, colour) => { 
            dispatch(savePlayer(id, name, colour));
        },
        remove: (id)=> { dispatch(removePlayer(id))}
    }
        
}

export default connect(mapStatetoProps,mapDispatchToProps)(PlayerTag);