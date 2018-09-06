import React, { Component } from 'react';
import Head from 'next/head';
import Footer from '../footer.js';
import Header from '../header.js';
import Nav from '../../components/Nav.js';


class Committees extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | About</title>
      				<link href="/static/about.css" rel="stylesheet" />
      				<link rel="shortcut icon" href="/static/CKI-logo.png" />
    			</Head>

    			<Nav />
    			<div className="confetti">
	    			<div className="content">
		    			<h1>Spiritship</h1>

		    			<p>
		    			Spiritship Committee is the committee that makes sure you’re living the social life that all of those UCLA pamphlets promised you.
		    			We specialize in planning club socials and fostering a sense of club pride for our members.
						</p>

						<h3>Meet the Chairs</h3>

						<section>
							<img />
							<p>Jeffrey Lin</p>
						</section>

						<section>
							<img />
							<p>Katrina Galian</p>
						</section>

						<h3>Committee Meetings</h3>

						<h4>Subchairs</h4>
					</div>
				</div>

    			<Footer />

    			<style jsx>{`
    				h1 {
    					text-align: center;
    					//margin: 0;
    				}
    				h4 {
    					//margin: 0;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					background: white;

    					-webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 4px 8px 0px #222222;
    				}
				`}</style>
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