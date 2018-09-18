import React, { Component} from 'react';
import Link from 'next/link';
import MainFactory from '../layout/main.js';


class ArticlePage extends Component{
	render(){
		return(
			<div>
			<h1>Articles</h1>
			<ArticleArea />
		</div>);
	}
}

class ArticleArea extends Component{
	constructor(props){
		super(props)
		this.state = {
			articles: []
		}
		this.add = this.add.bind(this)
		this.eachLink = this.eachLink.bind(this)
	}

	componentWillMount(){
		fetch("http://142.93.83.231/api/articles").then(response => response.json())
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
			<Link as={`/article/${link.text.title}`} href={`/article?title=${link.text.title}`}><a>{link.text.title}</a></Link>
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
export default MainFactory(ArticlePage, 'ArticlePage');