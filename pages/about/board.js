import React, { Component } from 'react';
import Link from 'next/link';
import MainFactory from '../../layout/main.js';

/*
Forcing bootstrap grid into CSS grid: https://hacks.mozilla.org/2017/04/replace-bootstrap-layouts-with-css-grid/
*/

class Board extends Component {
	render() {
		return(
			<div className="content">

    				{/*{people}*/}

    				<div className="row">
    					<div className="eboard row">
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Jeremy Figueroa.jpg" title="Jeremy Figueroa" email="uclackipresident@gmail.com" number="(213) 458-6422" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Angeli Indran.jpg" title="Angeli Indran" email="uclackiadminvp@gmail.com" number="(209) 627-8169" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Braden Lem.jpg" title="Braden Lem" email="uclackisecretary@gmail.com" number="(714) 728-9215" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Tyler Saunders.jpg" title="Tyler Saunders" email="uclackitreas@gmail.com" number="(209) 277-8511" />
						</div>
						<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Kylee Lyons.jpg" title="Kylee Lyons" email="uclackiservice@gmail.com" number="(530) 314-8214" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Gina Apinyavat.jpg" title="Gina Apinyavat" email="uclackissp@gmail.com" number="(805) 813-9607" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Kevin Ru.jpg" title="Kevin Ru" email="uclackiextfund@gmail.com" number="(949) 356-8822" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Caroline Martina.jpg" title="Caroline Martina" email="uclackiintfund@gmail.com" number="(310) 292-0859" />

    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Belen Bravo.jpg" title="Belen Bravo" email="uclackikfam@gmail.com" number="(661) 437-5626" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Leslie Adame.jpg" title="Leslie Adame" email="uclackikiwanis@gmail.com" number="(909) 284-6219" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Amir Patel.jpg" title="Amir Patel" email="uclackimde@gmail.com" number="(209) 678-8990" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Debbie Bor.jpg" title="Debbie Bor" email="uclackimre@gmail.com" number="(951) 275-4356" />

    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Nhi Truong.jpg" title="Nhi Truong" email="uclackigraphics@gmail.com" number="(714) 234-0275" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Chris Lam.jpg" title="Chris Lam" email="uclackitech@gmail.com" number="(619) 721-5277" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Ethan Vuong.jpg" title="Ethan Vuong" email="uclackimediarelations@gmail.com" number="(626) 541-4934" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Christina Kieu.jpg" title="Christina Kieu" email="uclackipublicity@gmail.com" number="(917) 615-6170" />

    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Katrina Galian.jpg" title="Katrina Galian" email="uclackispirit@gmail.com" number="(949) 922-9488" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Jeffrey Lin.jpg" title="Jeffrey Lin" email="uclackifellowship@gmail.com" number="(901) 634-1414" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Selina Han.jpg" title="Selina Han" email="uclackiwlc@gmail.com" number="(626) 257-4050" />
    					<Person className="col-lg-3 col-sm-6 col-xs-12" image="/static/Committees/Maria Roman.jpg" title="Maria Roman" email="uclackiwlc@gmail.com" number="(951)-525-9857" />

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
			margin: 0 auto;
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