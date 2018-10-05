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
						<li><a href="https://www.facebook.com/groups/UCLACKI/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
						<li><a href="https://twitter.com/uclacki" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
						<li><a href="https://www.instagram.com/uclacki" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
						<li><i className="fab fa-snapchat"></i></li>
						<li className="handle">@uclacki</li>
						<li> | </li>
						<li><a className="ext dis" href="http://cnhcirclek.org" rel="noopener noreferrer" target="_blank">District Site</a></li>
						<li><a className="ext int" href="http://circlek.org" rel="noopener noreferrer" target="_blank">International Site</a></li>
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
						background-color: rgb(44, 43, 43);
						color: white;
					}

					.content {
						z-index: 1;
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
						align-items: center;

						margin: 0;
						padding: 5px 0;
						font-size: 14px;

						list-style: none;
					}
					.social > li {
						margin: 0 5px;
					}
					.social i {
						color: white;
						transition: color 0.3s;
					}
					.social i.fa-facebook-f:hover {
						color: #3d5b99;
					}
					.social i.fa-twitter:hover {
						color: #00aced;
					}
					.social i.fa-instagram:hover {
						color: #fccc63;	//#cd486b
					}
					.social i.fa-snapchat:hover {
						color: #fffc00;
					}
					.ext {
						font-size: 12px;
						color: white;
						transition: color 0.3s;
					}
					.ext.dis:hover {
						color:  #F2E18B;
					}
					.ext.int:hover {
						color: #00a5d9;
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
						max-width: 20%;
						width: 220px;
						height: auto;
					}
					.top .seal {
						max-width: 9%;
						width: 60px;
						height: auto;
					}

					.stripes {
						position: absolute;
						bottom: 0;
						width: 100%;
					}

					@media (max-width: 992px) {
						.content {
							width: 90%;
							bottom: 45px;

							font-size: 9px;
						}

						.ext {
							font-size: 10px;
						}

						.top {
							margin-bottom: 10px;
						}
					}
				`}</style>
			</footer>
		);
	}
}

export default Footer;