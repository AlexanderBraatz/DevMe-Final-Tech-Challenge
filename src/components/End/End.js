import React from "react";
import Button from '../Button'


const End = ({winner, repeat, restert }) => {

    const handleRepeat = () => repeat();
    const handleReset = () => restert();



    return(
        <>
            <section 
                className="end__container"
                >
                <div 
                    className="end__content"
                    >
                    <div 
                        className="end__heading"
                        >
                        <h1 
                            className="end__heading--content"
                        >Extraterrestrial ...</h1>

                    </div>
                    <p 
                        className="end__text"
                        >{`${winner} has won the Tournament!`}</p>
                    <div 
                        className="end_button--group">
                        <Button
                            name="Repeat"
                            whenClick={ handleRepeat }
                            colour="red" 
                            classNamePassed="end__button"
                        />
                        <Button
                            name="Reset"
                            whenClick={ handleReset }
                            colour="red" 
                            classNamePassed="end__button"
                        />
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default End;