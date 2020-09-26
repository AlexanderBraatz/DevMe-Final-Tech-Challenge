import React from "react";
import PlayerTag from "../PlayerTag"

const SideBar = ({players}) => {

return (
    <div className="sideBar">
        <div className="sideBar__heading"
            >Players</div>
        <div className="sideBar__button"
            >Add another Player</div>
        { players.map((player)=>{
            console.log(player);
            return(
                <PlayerTag player={player}/>

            )
            })
        }

    </div>
    );
}
export default SideBar;
