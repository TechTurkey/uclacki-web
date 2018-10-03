import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
Background Credit (free usage): https://www.deviantart.com/tookishperian/art/Lab-Background-207585695
*/

class GraphTech extends Component {
	render() {
		return(
    			<div className="gumball">
	    			<div className="content">
		    			<h1>GraphTech</h1>

		    			<Profiles />

		    			<hr />
		    			<p className="textbox">
		    			GraphTech is where the image and the face of our home club is produced. We create 
		    			appealing designs to advertise and outreach and handle anything tech in the club, 
		    			including the website from conception to execution. We embrace learning and experimentation, 
		    			so if you want to help work on our club vision or learn more about graphics/technology/misc., 
		    			come out to our meetings/workshops!
		    			</p>
					</div>

    			<style jsx>{`
    				h1, h3, h4 {
    					text-align: center;
    					// color: blue;
    					// margin: 0;
    				}
    				h4 {
    					//margin: 0;
    					// color: blue;
    				}
    				.gumball {
    					overflow: auto;
						background-image: url('/static/Committees/gumballbackground.png');
						background-repeat: no-repeat;
						background-size: cover;
						background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					background: rgba(255, 255, 255, 0.9);
    					border-radius: 20px;

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
			<img src="/static/Committees/Chris Lam.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Chris Lam</h2>
						<h4>Technology</h4>
						<h4>Computer Science & Engineering</h4>
					</div>
				</div>
				
					<p>Hey y'all! I'm a 2nd year CSE major. As Technology Chair, I am in charge of
					the club website (what you're seeing!), club meeting presentations, and any other
					technological things that goes on in the club. A little about me: I was born in
					San Diego, raised in Menifee (small town next to Temecula), and I enjoy learning things
					like instruments.</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Nhi Truong.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Nhi Truong</h2>
						<h4>Graphics</h4>
						<h4>DESMA</h4>
					</div>
				</div>
				
					<p>Hi</p>
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

				margin: 10px 0;
			}

			img {
				margin: 0 auto;
				display: inline-block;
				width: 250px;
				height: 250px;

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
			div.block {
				flex: 1 0 539px;
			}
		`}</style>
	</div>
);

export default MainFactory({})(GraphTech);