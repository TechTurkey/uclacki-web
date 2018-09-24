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

const MainFactory = (Page, title, options) => {

	return class extends Component {
		constructor(props)
		{
			super(props)
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
			const noFooter = options && options.hideFooter;
			const background = options ? (options.stillBackground ? "/static/Graphics/Pattern.png" : (options.background)) : "/static/Graphics/Pattern.gif";
			return(
				<div className={`main ${this.noFooter ? "noFooter" : null}`}>
					<Head>
						<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charset="utf-8" />
						<link rel="stylesheet" type="text/css" href="/static/Font/proxima-nova-web-fonts-master/fonts.min.css" />
					
						
						<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
						<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
					</Head>

					<div className="header">
						<Nav auth={this.props.auth} />
					</div>
					<div className="main-content">
						<Page {...this.props} />
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
						${(options &&  options.hideScrollbar) ? 'body::-webkit-scrollbar { width: 0; background: transparent; }' : null}
						h1, h2, h3 {
							font-family: "cartoon_slamregular";
						}
						h4, h5, h6 {
							font-family: "Myriad Pro";
						}
						div, span, p {
							font-family: "Century Gothic";
						}
						.main-content {
							// overflow: auto;
							background-image: url('${background}');
							background-repeat: no-repeat;
							background-size: cover;
							background-attachment: fixed;

							// fallback
							background-color: black;
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
							// margin-bottom: -145px; // pull the footer up to sit on the main content
						}
						.main:not(.noFooter) .main-content {
							margin-bottom: -145px;
						}
						.main-content > div {
							// min-height: 100%;
							padding-bottom: 145px;
						}
						.content-footer {
							height: 120px;
						}
						`}</style>
					</div>
				);
		}
	}
}
export default MainFactory;