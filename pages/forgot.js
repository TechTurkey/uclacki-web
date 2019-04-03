import React, { Component } from 'react';
import MainFactory from '../layout/main.js';
import Link from 'next/link';
import { withRouter } from 'next/router';	// Work with param string in URL

class ForgotPassword extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: ""
		}
	}

	componentDidMount() {

	}

	handleChange = () => {

	}

	requestForgetPassword = (event) => {
		event.preventDefault();
	}

	render() {
		if(this.props.router.query.error)
		{
			return (
				<h2>Error. Please request new password reset</h2>
			);
		} else if(this.props.router.query.email) {
			return (
				<form onSubmit={this.requestForgetPassword} method="post">
					<h2>Enter New Password</h2>
					<p>{this.props.router.query.email}</p>
                    <label htmlFor="newUid">Password</label>
                      <input type="text" name="password" onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Submit" />

                    <style jsx>{`

                    `}</style>
            	</form>
			);
		} else {	// error?
			return (
				<form onSubmit={this.requestForgetPassword} method="post">
					<h2>Forgot Password?</h2>
                    <label htmlFor="newUid">Email</label>
                      <input type="text" name="email" onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Submit" />

                    <style jsx>{`
                    	
                    `}</style>
            	</form>
			);
		}
	}
}

export default MainFactory({})(withRouter(ForgotPassword));