import React from "react";
import PlayerTag from "../PlayerTag"

const SideBar = ({players,addP}) => {

return (
    <div className="sideBar">
        <div className="sideBar__heading"
            >Players</div>
        <div 
            className="sideBar__button"
            onClick={ addP }
            >Add another Player</div>
        { players.map((player,i)=>{
            return(
                <PlayerTag key={ i } player={player}/>

            )
            })
        }

    </div>
    );
}
export default SideBar;
