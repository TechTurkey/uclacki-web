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

    			<div className="panels">
    				<div className="service">
    					<h1>Service</h1>
    				</div>

    				<div className="fundraising">
						<h1>Fundraising</h1>
    				</div>
    				<div className="kfam">
    					<h1>Kiwanis Family</h1>
    				</div>
    				

    				<div className="special">
    					<h1>Special Events</h1>
					</div>


    				<div className="mdeer">
    					<h1>MDEER</h1>
    				</div>


    				<div className="graphtech">
    					<h1>GraphTech</h1>
    				</div>


    				<div className="publicrelations">
    					<h1>Public Relations</h1>
    				</div>
    				<div className="spiritship">
    					<h1>Spiritship</h1>
    				</div>

    				<p>Committee Information</p>

    			</div>

    			<Footer />

    			<style jsx>{`
    				.panels {
					  display: grid;
					  padding: 2% 8%;
					  grid-gap: 10px;
					  grid-template-columns: repeat(2, 1fr);
					  grid-auto-rows: 1fr;
					  max-width: 100%;
					  font-size: 0;
					}

					.panels > div {
						position: relative;
						text-align: center;
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
						
						display: inline-block;
						min-height: 400px;
						width: 50%;

						font-size: 25px;
						color: white;
					}

					.panels > div h1 {
						position: absolute;
						font-family: 'cartoon_slamregular';
						top: 40%;
						left: 50%;
						transform: translate(-50%, -50%);
					}


					.service {
					  background-image: url('/static/griffith.jpg');
					}

					.fundraising {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg");
					}

					.kfam {
					  background-image: url("/static/Member-Retreat.jpg");
					}

					.special {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
					}

					.mdeer {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
					}

					.graphtech {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
					}

					.publicrelations {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
					}

					.spiritship {
					  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
					}

					@supports (display: grid) {
					  .panels > div {
					    width: auto;
					    min-height: 0;
					  }
					  
					  .service {
					    grid-column: 1 / span 2;
					    grid-row: 1 / 50;
					    -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
					    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
					  }

					  .fundraising {
					    grid-column: 1 / span 1;
					    grid-row: 50 / 100;
					    -webkit-clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
					    clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
					    margin-top: -73px;
					  }

					  .kfam {
					    grid-column: 2 / span 1;
					    grid-row: 50 / 100;
					    -webkit-clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
					    clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
					    margin-top: -73px;
					    margin-left: -15%;
					    margin-bottom: 18px;
					  }

					  .special {
					    grid-column: 1 / span 1;
					    grid-row: 100 / 150;
					    -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    clip-path: polygon(90% 0, 80% 100%, 0 100%, 0 9%);
					    // -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    // clip-path: polygon(44% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    margin-top: -107px;
					    max-height: 300px;
					  }
					  .mdeer {
					    grid-column: 2 / span 1;
					    grid-row: 100 / 150;
					    max-height: 300px;
					    -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    clip-path: polygon(8% 0, 100% 29%, 100% 100%, 0 100%);
					    margin-top: -107px;
					    margin-left: -20%;
					  }
					  .graphtech {
					    grid-column: 1 / span 2;
					    grid-row: 120 / 170;
					    -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    clip-path: polygon(45% 0, 40% 50%, 0 50%, 0 5%);
					    // -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					    // clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					  }
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