import {setUpMatches, pickParticipantsAndWaiting, includeWaitingPlayers} from "./business"


const reducer = (state, action) => { 
	switch(action.type){
		case "START" : return startGame(setUpMatches(pickParticipantsAndWaiting(state)));
		case "SWITCH_MENUE" : return switchMenue(state);
		case "SWITCH_EDDIT" : return switchEddit(state, action);
		case "SAVE_PLAYER" : return savePlayer(state, action);
		case "REMOVE_PLAYER" : return removePlayer(state, action);
		case "ADD_PLAYER" : return setNumberOfPlayers(addPlayer(state));
		case "NEXT_MATCH" : return incrementMatchPointer(startNextRoundConditionally(testGameEnd(removeLoser(state,action))));
		default: return state;
	}
}



const startGame = (state) => {

	return({
		...state,
		startView: false,
		matchView: true,

	})
}
const switchMenue = (state) => {
	
	const {sideBarView} = state;

	return({
		...state,
		sideBarView: !sideBarView,
	})
}

const setNumberOfPlayers = (state) =>{

	const {numberOfAddedPlayers} = state;


	return({
		...state,
		numberOfAddedPlayers : Number(numberOfAddedPlayers) + 1,
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

	const {players, numberOfAddedPlayers, colours} = state;
	const  newID = Number(numberOfAddedPlayers) + 1

	return({
		...state,
		players: [

			{
				id : newID, 
				name : `Player ${newID}`,
				colour : colours[newID % colours.length ] , 
				champion : false,
				eddit : false,
			},
			...players,

		]
	});
}


const removeLoser = (state, {id}) =>{

	const {participants} = state;

	let newParticipants = participants.reduce(
		(acc,participantId)=> participantId === id
		? acc 
		:[...acc,participantId]
	,[])
	return({
		...state,
		"participants" : newParticipants,

	});
}

const incrementMatchPointer = (state) =>{
	
	const {matchPointer} = state ;

	return({
		...state,
		matchPointer : matchPointer + 1,
	})
}
const resetMatchPointer = (state) =>{

	return({
		...state,
		matchPointer :  -1,
	})
}

const incrementRoundCounter = (state) => {
	const {roundCounter} = state ;
	return({
		...state,
		roundCounter : roundCounter + 1.
	})
}

const startNextRoundConditionally = (state) => {
	const {matchPointer, matches} = state ;
	let newState;

	if(matches.length === matchPointer + 1){
		newState = setUpMatches(includeWaitingPlayers(resetMatchPointer(incrementRoundCounter(state))));
	}else{
		newState = state;
	}


	return(newState);
}

const testGameEnd = (state) => {
	const {participants, waiting} = state;
	if(participants.length === 1 && waiting.length === 0){
		return({
			...state,
			matchView : false,
			resultsView : true,
		}) 
	} else {
		return(state);
	}
}

export default reducer ;