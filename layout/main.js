import React, { Component } from 'react';

import Nav from '../components/Nav.js';
import Footer from '../components/footer.js';

const MainFactory = (Page, title) => ({...props}) => (
	<div>
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
			}
		`}</style>

		<style jsx>{`
			
		`}</style>
	</div>
)

export default MainFactory;