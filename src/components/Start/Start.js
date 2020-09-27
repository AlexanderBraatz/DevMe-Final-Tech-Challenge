import React from "react";
import Button from '../Button'


const Start = ({startView, start}) => {

    const handleStart = () => start();



    return(
        <>
        {!startView ? null :
            <section>
                <div>
                    <h1>Extraterrorestrial...  

                    </h1>
                    <p>Hello young earthling! In this Game You and your friends are Aliens that have had to make an emergancy landing on a alien planet, the Ship`s Life support will only allow One of you to return to your home world safley. You have decided to select the survivor by way of a Knockout Tournament in the most intergalactic sport you know. PING PONG!</p>
                    <Button 
                        name="START"
                        whenClick={ handleStart }
                        colour="red" 
                        classNamePassed="playerTag__button--delete"
                    />
                </div>
            </section>
        }
            
        </>
    )
}

export default Start;