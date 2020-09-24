const reducer = (state, action) => { 
	switch(action.type){
		case "Example" : return setReducer(state, action);
		default: return state;
	}
}

//reducer business logic

const setReducer = (state) => {
	return ({
		...state,
	})
}

export default reducer ;