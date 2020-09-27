import React from "react";
import PlayerTag from "../PlayerTag"

const SideBar = ({players}) => {

return (
    <div className="sideBar">
        <div className="sideBar__heading"
            >Players</div>
        <div className="sideBar__button"
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
