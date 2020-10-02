import { connect } from "react-redux";
import PlayerTag from "./PlayerTag"
import {savePlayer, removePlayer, switchEddit} from "../../data/actions/state"

const mapStatetoProps = ({allowPlayerDeletion},{player}) => ({
    allowPlayerDeletion,
    player,
});

const mapDispatchToProps = (dispatch) =>{
    return{
        save: (id, name, colour) => { 
            dispatch(savePlayer(id, name, colour));
        },
        remove: (id)=> { dispatch(removePlayer(id))},
        eddit: (id) => {dispatch(switchEddit(id))},
    }
        
}

export default connect(mapStatetoProps,mapDispatchToProps)(PlayerTag);