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
			</footer>
		);
	}
}

export default Footer