import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
*/

class Service extends Component {
	render() {
		return(
    			<div className="fostershome">
	    			<div className="content">
		    			<h1>Service</h1>


		    			<Profiles />

		    			<hr />

		    			<p className="textbox">
		    			...
		    			</p>

					</div>

    			<style jsx>{`
    				h1, h3, h4 {
    					text-align: center;
    					color: blue;
    					// margin: 0;
    				}
    				h4 {
    					//margin: 0;
    					color: blue;
    				}
    				.fostershome {
    					overflow: auto;
    					background-image: url('/static/Committees/fosters-background.jpg');
    					background-position: center;
    					background-repeat: no-repeat;
    					background-size: cover;
    					background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					background: rgba(255, 255, 255, 0.8);
    					border-radius: 10px;

    					// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 4px 8px 0px #222222;
    				}
				`}</style>
			</div>
			
		);
	}
}

const Profiles = () => (
	<section className="people">
		<div className="profile">
			<img src="/static/Committees/Kylee Lyons.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Kylee Lyons</h2>
						<h4>Small Scale Service</h4>
					</div>
				</div>
				
					<p>Hi! My name is Kylee Lyons and I'm a third year, psycho-bio major, environmental
					engineering minor at UCLA. I'm the Small-Scale Service Chair, meaning I plan the weekly
					service events that general members get to volunteer at. In my free time, I enjoy backpacking,
					hiking, skiing (downhill, cross sountry and on water), rock-climbing in Wooden, and watching
					Netflix! A fun fact about me is that I've broken my collar bone, wrist, skull, torn my ACL,
					and bruised both heels so badly I couldn't walk for 3 days (but don't worry, I didn't do all
						these at once).  I was born and raised in Lake Tahoe so if you like the outdoors and
					adventures, I'm sure we'll get along very well 😊</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Gina Apinyavat.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Gina Apinyavat</h2>
						<h4>Large Scale Service</h4>
					</div>
				</div>
				
					<p>Hello! My name is Gina Apinyavat and I serve as the 2018-2019 Large Scale Service Chair. 
					I’m an incoming 4th year studying Psychology at UCLA. As Large Scale Service Chair my job 
					is to plan unique quarterly service projects that targets our District or International 
					Service initiatives for members to volunteer at! On top of that, I help assist our Small 
					Scale Service Chair with service events and service marathon. Besides volunteering and 
					serving our community I like to dance, swim and eat yummy food! Catch me either smiling or 
					laughing! I hope to get to know each and every one of you so we can make some memories together! 🙂</p>
			</div>
		</div>

		<style jsx>{`
			@media (max-width: 989px) {
				.people {
					flex-wrap: wrap;
				}
			}
			.people {
				display: flex;
				flex-flow: row nowrap;

				margin: 0 15px;
			}
			.profile {
				flex: 1 0;

				display: flex;
				flex-flow: column nowrap;
				align-items: center;

				margin: 0 15px;
			}
			.profile img {
				// margin: 0 auto;
				// display: inline-block;
				width: 200px;
				height: 200px;

				// border: solid 5px black;
				vertical-align: middle;
				border-radius: 50%;
			}
			.profile .block .title {
				text-align: center;
			}
			.profile .title h2 {
				margin: 5px 0;
			}
			.profile .title h4 {
				margin: 0;
			}
		`}</style>
	</section>
);

const Person = (props) => (
	<div className="profile">
		<img src={props.image} />

		
		<div className="block">
			<div className="title">
				<div>
					<h2>{props.name}</h2>
					<h4>{props.position}</h4>
				</div>
			</div>
			
				<p>{props.description}</p>
		</div>

		<style jsx>{`
			.profile {
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-items: flex-start;

				margin: 10px 0;
			}

			img {
				margin: 0 auto;
				display: inline-block;
				width: 200px;
				height: 200px;

				// border: solid 5px black;
				vertical-align: middle;
				border-radius: 50%;
			}
			.profile > div {
				margin: 10px 0 10px 25px;
				padding: 10px;
				overflow: hidden;
				border-radius: 10px;
			}
			h2 {
				margin: 0;
			}
			div.block {
				flex: 1 0 539px;
			}
		`}</style>
	</div>
);

export default MainFactory({})(Service);