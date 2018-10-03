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
    	nicename: '',
    	email: '' };
    	this.logout = this.logout.bind(this);
  	}

  	logout() {
    	// remove user from local storage to log user out
    	removeCookie(cookie_name);
    	alert("Successfully logged out.");
    	location.reload(true);
	}

	componentDidMount(){
		var url = "http://uclacki.org/api/profile/";
		var userjson = fetch(url).then(response=>response.json()).then(data =>
      this.setState({
        nicename: data.name.first + ' ' + data.name.last,
        email: data.email,
      }))
	}

	render(){
		return(
			<div>
		<li className="dropdown">
			<a>Profile</a>
			<div className="dropdown-content">
				<Link href="#"><a>{this.state.nicename}</a></Link>
				<Link href="#"><a>{this.state.email}</a></Link>
				<Link href="#"><a onClick={this.logout}>Logout</a></Link>
				<Link href="#"><a>My Profile</a></Link>
			</div>
		</li>
		<style jsx>{`
			/* DROPDOWN */
			.dropdown {
				// float: left;
				// overflow: hidden;
			}
			.dropdown:hover {
				background-color: black;
				color: white;
			}

			/* Dropdown content (hidden by default) */
			.dropdown-content {
				display: none;
				position: absolute;
				left: 0;
				// padding-top: 5px;
				// border-top: 5px solid transparent;
				background-color: #f9f9f9;
				min-width: 160px;
				box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
				z-index: 100;
			}

			/* Links inside the dropdown */
			.dropdown-content a {
				//float: none;
				color: black;
				padding: 12px 16px;
				text-decoration: none;
				display: block;
				text-align: left;
			}

			/* Add a grey background color to dropdown links on hover */
			.dropdown-content a:hover {
				background-color: #ddd;
			}

			/* Show the dropdown menu on hover */
			.dropdown:hover .dropdown-content {
				display: block;
			}


			.dropdown > a::after {
				content: "";
				display: inline-block;
				width: 0;
				height: 0;
				margin-left: .255em;
				vertical-align: .255em;
				border-top: .3em solid;
				border-right: .3em solid transparent;
				border-bottom: 0;
				border-left: .3em solid transparent;
			}

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
						</div>
			);
	}
}
	
export default Profile;