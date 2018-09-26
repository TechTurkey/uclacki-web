import React, { Component } from 'react';

import MainFactory from './main.js';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

const cookie_name = 'jwt';

const MainPage = (Page, title) => {
	return (
		<div>
			<div className="header">
				<h1>{title}</h1>
			</div>
			<div className="content">
				<Page {...this.props} />
			</div>


			<style jsx>{`
				.header {
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

				
			`}</style>
		</div>
		);
}
export default MainPage;