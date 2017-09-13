import axios from 'axios';
export const selectUser = (user) =>{
	console.log('user selected',user.first);
	return {
		type:'USER_SELECTION',
		payload:user
	}
}

export const selectUserAC =(user) =>{
	return (dispatch,getState) =>{
		axios.get('https://randomuser.me/api/').then((response) =>{
			console.log(response.data.results);
			dispatch(selectUser(response.data.results));
		});
	}
}