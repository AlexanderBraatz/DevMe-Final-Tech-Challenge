import React from "react";
// import React, {useState} from "react";
// import Button from '../Button'


const Match = ({matches, matchView, matchPointer,players}) => {

    // const [winners, setWinners] = useState([])
    // const handleStart = () => start();
    // const handleSelect = (n) => setSelected(n);

    let player1ID = matches[matchPointer][0];
    let player2ID = matches[matchPointer][1];

    const findPlayerfromID = (  id ) =>{
        console.log(players);
       return(
            id === 0 ? {
                id :0, 
                name : "No Player",
                colour : "#a6a6a6", 
                champion : false,
                eddit : false,
            } :
            players.find((player)=> player.id === id)
        )   
    };
    let player1 = findPlayerfromID(player1ID);
    let player2 = findPlayerfromID(player2ID);




    console.log(matchPointer, player2ID, player2)
    return(
        <>
        <p
            // onClick={ handleSelection(1)}
        >{player1.name}</p>
        <p
            // onClick={ handleSelection(2)}
        >{player2.name}</p>
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