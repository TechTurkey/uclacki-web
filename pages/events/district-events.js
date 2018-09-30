import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';
import Link from 'next/link';

const DistrictEvents = () => {

		return(
			<div className="content">

				<div className="content-block">
					<h1>Crazy Kompetition for Infants (CKI South)</h1>
					<h4>October 20th, 2018</h4>
					<p>
					<a href="http://crazykomp.cnhcirclek.org/">http://crazykomp.cnhcirclek.org/</a>
					</p>
				</div>

				<div className="content-block">
					<h1>Fall Training Conference (FTC)</h1>
					<h4>November 2nd - 4th, 2018</h4>
					<p>
					<a href="http://ftc.cnhcirclek.org/">http://ftc.cnhcirclek.org/</a>
					</p>
				</div>

				<div className="content-block">
					<h1>District Large Scale Service Project (DLSSP)</h1>
					<h4></h4>
					<p>
					...
					</p>
				</div>

				<div className="content-block">
					<h1>Spring Training Conference (STC)</h1>
					<h4></h4>
					<p>
					...
					</p>
				</div>

				<div className="content-block">
					<h1>District Convention (DCON)</h1>
					<h4>March 22nd-24th, 2019</h4>
					<p>
					...
					</p>
				</div>

				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content

						// color: white;
					}
					.content-block {
						margin: 50px auto 0px;
						padding: 20px 0;
						// background: white;

						// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 8px 12px 6px #444444;
					}
					.content-block h1 {
						margin: 0;
					}
					@media (min-width: 768px) {
					  .content-block {
					    width: 750px;
					  }
					}

					@media (min-width: 992px) {
					  .content-block {
					    width: 970px;
					  }
					}

					@media (min-width: 1200px) {
					  .content-block {
					    width: 1170px;
					  }
					}
					p {
						font-size: 18px;
					}
					a {
						// color: white;
					}
					img {
						width: 100%;
						height: auto;
					}
				`}</style>
			</div>
		);
};

class Statistics extends Component {
	render(){
		return (
			<div className="container">
				<div className="stat-box">
					<img src="/static/Graphics/gear.png" alt="gear" />
					<p>2044 Hours</p>
					<h3>Service</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/globe.png" alt="globe" />
					<p>1052 Hours</p>
					<h3>Leadership</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/heart.png" alt="heart" />
					<p>598 Hours</p>
					<h3>Fellowship</h3>
				</div>

			<style jsx>{`
					.container{
						/*Change color styling for the statistics section here*/
						--statistics-background:#7ea4ce; /*light blue-grey*/
						/*End of Statistics Styling*/
						margin-top: 20px;
						display: flex;
						flex-flow: row wrap;
						justify-content: space-around;
						text-align: center;
						// background-color: var(--statistics-background);
					}

					img {
						width: 100px;
						height: auto;
					}

					.stat-box p{
						font-size: 1.5em;
					}

					.stat-box h3{
						font-size: 2em;
					}
			`}</style>

			</div>
		);
	}
}

export default MainFactory({headerTitle: 'District Events'})(DistrictEvents);