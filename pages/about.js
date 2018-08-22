import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './footer.js';
import Header from './header.js';


class Events extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | About</title>
      				<link href="/static/about.css" rel="stylesheet" />
      				<link rel="shortcut icon" href="/static/CKI-logo.png" />
    			</Head>
    			<Header />
    			<Banner />
    			<NavBar />
    			<Stripes />
    			<Footer />
			</div>
		);
	}
}

class Banner extends Component{
	render() {
		return(
			<div className="banner">
				<div className="banner-container">
				<h2>About</h2>
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
						<li>Service</li>
						<li>Leadership</li>
						<li>Fellowship</li>
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

export default Events