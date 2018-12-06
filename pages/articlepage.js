import React, { Component} from 'react';
import Link from 'next/link';
import MainFactory from '../layout/main.js';


class ArticlePage extends Component{
	render(){
		return(
			<div className="content">
				<ArticleArea />

				<style jsx>{`
					.content {
						padding-left: 40px;
						padding-right: 40px;
						overflow: auto;	// margin collapsing on top
					}
				`}</style>
			</div>
		);
	}
}

class ArticleArea extends Component{
	constructor(props){
		super(props)
		this.state = {
			articles: [],
			currentPage: 1
		}
		this.add = this.add.bind(this)
		this.eachLink = this.eachLink.bind(this)
	}

	componentWillMount(){
		fetch("/api/articles/page/" + this.state.currentPage).then(response => response.json())
			.then(json => json.forEach(post => this.add(post)));
	}

	add(text) {
		this.setState(prevState => ({
			articles: [
				...prevState.articles,{
					text
				}
			]
		}))
	}

	eachLink(link) {
		console.log(link.text.title);
		return (
			<div className="article-entry">
				<div className="event-image">
				{link.text.content.image &&
								<img src={link.text.content.image.url} />}
				</div>
				<div className="excerpt">
					<Link className="link" as={`/article/${link.text.title}`} href={`/article?title=${link.text.title}`}><h2>{link.text.title}</h2></Link>	
					<p dangerouslySetInnerHTML={{ __html: link.text.content.summary }}></p>
				</div>

				<style jsx>{`

					.article-entry {
						position: relative;
						display: flex;
						flex-flow: row nowrap;

						margin: 20px 0;

						// background: white;

						z-index: 1;
					}

					@media (max-width: 989px) {
						.article-entry {
							flex-flow: column nowrap;
						}
						.event-image {
							max-width: 100%;
							height: auto;
						}
					}

					@media (min-width: 989px) {
						.event-image {
							max-width: 25%;
							height: auto;
						}
					}

					/* Page effect */
					.excerpt::before,
					.excerpt::after {
					  content: '';
					  position: absolute;
					  bottom: 15px;
					  width: 20%;
					  height: 10px;
					  box-shadow: 0 5px 14px rgba(0,0,0,.7);
					  z-index: -1;
					  transition: all .3s ease-in-out;
					}

					.excerpt::before {
					  left: 10px;
					  transform: skew(-5deg) rotate(-5deg);
					}

					.excerpt::after {
					  right: 10px;
					  transform: skew(5deg) rotate(5deg);
					}

					.excerpt:hover::before,
					.excerpt:hover::after {
					  box-shadow: 0 2px 14px rgba(0,0,0,.4);
					}

					.excerpt:hover::before {
					  left: 5px;
					}

					.excerpt:hover::after {
					  right: 5px;
					}

					.event-image {
						// margin-right: 20px;
					}

					.event-image img {
						max-width: 100%;
						height: auto;
					}

					.excerpt {
						position: relative;
						padding: 20px;
						flex: 1;
						background: white;
						// border: solid 0.5px black;
					  box-shadow: 0 2px 14px rgba(0,0,0,.1);
						// z-index: 1;
					}

					.excerpt h2 {
						margin-top: 0;
						text-decoration: underline;
						cursor: pointer;
					}
					.excerpt h2:hover {
						color: #0000EE;
					}
				`}</style>
			</div>
		);
	}

	render() {
		console.log(this.state.articles);
		return(
			<div>
				{this.state.articles.map(this.eachLink)}
			</div>);
	}
}
export default MainFactory({headerTitle: 'Articles'})(ArticlePage);