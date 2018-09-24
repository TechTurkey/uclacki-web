import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return (
			<footer className="content-footer">
				{/*<div className = "footer-container">
					<img src="/static/Graphics/Wordart.png" />
					<div className="links">
					<div>
						<img src="/static/Graphics/CKI-metro.png" alt="CKI Metro Division logo" id="metro" />
						</div>
						<div>
						<img src="/static/Graphics/CKI-logo.png" alt="CKI logo" />
						</div>
						<div>
						<img src="/static/Graphics/CKI-district.png" alt="CKI District logo" />
						</div>
					</div>
					<ul className="social">
						<li>fb</li>
						<li>ig</li>
						<li>sc</li>
					</ul>
					<img src="/static/Graphics/Seal.png" />
				</div>*/}
				<div className="content">
					<ul className="social">
						<li>fb</li>
						<li>ig</li>
						<li>sc</li>
					</ul>
					<p>Independent student organization. Contact website at uclackitech@gmail.com</p>
					<p>&copy; 2018–2019 Circle K International at the University of California, Los Angeles</p>
				</div>

				<div className="masthead">
					<div className="top">
						<img className="wordart" src="/static/Graphics/Wordart.png" />
						<img className="seal" src="/static/Graphics/Seal.png" />
					</div>
					<img className="stripes" src="/static/Graphics/Stripes.png" />
				</div>

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
						// text-align: center;
						// bottom: 0;
						// left: 0;
						// background-color: var(--footer-background);
						// color: var(--footer-font-color);

						color: white;
					}

					.content {
						position: absolute;
						width: 60%;
						left: 50%;
						bottom: 25px;
						-webkit-transform: translateX(-50%);
						transform: translateX(-50%);

						text-align: center;
						font-family: "Roboto";
						font-size: 12px;
					}

					.social {
						display: flex;
						justify-content: center;

						margin: 0;
						padding: 5px 0;

						list-style: none;
					}
					.social > li {
						margin: 0 5px;
					}

					.masthead {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
					}

					.top {
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: flex-end;

						margin: 0 10px 25px;
					}
					.top .wordart {
						max-width: 220px;
						height: auto;
					}
					.top .seal {
						max-width: 60px;
						height: auto;
					}

					.stripes {
						position: absolute;
						bottom: 0;
						width: 100%;
					}
				`}</style>
			</footer>
		);
	}
}

export default Footer;