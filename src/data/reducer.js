const reducer = (state, action) => { 
	switch(action.type){
		case "SAVE_PLAYER" : return savePlayer(state, action);
		case "REMOVE__PLAYER" : return removePlayer(state, action);
		case "SWITCH_EDDIT" : return switchEddit(state, action);
		default: return state;
	}
}

//reducer business logic

const savePlayer = (state,{id, name, colour}) => {


	const newPlayers = state.players.map((player)=>player.id === id ? {

		...player,
		name: name,
		colour: colour,

	}:player)

	return({

		...state,
		players : newPlayers,

	});
}




const removePlayer = (state,{id}) => {

	const {players} = state;

	const newPlayers =  players.reduce(
		(acc,player)=> player.id === id 
			? acc 
			:[...acc,player]
		,[]
	);

	return({
		...state,
		players: newPlayers,
	})
}

const switchEddit = (state, {id}) => {
	const {players} = state;
	
	const newPlayers = players.map(( player )=> {

		return(
			player.id === id 
			? { ...player, eddit: !player.eddit, }
			: {...player, eddit: false }
		)
	}
	
	) 
	return({
		...state,
		players: newPlayers,
	})
}

export default reducer ;