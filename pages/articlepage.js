import React, { Component } from 'react';
import Link from 'next/link';
import MainFactory from '../layout/main.js';
import Pagination from 'react-js-pagination';


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
		super(props);
		this.state = {
			articles: [],
			currentPage: 1,
			total: 0
		};
		this.eachLink = this.eachLink.bind(this);
		this.onPageChange = this.onPageChange.bind(this);
	}

	componentWillMount(){
		fetch("http://uclacki.org/api/articles/count").then(response => response.json())
		.then(json => this.setState({total: json}));
		fetch("http://uclacki.org/api/articles/page/" + this.state.currentPage).then(response => response.json())
			.then(json => this.setState({articles: json}));
	}

	onPageChange(pageNumber) {
		fetch("http://uclacki.org/api/articles/page/" + pageNumber).then(response => response.json())
			.then(json => this.setState({articles: json, 
				currentPage: pageNumber}));
		console.log(pageNumber);
	}

	eachLink(link) {
		console.log(link.title);
		// Why do we need unique keys: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905
		return (
			<div className="article-entry" key={link._id}>
				<div className="event-image">
				{link.content.image &&
								<img src={link.content.image.url} />}
				</div>
				<div className="excerpt">
					<Link as={`/article/${link.slug}`} href={`/article?slug=${link.slug}`}><h2>{link.title}</h2></Link>	
					<p dangerouslySetInnerHTML={{ __html: link.content.summary }}></p>
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
		return(
			<div>
				{this.state.articles.map(this.eachLink)}
				<Pagination
		          activePage={this.state.currentPage}
		          itemsCountPerPage={10}
		          totalItemsCount={this.state.total}
		          onChange={this.onPageChange}
		        />

		        <style jsx global>{`
		        	.pagination,
					.pagination li a {
					  display: flex;
					  flex-wrap: wrap;
					  justify-content: center;
					  align-items: center;
					  list-style: none;
					}
					.pagination li { background-color: lightseagreen; }
					.pagination a {
					  font-weight: 300;
					  padding-top: 1px;
					  text-decoration:none;  
					  border: 1px solid rgba(0,0,0,.25);
					  border-left-width: 0;
					  min-width:44px;
					  min-height:44px;
					  color: rgba(255,255,255,.85);  
					  box-shadow: inset 0px 1px 0px 0px rgba(255,255,255,.35);
					}
					.pagination li:not([class*="current"]) a:hover { 
					  background-color: rgba(255,255,255,.2);
					  border-top-color: rgba(0,0,0,.35);
					  border-bottom-color: rgba(0,0,0,.5);
					}
					.pagination li:not([class*="current"]) a:focus,
					.pagination li:not([class*="current"]) a:active {;
					  box-shadow: 0px 0px 10px 1px rgba(0,0,0,.25);
					  border-left-width:1px;
					}
					.pagination li.current a { 
					  padding-top:.25em;
					  color: rgba(255,255,255,1);
					  background-color: rgba(255,255,255,.15);
					  box-shadow: inset 0px 2px 1px 0px rgba(0,0,0,.25);
					  cursor: default;
					  pointer-events: none;
					}
					@media only screen and ( max-width: 64.063em ) {  
					  .pagination li:first-child,
					  .pagination li:last-child {
					    /* screen readers only */
					    position: absolute;
					    top: -9999px;
					    left: -9999px;
					  }
					  .pagination li:nth-of-type(2) a { border-left-width: 1px; }
					}
					@media only screen and ( max-width: 40.063em ) {  
					  .pagination li {
					    /* screen readers only */
					    position: absolute;
					    top: -9999px;
					    left: -9999px;
					  }
					  .pagination li.current,
					  .pagination li:first-of-type,
					  .pagination li:last-of-type,
					  .pagination li:nth-of-type(2),
					  .pagination li:nth-last-of-type(2){
					    position: initial;
					    top: initial;
					    left: initial;
					  }
					  .pagination li:nth-of-type(2) a { border-left-width: 0; }
					}
					@media only screen and ( max-width: 30.063em ) {  
					  
					  h1 { font-size: 1.35em !important; }
					  
					  .pagination li:first-child,
					  .pagination li:last-child {
					    /* screen readers only */
					    position: absolute;
					    top: -9999px;
					    left: -9999px;
					  }
					  .pagination li:nth-of-type(2) a { border-left-width: 1px; }
					}
					@media only screen and ( max-width: 15.063em ) {  /* For watches? */
					  
					  .pagination li { width: 50%;}
					  
					  .pagination li.current { 
					    order: 2;
					    width: 100%;
					    border-left-width: 1px;
					      
					  }  
					}
					}
		        `}</style>
   			</div>
   		);
	}
}
export default MainFactory({headerTitle: 'Articles'})(ArticlePage);