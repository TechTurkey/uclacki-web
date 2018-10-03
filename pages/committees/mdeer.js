import React, { Component } from 'react';
import Link from 'next/link';
import MainFactory from '../../layout/main.js';

/*
Background Credit (free usage): https://www.deviantart.com/tookishperian/art/Lab-Background-207585695
*/

class MDEER extends Component {
	render() {
		return(
    			<div className="notheme">
	    			<div className="content">
		    			<h1>MDEER</h1>

		    			<Profiles />

		    			<hr />
		    			<p className="textbox">
		    			Together, Debbie and Amir ensure that every member of our organization feels welcomed and 
		    			supported through the family and mentorship systems. In addition, they are responsible 
		    			for providing members with opportunities to grow and develop through participating in Circle K.
		    			</p>
		    			<p className="textbox">
		    			Take a look at the tight-knit <Link href="/about/familymentor"><a>family and mentor system lead
		    			 by MDEER!</a></Link>
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
			<img src="/static/Committees/Amir Patel.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Amir Patel</h2>
						<h4>Member Development and Education</h4>
						<h4>Environmental Science</h4>
					</div>
				</div>
				
					<p>Amir is responsible for overseeing the family system and member education efforts 
					within our organization. Through working closely with his co, Debbie Bor, they together 
					ensure that every member of our club feels as though they have support system through 
					family and mentorship. Amir has a black belt in tae kwan do, and although he remembers 
					nothing still likes to think that he's a pretty tough guy. He is also a geography trivia 
					enthusiast.</p>
			</div>
		</div>
		<div className="profile">
			<img src="/static/Committees/Debbie Bor.jpg" />

			
			<div className="block">
				<div className="title">
					<div>
						<h2>Debbie Bor</h2>
						<h4>Member Experience and Retention</h4>
						<h4>Biology</h4>
					</div>
				</div>
				
					<p>Hi hi! I’m Debbie and I’m a third year biology major! My hometown is Riverside, CA, which 
					fun fact I have never ever moved from! As the current Membership Experience and Retention 
					Chair, I make the other half of MDEER and am in charge of the mentorship program for 
					our organization! I really enjoy listening to music, eating, sleeping, and learning 
					random trivia facts!</p>
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

export default MainFactory({})(MDEER);