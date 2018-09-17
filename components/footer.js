import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return (
			<footer className="content-footer">
				<div className = "logo-container">
					<p>Visit the division, district, and international</p>
					<img src="/static/Graphics/CKI-metro.png" alt="CKI Metro Division logo" id="metro" />
					<img src="/static/Graphics/CKI-logo.png" alt="CKI logo" />
					<img src="/static/Graphics/CKI-district.png" alt="CKI District logo" />
				</div>
				<p>&copy; 2018–2019 Circle K International at the University of California, Los Angeles</p>

				<img className="masthead" src="/static/Graphics/Black_Masthead_1567x80.png" />
				<style jsx>{`
					p {
						margin: 0;
					}
					.content-footer{
						position: relative;
						// overflow: hidden;	/* Avoid collapsing margin creating unnecessary whitespace */
						/*Change color styling for the footer section here*/
						--footer-background: #58595B; /*Dark Grey*/
						--footer-font-color: #ffffff; /*White*/
						/*End of Footer Styling*/

						width: 100%;
						padding-bottom: 25px;	// Give the masthead some space
						text-align: center;
						bottom: 0;
						left: 0;
						// background-color: var(--footer-background);
						// color: var(--footer-font-color);
					}

					.logo-container {
						margin: 0 auto;
					}

					.logo-container img {
						width: 75px;
						height: auto;

						vertical-align: middle;
					}
					// #metro {
					// 	width: 150px;
					// 	height: auto;
					// }

					.masthead {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
					}
				`}</style>
			</footer>
		);
	}
}

export default Footer;