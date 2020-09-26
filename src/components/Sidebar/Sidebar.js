import React from "react";
import PlayerTag from "../PlayerTag"

const SideBar = () => {

return (
    <div className="sideBar">
        <div className="sideBar__heading"
            >Players</div>
        <div className="sideBar__button"
            >Add another Player</div>
        <PlayerTag />
        <PlayerTag />
        <PlayerTag />
        <PlayerTag />
    </div>
    );
}
export default SideBar;
