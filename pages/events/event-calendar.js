import React, { Component, PureComponent } from 'react';
import 'isomorphic-fetch';
import Popup from "reactjs-popup";
import * as JWT from 'jwt-decode';
import { getCookie } from '../../lib/session';
import MainFactory from '../../layout/main.js';
import Head from 'next/head';
// import jQuery from 'jquery';
// import dynamic from 'next/dynamic';
let FullCalendar = ''	// SSR issues with jQuery!!!
import Modal from 'react-modal';

Modal.setAppElement('body');

var moment = require('moment');

const cookie_name = 'jwt';

// const DynamicCalendarLoading = dynamic(() => import('./calendar'))

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '50%',
    height: '50%'
  }
};

class Events extends Component {

	constructor(props) {
		super(props);

		this.state = {
			events: [],
			eventShown: null,
			displayEvent: false
		}
		this.add = this.add.bind(this);
		this.onClick = this.onClick.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.signup = this.signup.bind(this);
		this.signHandler=this.signHandler.bind(this);
		this.drop = this.drop.bind(this);
		this.dropHandler=this.dropHandler.bind(this);
	}

	componentWillMount(){
		if(false){
			var Authorization = 'Bearer ' + this.props.auth.token;
			const requestOptions = {
	        	headers: {'Authorization': Authorization , 'Content-Type': 'application/json'},
	    	};
    		fetch("http://uclacki.org/api/events", requestOptions).then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
		}
		else{
			fetch("http://uclacki.org/api/events").then(response => response.json())
			.then(json => this.groupEvents(json));
		}
	}

	groupEvents(events) {
		var groupedEvents = { };
		var newState = [
			{ events: [], color: "black" },	// Admin
			{ events: [], color: "yellow" }, // Service
			{ events: [], color: "teal" }	// Fellowship
		];
		for(var i = 0; i < events.length; i++) {
			if(!groupedEvents[events[i].title])
				groupedEvents[events[i].title] = [];
			groupedEvents[events[i].title].push({
					id: events[i]._id,
					title: events[i].title,
					start: moment(events[i].start_time),
					end: moment(events[i].end_time),
					location: events[i].location || "none",
					attendees: events[i].attendees || [],
					chair: events[i].event_chair.name.first + " " + events[i].event_chair.name.last,
					description: events[i].description.full,
					event_slots: events[i].events_slots,
					image: events[i].image && events[i].image.url
			});
		}

		Object.keys(groupedEvents).forEach(key => {
			newState[0].events.push(...groupedEvents[key]);
		});
		console.log(newState);
		this.setState({eventSources: newState});
	}

	add(content, index) {
		this.setState(prevState => ({
			events: [
				...prevState.events,
				{
					// id: content.id,
					index: index,
					title: content.title,
					start: moment(content.start_time),
					end: moment(content.end_time),
					location: content.location || "none",
					attendees: content.attendees || [],
					chair: content.event_chair.name.first + " " + content.event_chair.name.last,
					description: content.description.full,
					event_slots: content.event_slots,
					image: content.image && content.image.url
					// add description, then you can access it within "calEvent" below
				}
			]
		}));
	}

	onClick(calEvent, jsEvent, view) {
		console.log(calEvent);

		// this.setState({
		// 	eventShown: {
		// 			// id: calEvent.id,
		// 			title: calEvent.title,
		// 			start: calEvent.start.format("dddd, MMM Do, h:mm a"),
		// 			end: calEvent.end.format("dddd, MMM Do, h:mm a"),
		// 			location: calEvent.location || "none",
		// 			attendees: calEvent.attendees || [],
		// 			chair: calEvent.chair,
		// 			description: calEvent.description,
		// 			event_slots: calEvent.event_slots,
		// 			image: calEvent.image
		// 			// add description, then you can access it within "calEvent" below
		// 		}
		// 	});
		this.setState({eventShown: calEvent, displayEvent: true});
/*
		const rstart = moment(this.state.eventShown.date).format("dddd, MMM Do, h:mm a");	// Move to setstate?
		const endFormat = moment(this.state.eventShown.date).day() == moment(this.state.endtime).day() ? "h:mm a" : "dddd, MMM Do, h:mm a";
		const rend = moment(this.state.eventShown.endtime).format(endFormat);
		let location = "Please login to see this information!";
		let attendees = "Please login to see this information!";
		const cookie = getCookie(cookie_name);
		if(cookie!=null){
			location = this.state.eventShown.location || "none";
			var attendeenames = new Array(this.state.eventShown.attendees.length);
			for(var i = 0; i < this.state.eventShown.attendees.length; i++){
				attendeenames[i] = this.state.eventShown.attendees[i].name.first + " " + this.state.eventShown.attendees[i].name.last;
			}
			attendeenames = attendeenames.join(", ");
		    attendees = attendeenames;
		}

		this.setState({
			eventShown: {
				title: 
			},
			displayEvent: true
		})*/
	}

	closeModal() {
		this.setState({displayEvent: false});
	}

	signup(id){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.signHandler(this.props.auth.token, id);
		}
	}

	drop(id){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.dropHandler(this.props.auth.token, id);
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
    	fetch("http://uclacki.org/api/events/signup", requestOptions).then(response => console.log(response));
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
    	fetch("http://uclacki.org/api/events/cancel", requestOptions);
		alert("Drop Successful!");
		location.reload(true);
	}

	render() {
		return(

			<div className="content">
				<Head>
					<link href="/static/fullcalendar.min.css" rel="stylesheet"/>
					<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
				</Head>

				<EventComponent auth={this.props.auth} events={this.state.eventSources} clickEvent={this.onClick}/>

    			<Popup  
			open={this.state.displayEvent}
			modal
			closeOnDocumentClick
			onClose={this.closeModal}
			lockScroll={false}
			>
				{close => (
					<div className="event-modal">
						<h1>{this.state.eventShown.title}</h1>
						<div className="content">
							{this.state.eventShown.image &&
								<img className="event-image" src={this.state.eventShown.image} />}
							<p><strong>Chair:</strong> {this.state.eventShown.chair}</p>
							<p><strong>Date:</strong> {this.state.eventShown.start.format("dddd, MMM Do, h:mm a")} - {this.state.eventShown.end.format("dddd, MMM Do, h:mm a")}</p>
							<p><strong>Location:</strong> {this.props.auth ? this.state.eventShown.location : "Please Login to see location"}</p>
							{this.state.eventShown.event_slots > 0 &&
								<p><strong>Volunteers Needed:</strong> {this.state.eventShown.event_slots}</p>
							}
							<p><strong>Attendees List:</strong> {this.props.auth ? this.state.eventShown.attendees : "Please Login to see attendees"}</p>
							
							<br/>
							<div key="event_description" dangerouslySetInnerHTML={{ __html: this.state.eventShown.description }} />
           				</div>
						<div className="actions">
							{ this.props.auth && (
								this.state.eventShown.attendees.includes(this.props.auth.user) ?
									<button className="drop-button" onClick={() => this.drop(this.state.eventShown.id)}>
									Drop Event
									</button>
									:
									<button className="signup-button" onClick={() => this.signup(this.state.eventShown.id)}>
									Sign Up
									</button>
								)
							}
						</div>
							<button className="button"
							onClick={close}>X</button>
					</div>
					)}


				</Popup>

				<style jsx>{`
    				.content {
    					// padding-left: 40px;
    					// padding-right: 40px;
    					// padding-top: 40px;
    					overflow: auto;
    				}
    				.content h1 {
    					// text-align: center;
    					// color: white;
    				}
    			`}</style>

    			<style jsx global>{`
    				.popup-content {
						border-radius: 5px;
						text-align: center;
					}
					.event-modal {
						border-radius: 5px;
						border: solid 3px #FF00CB;
						// background: #e6f2ff;
						padding: 10px;
						overflow-y: auto;
						max-height: 80vh;
					}
					.event-modal > .button {
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

					.event-modal .signup-button, .event-modal .drop-button {
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
						border-style: none;
						 transition: all 0.2s;
					}
					.signup-button:hover {
						background-color: #4ef18f;
					}
					.drop-button:hover {
						background-color: #f14e4e;
					}
					@media all and (max-width:30em){
						.event-modal .signup-button, .event-modal .drop-button {
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

class EventComponent extends PureComponent{
	constructor(props){
		super(props)
		this.state = {
			onClient: false
		}
	}

	

	async componentDidMount() {
		FullCalendar = await import('fullcalendar-reactwrapper');
		this.setState({onClient: true});
	}

	render(){

		const events = this.state.events;

		return(
			<div id="calendar">
			{ this.state.onClient ?
	        	<FullCalendar
	         		header = {{
	            		left: 'prev,next',
	            		center: 'title',
	            		right: 'today'
	        		}}
			        navLinks= {false} // can click day/week names to navigate views
			        editable= {false}
			        eventLimit= {true} // allow "more" link when too many events
			        eventSources = {this.props.events}
			        eventClick = {this.props.clickEvent}
			        //height={600}
	   			 />

	   			 :

	   			 <p>loading</p>
			}

				
			<style jsx>{`
				#calendar {
					padding: 1%;
				}
				.fc-content {
					cursor: pointer;
				}
			`}</style>
	      	</div>

      	);
	}
}

class CardArea extends PureComponent{
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
    		fetch("http://uclacki.org/api/events", requestOptions).then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
		}
		else{
			fetch("http://uclacki.org/api/events").then(response => response.json())
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
		var attendees = temp.map((obj) => obj.attendees || []);
		console.log(start_timesa);
		return (
			<Card auth={this.props.auth}
				  title={temp[0].title}
				  start_times={start_timesa}
				  end_times={end_times}
				  description={temp[0].description}
				  location={temp[0].location || ""}
				  id={ids}
				  author={temp[0].event_chair.name || {name: {first: "Unknown", last: ""}}}
				  event_slots={slots}
				  attendees={attendees}
				  image={temp[0].image}
				  key={temp[0]._id}>
		    </Card>
		)
	}
	render(){
		console.log(this.state.events);
		return(
			<div className="cardarea">
			{/*
			const myData = [].concat(this.state.data)
			    .sort((a, b) => a.itemM > b.itemM)
			    .map((item, i) => 
			        <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
			    );
			*/}
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
						padding: 40px;
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
					    grid-column: span 3;
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
					.event-modal {
						border-radius: 5px;
						border: solid 3px #FF00CB;
						// background: #e6f2ff;
						padding: 10px;
						overflow-y: auto;
						max-height: 80vh;
					}
					.event-modal > .button {
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

					.event-modal .signup-button, .event-modal .drop-button {
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
						border-style: none;
						 transition: all 0.2s;
					}
					.signup-button:hover {
						background-color: #4ef18f;
					}
					.drop-button:hover {
						background-color: #f14e4e;
					}
					@media all and (max-width:30em){
						.event-modal .signup-button, .event-modal .drop-button {
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
				const attendeeNames = this.props.auth ? props.attendees[i].map(attendee => attendee.name.first + " " + attendee.name.last).join(", ") : "Please login to see this information!";
				subevents.push({start: moment(props.start_times[i]).format("dddd, MMM Do, h:mm a"), end: moment(props.end_times[i]).format(endFormat), id: props.id[i], slots: props.event_slots[i], attendees: attendeeNames})
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

				date: props.start_times[0],
				endtime: props.end_times[0],
				id: props.id[0],
				attendees: props.attendees[0],
				event_slots: props.event_slots[0]
			}
		}
		
		this.signup = this.signup.bind(this);
		this.signHandler=this.signHandler.bind(this);
		this.drop = this.drop.bind(this);
		this.dropHandler=this.dropHandler.bind(this);
	}

	signup(id){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.signHandler(this.props.auth.token, id);
		}
	}

	drop(id){
		if(!this.props.auth){
			alert("You are not signed in!");
		}
		else{
			this.dropHandler(this.props.auth.token, id);
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
    	fetch("http://uclacki.org/api/events/signup", requestOptions).then(response => console.log(response));
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
    	fetch("http://uclacki.org/api/events/cancel", requestOptions);
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

		if(this.state.subevents) {
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
					<div className="event-modal">
						<h1>{this.state.title}</h1>
						<div className="content">
							{this.state.image &&
								<img className="event-image" src={this.state.image.url} />}
							<p>Chair: {this.state.author.first} {this.state.author.last}</p>
							<p>Location: {location}</p>
							{this.state.event_slots > 0 &&
								<p>Volunteers Needed: {this.state.event_slots}</p>
							}

							{this.state.subevents.map((event, i) => (
								<div>
									<hr />
									<p>Shift {i+1}</p>
									<p>Date {event.start} - {event.end}</p>
									<p>Attendees List: {event.attendees || "none"}</p>
									<div className="actions">
										{ this.props.auth && (
											event.attendees.includes(this.props.auth.user) ?
												<button className="drop-button" onClick={() => this.drop(event.id)}>
												Drop Event
												</button>
												:
												<button className="signup-button" onClick={() => this.signup(event.id)}>
												Sign Up
												</button>
											)
										}
									</div>
								</div>
							))}

							<br/>
							<div dangerouslySetInnerHTML={{ __html: this.state.description.full }} />
           				</div>
						
							<button className="button"
							onClick={() => {close()}}>X</button>
					</div>
					)}


				</Popup>
			);
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
			lockScroll={false}
			closeOnDocumentClick>
				{close => (
					<div className="event-modal">
						<h1>{this.state.title}</h1>
						<div className="content">
							{this.state.image &&
								<img className="event-image" src={this.state.image.url} />}
							<p>Chair: {this.state.author.first} {this.state.author.last}</p>
							<p>Date: {rstart} - {rend}</p>
							<p>Location: {location}</p>
							{this.state.event_slots > 0 &&
								<p>Volunteers Needed: {this.state.event_slots}</p>
							}
							<p>Attendees List: {attendees || "none"}</p>
							
							<br/>
							<div dangerouslySetInnerHTML={{ __html: this.state.description.summary }} />
           				</div>
						<div className="actions">
							{ this.props.auth && (
								attendees.includes(this.props.auth.user) ?
									<button className="drop-button" onClick={() => this.drop(this.state.id)}>
									Drop Event
									</button>
									:
									<button className="signup-button" onClick={() => this.signup(this.state.id)}>
									Sign Up
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