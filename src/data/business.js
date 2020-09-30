export const setUpMatches = (state) => {
    const { participants} = state;

    
    const newMatches = makeAllMatchUps(participants);
    
    return({
        
        ...state,
        matches :newMatches,
        
    });
}
// export const setUpMatches = (state) => {
//     const {roundCounter,participants} = state;
    
//     const newMatches = makeAllMatchUps(pickRoundParticipants(makeIdArrayFromPlayers(getPlayers(state))));


//    return({
//        ...state,
//        matches :newMatches

//    })
// }



const getPlayers = (state) => (state.players); 



const makeIdArrayFromPlayers = (players) => {

    const playerIds = players.map( (player)=> player.id );

    return(playerIds);
}



const makeAllMatchUps = (participantsIds) =>{

    let matchups=[];

    for (let i=0; i+1<= participantsIds.length; i+=2) {
        matchups.push(participantsIds.slice(i,i+2));
    }

    return(matchups);
}


export const pickParticipantsAndWaiting = (state) =>{


    let playerIds = makeIdArrayFromPlayers(getPlayers(state));
    let newParticipants =  pickRoundParticipants(playerIds);

    let newWaiting =  playerIds.reduce(
        (acc,ID)=> newParticipants.includes(ID)
            ? acc 
            :[...acc, ID]
        ,[]
    );
    console.log(playerIds, newParticipants, newWaiting);
    return({
        ...state,
        participants : newParticipants,
        waiting : newWaiting,
    })
}
export const includeWaitingPlayers = (state) =>{

    const {participants, waiting} = state;

    return({
        ...state,
        participants: [...waiting, ...participants ],
        waiting : [],
    })
}

// pickRoundParticipants is done to reduce the number of players to a power of 2 after the first round, to avoid later rounds with an uneven  number of players and there for a number of players that cant be paird up nicely into matches.

const pickRoundParticipants = (playerIds) =>{
    
    const NumberOfPlayers = playerIds.length;
    const power = findClosestPowerOfTwo(NumberOfPlayers)

    let last = power === NumberOfPlayers ? NumberOfPlayers : (NumberOfPlayers - power)*2 ;

    let participantsIds = playerIds.slice(0,last)
    
    return(participantsIds)
}



const findClosestPowerOfTwo =(n) =>{
    let power = 2;
    while(power*2 < n){
        power *= 2 ;
    }  
    return(power);
}






