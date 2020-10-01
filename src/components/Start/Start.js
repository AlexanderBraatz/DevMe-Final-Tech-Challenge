import React from "react";
import Button from '../Button'


const Start = ({start}) => {

    const handleStart = () => start();



    return(
        <>
            <section 
                className="start__container"
                >
                <div 
                    className="start__content"
                    >
                    <div 
                        className="start__heading"
                        >
                        <h1 
                            className="start__heading--content"
                        >Extraterrestrial ...</h1>

                    </div>
                    <p 
                        className="start__text"
                        >Hello, young earthling! In this Game You and your friends are Aliens that have had to make an emergency landing on an alien planet, the Ship`s Life support will only allow one of you to return to your home world safely. You have decided to select the survivor by way of a Knockout Tournament in the most intergalactic sport you know. PING PONG!</p>
                    <Button className="start__button"
                        name="START"
                        whenClick={ handleStart }
                        colour="red" 
                        classNamePassed="start__button"
                    />
                </div>
            </section>
            
        </>
    )
}

export default Start;