import React, { Component} from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import Popup from "reactjs-popup";
import * as JWT from 'jwt-decode';
import { getCookie } from '../lib/session';
import MainFactory from '../layout/main.js';
import Head from 'next/head';
var moment = require('moment');

const cookie_name = 'jwt';

class Events extends Component {
	render() {
		return(
			<div className="content">
				{/*<h1>Upcoming Events</h1>
				<Link href="#">
					<a>goto calendar</a>
				</Link>*/}
				<h2>Check out our Welcome Week page for upcoming events!</h2>
				<h2><a href="http://welcome.uclacki.org">Welcome Week</a></h2>
    			{/*<CardArea auth={this.props.auth}/>*/}

				<style jsx>{`
    				.content {
    					padding-left: 40px;
    					padding-right: 40px;
    					overflow: auto;
    				}
    				.content h1 {
    					// text-align: center;
    					// color: white;
    				}
    			`}</style>
			</div>
		);
	}
}

class CardArea extends Component{
	constructor(props){
		super(props)
		this.state = {
			events: {}
		}
		this.groupEvents = this.groupEvents.bind(this);
		this.add = this.add.bind(this)
		this.eachCard = this.eachCard.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	componentDidMount() {
		if(false){
			var Authorization = 'Bearer ' + this.props.auth.token;
			const requestOptions = {
	        	headers: {'Authorization': Authorization , 'Content-Type': 'application/json'},
	    	};
    		fetch("http://142.93.83.231/api/events", requestOptions).then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
		}
		else{
			fetch("http://142.93.83.231/api/events").then(response => response.json())
			.then(json => this.groupEvents(json));
		}
	}

	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);

	}

	groupEvents(events) {
		var newState = {};
		for(var i = 0; i < events.length; i++) {
			if(!newState[events[i].title])
				newState[events[i].title] = [];
			newState[events[i].title].push(events[i]);
		}
		console.log(newState);
		this.setState({events: newState});
	}

	add(content) {
		var exists = this.state.events[content.title];
		var events = {...this.state.events}
		if(!exists){
			events[content.title] = [];
		}
		events[content.title].push(content);
		this.setState({events: events})
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	eachCard(card) {
		var temp = this.state.events[card];
		console.log(temp);
		var start_timesa = temp.map((obj) => {console.log(obj); return obj.start_time;});
		var end_times = temp.map((obj) => obj.end_time);
		var ids = temp.map((obj) => obj._id);
		var slots = temp.map((obj) => obj.event_slots);
		var attendees = temp.map((obj) => obj.attendees);
		console.log(start_timesa);
		return (
			<Card auth={this.props.auth}
				  title={temp[0].title}
				  start_times={start_timesa}
				  end_times={end_times}
				  description={temp[0].description}
				  location={temp[0].location}
				  id={ids}
				  author={temp[0].event_chair.name}
				  event_slots={slots}
				  attendees={attendees}
				  image={temp[0].image}>
		    </Card>
		)
	}
	render(){
		console.log(this.state.events);
		return(
			<div className="cardarea">
				{Object.keys(this.state.events).map(this.eachCard)}
				<style jsx global>{`
					h2 {
						// color: white;
					}
					a {
						color: #f2c123;
					}
					.cardarea {
						// padding: 10px;
						// background: gray;
						// display: flex;
						// flex-flow: row wrap;
					}
					.cardarea {
					  display: grid;
					  grid-template-columns: repeat(12, 1fr);
					  grid-gap: 20px;
					}

					@media (max-width: 768px) {
					  .cardM {
					    grid-column: span 12;
					  }
					}
					@media (min-width: 769px) {
					  .cardM {
					    grid-column: span 6;
					  }
					}
					@media (min-width: 1200px) {
					  .cardM {
					    grid-column: span 4;
					  }
					}
					
					
					.cardM {
						padding: 10px;
						margin: 0 10px;
						text-align: center;

						background: white;
						border: solid 1px black;
						border-radius: 5px;

						box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
					    transition: box-shadow 0.3s;
					}
					.cardM:hover {
					    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
					}

					.popup-content {
						border-radius: 5px;
						text-align: center;
					}
					.modal {
						border-radius: 5px;
						border: solid 3px #FF00CB;
						// background: #e6f2ff;
						padding: 10px;
					}
					.modal > .button {
					  cursor: pointer;
					  position: absolute;
					  display: block;
					  padding: 2px 5px;
					  line-height: 20px;
					  right: -10px;
					  top: -10px;
					  font-size: 24px;
					  background: #ffffff;
					  border-radius: 18px;
					  border: 1px solid #cfcece;
					}

					.modal .signup-button, .modal .drop-button {
						 display:inline-block;
						 padding:0.3em 1.2em;
						 margin:0 0.3em 0.3em 0;
						 border-radius:2em;
						 box-sizing: border-box;
						 text-decoration:none;
						 font-family:'Roboto',sans-serif;
						 font-weight:300;
						 color:#FFFFFF;
						 background-color:#4eb5f1;
						 text-align:center;
						 transition: all 0.2s;
					}
					.signup-button:hover {
						background-color: #4ef18f;
					}
					.drop-button:hover {
						background-color: #f14e4e;
					}
					@media all and (max-width:30em){
						.modal .signup-button, .modal .drop-button {
							  display:block;
							  margin:0.4em auto;
						 }
					}

					.event-image {
						max-width: 100%;
					}
				`}</style>
			</div>
		);
	}
}


class Card extends Component { 
	constructor(props) {
		super(props);
		console.log(props.start_times);
		// var subevents = new Array(props.start_times.length);
		// subevents = subevents.map((obj,i) => [props.start_times[i], props.end_times[i], props.id[i],props.event_slots[i], props.attendees[i]]);
		// console.log(subevents);
		var subevents = null;
		if(props.start_times.length > 1)	// may have issues if start_times is accidentally a string
		{
			subevents = [];
			for(var i = 0; i < props.start_times.length; i++) {
				const endFormat = moment(props.start_times[i]).day() == moment(props.end_times[i]).day() ? "h:mm a" : "dddd, MMM Do, h:mm a";
				subevents.push({start: moment(props.start_times[i]).format("dddd, MMM Do, h:mm a"), end: moment(props.end_times[i]).format(endFormat), id: props.id[i], slots: props.event_slots[i], attendees: props.attendees[i] || "Please login to see this information!"})
			}
		}

		if(subevents) {
			this.state = {
				title: props.title,
				date: props.start_times[0],
				location: props.location,
				description: props.description,
				author: props.author,
				image: props.image,

				subevents: subevents
			}
		} else {
			this.state = {
				title: props.title,
				location: props.location,
				description: props.description,
				author: props.author,
				image: props.image,

				date: props.start_times,
				endtime: props.end_times,
				id: props.id,
				attendees: props.attendees,
				event_slots: props.event_slots
			}
		}
		
		this.signup-button = this.signup.bind(this);
		this.signHandler=this.signHandler.bind(this);
		this.drop = this.drop.bind(this);
		this.dropHandler=this.dropHandler.bind(this);
	}

	signup(){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.signHandler(this.props.auth.token, this.state.id);
		}
	}

	drop(){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.dropHandler(this.props.auth.token, this.state.id);
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
        	headers: {Authorization, 'Content-Type': 'application/json'},
        	body: JSON.stringify({event_id})
    	};
    	fetch("http://142.93.83.231/api/events/cancel", requestOptions);
		alert("Drop Successful!");
		location.reload(true);
	}


	render(){
		// moment().format();
		// var start = moment(this.state.date);
		// var end = moment(this.state.endtime);
		var rstart = moment(this.state.date).format("dddd, MMM Do, h:mm a");	// Move to setstate?
		const endFormat = moment(this.state.date).day() == moment(this.state.endtime).day() ? "h:mm a" : "dddd, MMM Do, h:mm a";
		var rend = moment(this.state.endtime).format(endFormat);
		var cookie = getCookie(cookie_name);
		var location = "Please login to see this information!";
		var attendees = "Please login to see this information!";

		if(cookie!=null && this.state.attendees && this.state.location){
			location = this.state.location;
			var attendeenames = new Array(this.state.attendees.length);
			for(var i = 0; i < this.state.attendees.length; i++){
				attendeenames[i] = this.state.attendees[i].name.first + " " + this.state.attendees[i].name.last;
			}
			attendeenames = attendeenames.join(", ");
		    attendees = attendeenames;
		}
		return (
			<Popup  
			trigger={
				<div className="cardM">
					<p>{this.state.title}</p>
					<p>{rstart}</p>
				</div>
			}
			modal
			closeOnDocumentClick>
				{close => (
					<div className="modal">
						<h1>{this.state.title}</h1>
						<div className="content">
							{this.state.image &&
								<img className="event-image" src={this.state.image.url} />}
							<p>Chair: {this.state.author.first} {this.state.author.last}</p>
							{!this.state.subevents &&
								<p>Date: {rstart} - {rend}</p>
							}
							<p>Location: {location}</p>
							{this.state.event_slots > 0 &&
								<p>Volunteers Needed: {this.state.event_slots}</p>
							}
							{ !this.state.subevents && 
								<p>Attendees List: {attendees}</p>
							}
							{ this.state.subevents && this.state.subevents.map((event,i) => (
								<div>
								<p>Shift {i+1}</p>
								<p>Date {event.start} - {event.end}</p>
								<p>Attendees List: {event.attendees}</p>
								</div>
							))}


							<br/>
							<div dangerouslySetInnerHTML={{ __html: this.state.description.summary }} />
           				</div>
						<div className="actions">
							{ this.props.auth && (
								this.attendees.includes(this.props.auth.user) ?
									<button className="signup-button" onClick={this.signup}>
									Sign Up
									</button>
									:
									<button className="drop-button" onClick={this.drop}>
									Drop Event
									</button>
								)
							}
						</div>
							<button className="button"
							onClick={() => {close()}}>X</button>
					</div>
					)}


				</Popup>
			)
	}
}

export default MainFactory({headerTitle: 'Events'})(Events);