import { connect } from "react-redux";
import MenueOpener from "./MenueOpener"
import {swichMenue} from "../../data/actions/state"

const mapStateToProps = ({ sideBarView}) => ({sideBarView});


const mapDispatchToProps = (dispatch) =>{
    return{
        swichM: () => dispatch(swichMenue()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(MenueOpener);