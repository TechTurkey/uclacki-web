import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';


class Committees extends Component {
	render() {
		return(
			<div>
    			<div className="pokemon">
	    			<div className="content">
		    			<h1>Spiritship</h1>

		    			<p>
		    			Spiritship Committee is the committee that makes sure you’re living the social life that all of those UCLA pamphlets promised you.
		    			We specialize in planning club socials and fostering a sense of club pride for our members.
						</p>

						<h3>Meet the Chairs</h3>

						<section>
							<img />
							<p>Jeffrey Lin</p>
						</section>

						<section>
							<img />
							<p>Katrina Galian</p>
						</section>

						<h3>Committee Meetings</h3>

						<h4>Subchairs</h4>

						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
					</div>
				</div>

    			<style jsx>{`
    				h1 {
    					text-align: center;
    					//margin: 0;
    				}
    				h4 {
    					//margin: 0;
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
    					background: rgba(255, 255, 255, 0.8);

    					-webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 4px 8px 0px #222222;
    				}
				`}</style>
			</div>
			
		);
	}
}

export default MainFactory(Committees, 'Spiritship');