import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head';

class Events extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | Events</title>
      				<link href="/static/events.css" rel="stylesheet" />
      				<link rel="shortcut icon" href="/static/CKI-logo.png" />
    			</Head>
    			<Header />
    			<Banner />
    			<NavBar />
    			<Stripes />
    			<Cards />
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
				<div role="navigation" class="header-nav">
					<ul>
						<li id="login">LOGIN</li>
						<li>Members</li>
						<li>Resources</li>
						<Link href="/events">
						<a><li>Events</li></a>
						</Link>
						<li>About</li>
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

class Cards extends Component{
	render(){
		return(
			<div className="cardarea">
				<p>This is where cards will go!</p>
			</div>
		);
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