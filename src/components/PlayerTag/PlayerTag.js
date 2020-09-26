import React, { useState } from "react";
import Button from '../Button'
import ColourPicker from '../ColourPicker'

const PlayerTag = ({edit}) => {
    
    const [collapsed, setCollapsed] = useState(true);
    const [name, setName] = useState("");
    const [colour, setColour] = useState("#FF0000");

    const handleCollapse = () => setCollapsed(!collapsed);
    const handleChangeName = (e) => setName(e.currentTarget.value);
    const handleChoiceComplete  = (choice) => setColour(choice);

    const handleSave  = (e) => {
        e.preventDefault();
    }
    const handleDelete  = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div 
            onClick={handleCollapse}
            className="playerTag__heading">
            Mario
        </div>
        {collapsed ? null :
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
                                className="playerTag__nameinput" 
                                id= "name"
                                name="edit"
                                type="text"

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
                                name="Save"
                                whenClick={ handleSave }
                                colour="green"
                                classNamePassed="playerTag__button--save"
                            />
                            <Button 
                                name="Delete"
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
