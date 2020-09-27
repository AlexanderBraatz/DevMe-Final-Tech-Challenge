import React from "react";
import PlayerTag from "../PlayerTag"

const SideBar = ({players, sideBarView, addP}) => {

return (
    <div 
        className={`sideBar ${sideBarView ? "showSidebar": ""}`}
        >
        <div className="sideBar__heading">
            <h2
                className="sideBar__heading--cotent"
            >Players . . . </h2>
        </div>
        <div 
            className="sideBar__addPLbutton"
            onClick={ addP }
            >Add another Player</div>
        { players.map((player,i)=>{
            return(
                <PlayerTag key={ i } player={player}/>

            )
            })
        }
        <div 
            className="sideBar__fotter"
            >ALEXANDER BRAATZ - <a 
                href="https://github.com/AlexanderBraatz/DevMe-Final-Tech-Challenge" 
                target="_blank" 
                rel="noopener noreferrer">Github.com</a></div>

    </div>
    );
}
export default SideBar;
