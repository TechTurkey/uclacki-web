import React, { Component } from 'react';
import Link from 'next/link';
import Popup from "reactjs-popup";
import MainFactory from '../layout/main.js';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';
import Head from 'next/head';

class Index extends Component {
	render() {
		return(
			<div className="main">
				<Head>
					<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charset="utf-8" />
				</Head>

				<div className="header">
					<Nav />
				</div>
				
				<div className="landing">
					<img src="/static/Homepage/FRONTPAGE.gif" />
					<img src="/static/Homepage/FRONTPAGE bottom.gif" />
					<div className="nextmeeting">
						<p>First meeting of the Year! October 4th, 7:00PM-9:00PM Kinsey</p>
					</div>
				</div>

				<Footer></Footer>


				<style jsx global>{`
					body {
						margin: 0;
					}
					body::-webkit-scrollbar {
						width: 0;
						background: trasparent;
					}
					
					/* Bottom sticky footer */
					html, body, body > div:first-child, div#__next {
				      height: 100%;
				    }
					.main {
						display: flex;
						flex-direction: column;
						height: 100%;
					}
					.landing {
						position: relative;
						flex: 1 0 auto;	// Grow 1, shrink 0, auto flex-basis
					}
					.footer {
						flex-shrink: 0;
					}
				`}</style>
					
					<style jsx>{`
						.landing {

						}

						.landing img {
							display: block;
							height: auto;
							width: 100%;
						}

						.nextmeeting {
							color: white;
							position: absolute;
							top: 0;
							left: 50%;
							transform: translate(-50%, 0);

							margin-top: 7px;
							padding: 0 10px;
							background: rgba(255, 255, 255, 0.25);
							border-radius: 10px;
						}
						.nextmeeting p {
							margin: 6px 0;
						}
					`}</style>

					<style jsx global>{`
						.content-wrap {
							margin: 0 auto;
							padding:5%;
							overflow: auto;
						}

						.section-header{
							font-size: 2em;
							border-bottom: 4px black solid;
							width: 25%;
							margin-top: 0;
							margin:auto;
						}

						.container{
							width: 60%;
							margin:50px auto auto;
						}

						/*------------------------------------------------------------------------------------------------*/
						/*---------------------Current(Next Meeting/Commitee Dinners) Styling-----------------------------*/
						/*------------------------------------------------------------------------------------------------*/
						.current{
							/*Change color styling for the current information section here*/
							--section-background: #D3D3D3; /*Lighter Grey*/
							--info-box-background: #58595B; /*Dark Grey*/
							--info-box-font-color: #ffffff; /*white*/
							/*End of current styling*/

							float: left;
							width: 100%;
							text-align: center;
							background-color: var(--section-background);
						}

						.current-box{
							float:left;
							width: 50%;
							padding:10px;
						}

						.current-box h2{
							font-size: 2.5em;
						}

						.info-box{
							border-radius: 15px;
							font-size: 1.5em;
							display: inline-block;
							padding: 2%;
							width: 95%;
							color: var(--info-box-font-color);
							background-color: var(--info-box-background);
						}

						/*------------------------------------------------------------------------------------------------*/
						/*-------------------------------------------News Styling-----------------------------------------*/
						/*------------------------------------------------------------------------------------------------*/

						.news{
							/*Change color styling for the news section here*/
							--news-background:   #C7D6EE; /*light blue*/
							--news-container-background: #778899; /*blue grey*/
							--news-title-color: #000000; /*black*/
							--news-content-color: #000000; /*black*/
							/*End of News Styling*/
							float:left;
							width:100%;
							padding: 30px;
							text-align: center;
							background-color: var(--news-background);

						}

						.news .container {
							display: inline-block;
							background-color: var(--news-container-background);
							margin-bottom: 2%;
						}

						.news-box{
							display:inline-block;
							float:left;
							width: 31.4%;
							padding:10px;
							margin: 50px 0.9%;
						}
						.news-box img{
							vertical-align: middle;
							width:100%;
							margin-bottom: 20px;
						}

						.news-box h3{
							color: var(--news-title-color);
						}

						.news-box p{
							color: var(--news-content-color);
						}

						/*------------------------------------------------------------------------------------------------*/
						/*-------------------------------------Statistics Styling-----------------------------------------*/
						/*------------------------------------------------------------------------------------------------*/

						.statistics{
							/*Change color styling for the statistics section here*/
							--statistics-background:#7ea4ce; /*light blue-grey*/
							/*End of Statistics Styling*/
							float:left;
							width:100%;
							padding: 30px;
							text-align: center;
							background-color: var(--statistics-background);
						}

						.stat-box{
							display:inline-block;
							float:left;
							width: 33.33%;
							padding:10px;
						}
						.stat-box img{
							vertical-align: middle;
							width:33.33%;
							margin-bottom: 50px;
						}

						.stat-box p{
							font-size: 1.5em;
						}

						.stat-box h3{
							font-size: 2em;
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
					<img src="/static/Homepage/awards.jpg" alt="news1" />
					<h3>UCLA Receives Multiple Awards at 2018 Kiwanis Youth Convention</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</div>
				<div className="news-box">
					<img src="/static/Homepage/kimbap.jpg" alt="news2" />
					<h3>Bap to the top</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
				</div>
				<div className="news-box">
					<img src="/static/Homepage/golf.jpg" alt="news3" />
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
					<img src="/static/Graphics/gear.png" alt="gear" />
					<p>2044 Hours</p>
					<h3>Service</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/globe.png" alt="globe" />
					<p>1052 Hours</p>
					<h3>Leadership</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/heart.png" alt="heart" />
					<p>598 Hours</p>
					<h3>Fellowship</h3>
				</div>
			</div>
			</section>
		);
	}
}

export default Index;
