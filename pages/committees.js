import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './footer.js';
import Header from './header.js';
import Link from 'next/link';
import Nav from '../components/Nav.js';



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

	    			<div className="panels">
	    				<div className="committees">
	    					<h1>Committees</h1>
	    				</div>

	    				<div className="service">
	    					<Link href="#">
	    						<div><h1>Service</h1></div>
	    					</Link>
	    				</div>

	    				<div className="fundraising">
							<Link href="#">
								<div><h1>Fundraising</h1></div>
	    					</Link>
	    				</div>
	    				<div className="kfam">
	    					<Link href="#">
	    						<div><h1>Kiwanis Family</h1></div>
	    					</Link>
	    				</div>
	    				

	    				<div className="special">
	    					<Link href="#">
	    						<div><h1>Special Events</h1></div>
							</Link>
						</div>


	    				<div className="mdeer">
	    					<Link href="#">
	    						<div><h1>MDEER</h1></div>
	    					</Link>
	    				</div>


	    				<div className="graphtech">
	    					<Link href="/committees/graphtech">
	    						<div><h1>GraphTech</h1></div>
	    					</Link>
	    				</div>


	    				<div className="publicrelations">
	    					<Link href="#">
	    						<div><h1>Public Relations</h1></div>
	    					</Link>
	    				</div>
	    				<div className="spiritship">
	    					<Link href="/committees/spiritship">
	    						<div><h1>Spiritship</h1></div>
	    					</Link>
	    				</div>

	    				<p>Committee Information</p>

    				</div>

    			</div>

    			<Footer />

    			<style jsx>{`
    				.panels {
    					background-color: white;
					  display: grid;
					  padding: 2% 1%;
					  margin: 6% 7%;
					  -webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 8px 12px 6px #444444;

					  grid-gap: 10px;
					  grid-template-columns: repeat(3, 1fr);
					  grid-template-rows: 200px 400px 300px 400px 250px;
					  max-width: 100%;
					  font-size: 0;

					  grid-template-areas: "committees committees committees"
					  						"service fundraising kfam"
					  						"service special special"
					  						"mdeer graphtech publicrelations"
					  						"spiritship spiritship spiritship";
					}

					.panels > div {
						position: relative;
						text-align: center;
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
						
						// display: inline-block;
						// min-height: 400px;
						width: 50%;

						font-size: 18px;
						color: white;
					}

					.panels > div > div {
						width: 100%;
						height: 100%;
					}

					.panels > div > div:hover {
						cursor: pointer;
						background-color: rgba(255, 255, 255, 0.3);
					}

					.panels > div:not(:first-child) h1 {
						position: absolute;
						font-family: 'cartoon_slamregular';
						top: 40%;
						left: 50%;
						transform: translate(-50%, -50%);
					}

					.committees {
						grid-area: committees;
						background-color: #0097dd;
						// margin-bottom: -10px;
						display: flex;
						align-items: center;
						justify-content: center;

					}
					.committees h1 {
						font-size: 72px;
					}

					.service {
					  grid-area: service;
					  background-image: url("/static/Committees/service.jpg");
					}

					.fundraising {
					  grid-area: fundraising;
					  background-image: url("/static/Committees/fundraising.jpg");
					}

					.kfam {
					  grid-area: kfam;
					  background-image: url("/static/Committees/kfam.jpg");
					}

					.special {
					  grid-area: special;
					  background-image: url("/static/Committees/special_events.jpg");
					}

					.mdeer {
					  grid-area: mdeer;
					  background-image: url("/static/Committees/mdeer.jpg");
					}

					.graphtech {
					  grid-area: graphtech;
					  background-image: url("/static/Committees/graphtech.jpg");
					}

					.publicrelations {
					  grid-area: publicrelations;
					  background-image: url("/static/Committees/pr.jpg");
					}

					.spiritship {
					  grid-area: spiritship;
					  background-position: center 40%;
					  background-image: url("/static/Committees/spiritship.jpg");
					}

					@supports (display: grid) {
						.panels > div {
							width: auto;
						}
						.fundraising {
							-webkit-clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
						    clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
						    margin-right: -17px;
						}

						/* Large desktop */
						@media (min-width: 1200px) { .fundraising { margin-right: -17px; }  }

						/* Portrait tablet to landscape and desktop */
						@media (min-width: 768px) and (max-width: 979px) {  .fundraising { margin-right: -15px; }   }

						/* Landscape phone to portrait tablet */
						@media (max-width: 767px) {  .fundraising { margin-right: -12px; }   }

						/* Landscape phones and down */
						@media (max-width: 480px) {  .fundraising { margin-right: -10px; }   }


						.kfam {
							-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
						    clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
						    margin-left: -17px;
						}

						.mdeer {
							-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
						    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
						    margin-right: -30px;

						}
						.graphtech {
							-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
						    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
						    margin: 0 -15px;
						}
						.publicrelations {
							-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
						    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
						    margin-left: -30px;
						}


					}

					// @supports (display: grid) {
					//   .panels > div {
					//     width: auto;
					//     min-height: 0;
					//   }
					  
					//   .service {
					//     grid-column: 1 / span 2;
					//     grid-row: 1 / 50;
					//     -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
					//     clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
					//   }

					//   .fundraising {
					//     grid-column: 1 / span 1;
					//     grid-row: 50 / 100;
					//     -webkit-clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
					//     clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
					//     margin-top: -73px;
					//   }

					//   .kfam {
					//     grid-column: 2 / span 1;
					//     grid-row: 50 / 100;
					//     -webkit-clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
					//     clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
					//     margin-top: -73px;
					//     margin-left: -15%;
					//     margin-bottom: 18px;
					//   }

					//   .special {
					//     grid-column: 1 / span 1;
					//     grid-row: 100 / 150;
					//     -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     clip-path: polygon(90% 0, 80% 100%, 0 100%, 0 9%);
					//     // -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     // clip-path: polygon(44% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     margin-top: -107px;
					//     max-height: 300px;
					//   }
					//   .mdeer {
					//     grid-column: 2 / span 1;
					//     grid-row: 100 / 150;
					//     max-height: 300px;
					//     -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     clip-path: polygon(8% 0, 100% 29%, 100% 100%, 0 100%);
					//     margin-top: -107px;
					//     margin-left: -20%;
					//   }
					//   .graphtech {
					//     grid-column: 1 / span 2;
					//     grid-row: 120 / 170;
					//     -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     clip-path: polygon(45% 0, 40% 50%, 0 50%, 0 5%);
					//     // -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//     // clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
					//   }
					// }

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