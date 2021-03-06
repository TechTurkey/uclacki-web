import React, { Component } from 'react';
import MainFactory from '../layout/main.js';
import Link from 'next/link';
import { withRouter } from 'next/router';	// Work with param string in URL
var moment = require('moment');

class Article extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// Default initialization in case fetch doesn't work
			title: 'Article not found',
			subtitle: '',
			header: '',

			content: {
				imageUrl: '',	// Insert url to image of not found
				summary: '',
				full: '',
			}
		};
	}

	componentDidMount() {
		this.getArticle();	
	}

	makeHeader(author, location, date)
	{
		let header;
		if(author && author.name)
			header = author.name.first + " " + author.name.last;
		else
			header = "unknown";
		if(location)
		{
			header += " | " + location;
		}
		if(date)
			header += " | " + moment(date).format("dddd, MMM Do");


		return header;
	}

	getArticle = () => {
		fetch("/api/articles/" + encodeURI(this.props.router.query.slug))
		.then(response => response.json())
		.then(json => {
			if(json) {
				this.setState({
				title: json.title || "Article Not Found",
				subtitle: json.subtitle,
				header: this.makeHeader(json.author, json.content.location, json.publishedDate),

				content: {
					imageUrl: json.content.image && json.content.image.url,	// Insert url to image of not found
					summary: json.content.summary,
					full: json.content.full
				}
			});
		}})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return(
			<div className="content">
				<div className="article">
					<Link href="/articlepage"><h4 className="back"><i className="fas fa-chevron-left"></i> Go back </h4></Link>
					
					<h1>{this.state.title}</h1>
					{this.state.subtitle &&
						<h3>{this.state.subtitle}</h3>}
					<p>{this.state.header}</p>

					<hr />
					{ this.state.content.imageUrl &&
						<img className="article-image" src={this.state.content.imageUrl} /> }
					<div dangerouslySetInnerHTML={{__html: this.state.content.full}}></div>
				</div>
				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: hidden;	// Don't let children's margin push down the main content
					}
					.back {
						display: inline-block;
						margin-bottom: 10px;
						padding: 5px;
						border-radius: 5px;
						background-color: #eee;
						cursor: pointer;
					}

					.article {
						margin: 50px auto 0px;
						padding: 20px;
						background: white;

						-webkit-box-shadow: 0 8px 6px -6px #383838;
						-moz-box-shadow: 0 8px 6px -6px #383838;
						box-shadow: 4px 8px 12px 6px #444444;
					}
					.article h1, h3 {
						margin: 0;
					}
					.article h3 {
						color: #555;
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

export default MainFactory({background: 'confetti'})(withRouter(Article));
