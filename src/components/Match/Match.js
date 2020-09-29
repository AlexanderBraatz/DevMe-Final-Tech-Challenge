
import React, {useState} from "react";
// import Button from '../Button'


const Match = ({matches, matchPointer,players, roundCounter, endMatch}) => {

    const [loser, setLoser]= useState(0);
    
    const handleSelection2 = () => setLoser(player2.id);
    const handleSelection1 = () => setLoser(player1.id);
    const findPlayerfromID = ( id ) => players.find((player)=> player.id === id);
    const handleConfirmation = () => { if(loser !== 0) {endMatch(loser)}};
    
    let player1ID = matches[matchPointer][0];
    let player2ID = matches[matchPointer][1];
    let player1 = findPlayerfromID(player1ID);
    let player2 = findPlayerfromID(player2ID);

    






    return(
        <>
        <button
            onClick={ handleSelection2 }
        >{player1.name}</button>
        <button
            onClick={ handleSelection1 }
        >{player2.name}</button>
        <p>Match: {matchPointer + 1}</p>
        <p>Round: {roundCounter}</p>
        <button
                    onClick={ handleConfirmation }
                     >confirm Selection</button>
        {/* <section 
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
        </section> */}
        </>
    )
}

export default Match;