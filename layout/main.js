import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

const MainFactory = (Page, title) => ({...props}) => (
	<div>
		<Head>
			<link rel="stylesheet" href="/static/Font/stylesheet.css" type="text/css" charset="utf-8" />
		</Head>
		<div className="header">
			<Nav />
		</div>
		<div className="main_content">
			<Page {...props} />
		</div>

		<Footer className="footer">

		</Footer>


		<style jsx global>{`
			body {
				margin: 0;
				overflow-x: hidden;

				// font-family: 'cartoon_slamregular', 'Century Gothic', 'Myriad Pro';
			}
			h1, h2, h3 {
				font-family: 'cartoon_slamregular';
			}
			h4, h5, h6 {
				font-family: 'Myriad Pro';
			}
			p, span {
				font-family: 'Century Gothic';
			}

			.confetti {
				background-image: url('/static/Graphics/Pattern.gif');
				background-repeat: no-repeat;
				background-size: cover;
				background-attachment: fixed;
			}
		`}</style>
	</div>
)

export default MainFactory;