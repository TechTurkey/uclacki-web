import React, { Component } from 'react';
import Main from '../../layout/main.js';

const DistrictInitiatives = () => {

		return(
			<div className="content">

				<div className="content-block">
					<h1>District Service Initiatives</h1>
					<p>
					Helping Those with Disabilities
					</p>
				</div>

				<div className="content-block">
					<h1>District Fundraising Initiatives</h1>
					<p>
					Feeding America
					</p>
				</div>

				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
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
					img {
						width: 100%;
						height: auto;
					}
				`}</style>
			</div>
		);
};

export default Main(DistrictInitiatives, 'District Initiatives');