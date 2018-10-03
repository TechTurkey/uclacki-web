import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
Background Credit (free usage): https://www.deviantart.com/tookishperian/art/Lab-Background-207585695
*/

class SpecialEvents extends Component {
	render() {
		return(
    			<div className="notheme">
	    			<div className="content">
		    			<h1>Special Events</h1>

		    			<Profiles />

		    			<hr />
		    			<p className="textbox">
		    			This year, the Special Events committee is planning a large-scale district
		    			event that incorporates alumni and promotes the three tenants of Circle K:
		    			leadership, fellowship, and service. Come check us out – we’d love to have you!
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
    				.notheme {
    					overflow: auto;
    					background-image: url('/static/Graphics/Pattern.gif');
						background-repeat: no-repeat;
						background-size: cover;
						background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					background: rgba(150, 150, 150, 0.35);
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
			<img src="/static/Committees/Maria Roman.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Maria Roman</h2>
						<h4>Special Events Logistics</h4>
						<h4>Environmental Science</h4>
					</div>
				</div>
				
					<p>Hi</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Selina Han.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Selina Han</h2>
						<h4>Special Events Programming</h4>
						<h4>Psychobiology</h4>
					</div>
				</div>
				
					<p>Fun fact: I’m supposed to wear glasses but I don’t 90% of the time.</p>
					<p>Hi! I am a third-year psychobiology major with a minor in
					biomedical research and I love drawing and hand lettering on my free time.
					I'm  a total night owl and love napping and eating. I also put milk in my bowl
					before I add cereal. Yes, that's right. Milk before cereal is the way to live.</p>
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

export default MainFactory({})(SpecialEvents);