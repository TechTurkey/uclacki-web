import React, { Component } from 'react';
import Head from 'next/head';
import MainNav from '../../layout/main.js';


class Committees extends Component {
	render() {
		return(
			<div>

  				<div className="content">
	    			<h1>GraphTech</h1>
	    			
	    			<p>In charge of the club’s website, videos, FB Event Banners, and anything else related to tech or graphics,
	    			we at GraphTech committee work to provide UCLA Circle K with the proper 21st century resources and features it needs
	    			to function as a modern campus organization. Armed with tools like WordPress, Excel, and Creative Cloud, we strive to
	    			maximize the utility and aesthetic of all club interfaces through our creativity, technology, and resourcefulness. If you’re
	    			interested in any aspect of design, web development, video editing, or anything of the like, join us, and together we will rise
	    			to the occasion and defeat all which stand to oppose our principles of compassion, goodwill, and lighthearted savagery.
						GraphTech Facebook Group</p>

					<h3>Meet the Chairs</h3>


					<h4>Subchairs</h4>

					<h3>Committee Meetings</h3>
				</div>

    			<style jsx>{`
    				h1 {
    					text-align: center;
    				}
    				.content {
    					padding: 2% 4%;
    				}
				`}</style>
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

export default MainFactory(Committees, 'GraphTech');