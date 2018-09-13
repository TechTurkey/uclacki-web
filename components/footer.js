import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return (
			<footer className="content-footer">
				<div className = "logo-container">
					<img src="/static/CKI-logo.png" alt="CKI logo" />
					<img src="/static/CKI-metro.png" alt="CKI Metro Division logo" id="metro" />
					<img src="/static/CKI-district.png" alt="CKI District logo" />
				</div>
				<p>&copy; 2018–2019 Circle K International at UCLA</p>
				<p>logo, links, copyright</p>

				<style jsx>{`
					.content-footer{
					/*Change color styling for the footer section here*/
					--footer-background: #58595B; /*Dark Grey*/
					--footer-font-color: #ffffff; /*White*/
					/*End of Footer Styling*/

					float: left;
					padding: 30px;
					width: 100%;
					text-align: center;
					background-color: var(--footer-background);
					color: var(--footer-font-color);
				}

				.logo-container{
					width: 50%;
					margin:50px auto auto;

				}

				.logo-container img{
					vertical-align: middle;
					width: 15%;
					margin: auto;
				}

				#metro{
					width: 25%;
				}
				`}</style>
			</footer>
		);
	}
}

export default Footer;