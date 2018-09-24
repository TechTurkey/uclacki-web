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
		    			Wow service
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
			<img src="/static/Committees/spiritship.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Kylee Lyons</h2>
						<h4>Small Scale Service</h4>
					</div>
				</div>
				
					<p>aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhh hhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/spiritship.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Gina Apinyavat</h2>
						<h4>Large Scale Service</h4>
					</div>
				</div>
				
					<p>aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhh hhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa</p>
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
			}
			.profile {
				flex: 1 0;

				display: flex;
				flex-flow: column nowrap;
				align-items: center;
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
			.profile .block {
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

export default MainFactory(Service, 'Service');