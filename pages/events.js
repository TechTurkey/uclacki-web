import React, { Component, PureComponent } from 'react';
import 'isomorphic-fetch';
import Popup from "reactjs-popup";
import * as JWT from 'jwt-decode';
import { getCookie } from '../lib/session';
import MainFactory from '../layout/main.js';
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
			displayEvent: false,

			name: "",
			number: ""
		}
		this.onClick = this.onClick.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.handleFormChange = this.handleFormChange.bind(this);
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
		var newState = [
			{ events: [], color: "#F2E18B", textColor: "black" }, // Service
			{ events: [], color: "#C7D6EE", textColor: "black" }, // Social
			{ events: [], color: "#053057" }, // Kiwanis Family
			{ events: [], color: "#6A9448" }, // Fundraising
			{ events: [], color: "#b4975e" }, // District/Division
			{ events: [], color: "#aaa9aa" }, // Administrative
			{ events: [], color: "#9EA374" }, // MDEER
			{ events: [], color: "black" } // unlabeled/testing
		];
		for(var i = 0; i < events.length; i++)
		{
			let index = 7;
			if(events[i].category=="service")
				index = 0;
			else if(events[i].category==="social")
				index = 1;
			else if(events[i].category=="kfam")
				index = 2;
			else if(events[i].category=="fundraising")
				index = 3;
			else if(events[i].category=="divdist")
				index = 4;
			else if(events[i].category=="admin")
				index = 5;
			else if(events[i].category=="mdeer")
				index = 6;

			if(events[i].attendees){
				events[i].attendees = events[i].attendees.map(person => person.name.first + " " + person.name.last);
				if(events[i].anonAttendees)
					events[i].attendees.concat(events[i].anonAttendees.name.map(person => person.name));
				events[i].attendees = events[i].attendees.join(", ");
			}
			if(!this.props.auth) {
				events[i].attendees = "Please log in to view attendees";
				events[i].location = "Please log in to view location";
			}

			const startTime = moment(events[i].start_time);
			const endTime = moment(events[i].end_time);

			newState[index].events.push({
				id: events[i]._id,
				title: events[i].title,
				start: startTime,
				end: endTime,
				endDisplay: endTime.diff(startTime, 'days') > 0 ? endTime.format("dddd, MMM Do, h:mm a") : endTime.format("h:mm a"),
				location: events[i].location || "none",
				signup_type: events[i].signup_type,
				attendees: events[i].attendees || ["none"],
				chair: events[i].event_chair.name.first + " " + events[i].event_chair.name.last,
				description: events[i].description.full,
				event_slots: events[i].event_slots || "no limit",
				image: events[i].image && events[i].image.url,
				category: events[i].category
			});
		}
		this.setState({eventSources: newState});
	}

	onClick(calEvent, jsEvent, view) {
		this.setState({eventShown: calEvent, displayEvent: true});
	}

	closeModal() {
		this.setState({displayEvent: false});
	}

	handleFormChange(event) {
		const target = event.target;
		this.setState({[target.name]: target.value});
	}

	signup(id){
		if(this.props.auth)
			this.signHandler(this.props.auth.token, id);
		else
			this.signHandler("", id);
	}

	drop(id){
		if(this.props.auth)
			this.dropHandler(this.props.auth.token, id);
		else
			this.dropHandler("", id);
	}
	
	signHandler(token, event_id, name, number){
		var Authorization = 'Bearer ' + token;
		let requestOptions = {
        	method: 'POST', 
        	headers: {Authorization , 'Content-Type': 'application/json'},
        	body: JSON.stringify({event_id})
    	};
    	if(this.state.name && this.state.number) {
    		requestOptions.body = JSON.stringify({
    			event_id: event_id,
    			name: this.state.name,
    			number: this.state.number
    		});
    	}
    	console.log(requestOptions);
    	fetch("http://uclacki.org/api/events/signup", requestOptions).then(response => response.json())
    	.then(json => {
    		if(json.success) {
    			alert("Signup Successful!");
    			location.reload(true);
    		} else {
    			alert("Signup failed. " + json.error);
    		}
    	});
	}

	dropHandler(token, event_id){
		var Authorization = 'Bearer ' + token;
		const requestOptions = {
        	method: 'POST',
        	headers: {Authorization, 'Content-Type': 'application/json'},
        	body: JSON.stringify({event_id})
    	};
    	fetch("http://uclacki.org/api/events/cancel", requestOptions).then(response => response.json())
    	.then(json => {
    		if(json.success) {
    			alert("Drop Successful!");
    			location.reload(true);
    		} else {
    			alert("Drop failed. " + json.error);
    		}
    	});
	}

	render() {
		return(

			<div className="content">
				<Head>
					<link href="/static/fullcalendar.min.css" rel="stylesheet"/>
					<script src="https://code.jquery.com/jquery-3.3.1.min.js"
						integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
						integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
				</Head>

				<div className="legend">
					<div className="service">Service</div>
					<div className="social">Social</div>
					<div className="kfam">Kiwanis Family</div>
					<div className="fundraising">Fundraising</div>
					<div className="divdist">Division/District</div>
					<div className="mdeer">MDEER</div>
					<div className="admin">Administrative</div>
				</div>

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
						<button className="button"
							onClick={close}>X</button>
						<h1>{this.state.eventShown.title}</h1>
						<p>{this.state.eventShown.start.format("dddd, MMM Do, h:mm a")} - {this.state.eventShown.endDisplay}</p>
						<hr/>
						<div className="event-content">
							{this.state.eventShown.image &&
								<img className="event-image" src={this.state.eventShown.image} />}
							<p><strong>Chair:</strong> {this.state.eventShown.chair}</p>
							<p><strong>Location:</strong> {this.state.eventShown.location}</p>
							{ this.state.eventShown.signup_type != "off" &&
								<div>
									<p><strong>Volunteers Needed:</strong> {this.state.eventShown.event_slots}</p>
									<p><strong>Attendees List:</strong> {this.state.eventShown.attendees}</p>
								</div>
							}
							
							
							<p className="event-description">{ this.state.eventShown.description }</p>
           				</div>
           				{ this.state.eventShown.signup_type!="off" && 
							  this.state.eventShown.start.diff(moment()) > 0 && (
						<div className="actions modal">
							 { this.props.auth ? (
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
									this.state.eventShown.signup_type=="all" ?
									<div>
									<p>Login and signup, or fill in the form below if you are a new member</p>
										<form onSubmit={() => this.signup(this.state.eventShown.id)}>
			  								<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleFormChange}/>
			  								<input type="text" name="number" placeholder="Number" value={this.state.number} onChange={this.handleFormChange} />
		 									<button className="submit" type="submit" value="Submit">Submit</button>
										</form>
									</div>
									:
									<p>Please login to sign up</p>
								)
							}
						</div>
						)}
					</div>
					)}


				</Popup>

				<style jsx>{`
					
				`}</style>

    			<style jsx global>{`
    				h1 {
						margin-bottom: 0;
					}
					.event-modal > p {
						margin: 0;
					}
					.event-content {
						margin-top: 10px;
					}
    				.content {
    					overflow: auto;
    				}
    				.legend {
    					display: flex;
    					flex-flow: row nowrap;
    					justify-content: space-around;

    					font-family: "Century Gothic", sans-serif;
    					margin: 20px 40px 0 40px;
    				}
    				.legend > div {
    					flex-grow: 1;
    					padding: 5px 0;
    					text-align: center;
    				}
    				.legend .service { background-color: #F2E18B; }
    				.legend .social { background-color: #C7D6EE; }
    				.legend .kfam { background-color: #053057; color: white; }
    				.legend .fundraising { background-color: #6A9448; color: white; }
    				.legend .divdist { background-color: #b4975e; color: white; }
    				.legend .admin { background-color: #aaa9aa; color: white; }
    				.legend .mdeer { background-color: #9EA374; color: white; }
    				.popup-content {
						border-radius: 5px;
						// text-align: center;
					}
					.event-modal {
						border-radius: 5px;
						// border: solid 3px #FF00CB;
						// background: #e6f2ff;
						padding: 10px;
						overflow-y: auto;
						max-height: 80vh;

						font-family: "Myriad Pro", sans-serif;
					}
					.event-modal > .button {
					  // cursor: pointer;
					  // position: absolute;
					  // display: block;
					  // padding: 2px 5px;
					  // line-height: 20px;
					  // right: -10px;
					  // top: -10px;
					  // font-size: 24px;
					  // background: #ffffff;
					  // border-radius: 18px;
					  // border: 1px solid #cfcece;
					  float: right;
					  border: none;
					  background: none;
					  cursor: pointer;
					  margin-top: 28px;
					}
					.event-modal > .button:hover {
						background-color: #eee;
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

					.event-description {
						white-space: pre-line;	// recognize \n as a new line
					}
					.actions {
						// padding: 0;
						background-color: #eee;
					}
					.actions form {
						flex-flow: row;
						// justify-content: space-around;
					}
					.actions p {
						margin-top: 0;
					}
					.actions form input {
						margin-right: 10px;
					}
					.actions form .submit {
						margin: 0;
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
	         			left: '',
	            		center: 'prev title next',
	            		right: ''
	        		}}
			        navLinks = {false} // can click day/week names to navigate views
			        editable = {false}
			        eventLimit = {false} // allow "more" link when too many events
			        eventSources = {this.props.events}
			        eventClick = {this.props.clickEvent}
			        aspectRatio = {2}
			        height = 'auto'
			        // buttonIcons={ {prev: 'f fas fa-angle-left'} }
			        //height={600}
	   			 />

	   			 :

	   			 <p>loading</p>
			}

				
			<style jsx global>{`
				#calendar {
					padding: 20px 0;
				}
				#calendar .fc {
					font-family: "Century Gothic", sans-serif;
				}
				#calendar .fc-toolbar.fc-header-toolbar {
					margin: none;
				}
				#calendar .fc-button {
					border: none;
					box-shadow: none;
					background-color: white;
					background-image: none;
				}
				#calendar .fc-button.fc-state-hover {
					background-color: #ececec;
				}

				// #calendar .fc-row.fc-week {
				// 	height: auto !important;
				// }
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