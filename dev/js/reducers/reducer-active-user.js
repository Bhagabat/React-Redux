export default function(state = null,action) {
	switch(action.type){
		case 'USER_SELECTION':
			return action.payload;
			break;
	}
	return state;
}