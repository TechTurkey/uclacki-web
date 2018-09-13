import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

/*
image credits: http://webarebears.wikia.com/wiki/The_Cave?file=The_Bears%27_House.png
*/

class Committees extends Component {
	render() {
		return(
			<div>
				
    			<div className="barebears">
	    			<div className="content">
	    				<div className="brown">
			    			<h1>Fundraising</h1>

			    			<p>
			    			Money.
							</p>
						</div>
						<div className="panda">
							<h3>Meet the Chairs</h3>

							<section>
								<img />
								<p>Kevin Ru</p>
							</section>

							<section>
								<img />
								<p>Caroline Martina</p>
							</section>
						</div>
						<div className="white">
							<h3>Committee Meetings</h3>

							<h4>Subchairs</h4>
						</div>

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
    				.barebears {
    					overflow: auto;
    					background-image: url('/static/Committees/barebears.png');
    					background-repeat: no-repeat;
    					background-size: cover;
    					background-attachment: fixed;
    				}
    				.content {
    					margin: 2% 4%;
    					// padding: 1% 1%;
    					// background: rgba(255, 255, 255, 0.8);

    					-webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 4px 8px 0px #222222;
    				}
    				.brown {
    					overflow: auto;
    					background: rgba(133,86,47, 0.8);
    				}
    				.panda {
    					overflow: auto;
    					color: white;
    					background: rgba(47,43,43, 0.8);
    				}
    				.white {
    					overflow: auto;
    					background: rgba(255, 255, 255, 0.8);
    				}
				`}</style>
			</div>
			
		);
	}
}

export default MainFactory(Committees, 'Fundraising');