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

		    			<p className="textbox">
		    			,,,,,
		    			</p>

						<h3>Meet the Chairs</h3>

						<section>
							<Person image="/static/Committees/spiritship.jpg" name="Chris Lam" position="Technology"
							year="2nd" major="Computer Science & Engineering"
							description="aaaaaaaaaaaaaaaaaaaaaaaa hhhhhhhhhhhhhhhhhhhhhhhhhhhh aaaaaaaaaaaaaaaaaaaa fa fwaefawef awef awef awef awefawefawefaaaa">
							</Person>
							<Person image="/static/Committees/spiritship.jpg" name="Nhi Truong" position="Graphics"
							year="2nd" major="Environmental Studies"
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
    					// color: blue;
    					// margin: 0;
    				}
    				h4 {
    					//margin: 0;
    					// color: blue;
    				}
    				.gumball {
    					overflow: auto;
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

export default MainFactory(GraphTech, 'GraphTech');