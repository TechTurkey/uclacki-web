import React, { Component } from 'react';
import Head from 'next/head';
import Footer from '../footer.js';
import Header from '../header.js';


class Committees extends Component {
	render() {
		return(
			<div>
				 <Head>
      				<title>UCLA CKI | About</title>
      				<link href="/static/about.css" rel="stylesheet" />
      				<link rel="shortcut icon" href="/static/CKI-logo.png" />
    			</Head>
    			<Header />
    			<Banner />
    			<NavBar />
    			<Stripes />
    			
    			<p>In charge of the club’s website, videos, FB Event Banners, and anything else related to tech or graphics,
    			we at GraphTech committee work to provide UCLA Circle K with the proper 21st century resources and features it needs
    			to function as a modern campus organization. Armed with tools like WordPress, Excel, and Creative Cloud, we strive to
    			maximize the utility and aesthetic of all club interfaces through our creativity, technology, and resourcefulness. If you’re
    			interested in any aspect of design, web development, video editing, or anything of the like, join us, and together we will rise
    			to the occasion and defeat all which stand to oppose our principles of compassion, goodwill, and lighthearted savagery.
					GraphTech Facebook Group</p>

				<h3>Meet the Chairs</h3>


				<h4>Subchairs</h4>

    			<Footer />
			</div>
		);
	}
}

class Banner extends Component{
	render() {
		return(
			<div className="banner">
				<div className="banner-container">
				<h2>Committees</h2>
				</div>
			</div>
		);
	}
}

class NavBar extends Component{
	render(){
		return(
			<div className="navbar">
				<ul>
						<li>Service</li>
						<li>Leadership</li>
						<li>Fellowship</li>
				</ul>
			</div>
		); 
	}
}

class Stripes extends Component{
	render(){
		return(
				<img src="/static/stripes.jpg" alt="stripes" id="stripe-border" />
		);
	}
}

export default Committees;