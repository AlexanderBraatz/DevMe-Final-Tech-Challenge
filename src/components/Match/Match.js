import React, {useState} from "react";
import Button from '../Button'


const Match = ({matches, matchView}) => {

    const [winners, setWinners] = useState([])
    const handleStart = () => start();
    const handleSelect = (n) => setSelected(n);




    return(
        <>
        <section 
            className="start_container"
            >
            <div 
                className="start__content"
                >
                <div 
                    className="start__heading"
                    >
                    <h1 
                        className="start__heading--content"
                    >Matches ...</h1>

                </div>
                {!matchView ? null :
                    matches.map(({playing, winner})=>
                        <>
                            <div>
                                <Button className="start__button"
                                    name={playing[0]}
                                    whenClick={ handleSelect(1) }
                                    colour={ selected===1||winner===playing[0] ?
                                        `red` : `green`} 
                                    classNamePassed="start__button"
                                />
                                <Button className="start__button"
                                    name={playing[1]}
                                    whenClick={ handleSelect(2) }
                                    colour={ selected===2||winner===playing[1] ?
                                        `red` : `green`} 
                                    classNamePassed="start__button"
                                />
                            </div>
                            <Button className="start__button"
                                name="CONFIRM and NEXT MATCH"
                                whenClick={ handleConfirm }
                                colour="red" 
                                classNamePassed="start__button"
                            />
                        </>
                    )

                }
                    

            </div>
        </section>
        </>
    )
}

export default Match;