import React, { useState } from "react";


const PlayerTag = ({edit}) => {

    const [name, setName] = useState("");
    const [colour, setColour] = useState("");
    const [picker, setPicker] = useState(false);

    const handleChangeName = (e) => setName(e.currentTarget.value);
    const handleClickColour = () => setPicker(!picker);


return (
    <>
    <div className="playerTag__heading">
        Mario
    </div>
    { !picker ? null :
        <div className="playerTag__body">
            <form>
            <label 
                className="playerTag__namelable" 
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
            <div 
                className="playerTag__colourlable" 
                htmlFor="colour"
                >Colour:
            </div>
            <div
                className="playerTag__colourinput" 
                style={ {color: colour,  cursor: "pointer"} } 

                onClick={ handleClickColour }
                >

            </div>
            </form>
        </div>
    }
    </>
    );
}
export default PlayerTag;

{/* <form>
<label 
    className="playerTag__body" 
    htmlFor={ name } 
    >{ lable }
</label>
<input
    id={ name }
    name={ name }

    onChange={ handleChange }
    value={ value }

    className="form-control" 
    type={ type }
    />
</form> */}