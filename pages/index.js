import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Popup from "reactjs-popup";
import Footer from './footer.js';
import Authentication from './auth.js';
import Nav from "../components/Nav.js";

class Index extends Component {
	render() {
		return(
			<div>
				<Nav />

				<div className="landing">
					<img src="../static/Nhi design.png" />
				</div>

				<Current />
 				<News />
 				<Statistics />
				<Footer />

				

				<style jsx>{`
					.landing {
						height: calc(100vh - 70px);
						max-height: 100vh;
					}

					.landing img {
						height: 100%;
						width: auto;
					}
				`}</style>
			</div>
		);
	}
}

// class Index extends Component {
// 	render() {
// 		return (
// 			<div>
// 				 <Head>
//       				<title>UCLA CKI | Home</title>
//       				<link href="/static/index.css" rel="stylesheet" />
//       				<link rel="shortcut icon" href="/static/CKI-logo.png" />
//     			</Head>
// 				<Header />
// 				<Panels />
// 				<Stripes />
// 				<CKIBanner />
// 				<Stripes />
// 				<Current />
// 				<News />
// 				<Statistics />
// 				<Footer />
// 			</div>
// 			);
// 	}
// }

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
						<li><Authentication /></li>
					</ul>
				</div>
			</header>
		);
	}
}
class Panels extends Component{
	render(){
		return(
			<div className="panel-area">
				<Link href="/about">
				<a>
				<div className="lpanel">
					<div className="bg" id="bg1">
					</div>
					<h2>ABOUT</h2>

				</div>
				</a>
				</Link>
				<Link href="/events">
				<a>
				<div className="cpanel">
					<div className="bg" id="bg2">
					</div>
					<h2>EVENTS</h2>
				</div>
				</a>
				</Link>
				<Link href="resources">
				<a>
				<div className="rpanel">
					<div className="bg" id="bg3">
					</div>
					<h2>RESOURCES</h2>
				</div>
				</a>
				</Link>
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

class CKIBanner extends Component{
	render(){
		return(
			<div className="cki-banner">
				<img src="/static/banner.jpg" alt="Weekly Banner" />
			</div>
		);
	}
}

class Current extends Component{
	render(){
		return (
			<section className="current">
			<div className="container">
				<div className="current-box">
					<div className="info-box">
						<p>Thursday, June 7th</p>
						<p>7PM-8:30PM at Perloff 1102</p>
					</div>
					<h2>Next Meeting</h2>
				</div>
				<div className="current-box">
					<div className="info-box">
						<p>Monday: Fundraising, Special Events, Service, PR</p>
						<p>Tuesday: GraphTech, KFAM, Spiritship, MDEER</p>
					</div>
					<h2>Committee Dinners</h2>
				</div>
			</div>
			</section>
		);
	}
}

class News extends Component{
	render(){
		return(
			<section className="news">
			<div className="section-header">
				<h2>News</h2>
			</div>
			<div className="container">
				<div className="news-box">
					<img src="/static/awards.jpg" alt="news1" />
					<h3>UCLA Receives Multiple Awards at 2018 Kiwanis Youth Convention</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</div>
				<div className="news-box">
					<img src="/static/kimbap.jpg" alt="news2" />
					<h3>Bap to the top</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</div>
				<div className="news-box">
					<img src="/static/golf.jpg" alt="news3" />
					<h3>A Cold 18 Holes</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</div>
			</div>
			</section>
		);
	}
}

class Statistics extends Component{
	render(){
		return (
			<section className="statistics">
			<div className="section-header">
				<h2>Statistics</h2>
			</div>
			<div className="container">
				<div className="stat-box">
					<img src="/static/gear.png" alt="gear" />
					<p>2044 Hours</p>
					<h3>Service</h3>
				</div>
				<div className="stat-box">
					<img src="/static/globe.png" alt="globe" />
					<p>1052 Hours</p>
					<h3>Leadership</h3>
				</div>
				<div className="stat-box">
					<img src="/static/heart.png" alt="heart" />
					<p>598 Hours</p>
					<h3>Fellowship</h3>
				</div>
			</div>
			</section>
		);
	}
}

export default Index