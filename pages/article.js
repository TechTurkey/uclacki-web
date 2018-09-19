import React, { Component } from 'react';
import Main from '../layout/main.js';
import Link from 'next/link';
import { withRouter } from 'next/router';	// Work with param string in URL
var moment = require('moment');

class Article extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// Default initialization in case fetch doesn't work
			article: {
				_id: '',
				title: 'This Article was not found',
				subtitle: '',
				state: 'archived',
				publishedDate: '',

				author: '',
				content: {
					image: {url: ''},	// Insert url to image of not found
					location: '',
					date: '',
					summary: '',
					full: '',
				}
			}
		};
	}

	componentWillMount() {
		var url = "http://142.93.83.231/api/articles/" + encodeURI(this.props.router.query.title)
		fetch("http://142.93.83.231/api/articles/" + encodeURI(this.props.router.query.title))
		.then(response => response.json()).then(response =>console.log(response))
		.then(json => {
			if(json) {
				this.setState({article: {
					_id: json._id,
					title: json.title,
					subtitle: json.subtitle,
					state: json.state,
					publishedDate: moment(json.publishedDate).format("MM/DD/YYYY"),

					author: json.author,
					content: {
						image: json.content.image,
						location: json.content.location,
						date: moment(json.content.date).format("MM/DD/YYYY"),
						summary: json.content.summary,
						full: json.content.full,
					}
				}});
			}
			return json;
		})
		.catch(err => {
			console.log(err);
			done();
		});
	}

	render() {
		console.log(this.state.article);
		return(
			<div className="content">
				<div className="article">
					<h1>{this.state.article.title}</h1>
					<h4>{this.state.article.subtitle} | {this.state.article.author.name.first + " "+ this.state.article.author.name.last} | {this.state.article.location} | {this.state.article.publishedDate.toString()}</h4>
					{ this.state.article.content.image.url &&
						<img className="article-image" src={this.state.article.content.image.url} /> }
					<p>{this.state.article.content.full}</p>
				</div>
				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
					}

					.article {
						margin: 50px auto 0px;
						padding: 20px 0;
						background: white;

						-webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 8px 12px 6px #444444;
					}
					.article h1 {
						margin: 0;
					}
					.article h4 {
						margin-top: 4px;
					}
					@media (min-width: 768px) {
					  .article {
					    width: 750px;
					  }
					}
					@media (min-width: 992px) {
					  .article {
					    width: 970px;
					  }
					}
					@media (min-width: 1200px) {
					  .article {
					    width: 1170px;
					  }
					}

					.article-image {
						max-width: 100%;
						height: auto;

						margin: 0 auto;
					}
					
				`}</style>
			</div>
		);
	}
};

export default Main(withRouter(Article), 'Article');