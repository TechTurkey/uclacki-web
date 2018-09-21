import React, { Component } from 'react';
import Link from 'next/link';
import Popup from "reactjs-popup";
import MainFactory from '../layout/main.js';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';
import Head from 'next/head';
import { getCookie } from "../lib/session";
import jwtDecode from 'jwt-decode';

const cookie_name = 'jwt';

class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nextMeeting: ""
		};
	}

	componentDidMount() {

	}

	getArticle = () => {
		fetch("http://142.93.83.231/api/PageData")
		.then(response => response.json())
		.then(json => {
			if(json) {
				this.setState({
					nextMeeting: json.nextMeeting
				});
			}
				return json;
		})
		.catch(err => {
			console.log(err);
			done();
		});
	}

	render() {
		return(
			<div className="landing">
				<img src="/static/Homepage/FRONTPAGE.gif" />

				<div className="slider">
					<Carousel />
				</div>
				{/*<div className="slider">
					<img className="active" src="/static/Homepage/Slider/Banquet Flyer (Tyler).png" />
					<img src="/static/Homepage/Slider/Banquet Flyer.png" />
					<img src="/static/Homepage/Slider/SP18 Welcome Week Banner.png" />
				</div>
				<img src="/static/Homepage/FRONTPAGE bottom.gif" />*/}

				<div className="info">
					<div className="MotM">
						It's me
					</div>

					<div className="nextmeeting">
						First meeting! October 4th 7:00PM - 9:00PM in
					</div>
				</div>
					
				<style jsx>{`
					.landing {
						position: relative;
					}
					// .landing::-webkit-scrollbar {
					// 	width: 0;
					// 	background: transparent;
					// }

					.landing > img {
						display: block;
						height: auto;
						width: 100%;
					}

					.slider {
						width: 500px;
						height: 200px;
						position: absolute;
						color: white;
						top: 100px;
						left: 50%;
						margin-left: -250px;	// account for width of this div
					}

					.info {
						display: flex;
						flex-flow: row wrap;

						padding: 50px;
					}
					.info .MotM {
						flex: 1 0 500px;
						padding: 20px;
						background: blue;
					}
					.info .nextmeeting {
						flex: 1 0 500px;
						padding: 20px;
						background: orange;
					}

				`}</style>
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

class Carousel extends Component {

	render() {
		return(
			<div className="carousel">

				<Slide imgUrl="Banquet Flyer (Tyler).png" />

				<style jsx>{`
					.carousel {
						width: 100%;
						height: 100%;
					}
				`}</style>
			</div>
		);
	}
}

const Slide = ( { imgUrl }) => (
	<div className="image-slide">
		<img src={`/static/Homepage/Slider/${imgUrl}`} />

		<style jsx>{`
			.image-slide {
				overflow: hidden;
			}
			.image-slide, img {
				max-width: 100%;
				max-height: 100%;
			}
		`}</style>
	</div>
)

export default MainFactory(Index, "Homepage", {hideScrollbar: true});
