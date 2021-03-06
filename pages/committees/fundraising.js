import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
image credits: http://webarebears.wikia.com/wiki/The_Cave?file=The_Bears%27_House.png
*/

class Fundraising extends Component {
	render() {
		return(
			<div className="barebears">
				<div className="content brown">
	    			<h1>Fundraising</h1>


	    			<Profiles />

	    			<hr />

	    			<p className="textbox">
	    			Interested in rolling in dough? Want to make an impact on our club, community and beyond? 
	    			Well, the fundraising committee is just for you!
	    			</p>
	    			<p className="textbox">
	    			Our committee raises money for local charities, our three District Fundraising Initiatives 
	    			(Feeding America, The Pediatric Trauma Program, and Kiwanis Family House), as well as the 
	    			club itself. As a committee, we organize a variety of fundraisers, ranging from bake sales 
	    			on Bruin Walk and Family Feud TV tapings to restaurant fundraisers and many more! Whether 
	    			you are interested in event planning, finance, or you just want to get involved in the club, 
	    			come join our committee!
	    			</p>
	    			{/*<div className="content">
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
							year="2nd" major="Molecular, Cell, and Developomental Biology"
							description="aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhhhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa fwaefawef awef awef awef awefawefawefaaaa">
							</Person>
							<Person image="/static/Committees/spiritship.jpg" name="Caroline Martina" position="Large Scale Fundraising"
							year="3rd" major="Business Economics"
							description="hello">
							</Person>
							</section>
						</div>
						<div className="white">
							<h3>Committee Meetings</h3>

							<h4>Subchairs</h4>
						</div>

					</div>*/}
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
    					// color: rgb(133, 86, 47);
    					color: white;
    					background: rgba(133,86,47, 0.8);
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

const Profiles = () => (
	<section className="people">
		<div className="profile">
			<img src="/static/Committees/Kevin Ru.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Kevin Ru</h2>
						<h4>Small Scale Fundraising</h4>
					</div>
				</div>
				
					<p>Hullo there! My name is Kevin Ru and I’m so excited to serve you this year as 
					your Small Scale Fundraising Chair.  You’ll often find me selling food on Bruin Walk 
					for our fundraising initiatives as well as coordinating restaurant fundraisers at 
					places like Chipotle and Veggie Grill! As for a little about me, I’m a second 
					year MCDB major and I enjoy working with kids, hiking, photography, and just food 
					adventures with friends!</p>
					<p>Fun Fact: My smile is higher on one side because I once tripped and fell on my
					face while sprinting.</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Caroline Martina.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Caroline Martina</h2>
						<h4>Large Scale Fundraising</h4>
					</div>
				</div>
				
					<p>HI! Just like my co, I am also excited to serve as your Large-Scale Fundraising Chair this 
					year! My name is Caroline and I am a third-year Business Economics major. Hopefully that'll 
					help me keep the dough rolling for Circle K! You'll often find me selling food at our Bruin 
					Plaza Fundraisers and planning TV Tapings. I love travelling, listening to music and going on 
					long car rides. I also love trying new food and meeting new people, so if you see me walking 
					around campus don't be afraid to say hi!</p>
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
			.profile .title {
				color: rgb(44, 43, 43);
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


export default MainFactory({})(Fundraising);