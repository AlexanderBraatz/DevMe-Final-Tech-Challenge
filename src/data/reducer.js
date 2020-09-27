const reducer = (state, action) => { 
	switch(action.type){
		case "SAVE_PLAYER" : return savePlayer(state, action);
		case "REMOVE__PLAYER" : return removePlayer(state, action);
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

// const removePfffflayer = (state) =>{
// 	return({
// 		...state
// 	})
// }
const removePlayer = (state,{id}) =>{

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

export default reducer ;