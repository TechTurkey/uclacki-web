import React, { Component } from 'react';
import Link from 'next/link';
import Authentication from './auth.js';
import Profile from './profile.js';
import { getCookie } from "../lib/session";

/*
Detect Click Outside: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
*/

class Nav extends Component {

	constructor(props) {
		super(props);
		console.log(props);
	}

	state = {
		dropdownOpen: false,
		itemIndexOpen: 0,
		width: 0, height: 0
	};

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	  document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	  document.removeEventListener('mousedown', this.handleClickOutside);
	}

	updateWindowDimensions = () => {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	};

	hamburgerClickHandler = () => {
		this.setState((prevState) => {
			return {dropdownOpen: !prevState.dropdownOpen};
		});
	};

	dropdownHoverHandler = (index) => {
		if(this.state.width >= 992)
		{
		this.setState({itemIndexOpen: index});
		}	
	};
	dropdownClickHandler = (index) => {
		if(this.state.itemIndexOpen==index)
			this.setState({itemIndexOpen: 0});
		else
			this.setState({itemIndexOpen: index});
	};

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

	handleClickOutside = (event) => {
		if (this.wrapperRef && this.wrapperRef.className.includes("show") && event && !event.target.className.includes('hamburger-button')
		&& !this.wrapperRef.contains(event.target)) {
	      this.setState((prevState) => {
	      	return {dropdownOpen: false, itemIndexOpen: 0};
	      });
	    }
	}

 render() {

 	return(
		<header >
			<nav>
				<div className="hamburger">
					<MobileToggleButton toggle={this.hamburgerClickHandler} />
				</div>
				<div className="logo">
					<Link href="/index"><img src="/static/Graphics/Theme-Logo.jpg" /></Link>
				</div>
				<div className="space" />
				<div className={`main-menu ${this.state.dropdownOpen ? 'show' : ''} `} ref={this.setWrapperRef}>
					<ul>
						<li>
							<Link href="/index"><a>Home</a></Link>
						</li>
						<li className="dropdown" onMouseEnter={() => this.dropdownHoverHandler(1)}
						onMouseLeave={() => this.dropdownHoverHandler(0)}
						onClick={() => this.dropdownClickHandler(1)}>
							<a>About</a>
							<div className={`dropdown-content ${this.state.itemIndexOpen==1 ? 'show' : ''}`}>
									<Link href="/about"><a>About Us</a></Link>
									
									<p className="label">Service</p>
									<Link href="/about/district-initiatives"><a>District Initiatives</a></Link>

									<p className="label">Leadership</p>
									<Link href="/about/board"><a>Board</a></Link>
									<Link href="/committees"><a>Committees</a></Link>

									<p className="label">Fellowship</p>
									<Link href="/about/familymentor"><a>Families & Mentorship</a></Link>

							</div>
						</li>
						<li className="dropdown" onMouseEnter={() => this.dropdownHoverHandler(2)}
						onMouseLeave={() => this.dropdownHoverHandler(0)}
						onClick={() => this.dropdownClickHandler(2)}>
							<a>Media</a>
							<div className={`dropdown-content ${this.state.itemIndexOpen==2 ? 'show' : ''}`}>
								<Link href="articlepage"><a>Articles</a></Link>
							</div>
						</li>
						<li className="dropdown" onMouseEnter={() => this.dropdownHoverHandler(3)}
						onMouseLeave={() => this.dropdownHoverHandler(0)}
						onClick={() => this.dropdownClickHandler(3)}>
							<a>Events</a>
							<div className={`dropdown-content ${this.state.itemIndexOpen==3 ? 'show' : ''}`}>
									<Link href="/events"><a>Upcoming Events</a></Link>
									<Link href="/district-events"><a>District Events</a></Link>
							</div>
						</li>
						<li>
							<Link href="/resources"><a>Resources</a></Link>
						</li>
						<li className="profile">
							<Authentication auth={this.props.auth} />
						</li>
						
					</ul>
				</div>
			</nav>
			<style jsx>{`
				/* Flexbox: layout items */
				header {
					width: 100%;
				}
				nav {
					display: flex;
					align-items: center;	// vertical alignment
					flex-wrap: wrap;	// allow menu list to turn into mobile menu

					height: 50px;

					-webkit-box-shadow: 0 8px 6px -6px #383838;
					-moz-box-shadow: 0 8px 6px -6px #383838;
					box-shadow: 0px 4px 6px 0px #383838;
					font-family: "Myriad Pro";
					background: white;

					// Make nav sit on top of the whole page (or drop downs will fall behind)
					position: relative;
					z-index: 1;
				}
				.space {
					flex: 1;	// push menu items to the right
				}

				.hamburger {
					margin-left: 10px;
					display: inline-block;
				}

				.logo, .logo img {
					height: 100%;
					width: auto;
					margin-left: 8px;	// give hamburger menu or the left wall some space
				}

				/* Hover effect on all items in the menu + dropdowns */
				.main-menu a {
					text-decoration: none;
					color: black;
					transition: color 0.25s ease;
				}
				.main-menu a:hover, .dropdown-content a:hover {
					background-color: black;
					color: white;
				}
				

				/* General list resetting for both mobile and web menus */
				.main-menu > ul {
					list-style-type: none;
					display: flex;
					align-items: center;
					margin: 0;
					padding: 0;
				}
				.main-menu > ul > li {
					position: relative;	// need relative positioning for absolute dropdowns
					background: white;
				}
				.main-menu > ul > li > a {
					border-radius: 5px;
					padding: 7px 15px;
					display: inline-block;
				}
				.main-menu p {
					margin: 0;	// margin messes up alignment
				}
				.main-menu .profile {
					margin-right: 10px;
				}

				/* Dropdown arrow icon */
				.dropdown > a::after {
					content: '';
					// position: absolute;
					// top: 50%;
					// right: 5px;
					// transform: translateY(-50%);
					// width: 0; 
					// height: 0; 
					// border-left: 5px solid transparent;
					// border-right: 5px solid transparent;
					// border-top: 5px solid;
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

				@media (min-width: 992px) {

					/* Hide hamburger menu on wider screens */
					.hamburger {
						display: none;
					}

					/* Account for scrollbar overlaying menu items on desktops */
					.main-menu {
						margin-right: 20px;
					}

					/* Dropdown uses absolute positioning in wide-screen */
					div.dropdown-content {
						position: absolute;
						left: 0;
						padding-top: 10px;
						min-width: 100%;

						box-shadow: 2px 4px 8px 2px rgba(0,0,255,0.5);
						background: white;

						display: none;
						white-space: nowrap;	// don't wrap the words, each item gets it's own line
					}
					div.dropdown-content.show {
						display: block;
					}
					div.dropdown-content a {
						display: block;
						padding: 5px 15px;
					}
				}

				@media(max-width: 991px) {
					/* Force menu items into a dropdown format for the hamburger menu */
					.main-menu > ul {
						flex-direction: column;
						padding: 0;
					}
					.main-menu {
						flex: 0 0 100%;	// take up all horizontal space
						background: white;
						border: solid 1px gray;

						max-height: 0;
						overflow: hidden;
						transition: max-height 0.5s ease-in-out;
					}
					.main-menu.show {
						max-height: 500px;
					}
					.main-menu li {
						width: 100%;	// take up all space
						// padding: 5px 0;
					}
					.main-menu a {
						width: 100%;
						height: 100%;
						display: inline-block;
					}
					.space {
						flex: 0 0 0;
					}



					/* Dropdowns are NOT absolutely positioned in mobile menu */
					div.dropdown-content {
						max-height: 0;
						overflow: hidden;
						transition: max-height 1s cubic-bezier(0, 1, 0, 1);
					}
					div.dropdown-content.show {
						max-height: 200px;
						transition: max-height 0.5s ease-in-out;
					}
					div.dropdown-content a {
						padding: 5px 25px;
					}
				}

			`}</style>
		</header>
	);
}
}


const MobileToggleButton = (props) => (
	<button className="hamburger-button" onClick={props.toggle}>
		<div className="hamburger-button-line"/>
		<div className="hamburger-button-line"/>
		<div className="hamburger-button-line"/>

		<style jsx>{`
			.hamburger-button {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 18px;
				width: 24px;
				padding: 0;
				box-sizing: border-box;

				background: transparent;
				border: none;
				cursor: pointer;
			}
			.hamburger-button:focus {
				outline: none;
			}

			.hamburger-button-line {
				width: 24px;
				height: 3px;

				background: black;
			}
		`}</style>
	</button>
);

export default Nav;