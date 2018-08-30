import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './footer.js';
import Header from './header.js';


class Resources extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | Resources</title>
      				<link href="/static/resources.css" rel="stylesheet" />
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
				<h2>Resources</h2>
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
						<li>Membership Application</li>
						<li>Past Meetings</li>
						<li>Share to Care!</li>
						<li>CKI Cheers</li>
						<li>Reimbursements</li>
						<li>Bylaws</li>
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

export default Resources;