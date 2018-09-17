import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

const MainFactory = (Page, title) => ({...props}) => (
	<div className="main">
		<Head>
			<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charset="utf-8" />
		</Head>

		<div className="header">
			<Nav />
		</div>
		<div className="main-content">
			<Page {...props} />
		</div>

		<Footer>

		</Footer>


		<style jsx global>{`
			body {
				margin: 0;
			}
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
				background-image: url('/static/Graphics/Pattern.gif');
				background-repeat: no-repeat;
				background-size: cover;
				background-attachment: fixed;
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
				margin-bottom: -145px; // pull the footer up to sit on the main content
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
)

export default MainFactory;