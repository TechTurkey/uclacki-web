import React, { Component} from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import Popup from "reactjs-popup";
import * as JWT from 'jwt-decode';
import { getCookie } from "../lib/session";
import MainFactory from '../layout/main.js';


class Events extends Component {
	render() {
		return(
			<div>
    			<CardArea />
			</div>
		);
	}
}

class CardArea extends Component{
	constructor(props){
		super(props)
		this.state = {
			events: []
		}
		this.add = this.add.bind(this)
		this.eachCard = this.eachCard.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	getInitialProps() {
		
	}
	componentWillMount() {
		var user = getCookie('user');
		if(user != null){
			var check = JSON.parse(user);
			var token = check.result;
			var Authorization = 'Bearer ' + token;
			const requestOptions = {
	        	headers: {Authorization , 'Content-Type': 'application/json'},
	    	};
    		fetch("http://142.93.83.231/api/events", requestOptions).then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
		}
		else{
			fetch("http://142.93.83.231/api/events").then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
		}

	}

	add(text) {
		this.setState(prevState => ({
			events: [
				...prevState.events,{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	eachCard(card, i) {
		console.log(card.note);
		return (
			<Card key={card.id}
				  index={card.id}
				  title={card.note.title}
				  date={card.note.start_time}
				  endtime={card.note.end_time}
				  description={card.note.description}
				  location={card.note.location}
				  id={card.note._id}
				  author={card.note.event_chair.name}
				  event_slots={card.note.event_slots}
				  attendees={card.note.attendees}>
		    </Card>
		)
	}
	render(){
		return(
			<div className="cardarea">
				{this.state.events.map(this.eachCard)}
				<NewCard add={this.add} nextId={this.nextId}></NewCard>
			</div>
		);
	}
}


class Card extends Component { 
	constructor(props) {
		super();
		this.state = {
			date: props.date,
			title: props.title,
			endtime: props.endtime,
			location: props.location,
			description: props.description,
			id: props.id,
			author: props.author,
			attendees: props.attendees,
			event_slots: props.event_slots
		}
		this.signup = this.signup.bind(this);
		this.signHandler=this.signHandler.bind(this);
		this.drop = this.drop.bind(this);
		this.dropHandler=this.dropHandler.bind(this);
	}

	show() {
		this.setState({show: true});
	}
	close() {
		this.setState({show: false});
	}

	signup(){
		var user = getCookie('user');
		if(user == null){
			alert("You are not signed in!");
		}
		else{
			var check = JSON.parse(user);
			var jwtDecode = require('jwt-decode');
			var token = check.result;
			var decoded = JWT(token);
			this.signHandler(token, this.state.id);
		}
	}

	drop(){
		var user = getCookie('user');
		if(user == null){
			alert("You are not signed in!");
		}
		else{
			var check = JSON.parse(user);
			var jwtDecode = require('jwt-decode');
			var token = check.result;
			var decoded = JWT(token);
			console.log(decoded);
			this.dropHandler(token, this.state.id);
		}
	}
	
	signHandler(token, event_id){
		var Authorization = 'Bearer ' + token;
		const requestOptions = {
        	method: 'POST', 
        	headers: {Authorization , 'Content-Type': 'application/json'},
        	body: JSON.stringify({event_id})
    	};
    	console.log(requestOptions);
    	fetch("http://142.93.83.231/api/events/signup", requestOptions).then(response => console.log(response));
		alert("Signup Successful!");
		location.reload(true);
	}

	dropHandler(token, event_id){
		var Authorization = 'Bearer ' + token;
		const requestOptions = {
        	method: 'POST',
        	headers: {Authorization , 'Content-Type': 'application/json'},
        	body: JSON.stringify({event_id})
    	};
    	fetch("http://142.93.83.231/api/events/cancel", requestOptions);
		alert("Drop Successful!");
		location.reload(true);
	}


	render(){
		var moment = require('moment');
		moment().format();
		var start = moment(this.state.date);
		var end = moment(this.state.endtime);
		var rstart = moment(start).format("dddd, MMMM Do YYYY, h:mm a");
		var rend = moment(end).format("dddd, MMMM Do YYYY, h:mm a");
		var user = getCookie('user');
		var location = "Please login to see this information.";
		var attendees = "Please login to see this information.";
		if(user!=null){
			var attendeenames = new Array(this.state.attendees.length);
			for(var i = 0; i < this.state.attendees.length; i++){
				attendeenames[i] = this.state.attendees[i].name.first + " " + this.state.attendees[i].name.last;
			}
			location = this.state.location;
			attendeenames = attendeenames.join(", ");
		    attendees = attendeenames;
		}
		// utcDate1 = utcDate1.toUTCString()
		// utcDate1 = utcDate1.split(' ').slice(0, 4).join(' ')
		// var utcDate2 = new Date(Date.UTC(this.state.endtime.year, this.state.endtime.month - 1, this.state.endtime.day))
		// utcDate2 = utcDate2.toUTCString()
		// utcDate2 = utcDate2.split(' ').slice(0, 4).join(' ')
		// var startTime = this.state.date.hour + ':' +this.state.date.minutes 
		// var endTime = this.state.endtime.hour + ':' +this.state.endtime.minutes 
		return (
			<Popup  
			trigger={
				<div className="cardM">
				<p>{this.state.title}
				</p>
				</div>}
				modal
				closeOnDocumentClick>
				{close => (
					<div className="modal">
						<div className="header"> {this.state.title} </div>
						<div className="content">
						<p>Date: {rstart} - {rend}</p>
						<p>Location: {location}</p>
						<p>Volunteers Needed: {this.state.event_slots}</p>
						<p>Chair: {this.state.author.first} {this.state.author.last}</p>
						<p>Attendees: {attendees}</p>
						<div dangerouslySetInnerHTML={{__html: this.state.description.summary}} />
           				</div>
						<div className="actions">
							<button onClick={this.signup}>
							Sign Up
							</button>
							<button onClick={this.drop}>
							Drop Event
							</button>
						</div>
						<div className="Exit">
							<button
							className="button"
							onClick={() => {
								close()
							}}
							>
							X
							</button>
						</div>
					</div>
					)}
				</Popup>
				)
	}
}

class NewCard extends Component {
	constructor(props){
		super();
		this.state = {
			nextId: props.nextId
		}
	}

	addCard() {
		this.props.add({id: this.state.nextId, title: "New Event"});
	}
	render() {
		return (
			<div>
				<a className="cardM" onClick={this.addCard.bind(this)}>
					New Card
					<i className="fa fa-plus"></i>
				</a>
			</div>
		)
	}
}

export default MainFactory(Events, 'Events');