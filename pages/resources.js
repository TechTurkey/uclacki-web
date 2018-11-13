import React, { Component } from 'react';
import MainFactory from '../layout/main.js';
import Popup from 'reactjs-popup';
import Nav from '../components/Nav.js';
import { getCookie } from "../lib/session";
import jwtDecode from 'jwt-decode';


/*
Responsive Image Maps: https://patrickkettner.com/posts/responsive-image-maps/
SVG Drop Shadow/outline: https://codepen.io/jdsteinbach/pen/CsypF
*/

class Resources extends Component {
	constructor(props) {
		super(props);
		this.state = { open1: false, open2: false, open3: false, open4: false };
	}

	openModal = (i) => {
		switch(i) {
			case 1:
				this.setState({ open1: true });
				break;
			case 2:
				this.setState({ open2: true });
				break;
			case 3:
				this.setState({ open3: true });
				break;
			case 4:
				this.setState({ open4: true });
				break;
			default:
				break;
		}
	};

	closeModal = (i) => {
		switch(i) {
			case 1:
				this.setState({ open1: false });
				break;
			case 2:
				this.setState({ open2: false });
				break;
			case 3:
				this.setState({ open3: false });
				break;
			case 4:
				this.setState({ open4: false });
				break;
			default:
				break;
		}
	};

	render() {
		return(
			<div>

	      		<div className="room">
	      		
						{/*<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360">
							<defs>

							<filter id="dropshadow" height="130%">
							  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
							  <feOffset dx="2" dy="2" result="offsetblur"/>
							  <feComponentTransfer>
							    <feFuncA type="linear" slope="0.5"/>
							  </feComponentTransfer>
							  <feMerge> 
							    <feMergeNode/>
							    <feMergeNode in="SourceGraphic"/>
							  </feMerge>
							</filter>
							<filter id="blur-filter" x="-2" y="-2" width="200" height="200">
						      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
						    </filter>

							</defs>

							<g>
							<title>Member</title>
								<a>
	<path fill="none" d="M303 157l-6 23-5 45 11 6-6 15 27 6v-29l15-4-14-29-2-24-3-17-15 5-2 3z"/>
								</a>
							</g>
							<g>
							<title>Coffin</title>
								<a>
	<path fill="none" d="M142 225v20l37 4 30-31v-38l-31-7-36 52z"/>
								</a>
							</g>
							<g>
							<title>Duck</title>
								<a>
	<path fill="none" d="M243 142h13l9 25 54-25-11-31-31 22 1-22-35 31z"/>
								</a>
							</g>
						</svg>*/}

						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 811">
						<defs>

							<filter id="dropshadow" height="130%">
							  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
							  <feOffset dx="2" dy="2" result="offsetblur"/>
							  <feComponentTransfer>
							    <feFuncA type="linear" slope="0.5"/>
							  </feComponentTransfer>
							  <feMerge> 
							    <feMergeNode/>
							    <feMergeNode in="SourceGraphic"/>
							  </feMerge>
							</filter>
							<filter id="blur-filter" x="-2" y="-2" width="200" height="200">
						      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
						    </filter>

							</defs>
						<g>
						<title>International Resources</title>
						<a onClick={() => this.openModal(4)}>  <path d="M341 660s16-28 57-29c0 0 41 2 58 35 0 0-39 16-38 40 0 0-1 20 15 33 0 0-32-14-34 26 0 0-6-16-32 8 0 0-16-40-40-16 0 0 39-87 14-97z" fill="none"/>
</a>
						</g>
						<g>
						<title>District Resources</title>
						<a onClick={() => this.openModal(3)}>  <path d="M467 665s27-62 82-45c0 0 61 14 70 67l-19 23s-38-43-80 0z" fill="none"/>
</a>
						</g>
					
						<g>
						<title>Reimbursement Form</title>
						<a onClick={() => this.openModal(2)}>  <path fill="none" d="M341 555l104 7 58-54-13-26-51-7-98 80z"/>
</a>
						</g>

						<g>
						<title>Past General Meetings</title> 
						<a onClick={() => this.openModal(1)}>  <path d="M179 490s1-44 15-38c0 0 11 18 55 6 0 0 67 79 87 32 0 0 62 17 56-26 0 0 70-17 25-58 0 0 65-82-54-88 0 0-1-79-68-52 0 0-30-28-62 15 0 0-49-21-54 42 0 0-55 7-16 64 0 0-36 44-7 101l-11 21 12 5z" fill="none"/>
</a>
						</g>
						</svg>

						<Popup open={this.state.open1} closeDocumentOnClick onClose={() => this.closeModal(1)}>
							<div className="modal">
								<h2>Past GM Slides</h2>
								<p><a href="https://drive.google.com/open?id=1gO3wFRbIXHOmVvQbxw5e2pEuvM5ezXjipWq0RP22qVw" target="_blank">Week 1 10/4</a></p>
								<p><a href="https://drive.google.com/open?id=1yCwTjU-L5vFxhXYhrp_t9fInwH2yWpQcyEZAfOH7CX0" target="_blank">Week 2 10/11</a></p>
								<p><a href="https://drive.google.com/open?id=1t28q5nukN8PoTFCfqmcKBEIxb2Nez5djA71Q1u-quXA" target="_blank">Week 3 10/18</a></p>
								<p><a href="https://drive.google.com/open?id=1Q3w284q2QYllPUmVq9nePJswKjqfosii77tGtNZAojk" target="_blank">Week 4 10/25</a></p>
								<p><a href="https://drive.google.com/open?id=1zYw2-pfidyiM1BZcTOVmUmA_raWDKrjnRv46ixzNAjM" target="_blank">Week 5 11/1</a></p>
								<p><a href="https://drive.google.com/open?id=1QwSw_Vs2PiZgUClcKIPEWcAhL1rb8fAeXKpyOl2R9NU" target="_blank">Week 6 11/8</a></p>
							</div>
						</Popup>

						<Popup open={this.state.open2} closeDocumentOnClick onClose={() => this.closeModal(2)}>
							<div className="modal">
								<a href="https://goo.gl/forms/936IkjwCZIOVN35G2">Reimbursement Form</a>
							</div>
						</Popup>

						<Popup open={this.state.open3} closeDocumentOnClick onClose={() => this.closeModal(3)}>
							<div className="modal">
								<a href="http://resources.cnhcirclek.org" target="_blank">Go to District resources page</a>
							</div>
						</Popup>

						<Popup open={this.state.open4} closeDocumentOnClick onClose={() => this.closeModal(4)}>
							<div className="modal">
								<a href="https://www.circlek.org/resources" target="_blank">Go to International resources page</a>
							</div>
						</Popup>
						</div>

						<style jsx global>{`
							body {
								margin: 0;
							}
						`}</style>
	    			<style jsx>{`
	    				// .room {
	    				// 	background-image: url('/static/Resource Room.jpg');
	    				// 	background-repeat: no-repeat;
	    				// 	background-size: cover;
	    				// 	width: 100%;
	    				// 	min-height: 1000px;
	    				// }
	    				.room img, .room map {
	    					width: 100%;
	    					height: auto;
	    				}
	    				#Layer_1 {
	    					//width: 100%;
	    					//height: auto;
	    					//position: absolute;
	    					background-image: url('/static/Graphics/colored.png');
	    					background-repeat: no-repeat;
	    					background-size: 100% 100%;
	    				}
	    				#Layer_1 path {
	    					fill: transparent;
	    					cursor: pointer;

	    					stroke: rgb(0, 255, 255);//rgba(255, 212, 0, 1);
	    					stroke-width: 8;
							filter: url(#blur-filter);

	    					transition: stroke 0.5s;
	    				}
	    				#Layer_1 a:hover path {
	    					// fill: rgba(30, 222, 221, 0.2);
	    					// filter: url(#dropshadow);
	    					// filter: drop-shadow(-5px -5px 5px #000);
	    					stroke: white;
	    					
	    					cursor: pointer;
	    				}
	    			`}</style>
			</div>
		);
	}
}

export default MainFactory({noFooter: true})(Resources);
