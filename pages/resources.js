import React, { Component } from 'react';
import MainFactory from '../layout/main.js';
import Popup from 'reactjs-popup';

/*
Responsive Image Maps: https://patrickkettner.com/posts/responsive-image-maps/
SVG Drop Shadow/outline: https://codepen.io/jdsteinbach/pen/CsypF
*/

class Resources extends Component {
	constructor(props) {
		super(props);
		this.state = { open1: false, open2: false, open3: false };
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
			default:
				break;
		}
	};

	render() {
		return(
			<div>
				 
{/*<img src="/static/Resource Room.jpg" usemap="#image-map" /> <map name="image-map"> <area target="" alt="Member" title="Member" href="#" coords="313,251,322,234,297,248,297,222,289,214,296,195,298,156,325,148,325,181,334,213,327,223" shape="poly"/> <area target="" alt="Past Meetings" title="Past Meetings" href="#" coords="138,244,179,251,213,215,212,179,174,173,137,218" shape="poly"/> <area target="" alt="MRP" title="MRP" href="#" coords="241,136,257,143,268,167,308,142,309,117,273,131,276,108" shape="poly"/> </map>
      		*/}	<div className="room">
      		
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

					<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 734 413">
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
					<a onClick={() => this.openModal(1)}><path d="M95 296l36 15 37-11-1-9-32-14s-6-2-9 0l-26 6s-4 4-5 13z" fill="none"/></a>
					</g>
				
					<g>
					<title>Past Meetings</title>
					<a onClick={() => this.openModal(2)}><path d="M469 194l-9 33s0 2 2 3l26 7a5 5 0 0 0 5-4l8-32s1-3-2-4l-28-4a2 2 0 0 0-2 1z" fill="none"/></a>
					</g>

					<g>
					<title>Cheers</title>
					<a onClick={() => this.openModal(3)}><path d="M469 33s-15 55 10 63c0 0 16 3 22-17l11-6s22-4 38 9c0 0 12 13 7 58l-2 24-32-4-25 30s-8-5-11 5l13 3s2-1
					1 3l-2 9h2l2-4 30 3-3 15h3l2-11h2s4-9 12-4l18-6v-2l9 2 4-12h6s-1 3 4 3c0 0 9-7 2-10l-4 1-10-2-5 16-7-2 2-11-2-3
					12-41 6-58s6-36-24-46l-45-13s-15-7-13-7c0 0-6-15-11-11 0 0-18-2-22 26z" fill="none"/></a>
					</g>
					</svg>

					<Popup open={this.state.open1} closeDocumentOnClick onClose={() => this.closeModal(1)}>
						<div className="modal">
							Member application wow
						</div>
					</Popup>

					<Popup open={this.state.open2} closeDocumentOnClick onClose={() => this.closeModal(2)}>
						<div className="modal">
							Past meetings?
						</div>
					</Popup>

					<Popup open={this.state.open3} closeDocumentOnClick onClose={() => this.closeModal(3)}>
						<div className="modal">
							How do you feel?
						</div>
					</Popup>
					
    			</div>

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
    					/h/eight: auto;
    					//position: absolute;
    					background-image: url('/static/advtimeroom.jpg');
    					background-repeat: no-repeat;
    					background-size: 100% 100%;
    				}
    				#Layer_1 path {
    					fill: transparent;
    					cursor: pointer;

    					stroke: rgba(255, 212, 0, 1);
    					stroke-width: 3;
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

export default MainFactory(Resources, 'Resources');