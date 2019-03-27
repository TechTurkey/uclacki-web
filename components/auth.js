import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { setCookie, getCookie, removeCookie } from "../lib/session";
import Profile from './profile.js';

const cookie_name = 'jwt';

const Authentication = (props) => {
  if(props.auth)
    return <Profile auth={props.auth} />
  else
    return <Login />
};

class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = { signup: false,
      	username: '',
      	password: '',
        newUid: '',
        newUsername: '',
        newPassword: '',
        newPasswordConfirm: '',
        newEmail: '',
        error: ''
      };
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.login = this.login.bind(this);
      this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
      this.signup = this.signup.bind(this);
      this.toggleSignup = this.toggleSignup.bind(this);
  	}
	 

    toggleSignup() {
      this.setState(prevState => ({
        signup: !prevState.signup,
        error: ''
      })
      );
    }

  	handleChange(event) {
    	this.setState({[event.target.name]: event.target.value});
  	}

  	handleSubmit(event) {
    	event.preventDefault();
    	const { username, password } = this.state;
        const { dispatch } = this.props;
        if(!username && !password){
        	this.setState({error: 'Please enter username and password.'});
        }
        else if(!username){
        	this.setState({error: 'Please enter username.'});
        }
        else if(!password){
        	this.setState({error: 'Please enter password.'});
        }
        else if (username && password) {
            this.login(username, password);
        }
    	}

      handleSignupSubmit(event) {
        event.preventDefault();
        const {newUid, newUsername, newPassword, newPasswordConfirm, newEmail} = this.state;
        if(!newUid || !newUsername || !newPassword || !newPasswordConfirm || !newEmail)
        {
          this.setState({error: 'Invalid Input.'});
        } else if(newPassword !== newPasswordConfirm) {
          this.setState({error: 'Passwords must match!'});
        } else {
          this.signup( {
            username: newUsername,
            password: newPassword,
            confirm: newPasswordConfirm,
            uid: newUid,
            email: newEmail
          } );
        }
      }

	login(username, password) {
		var cookie = getCookie(cookie_name);
		if(cookie == null){
			const requestOptions = {
		        method: 'POST',
		        headers: { 'Content-Type': 'application/json' },
		        body: JSON.stringify({ username, password })
		    };
		    console.log(requestOptions);
		    return fetch("http://uclacki.org/signin", requestOptions)
		    .then((response) => handleResponse(response)).catch(e => {
    				console.log(e);
				  })
		        .then(response => {
		            // login successful if there's a jwt token in the response
		            if (response.success) {
		                // store user details and jwt token in cookies to keep user logged in between page refreshes
		                setCookie(cookie_name, response.result);
                    location.reload(true);
		            }
		            else{
		            	this.setState({error: response.error});
		            }
		            return response;
		        });
			}
		else{
			this.setState({error: 'Already logged in.'});
			return;
		}

	}

  signup(data) {
    var cookie = getCookie(cookie_name);
    if(cookie == null){
      const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log(requestOptions);
        return fetch("http://uclacki.org/api/signup", requestOptions)
        .then((response) => handleResponse(response)).catch(e => {
            console.log(e);
          })
            .then(response => {
                // login successful if there's a jwt token in the response
                if (response.success) {
                    alert("Login successful!");
                }
                else{
                  alert("Error! " + response.error);
                }
                this.setState({ open: false });
                location.reload(true);
                return response;
            });
    }
    else{
      alert("You are already logged in!");
      return;
    }
  }
    

	render(){
    let buttonStyle = {
      color: 'white',
      fontFamily: "cartoon_slamregular",

      padding: '5px 8px',
      borderRadius: '3px',
      background: '#0099ff'
    }
		return(
      <div>
			<Popup  
						trigger={<a className="login-button" onClick = {this.openModal}>LOGIN</a>}
						modal
						closeOnDocumentClick>
            {close => (
							<div className="modal">
								<h1 className="header">{this.state.signup ? "Signup" : "Login"}</h1>
                <h3 className="errorMessage">{this.state.error}</h3>
                <hr/>
                <div className={`login ${this.state.signup ? "" : "show"}`}>
    						  <form  onSubmit={this.handleSubmit}>
    								<label for="username">Username</label>
    								<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
    								<label for="password">Password</label>
    								<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
   									<input className="submit" type="submit" value="Submit" />
  								</form>
                </div>

                <div className={`signup ${this.state.signup ? "show" : ""}`}>
                  <p>Note: You MUST have filled out the 2018-2019 Member Application before you are able to register for an account</p>
                  <form onSubmit={this.handleSignupSubmit} method="post">
                    <label for="newUid">UID</label>
                      <input type="text" name="newUid" onChange={this.handleChange}/>
                    <label for="newEmail">Email</label>
                      <input type="text" name="newEmail" onChange={this.handleChange}/>
                    <label for="newUsername">Username</label>
                      <input type="text" name="newUsername" onChange={this.handleChange}/>
                    <label for="newPassword">Password</label>
                      <input type="password" name="newPassword" onChange={this.handleChange}/>
                    <label for="newPasswordConfirm">Confirm Password</label>
                      <input type="password" name="newPasswordConfirm" onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Submit" />
                  </form>
                </div>
                <a className="toggle-button" onClick={this.toggleSignup}>{this.state.signup ? "Already have an account?" : "New member?"}</a>
                <button
                  className="exit-button"
                  onClick={() => {close()}}
                  >
                  X
                  </button>
							</div>
              )}
					</Popup>

          <style jsx global>{`
              .login-button {
                color: white;
                font-family: "cartoon_slamregular";

                padding: 5px 8px;
                border-radius: 3px;
                background: #0099ff;
              }
              @media (min-width: 992px) {
                .login-button {
                  // margin: 0 20px 0 10px;
                }
              }
              @media (max-width: 991px) {
                .login-button {
                  // margin: 10px 20px;
                }
              }

              .login:not(.show), .signup:not(.show) {
                display: none;
              }

              .show {
                display: block;
              }

              .errorMessage {
                text-align: center;
                color: red;
              }

              @media (max-width: 798px) {
                .popup-content {
                  margin: 20px 20px auto 20px !important;
                  width: 100% !important;
                }
              }
              .modal {
                padding: 15px;
              }

              .modal form {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                // margin: 0 auto;
              }
              .modal h1{
                text-align: center;
              }
              .modal input {
                display: block;
                padding: .5em .6em;
                border: solid 1px #ccc;
                box-shadow: inset 0 1px 3px #ddd;
                border-radius: 4px;
                // vertical-align: middle;
              }
              .modal input:focus {
                outline: 0;
                border-color: #129FEA;
              }
              .submit {
                // display: inline-block;
                margin: 5px auto;
                cursor: pointer;
                transition: background-color 0.3s ease-in, color 0.3s;
              }
              .submit:hover {
                background-color: #007ACC;
                color: white;
              }

              .toggle-button {
                // display: block;
                // margin: 0 auto;
                // padding: .5em .6em;
                // border: solid 1px #ccc;
                // box-shadow: inset 0 1px 3px #ddd;
                // border-radius: 4px;
                color: #007ACC;
                font-weight: bold;
                cursor: pointer;
                text-decoration: underline;
                float: right;
              }

              .exit-button {
                cursor: pointer;
                position: absolute;
                display: block;
                padding: 2px 5px;
                line-height: 20px;
                right: -10px;
                top: -10px;
                font-size: 24px;
                background: #ffffff;
                border-radius: 18px;
                border: 1px solid #cfcece;
              }
            `}</style>
          </div>
    );

	}
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            if(error){
            	alert("Invalid username or password!");
            }
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}


export default Authentication