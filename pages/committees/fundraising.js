import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
image credits: http://webarebears.wikia.com/wiki/The_Cave?file=The_Bears%27_House.png
*/

class Fundraising extends Component {
	render() {
		return(
			<div>
				
    			<div className="barebears">
	    			<div className="content">
	    				<div className="brown">
			    			<h1>Fundraising</h1>

			    			<p className="textbox">
			    			Money.
							</p>
						</div>
						<div className="panda">
							<h3>Meet the Chairs</h3>

							<section>
							<Person image="/static/Committees/spiritship.jpg" name="Kevin Ru" position="Small Scale Fundraising"
							description="aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhhhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa fwaefawef awef awef awef awefawefawefaaaa">
							</Person>
							<Person image="/static/Committees/spiritship.jpg" name="Caroline Martina" position="Large Scale Fundraising"
							description="hello">
							</Person>
							</section>
						</div>
						<div className="white">
							<h3>Committee Meetings</h3>

							<h4>Subchairs</h4>
						</div>

					</div>
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
    				.textbox {
    					text-align: center;
    				}
    				.barebears {
    					overflow: auto;
    					background-image: url('/static/Committees/barebears.png');
    					background-repeat: no-repeat;
    					background-size: cover;
    					background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					padding: 1% 1%;
    					// background: rgba(255, 255, 255, 0.8);

    					// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 4px 8px 0px #222222;
    				}
    				.brown {
    					overflow: auto;
    					color: rgb(133, 86, 47);
    					// background: rgba(133,86,47, 0.8);
    				}
    				.panda {
    					overflow: auto;
    					color: rgb(47, 43, 43);
    					// background: rgba(47,43,43, 0.8);
    				}
    				.white {
    					overflow: auto;
    					color: white;
    					// background: rgba(255, 255, 255, 0.8);
    				}
				`}</style>
			</div>
			
		);
	}
}

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


export default MainFactory(Fundraising, 'Fundraising');