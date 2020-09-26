import React, { useState } from "react";
import { HuePicker  } from 'react-color'; //http://casesandberg.github.io/react-color/
import Button from '../Button'
import ColourPicker from '../ColourPicker'

const PlayerTag = ({edit}) => {

    const [name, setName] = useState("");
    const [colour, setColour] = useState("#FF0000");
    const [picker, setPicker] = useState(false);

    const handleChangeName = (e) => setName(e.currentTarget.value);
    const handleClickColour = () => setPicker(!picker);
    const handleChangeComplete  = (color) => setColour(color.hex);

    const handleSave  = (e) => {
        e.preventDefault();
    }
    const handleDelete  = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div className="playerTag__heading">
            Mario
        </div>
    
            <div className="playerTag__body">
                <div className="playerTag__body--left">
                    alien
                </div>
                <div className="playerTag__body--right">
                    <form className="playerTag__form">
                        <div className="playerTag__formGroup">
                            <label 
                                className="playerTag__lable" 
                                htmlFor="name"
                                >Name:
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
                        <div className="playerTag__formGroup">
                            <div 
                                className="playerTag__lable" 
                                htmlFor="colour"
                                >Colour:
                            </div>
                            {/* <div
                                className="playerTag__colourinput" 
                                style={ { backgroundColor : colour }} 

                                onClick={ handleClickColour }
                                >

                            </div> */}
                            <ColourPicker
                                color={ colour }
                                onChangeComplete={ handleChangeComplete }
                            />
                            { !picker ? null :
                                <HuePicker
                                    className="playerTag__colourPicker"
                                    color={ colour }
                                    onChangeComplete={ handleChangeComplete }
                                /> 
                            }
                        </div>
                        <div className="playerTag__buttons">
                            <Button 
                                name="Save"
                                whenClick={ handleSave }
                                colour="green"
                                classNamePassed="playerTag__button"
                            />
                            <Button 
                                name="Delete"
                                whenClick={ handleDelete }
                                colour="red" 
                                classNamePassed="playerTag__button"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default PlayerTag;
