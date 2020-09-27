import { connect } from "react-redux";
import SideBar from "./SideBar"
import {addPlayer} from "../../data/actions/state"

const mapStateToProps = ({players}) => ({players});


const mapDispatchToProps = (dispatch) =>{
    return{
        addP: () => dispatch(addPlayer()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);