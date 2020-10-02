import { connect } from "react-redux";
import End from "./End"
import {repeatTournamentwithChampion, reset } from "../../data/actions/state"

const mapStateToProps = ({ participants, players }) => {
    let newWinner = players.find((player)=> player.id === participants[0]).name;
    return({
            winner : newWinner,
        })
};



const mapDispatchToProps = (dispatch) =>{
    return{
        repeat: () => dispatch(repeatTournamentwithChampion()),
        restert: () => dispatch(reset()),
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(End);