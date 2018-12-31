import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';
import $ from 'jquery';

import { getCookie, removeCookie } from "../lib/session";
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
			if(token) {
				token = jwtDecode(token);
				const now = Date.now().valueOf() / 1000;
				if(now > token.exp) {
					// remove user from local storage to log user out
			    	removeCookie(cookie_name);
			    	return { };
				}
				return { auth: {user: token.name, email: token.email, image: token.image} };
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
						<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charSet="utf-8" />
						<link rel="stylesheet" type="text/css" href="/static/Font/proxima-nova-web-fonts-master/fonts/fonts.min.css" />
					
						
						<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
						<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
					
						{/* Font Awesome for social media icons */}
						<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
						  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

					  <meta name='viewport' content="width=device-width, initial-scale=1" />

					</Head>

					<div className="header">
						<Nav auth={this.props.auth} />
					</div>

					{headerTitle &&
						<div className="headerTitle">
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
							overflow-y: auto;
						}
						body {
							margin: 0;
							// overflow-x: hidden;
						}
						body h1, h2, h3 {
							font-family: "cartoon_slamregular", "Arial Black", sans-serif;
						}
						body h4, h5, h6 {
							font-family: "Myriad Pro Bold", "Helvetica", sans-serif;
						}
						body {
							font-family: "Garamond", Times, serif;
							font-size: 18px;
						}
						${(hideScrollbar) ? 'body::-webkit-scrollbar { width: 0; background: transparent; }' : ''}
						.headerTitle {
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

							font-size: 36px;
							font-family: "cartoon_slamregular";
						}
						.headerTitle h1:hover {
							animation: shake 0.7s cubic-bezier(.36,.07,.19,.97) both;
							  transform: translate3d(0, 0, 0) rotate(0);
							  backface-visibility: hidden;
							  perspective: 1000px;
						}
						@keyframes shake {
						  10%, 90% {
						    transform: translate3d(0, -1px, 0) rotate(4deg);
						  }
						  
						  20%, 80% {
						    transform: translate3d(0, -10px, 0) rotate(-3deg);
						  }

						  30%, 50%, 70% {
						    transform: translate3d(0, -10px, 0) rotate(0deg);
						  }

						  40%, 60% {
						    transform: translate3d(0, 0px, 0) rotate(-2deg);
						  }
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
							min-height: calc(100% - 60px - ${headerTitle ? '200px' : '0px'});	// account for header height
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
							padding-bottom: 115px;
						}
						@media (max-width: 1700px) {
							.main:not(.noFooter) .main-content > div {
								padding-bottom: 115px;
							}
						}
						.content-footer {
							height: 90px;
						}

						@media (max-width: 992px) {
							.headerTitle {
								font-size: 30px;
								text-align: center;
							}
						}
						`}</style>
					</div>
				);
		}
	}
}
export default MainFactory;
