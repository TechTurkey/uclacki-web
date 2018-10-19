import React, { Component } from 'react';
import { getCookie, removeCookie } from "../lib/session";
import Link from 'next/link';
import * as JWT from 'jwt-decode';
import 'isomorphic-fetch';

const cookie_name = 'jwt';

class Profile extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		nicename: this.props.auth.user,
    		email: this.props.auth.email,
    		image: this.props.auth.image,

    		open: false
    	};
    	this.logout = this.logout.bind(this);
  	}

  	logout() {
    	// remove user from local storage to log user out
    	removeCookie(cookie_name);
    	location.reload(true);
	}

	componentDidMount(){
		// var url = "http://uclacki.org/api/profile/";
		// var userjson = fetch(url).then(response=>response.json()).then(data =>
  //     this.setState({
  //       nicename: data.name.first + ' ' + data.name.last,
  //       email: data.email,
  //     }))
  	  document.addEventListener('mousedown', this.handleClick);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick);
	}

	dropdownOpen = () => {
		this.setState((prevState) => {
			return {open: !prevState.open};
		});
	}

	handleClick = (event) => {
		if(this.node && this.node.contains(event.target))
		{
			return;
		} else {
			this.setState({open: false});
		}
	}

	render(){
		return(
		<li className="dropdown" onClick={this.dropdownOpen} ref={node => this.node = node}>
			<img className="profile_image" src={`${this.state.image ? this.state.image : '/static/profileimages/unknown.jpg'}`} />
			<div className={`dropdown-content ${this.state.open ? 'show' : ''}`}>
				<p>{this.state.nicename}</p>
				<p>{this.state.email}</p>
				<Link href="#"><a>My Profile</a></Link>
				<Link href="#"><a onClick={this.logout}>Logout</a></Link>
			</div>
		<style jsx>{`

			@media (min-width: 992px) {
				.dropdown {
					// float: left;
					// overflow: hidden;
					width: 50px;
					height: 50px;
				}
				.profile_image {
					cursor: pointer;

					width: 100%;
					height: 100%;
				}
				/* Dropdown uses absolute positioning in wide-screen */
				div.dropdown-content {
					position: absolute;
					right: 0;
					padding: 10px 0;
					min-width: 100%;

					box-shadow: 2px 4px 8px 2px rgba(150,150,150,0.5);
					background: white;

					display: none;
					white-space: nowrap;	// don't wrap the words, each item gets it's own line
				}
				div.dropdown-content.show {
					display: block;
				}
				div.dropdown-content a, div.dropdown-content p {
					display: block;
					padding: 4px 17px;
				}
				
			}
			@media (max-width: 991px) {
				.profile_image {
					width: 50px;
					height: 50px;

					margin-left: 15px;
				}
				.dropdown, .dropdown-content {
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
				}
				div.dropdown-content a, div.dropdown-content p {
					padding: 5px 10px;
				}
			}
			div.dropdown-content p {
				margin: 0;
			}
			.dropdown-content {
				font-family: 'Century Gothic', sans-serif;
			}
			.dropdown-content a {
				text-decoration: none;
				color: black;
				font-weight: bold;
				transition: color 0.25s ease;
			}
			.dropdown-content a:hover {
				background-color: black;
				color: white;
			}
			

			.profile_image {
				border-radius: 50%;
				border: solid 1px black;
			}


			

			// /* Dropdown content (hidden by default) */
			// .dropdown-content {
			// 	display: none;
			// 	position: absolute;
			// 	right: 0;
			// 	// padding-top: 5px;
			// 	// border-top: 5px solid transparent;
			// 	background-color: #f9f9f9;
			// 	min-width: 160px;
			// 	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			// 	z-index: 100;
			// }

			// /* Links inside the dropdown */
			// .dropdown-content a {
			// 	//float: none;
			// 	color: black;
			// 	padding: 12px 16px;
			// 	text-decoration: none;
			// 	display: block;
			// 	text-align: left;
			// }

			// /* Add a grey background color to dropdown links on hover */
			// .dropdown-content a:hover {
			// 	background-color: #ddd;
			// }

			// /* Show the dropdown menu on hover */
			// .dropdown:hover .dropdown-content {
			// 	display: block;
			// }


			// .dropdown > img::after {
			// 	content: "";
			// 	display: inline-block;
			// 	width: 0;
			// 	height: 0;
			// 	margin-left: .255em;
			// 	vertical-align: .255em;
			// 	border-top: .3em solid;
			// 	border-right: .3em solid transparent;
			// 	border-bottom: 0;
			// 	border-left: .3em solid transparent;
			// }

			// .dropdown div {
				// 	position: absolute;
				// 	background-color: white;
				// 	min-width: 60px;
				// 	left: 0;

				// 	display: none;
				// }

		// .dropdown:hover div {
			
			// 	display: block;
			
			// }
			// .dropdown div:hover {
				// 	display: block;
				// }

				// .dropdown div a {
					// 	display: block;
					// 	padding: 5px 20px;
					// 	white-space: nowrap;
					// }

					`}</style>
				</li>
			);
	}
}
	
export default Profile;