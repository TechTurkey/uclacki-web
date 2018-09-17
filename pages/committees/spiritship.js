import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
Pokemon box effect: https://codepen.io/jaflo/pen/KHzjk
CSS Types buttons: https://gist.github.com/agarie/2610520
*/

class Spiritship extends Component {
	render() {
		return(
    			<div className="pokemon">
	    			<div className="content">
		    			<h1>Spiritship</h1>

		    			<p className="textbox">
		    			Spiritship Committee is the committee that makes sure you’re living the social life that all of those UCLA pamphlets promised you.
		    			We specialize in planning club socials and fostering a sense of club pride for our members.
						<i></i></p>

						<h3>Meet the Chairs</h3>

						<section>
							<Person image="/static/Committees/spiritship.jpg" name="Jeffrey Lin" position="Fellowship"
							year="3rd" major="Biology" type="grass" color="#9900ff" light="rgba(245, 230, 255, 0.8)"
							description="aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhhhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa fwaefawef awef awef awef awefawefawefaaaa">
							</Person>
							<Person image="/static/Committees/spiritship.jpg" name="Katrina Galian" position="Spiritship"
							year="3rd" major="Psychobiology" type="psychic" color="#ffe62d" light="rgba(255, 252, 230, 0.8)"
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
					</div>

    			<style jsx>{`
    				h1, h3, h4 {
    					text-align: center;
    					// margin: 0;
    				}
    				h4 {
    					//margin: 0;
    				}
    				p.textbox {
    					font-size: 16px;
					  // font-family: "Pokemon GB", Arial, sans-serif;
					  border-radius: 2px;
					  padding: 12px;
					  // width: 100%;
					  // height: 28px;
					  line-height: 18px;
					  margin: auto;
					  background: white;
					  border: 1px solid white;
					  box-shadow: 0 1px 0 1px black,
					              inset 0 1px 0 1px black,
					              0 0 0 1px black,
					              inset 0 0 0 1px black;
					}
					p.textbox > i {
					  width: 0;
					  height: 0;
					  border: 5px solid transparent;
					  border-top-color: black;
					  margin-top: 14px;
					  // animation: bounce 0.5s ease-in-out 0 infinite alternate;
					  animation-name: bounce;
					  animation-duration: 0.5s;
					  animation-timing-function: ease-in-out;
					  animation-iteration-count: infinite;
					  animation-direction: alternate;

					  float: right;
					}
    				@keyframes bounce {
					  from { margin-top: 14px; }
					  to { margin-top: 16px; }
					}

					.small {
						width: 250px;
						text-align: center;
					}

    				.pokemon {
    					overflow: auto;
    					background-image: url('/static/Committees/pokemonbackground.png');
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
				<div className="types">
					<p className="type normal">{props.year} Year</p>
					<p className={`type ${props.type}`}>{props.major}</p>	
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

			.profile > div {
				margin: 10px 0 10px 25px;
				padding: 10px;
				overflow: hidden;
				border: solid 5px ${props.color};
				background: ${props.light};
				border-radius: 10px;
			}
			// div.image {
			// 	width: 20%;
			// 	height: auto;
			// }
			img {
				margin: 0 auto;
				display: inline-block;
				width: 250px;
				height: 250px;

				border: solid 5px ${props.color};
				vertical-align: middle;
				border-radius: 50%;
			}


			@media (max-width: 789px) {
				div.block {
					flex-grow: 1;
					flex-shrink: 1;
					flex-basis: auto;
				}
			}
			@media (min-width: 790px) {
				div.block {
					flex-grow: 1;
					flex-shrink: 0;
					flex-basis: 539px;
				}
			}
			
			div.title {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
			}
			div.types {
				margin-left: 10px;
			}
			div.description {
				width: 100%;
			}

			h2 {
				margin-bottom: 0;
			}
			h4 {
				margin: 0;
			}

			.type {
				margin: 10px;
				padding: 5px 8px 5px 8px;
				display: inline-block;
				border-radius: 6px;
				-webkit-border-radius: 6px; 
				-moz-border-radius: 6px;
				-o-border-radius: 6px;
				font-size: 13px;
				font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
				color: #FFF;
				background-color: #68A090;
				border: 1px solid #44685E;
			}

			.normal {
				background-color: #A8A878;
				border: 1px solid #6D6D4E;
			}

			.fire {
				background-color: #F08030;
				border: 1px solid #9C531F;
			}

			.water {
				background-color: #6890F0;
				border: 1px solid #445E9C;
			}

			.electric {
				background-color: #F8D030;
				border: 1px solid #A1871F;
			}

			.grass {
				background-color: #78C850;
				border: 1px solid #4E8234;
			}

			.ice {
				background-color: #98D8D8;
				border: 1px solid #638D8D;
			}

			.ground {
				background-color: #E0C068;
				border: 1px solid #927D44;
			}

			.flying {
				background-color: #A890F0;
				border: 1px solid #6D5E9C;
			}

			.ghost {
				background-color: #705898;
				border: 1px solid #493963;
			}

			.rock {
				background-color: #B8A038;
				border: 1px solid #786824;
			}

			.fighting {
				background-color: #C03028;
				border: 1px solid #7D1F1A;
			}

			.poison {
				background-color: #A040A0;
				border: 1px solid #682A68;
			}

			.psychic {
				background-color: #F85888;
				border: 1px solid #A13959;
			}

			.bug {
				background-color: #A8B820;
				border: 1px solid #6D7815;
			}

			.dark {
				background-color: #705848;
				border: 1px solid #49392F;
			}

			.steel {
				background-color: #B8B8D0;
				border: 1px solid #787887;
			}

			.dragon {
				background-color: #7038F8;
				border: 1px solid #4924A1;
			}
		`}</style>
	</div>
);

export default MainFactory(Spiritship, 'Spiritship');