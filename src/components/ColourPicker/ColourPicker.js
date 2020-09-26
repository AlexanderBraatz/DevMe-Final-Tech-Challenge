
import React, { useState } from "react";


const ColourPicker = ({colours,color,onChoiceComplete}) => {

    const [choosing,setChoosing] = useState(false);
    const [picked,setPicked] = useState(color);

    const handleOpen = () => {console.log(choosing); setChoosing(!choosing);}
    const handleChoice = (colour) => {

        setChoosing(!choosing);
        setPicked(colour);
        onChoiceComplete(colour);
    }


    return(
        <>

            <div className="picker__container">
                <div 
                    className="picker__lable" 

                >
                    <p>COLOUR :</p>
                </div>
                <div 
                    className="square picker__display"
                    onClick={ handleOpen }
                    style={{backgroundColor:picked,}}
                ></div>
                { !choosing ? null :
                    colours.map((colour,i)=>(
                        <div 
                            className="square picker__choice"
                            style={{backgroundColor:colour,}}
                            onClick={ () => handleChoice(colour) }
                            id={i}
                        ></div>
                    ))
                }
            </div>
        </>
    )
}

export default ColourPicker;