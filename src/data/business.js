export const setUpMatches = (state) => {
    const {roundCounter,participants} = state;

    const newParticipants = roundCounter > 1 ? participants : pickRoundParticipants(makeIdArrayFromPlayers(getPlayers(state)));

    const newMatches = makeAllMatchUps(newParticipants);

    return({

        ...state,
        matches :newMatches,
        participants : newParticipants,

    });
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






