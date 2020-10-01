import { connect } from "react-redux";
import End from "./End"
import {repeatTournamentwithChampion, reset } from "../../data/actions/state"

const mapStateToProps = ({ participants }) => (
    {
        winner : participants[0],
    }
);


const mapDispatchToProps = (dispatch) =>{
    return{
        repeat: () => dispatch(repeatTournamentwithChampion()),
        restert: () => dispatch(reset()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(End);