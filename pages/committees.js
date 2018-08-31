import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './footer.js';
import Header from './header.js';


/*
Instead of duplicating the component for each committee, we can make a "committee-page" template and wrap
it around the data of each one maybe...
*/

class Committees extends Component {
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

    			<p>Committee Information</p>

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
				<h2>Committees</h2>
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

export default Committees;