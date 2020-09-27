export const setUpMatches = (state) => {
    const {players } = state;
	
    const playerIds = players.map(
		(player)=> player.id 
    );

    const AllMatchups = makeAllMatches(playerIds);


    const newMatches = AllMatchups.map((matchup)=>{
        if (matchup.length === 1){
            return(
                {
                "playing" : matchup,
                "winner" : matchup[0],
                }
            )
        }else{
            return(
                    {
                    "playing" : matchup,
                    "winner" : "" ,
                    }
            )

        }
    });
    console.log(newMatches)
	return({
		...state,
        matches :newMatches

	})
}






const makeAllMatches = (playerIds) =>{

    let matchups=[];
    
    for (let i=0; i+1<= playerIds.length; i+=2) {
        matchups.push(playerIds.slice(i,i+2));
    }

    return(matchups);
}
