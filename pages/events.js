import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import 'isomorphic-fetch';
import Modal from 'simple-react-modal';

class Events extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | Events</title>
      				<link href="/static/events.css" rel="stylesheet" />
      				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      				<link rel="shortcut icon" href="/static/CKI-logo.png" />
    			</Head>
    			<Header />
    			<Banner />
    			<NavBar />
    			<Stripes />
    			<CardArea />
    			<Footer />
			</div>
		);
	}
}

class Header extends Component {
	render(){
		return (
			<header role="banner" className="content-header">
				<div className="title-header">
					<img src="/static/logo.jpg" alt="CKI UCLA Logo" className="logo-img header-logo" />
					<h1>UCLA Circle K International</h1>
				</div>
				<div role="navigation" className="header-nav">
					<ul>
						<li id="login">LOGIN</li>
						<li>Members</li>
						<Link href="/resources">
						<li>Resources</li>
						</Link>
						<Link href="/events">
						<a><li>Events</li></a>
						</Link>
						<Link href="/about">
						<a><li>About</li></a>
						</Link>
						<Link href="/index">
						<a><li>Home</li></a>
						</Link>

					</ul>
				</div>
			</header>
		);
	}
}

class Banner extends Component{
	render() {
		return(
			<div className="banner">
				<div className="banner-container">
				<h2>Events</h2>
				</div>
			</div>
		);
	}
}

class NavBar extends Component{
	render(){
		return(
			<div className="navbar">
				<ul>
						<li>Calendar</li>
						<li>Chairing Information</li>
				</ul>
			</div>
		); 
	}
}

class Stripes extends Component{
	render(){
		return(
				<img src="/static/stripes.jpg" alt="stripes" id="stripe-border" />
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
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.nextId = this.nextId.bind(this)

		// this.eventData = {}
	}
	componentWillMount() {
		// var self = this
		// if(this.props.count) {
		// 	fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
		// 		.then(response => response.json())
		// 		.then(json => json[0]
		// 						.split('. ')
		// 						.forEach(sentence => self.add(sentence.substring(0, 25))))
		// }
		let self = this
		fetch('http://wp.draftsite.tk/wp-json/tribe/events/v1/events').then(response => response.json())
			.then(json => json.events.forEach(post => self.add(post)))
	}

	add(text) {
		this.setState(prevState => ({
			events: [
				...prevState.events,
				// {
				// 	id: this.nextId(),
				// 	note: text
				// }
				text
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			events: prevState.events.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			events: prevState.events.filter(note => note.id !== id)
		}))
	}

	eachCard(card, i) {
		return (
			<Card key={card.id}
				  index={card.id}
				  onChange={this.update}
				  onRemove={this.remove}
				  title={card.title}>
		    </Card>
		)
	}
	render(){
		return(
			<div className="cardarea">
				{this.state.events.map(this.eachCard)}
				{/* <button onClick={this.add.bind(null, "New Event")}> */}
				<NewCard add={this.add} nextId={this.nextId}></NewCard>
				
				{/*</button>*/}
			</div>
		);
	}
}


class Card extends Component { 
	constructor(props) {
		super();
		this.state = {
			title: props.title
		}
	}

	show() {
		this.setState({show: true});
	}
	close() {
		this.setState({show: false});
	}

	render(){
		return (
			<div onClick={this.show.bind(this)} className="cardM">
				<p>{this.state.title}</p>
				<Modal show={this.state.show} onClose={this.close.bind(this)}>
					<a onClick={this.close.bind(this)}>X</a>
				</Modal>
			</div>

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

class Footer extends Component{
	render(){
		return (
			<footer className="content-footer">
			<div className = "logo-container">
				<img src="/static/CKI-logo.png" alt="CKI logo" />
				<img src="/static/CKI-metro.png" alt="CKI Metro Division logo" id="metro" />
				<img src="/static/CKI-district.png" alt="CKI District logo" />
			</div>
			<p>&copy; 2017–2018 Circle K International at UCLA</p>
			</footer>
		);
	}
}

export default Events