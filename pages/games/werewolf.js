import React, { Component } from 'react';
import Main from '../../layout/main.js';

class Werewolf extends Component {

	constructor(props) {
		super(props);

		this.state = {
			playing: false;
		}

	}

	render() {
		return(
			<div className="content">



				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
						// color: white;
					}

					.card {
					  background: #fff;
					  border-radius: 2px;
					  display: inline-block;
					  height: 300px;
					  margin: 1rem;
					  position: relative;
					  width: 300px;
					  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
					}
				`}</style>
			</div>
		);
	}
}

export default Main({headerTitle: 'Werewolf'})(Werewolf);