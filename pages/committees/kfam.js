import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
*/

class KiwanisFamily extends Component {
	render() {
		return(
    			<div className="knd">
	    			<div className="content">
		    			<h1>Kiwanis Family</h1>

		    			<Profiles />
		    			<hr />
		    			<p className="textbox">
							Enjoy working with Kids? Looking for opportunities to network with adults in your field?
							Then look no further, the Kiwanis Family committee is in charge of all that and more.
							Come out and learn about all the different branches of the Kiwanis Family other than
							Circle K! From elementary schoolers to adults! We bring the K to Circle K!
		    			</p>
		    		</div>

						{/*<h3>Meet the Chairs</h3>

						<section>
							<Person image="/static/Committees/spiritship.jpg" name="Belen Bravo" position="Kiwanis Family Youth"
							year="2nd" major="Pre-Human Biology and Society"
							description="aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhhhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa fwaefawef awef awef awef awefawefawefaaaa">
							</Person>
							<Person image="/static/Committees/spiritship.jpg" name="Leslie Adame" position="Kiwanis Family Networking"
							year="2nd" major="Political Science and Pre-Communication Studies"
							description="hello">
							</Person>
						</section>

						<h3>Committee Meetings</h3>

						<p className="textbox small">
							Tuesdays 3PM-4PM in Rieber Hall
						</p>

						<h4>Subchairs</h4>
						<p className="textbox small">
							hhhh
						</p>
					</div>*/}

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
    				.knd {
    					overflow: auto;
    					background-image: url('/static/Committees/knd-background.jpg');
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
			<img src="/static/Committees/Belen Bravo.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Belen Bravo</h2>
						<h4>Kiwanis Family Youth</h4>
						<h4>Pre-Human Biology and Society</h4>
					</div>
				</div>
				
					<p>Fun Fact: I can fit an M&M in my right dimple!</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Leslie Adame.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Leslie Adame</h2>
						<h4>Kiwanis Family Networking</h4>
						<h4>Political Science and Pre-Communication Studies</h4>
					</div>
				</div>
				
					<p>Fun Fact: Reality TV shows like The Bachelor and Jersey Shore are my guilty pleasure.</p>
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

export default MainFactory({})(KiwanisFamily);