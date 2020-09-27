import React, { useState } from "react";
import Button from '../Button'
import ColourPicker from '../ColourPicker'

const PlayerTag = ({player, save, remove, eddit}) => {

    // const [collapsed, setCollapsed] = useState(true);
    const [name, setName] = useState("");
    const [colour, setColour] = useState(player.champion ? "#D4AF37" : player.colour);
    const [warning, setWarning] = useState(false);

    // const handleCollapse = () => setCollapsed(!collapsed);
    const handleChangeName = (e) => setName(e.currentTarget.value);
    const handleChoiceComplete  = (choice) => setColour(choice);

    const handleSave  = (e) => {
        if(name.length === 0 || name.length > 10){
            e.preventDefault();
            setWarning(true);
        }else{
            e.preventDefault();
            save(player.id, name, colour);
            setWarning(false);

        }

    }
    const handleDelete  = (e) => {
        e.preventDefault();
        remove(player.id);
    }
    const handleEddit = () => {
        eddit(player.id)
    }

    return (
        <>
        <div 
            // onClick={handleCollapse}
            className="playerTag__heading"
            onClick={ handleEddit }
            >
                <p
                    className="playerTag__heading--content"
                    style={{backgroundColor : player.colour}}
                    >
                        {player.name}
                    </p>
        </div>
        {!player.eddit ? null :
            <div className="playerTag__body">
                <div className="playerTag__body--left">
                    alien
                </div>
                <div className="playerTag__body--right">
                    <form className="playerTag__form">
                        <div className="playerTag__formGroup">
                            <label 
                                className="playerTag__namelable" 
                                htmlFor="name"
                                >NAME :
                            </label>
                            <input
                                className={ `playerTag__nameinput ${warning? "warn": ""}`} 
                                id= "name"
                                name="edit"
                                type="text"
                                placeholder={player.name}

                                onChange={ handleChangeName }
                                value={ name }


                            />
                        </div>
                        <ColourPicker
                            color={ colour }
                            onChoiceComplete={ handleChoiceComplete }
                        />

                        <div className="playerTag__buttons">
                            <Button 
                                name="SAVE"
                                whenClick={ handleSave }
                                colour="green"
                                classNamePassed="playerTag__button--save"
                            />
                            <Button 
                                name="DELETE"
                                whenClick={ handleDelete }
                                colour="red" 
                                classNamePassed="playerTag__button--delete"
                            />
                        </div>

                    </form>
                </div>
            </div>
        }
        </>
    );
}
export default PlayerTag;
