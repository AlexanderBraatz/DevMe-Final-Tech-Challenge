import { connect } from "react-redux";
import SideBar from "./SideBar"
import {addPlayer} from "../../data/actions/state"

const mapStateToProps = ({players, sideBarView}) => ({players, sideBarView});


const mapDispatchToProps = (dispatch) =>{
    return{
        addP: () => dispatch(addPlayer()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);