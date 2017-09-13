import React,{Component} from 'react';
import {connect} from 'react-redux';
class UserDetails extends Component{
	render(){
	
		if(!this.props.user) {
			return (<div>Please select a user</div>);
		}
		console.log('active user....',this.props.user[0]);
		return (
			<div>
				<h2>Name: {this.props.user[0].name.first} {this.props.user[0].name.last}</h2>
				<h3>DOB :{this.props.user[0].dob}</h3> 
				<img src={this.props.user[0].picture.medium}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		user:state.activeUser
	}
}
export default connect(mapStateToProps)(UserDetails);