import React, {useState} from "react";
import Button from '../Button'


const Match = ({matches, matchPointer,players, roundCounter, endMatch}) => {

    const [warning, setWarning]= useState(false);
    const [loser, setLoser]= useState(0);
    
    const handleSelection2 = () => setLoser(player2.id);
    const handleSelection1 = () => setLoser(player1.id);
    const findPlayerfromID = ( id ) => players.find((player)=> player.id === id);
    const handleConfirmation = () => { if(loser !== 0) {
            endMatch(loser);
            setLoser(0);
            setWarning(false);
        } else {
            setWarning(true);
        }
    };
    
    let player1ID = matches[matchPointer][0];
    let player2ID = matches[matchPointer][1];
    let player1 = findPlayerfromID(player1ID);
    let player2 = findPlayerfromID(player2ID);



    return(
        <>
        <section 
            className="match__container">
            <div
                className="match__content">
                <div>
                    <div
                        className="match__player_name"
                        onClick={ handleSelection2 }>
                        <p
                            className="match__player_name--content"
                            >{player1.name}</p>
                    </div>
                    <div 
                        className="match__vs">
                        <p
                            className="match__vs--content"
                            >V.S.</p>
                    </div>
                    <div
                        className="match__player_name"
                        onClick={ handleSelection1 }>
                        <p
                            className="match__player_name--content"
                            >{player2.name}</p>
                    </div>
                </div>
                <div 
                    className="match__match_and_round">
                    <p 
                        className="match__match_and_round--content"
                        >Match : {matchPointer + 1}
                    </p>
                    <p 
                        className="match__match_and_round--content"
                        >Round : {roundCounter}
                    </p>
                </div>
                <div>
                    <Button 
                        classNamePassed="match__confirm_button"
                        name="Confirm + Next Match"
                        whenClick={ handleConfirmation }
                        colour= "red"
                    />
                    {!warning ? null :
                        <div>
                            <p>Please chose a winner first!</p>
                        </div>
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default Match;