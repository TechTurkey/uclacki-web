import React, { Component } from 'react';
import Link from 'next/link';
import Popup from "reactjs-popup";
import MainFactory from '../layout/main.js';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';
import Head from 'next/head';
import { imageRoute, images } from '../lib/home_slider_manifest';
var moment = require('moment');

class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nextMeeting: ""
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("/api/PageData", {
			headers: {
				'Content-Type': 'application/json',
		        'Accept': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			if(json && json.nextMeeting) {
				this.setState({
					nextMeeting: moment(json.nextMeeting).utc().format("MMMM Do") || "",
					images: json.images,
					imageLinks: json.imageLinks
				});
			}
			return json;
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return(
			<div className="landing">

			<div className="slider">
				<img src="/static/Homepage/FRONTPAGE.gif" />
				<Carousel {/*images={this.state.images} imageLinks={this.state.imageLinks}*/} />
			</div>
				{/*<div className="slider">
					<img className="active" src="/static/Homepage/Slider/Banquet Flyer (Tyler).png" />
					<img src="/static/Homepage/Slider/Banquet Flyer.png" />
					<img src="/
					static/Homepage/Slider/SP18 Welcome Week Banner.png" />
				</div>
				<img src="/static/Homepage/FRONTPAGE bottom.gif" />*/}

				{/*
				<div className="info">
					<div className="nextmeeting">
						Next General Meeting: Thursday {this.state.nextMeeting} 7:00PM - 9:00PM in Kinsey 1220B
					</div>

					<div className="MotW">
						<h2>Member of the Week</h2>
						<p>Week 9 | Kaylan Ngo</p>
						<img src="/static/Homepage/MotW.jpg" />
					</div>

					<div className="committee_meeting">
						<img src="/static/Homepage/committee_meetings.png"/>
					</div>
				</div>
			*/}
					
				<style jsx>{`
					.landing {
						position: relative;
						background-color: black;
					}
					// .landing::-webkit-scrollbar {
					// 	width: 0;
					// 	background: transparent;
					// }

					.slider {
						position: relative;
						width: 100%;
						height: auto;
					}

					.landing > .slider > img {
						display: block;
						height: auto;
						width: 100%;
					}

					.info {
						// display: flex;
						// flex-flow: row wrap;

						padding: 50px;

					}
					.info > div {
						color: white;
						text-align: center;
						// flex: 1 0 500px;
						margin: 10px 20px;
						padding: 20px;
					}
					.info .MotW {
						border: dashed 1px white;
					}
					.info .nextmeeting {
						// border: solid 1px white;
						color: black;
						background: white;
						border-radius: 10px;
					}
					.MotW h2 {
						margin: 0;
					}
					@media(max-width: 992px) {
						.MotW img {
							max-width: 100%;
						}
					}
					.MotW img {
						max-height: 400px;
					}
					.committee_meeting img {
						width: 75%;
						height: auto;
					}

				`}</style>
			</div>
		);
	}
}

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
			transitioning: false,
			images: images,
			duration: 4000
		};

		this.selectSlide = this.selectSlide.bind(this);
		this.timer = this.timer.bind(this);
	}

	selectSlide(id) {
		this.setState({
			currentImageIndex: id
		});
		clearInterval(this.state.interval);
		const interval=setInterval(this.timer, this.state.duration);
		this.setState({ interval: interval });
	}

	timer() {
		var nextSlide = this.state.currentImageIndex < this.state.images.length-1 ? ++this.state.currentImageIndex : 0;
    	this.setState({
			currentImageIndex: nextSlide
		});
	}

	componentDidMount() {
		const interval=setInterval(this.timer, this.state.duration);
		this.setState({ interval: interval });
	}

	render() {
		return(
			<div>
			<div className="carousel">

				{
					this.state.images &&
					this.state.images.map((image, i) => (
						<Slide imgUrl={image.name} link={image.link} key={i} active={this.state.currentImageIndex===i} />
					))
				}
				</div>

				<div>
					<ol className="indicators">
					{
						this.state.images &&
						this.state.images.map((image, i) => (
							<li onClick={() => this.selectSlide(i)} key={i} className={`${this.state.currentImageIndex===i ? "active" : ""}`}></li>
						))
					}
					</ol>
				</div>

				<style jsx>{`
					.carousel {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 45%;
						margin: auto auto;

						overflow: hidden;

						width: 50%;
						height: 35%;
					}

					.indicators {
						position: absolute;
						left: 50%;
						-webkit-transform: translateX(-50%);
						transform: translateX(-50%);
						bottom: 55%;
						margin: 0 auto;
						padding: 0;

						display: flex;
						list-style: none;
						z-index: 2;
					}
					.indicators > li {
						width: 10px;
						height: 10px;
						margin: 3px;
						opacity: 0.5;
						border-radius: 50%;

						background: #ffffff;
						cursor: pointer;

						transition: opacity 1s ease-in;
					}

					.indicators > li.active {
						opacity: 1;
					}

				`}</style>
			</div>
		);
	}
}

const Slide = ( props ) => (
	<div className="image-slide">
		{props.link ?
		<Link href={props.link}>
		<a>
		<img src={`${imageRoute + props.imgUrl}`} className={`${props.active ? "active" : ""}`}/>
		</a>
		</Link>
			:
		<img src={`${imageRoute + props.imgUrl}`} className={`${props.active ? "active" : ""}`}/>
		}
		<style jsx>{`
			.image-slide {
				overflow: hidden;
				position: absolute;
				left: 0;
				right: 0;
				text-align: center;
			}
			.image-slide, img {
				// max-width: 100%;
				height: 100%;
				margin: 0 auto;
			}
			.image-slide {
				z-index: ${props.active ? "1" : "-1"};
				transition: z-index 0.7s step-end;
			}

			img {
				opacity: 0;
				transition: opacity 0.7s;
			}
			img.active {
				opacity: 1;
				transition: opacity 0.7s ease-in-out;
				transition-delay: 0.7s;
			}
		`}</style>
	</div>
)

export default MainFactory({hideScrollbar: true})(Index);
