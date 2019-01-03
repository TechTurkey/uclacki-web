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
			{ events: [], color: "#F2E18B" }, // Service
			{ events: [], color: "#C7D6EE" }, // Social
			{ events: [], color: "#003D79" }, // Kiwanis Family
			{ events: [], color: "#6A9448" }, // Fundraising
			{ events: [], color: "#C7D6EE" }, // District/Division
			{ events: [], color: "#820024" }, // Administrative
			{ events: [], color: "black" } // unlabeled/testing
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
					image: events[i].image && events[i].image.url,
					category: events[i].category
			});
		}

		Object.keys(groupedEvents).forEach(key => {
			if(groupedEvents[key].category=="service")
				newState[0].events.push(...groupedEvents[key]);
			else if(groupedEvents[key].category=="social")
				newState[1].events.push(...groupedEvents[key]);
			else if(groupedEvents[key].category=="kfam")
				newState[2].events.push(...groupedEvents[key]);
			else if(groupedEvents[key].category=="fundraising")
				newState[3].events.push(...groupedEvents[key]);
			else if(groupedEvents[key].category=="divdist")
				newState[4].events.push(...groupedEvents[key]);
			else if(groupedEvents[key].category=="admin")
				newState[5].events.push(...groupedEvents[key]);
			else
				newState[6].events.push(...groupedEvents[key]);
		});

		this.setState({eventSources: newState});
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
  crossOrigin="anonymous"></script>
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
							{ moment().diff(this.state.eventShown.start) > 0 && (this.props.auth ? (
								this.state.eventShown.attendees.includes(this.props.auth.user) ?
									<button className="drop-button" onClick={() => this.drop(this.state.eventShown.id)}>
									Drop Event
									</button>
									:
									<button className="signup-button" onClick={() => this.signup(this.state.eventShown.id)}>
									Sign Up
									</button>
								)
								:
								(
									<p>Please login to sign up</p>
								)
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

				
			<style jsx global>{`
				#calendar {
					padding: 1%;
				}
				#calendar .fc {
					font-family: "Century Gothic", sans-serif;
				}
				#calendar .fc-content {
					cursor: pointer;
					white-space: normal;
				}
			`}</style>
	      	</div>

      	);
	}
}

export default MainFactory({headerTitle: 'Events'})(Events);