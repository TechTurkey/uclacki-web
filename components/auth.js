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
    	this.state = { open: false,
      	username: '',
      	password: '',
        newUid: '',
        newUsername: '',
        newPassword: '',
        newPasswordConfirm: '',
        newEmail: ''
      };
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.openModal = this.openModal.bind(this);
    	this.closeModal = this.closeModal.bind(this)
    	this.login = this.login.bind(this);
      this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
      this.signup = this.signup.bind(this);
  	}
	 openModal = () => {
    	this.setState({ open: true });
  	};
  	closeModal = () => {
    	this.setState({ open: false });
  	};

  	handleChange(event) {
    	this.setState({[event.target.name]: event.target.value});
  	}

  	handleSubmit(event) {
    	event.preventDefault();
    	const { username, password } = this.state;
        const { dispatch } = this.props;
        if(!username && !password){
        	alert("Please enter your username and password.");
        }
        else if(!username){
        	alert("Please enter your username.");
        }
        else if(!password){
        	alert("Please enter your password.")
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
          alert("Invalid Input");
        } else if(newPassword !== newPasswordConfirm) {
          alert("Passwords must match!");
        } else {
          this.signup( {
            username: newUsername,
            password: newPassword,
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
		    return fetch("http://142.93.83.231/signin", requestOptions)
		    .then((response) => handleResponse(response)).catch(e => {
    				console.log(e);
				  })
		        .then(response => {
		            // login successful if there's a jwt token in the response
		            if (response.success) {
		                // store user details and jwt token in cookies to keep user logged in between page refreshes
		                setCookie(cookie_name, response.result);
		                alert("Login successful!");
		            }
		            else{
		            	alert("Invalid username or password!");
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

  signup(data) {
    var cookie = getCookie(cookie_name);
    if(cookie == null){
      const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log(requestOptions);
        return fetch("http://142.93.83.231/api/signup", requestOptions)
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
		return(
			<div className="login-button">
			<a id="login" onClick = {this.openModal}>LOGIN</a>
			<Popup  
						open={this.state.open}
						modal
						closeOnDocumentClick>
							<div className="modal">
								<div className="header"> Login </div>
								   <form onSubmit={this.handleSubmit}>
      								<label>
       									 Username:
        								<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      								</label>
      								<label>
       									 Password:
        								<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
      								</label>
     									<input type="submit" value="Submit" />
    								</form>

                    <form onSubmit={this.handleSignupSubmit} method="post">
                    <label>
                         UID:
                        <input type="text" name="newUid" onChange={this.handleChange}/>
                      </label>
                      <label>
                         Email:
                        <input type="text" name="newEmail" onChange={this.handleChange}/>
                      </label>
                      <label>
                         Username:
                        <input type="text" name="newUsername" onChange={this.handleChange}/>
                      </label>
                      <label>
                         Password:
                        <input type="password" name="newPassword" onChange={this.handleChange}/>
                      </label>
                      <label>
                         Confirm Password:
                        <input type="password" name="newPasswordConfirm" onChange={this.handleChange}/>
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
								<div className="actions">
									<button
									className="button"
									onClick={this.closeModal}
									>
									X
									</button>
									<button className="button"onClick= {this.logout}>Logout</button>
								</div>
							</div>
						</Popup> 

            <style jsx>{`
              .login-button {
                height: 100%;
                display: flex;
                align-items: center;
              }
              #login {
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