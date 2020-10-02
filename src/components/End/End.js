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
                    <Button className="end__button"
                        name="repeat"
                        whenClick={ handleRepeat }
                        colour="red" 
                        classNamePassed="end__button"
                    />
                    <Button className="end__button"
                        name="reset"
                        whenClick={ handleReset }
                        colour="red" 
                        classNamePassed="end__button"
                    />
                </div>
            </section>
            
        </>
    )
}

export default End;