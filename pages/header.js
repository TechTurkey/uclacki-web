import React, { Component } from 'react';
import Link from 'next/link'


class Header extends Component {
	render(){
		return (
			<header role="banner" className="content-header">
				<div className="title-header">
					<img src="/static/logo.jpg" alt="CKI UCLA Logo" className="logo-img header-logo" />
					<h1>UCLA Circle K International</h1>
				</div>
				<div role="navigation" className="header-nav">
					<ul>
						<li id="login">LOGIN</li>
						<li>Members</li>
						<Link href="/resources">
						<li>Resources</li>
						</Link>
						<Link href="/events">
						<a><li>Events</li></a>
						</Link>
						<Link href="/about">
						<a><li>About</li></a>
						</Link>
						<Link href="/index">
						<a><li>Home</li></a>
						</Link>

					</ul>
				</div>
			</header>
		);
	}
}

export default Header