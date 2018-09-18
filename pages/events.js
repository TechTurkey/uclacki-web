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
			<div className="content confetti">
				<Head>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
				</Head>
				<h1>Upcoming Events</h1>
				<Link href="#">
					<a>goto calendar</a>
				</Link>
    			<CardArea auth={this.props.auth}/>

				<style jsx>{`
    				.content {
    					padding: 20px;
    				}
    				.content h1 {
    					text-align: center;
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
			events: []
		}
		this.add = this.add.bind(this)
		this.eachCard = this.eachCard.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	getInitialProps() {
		
	}
	componentWillMount() {
		console.log(this.props);
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
			.then(json => json.forEach(post => this.add(post)));
		}
	}

	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);

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
			<Card auth={this.props.auth}
				  key={card.id}
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

				<style jsx global>{`
					.cardarea {
						padding: 10px;
						// background: gray;
						display: flex;
						flex-flow: row wrap;

						align-items: center;
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

					}
					.modal {
						border-radius: 5px;
						border: solid 5px #0099ff;
						background: #e6f2ff;
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
				`}</style>
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
		var start = moment(this.state.date);
		var end = moment(this.state.endtime);
		var rstart = moment(start).format("dddd, MMMM Do YYYY, h:mm a");
		var rend = moment(end).format("dddd, MMMM Do YYYY, h:mm a");
		var cookie = getCookie(cookie_name);
		var location = "Please login to see this information.";
		var attendees = "Please login to see this information.";
		if(cookie!=null && this.state.attendees && this.state.location){
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
					<p>{this.state.title}</p>
					<p>{this.state.date}</p>
				</div>
			}
			modal
			closeOnDocumentClick>
				{close => (
					<div className="modal">
						<h1>{this.state.title}</h1>
						<div className="content">
							<p>Date: {rstart} - {rend}</p>
							<p>Location: {location}</p>
							<p>Volunteers Needed: {this.state.event_slots}</p>
							<p>Chair: {this.state.author.first} {this.state.author.last}</p>
							<p>Attendees: {attendees}</p>
							<br/>
							<div dangerouslySetInnerHTML={{ __html: this.state.description.summary }} />
           				</div>
						<div className="actions">
							<button onClick={this.signup}>
							Sign Up
							</button>
							<button onClick={this.drop}>
							Drop Event
							</button>
						</div>
							<button className="button"
							onClick={() => {close()}}>X</button>
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
					<i className="fa fa-plus"></i>
				</a>
			</div>
		)
	}
}

export default MainFactory(Events, 'Events');