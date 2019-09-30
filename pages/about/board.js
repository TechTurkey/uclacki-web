import React, { Component } from 'react';
import Link from 'next/link';
import MainFactory from '../../layout/main.js';
import { BOARD_FOLDER, BOARD_MEMBERS } from '../../lib/board_manifest';

/*
Forcing bootstrap grid into CSS grid: https://hacks.mozilla.org/2017/04/replace-bootstrap-layouts-with-css-grid/
*/

class Board extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="content">

    				<div className="row">
    					{
    						BOARD_MEMBERS.map(member => (
    							<Person className="col-lg-3 col-sm-6 col-xs-12" image={`${BOARD_FOLDER + member.file}`} title={`${member.name}`} position={`${member.position}`} email={`${member.email}`} number={`${this.props.auth ? member.number : ""}`} />
    						))
    					}
    					
					</div>
    		

    			<style jsx>{`
    				.content {
    					overflow: auto;
    				}
    				.content > div {
    					background: white;
    					margin: 50px 0;

    					// 	-webkit-box-shadow: 4px 4px 8px 0px #222222;
						// -moz-box-shadow: 4px 4px 8px 0px #222222;
						// box-shadow: 4px 4px 8px 0px #222222;
    				}
    		/* GRID */

			/* CONTAINER */
			.content > div {
			  margin-left: auto;
			  margin-right: auto;
			  padding-left: 15px;
			  padding-right: 15px;
			  
			}

			@media (min-width: 768px) {
			  .content > div {
			    width: 750px;
			  }
			}

			@media (min-width: 992px) {
			  .content > div {
			    width: 970px;
			  }
			}

			@media (min-width: 1200px) {
			  .content > div {
			    width: 1170px;
			  }
			}


			
    		`}</style>

    		<style jsx global>{`
    			/* ROW */
			.row {
			  display: grid;
			  grid-template-columns: repeat(12, 1fr);
			  grid-gap: 20px;
			}

			.eboard {
				grid-column: 1 / 13;
				padding-bottom: 20px;
				border-bottom: solid 1px black;
			}

			.col-xs-12 {
			  grid-column: span 12
			}

			.col-xs-11 {
			  grid-column: span 11;
			}

			.col-xs-10 {
			  grid-column: span 10
			}

			.col-xs-9 {
			  grid-column: span 9
			}

			.col-xs-8 {
			  grid-column: span 8
			}

			.col-xs-7 {
			  grid-column: span 7
			}

			.col-xs-6 {
			  grid-column: span 6
			}

			.col-xs-5 {
			  grid-column: span 5
			}

			.col-xs-4 {
			  grid-column: span 4
			}

			.col-xs-3 {
			  grid-column: span 3
			}

			.col-xs-2 {
			  grid-column: span 2
			}

			.col-xs-1 {
			  grid-column: span 1
			}

			@media (min-width: 768px) {
			  .col-sm-12 {
			    grid-column: span 12
			  }

			  .col-sm-11 {
			    grid-column: span 11;
			  }

			  .col-sm-10 {
			    grid-column: span 10
			  }

			  .col-sm-9 {
			    grid-column: span 9
			  }

			  .col-sm-8 {
			    grid-column: span 8
			  }

			  .col-sm-7 {
			    grid-column: span 7
			  }

			  .col-sm-6 {
			    grid-column: span 6
			  }

			  .col-sm-5 {
			    grid-column: span 5
			  }

			  .col-sm-4 {
			    grid-column: span 4
			  }

			  .col-sm-3 {
			    grid-column: span 3
			  }

			  .col-sm-2 {
			    grid-column: span 2
			  }

			  .col-sm-1 {
			    grid-column: span 1
			  }
			}

			@media (min-width: 992px) {
			  .col-md-12 {
			    grid-column: span 12
			  }

			  .col-md-11 {
			    grid-column: span 11;
			  }

			  .col-md-10 {
			    grid-column: span 10
			  }

			  .col-md-9 {
			    grid-column: span 9
			  }

			  .col-md-8 {
			    grid-column: span 8
			  }

			  .col-md-7 {
			    grid-column: span 7
			  }

			  .col-md-6 {
			    grid-column: span 6
			  }

			  .col-md-5 {
			    grid-column: span 5
			  }

			  .col-md-4 {
			    grid-column: span 4
			  }

			  .col-md-3 {
			    grid-column: span 3
			  }

			  .col-md-2 {
			    grid-column: span 2
			  }

			  .col-md-1 {
			    grid-column: span 1
			  }
			}

			@media (min-width: 1200px) {
			  .col-lg-12 {
			    grid-column: span 12
			  }

			  .col-lg-11 {
			    grid-column: span 11;
			  }

			  .col-lg-10 {
			    grid-column: span 10
			  }

			  .col-lg-9 {
			    grid-column: span 9
			  }

			  .col-lg-8 {
			    grid-column: span 8
			  }

			  .col-lg-7 {
			    grid-column: span 7
			  }

			  .col-lg-6 {
			    grid-column: span 6
			  }

			  .col-lg-5 {
			    grid-column: span 5
			  }

			  .col-lg-4 {
			    grid-column: span 4
			  }

			  .col-lg-3 {
			    grid-column: span 3
			  }

			  .col-lg-2 {
			    grid-column: span 2
			  }

			  .col-lg-1 {
			    grid-column: span 1
			  }
			}
    		`}</style>

			</div>
		);
	}
}

const Person = (props) => (
	<div className={props.className}>
		<img src={props.image} />
		<h4>{props.position}</h4>
		<h4>{props.title}</h4>
		<h5>{props.email}</h5>
		<h5>{props.number}</h5>
	
	<style jsx>{`
		div {
			min-width: 200px;
			padding: 3% 3% 0% 3%;
			margin-bottom: 40px;
			// margin: 0 5px 20px 5px;
			margin: 0 auto;
			background: white;
			text-align: center;


		}

		img {
			margin: 10px auto;
			// display: block;
			// max-width: 100%;
			// height: auto;
			width: 250px;
			height: 250px;

			vertical-align: middle;
			border-radius: 50%;
		}

		h4, h5 {
			// display: inline-block;
			margin: 0 0 5px 0;
			font-size: 14px;
		}
	`}</style>

	</div>
)

export default MainFactory({headerTitle: 'Board'})(Board);