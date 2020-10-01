import React from "react";
import Button from '../Button'


const End = ({winner, repeat, restert }) => {

    const handleRepeat = () => repeat();
    const handleReset = () => restert();



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
                        >otto was here!</p>
                    <Button className="start__button"
                        name="repeat"
                        whenClick={ handleRepeat }
                        colour="red" 
                        classNamePassed="start__button"
                    />
                    <Button className="start__button"
                        name="reset"
                        whenClick={ handleReset }
                        colour="red" 
                        classNamePassed="start__button"
                    />
                </div>
            </section>
            
        </>
    )
}

export default End;