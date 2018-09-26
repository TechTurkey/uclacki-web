import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

import { getCookie } from "../lib/session";
import jwtDecode from 'jwt-decode';

function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };

const cookie_name = 'jwt';

const MainFactory = ({headerTitle, noFooter, hideScrollbar, background}) => WrappedComponent => {

	return class extends Component {
		constructor(props)
		{
			super(props);
		}

		static async getInitialProps({req}) {
			// const {store, isServer, query, req } = context;
			let token = getCookie(cookie_name, req);	// getCookie handles the check for whether it's a server request (i.e. req is undefined or not)
			console.log(token);
			if(token) {
				console.log(jwtDecode(token));
				return { auth: {user: jwtDecode(token).name, token: token} };
			}
			return { }
		}

		render() {
			const confettiBackground = 'background-image: url("/static/Graphics/Pattern.gif");\
										background-size: cover;\
										background-attachment: fixed;'
			return(
				<div className={`main ${noFooter ? "noFooter" : ""}`}>
					<Head>
						<title>UCLA CKI</title>
						<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charset="utf-8" />
						<link rel="stylesheet" type="text/css" href="/static/Font/proxima-nova-web-fonts-master/fonts.min.css" />
					
						
						<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
						<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
					
						{/* Font Awesome for social media icons */}
						<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
						  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

					</Head>

					<div className="header">
						<Nav auth={this.props.auth} />
					</div>

					{headerTitle &&
						<div className="title">
							<h1>{headerTitle}</h1>
						</div>
					}

					<div className="main-content">
						<WrappedComponent {...this.props} />
					</div>

					{ !noFooter &&
					<Footer></Footer> }


					<style jsx global>{`
						html {
							overflow-y: overlay;
						}
						body {
							margin: 0;
							overflow-x: hidden;

						}
						${(hideScrollbar) ? 'body::-webkit-scrollbar { width: 0; background: transparent; }' : null}
						h1, h2, h3 {
							font-family: "cartoon_slamregular";
						}
						h4, h5, h6 {
							font-family: "Myriad Pro";
						}
						div, span, p {
							font-family: "Century Gothic";
						}
						.title {
							background-image: url('/static/Graphics/Pattern.gif');
							background-repeat: no-repeat;
							background-size: cover;
							background-attachment: fixed;

							// color: white;
							display: flex;
							justify-content: center;
							align-items: center;

							min-height: 200px;
							height: 20%;
						}
						/* Bottom sticky footer */
						html, body, body > div:first-child, div#__next {
							height: 100%;
						}
						.main {
							position: relative;
							height: 100%;
							// padding-bottom: 120px;
						}
						.main-content {
							min-height: calc(100% - 50px);	// account for header height
							${headerTitle ? '\
							-webkit-box-shadow: 1px -3px 10px rgb(44, 43, 43);\
							box-shadow: 1px -3px 10px rgb(44, 43, 43);\
							' : ''}

							${background == "confetti" ? confettiBackground : ''}
							// margin-bottom: -145px; // pull the footer up to sit on the main content
						}
						.main:not(.noFooter) .main-content {
							margin-bottom: -115px;
						}
						.main:not(.noFooter) .main-content > div {
							// min-height: 100%;
							padding-bottom: 115px;
						}
						.content-footer {
							height: 90px;
						}
						`}</style>
					</div>
				);
		}
	}
}
export default MainFactory;
