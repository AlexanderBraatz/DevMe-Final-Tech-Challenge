const reducer = (state, action) => { 
	switch(action.type){
		case "SWITCH_EDDIT" : return switchEddit(state, action);
		case "SAVE_PLAYER" : return savePlayer(state, action);
		case "REMOVE__PLAYER" : return setNumberOfPlayers(removePlayer(state, action));
		case "ADD_PLAYER" : return setNumberOfPlayers(addPlayer(state));
		default: return state;
	}
}

//reducer business logic

const setNumberOfPlayers = (state) =>{

	const {players} = state;


	return({
		...state,
		numberOfPlayers : players.length,
	});
}


const switchEddit = (state, {id}) => {
	
	const {players} = state;
	
	const newPlayers = players.map(( player )=> {

		return(
			player.id === id 
			? { ...player, eddit: !player.eddit, }
			: {...player, eddit: false }
		)
	});

	return({
		...state,
		players: newPlayers,
	})
}


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






const addPlayer = (state)=>{

	const {players, numberOfPlayers, colours} = state;
	const  newID = numberOfPlayers + 1

	return({
		...state,
		players: [

			{
				id : newID, 
				name : `Player ${newID}`,
				colour : colours[newID], 
				champion : false,
				eddit : false,
			},
			...players,

		]
	});
}


export default reducer ;