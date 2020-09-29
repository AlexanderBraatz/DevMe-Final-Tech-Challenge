export const setUpMatches = (state) => {
    
     const newMatches = makeAllMatchUps(pickRoundParticipants(makeIdArrayFromPlayers(getPlayers(state))));

    return({
        ...state,
        matches :newMatches

    })
}



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


// pickRoundParticipants is done to reduce the number of players to a power of 2 after the first round, to avoid later rounds with an uneven  number of players and there for a number of players that cant be paird nicely.

const pickRoundParticipants = (playerIds) =>{
    
    const NumberOfPlayers = playerIds.length;

    let last = (NumberOfPlayers - findClosestPowerOfTwo(NumberOfPlayers))*2

    let participantsIds = playerIds.slice(0,last)
    
    return(participantsIds)
}



const findClosestPowerOfTwo =(n) =>{
    let power = 2;
    while(power < n){
        power *= power ;
    }  
    return(power);
}






