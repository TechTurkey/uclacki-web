import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
Background Credit (free usage): https://www.deviantart.com/tookishperian/art/Lab-Background-207585695
*/

class PublicRelations extends Component {
	render() {
		return(
    			<div className="dexters">
	    			<div className="content">
		    			<h1>Public Relations</h1>

		    			<Profiles />

		    			<hr />
		    			<p className="textbox">
		    			...
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
    				.dexters {
    					overflow: auto;
    					background-image: url('/static/Committees/dexters-background.jpg');
    					background-position: center;
    					background-repeat: no-repeat;
    					background-size: cover;
    					background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					background: rgba(255, 255, 255, 0.8);
    					border-radius: 15px;

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
			<img src="/static/Committees/Ethan Vuong.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Ethan Vuong</h2>
						<h4>Media Relations</h4>
						<h4>Biology</h4>
					</div>
				</div>
				
					<p>Hi everyone! I'm currently a 2nd Year Biology major. Within the club I work 
					with all things media-related. I manage the UCLA Circle K Photos page on Facebook, 
					as well as the @uclacki Instagram, Twitter, and Snapchat accounts. If you ever see 
					someone taking pictures at an event, chances are, it's me or one of my photo assistants. 
					Taking photos isn't just my job, it's one of my newest hobbies. I love doing artsy 
					things and swimming too. Catch me at the pools lifeguarding, and if you ever see me 
					around, feel free to say hi!</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Christina Kieu.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Christina Kieu</h2>
						<h4>Campus Outreach</h4>
						<h4>International Development Studies and Sociology</h4>
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

export default MainFactory({})(PublicRelations);