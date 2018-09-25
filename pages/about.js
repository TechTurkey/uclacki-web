import React, { Component } from 'react';
import Main from '../layout/main.js';
import Link from 'next/link';

const About = () => {

		return(
			<div className="content">

				<div className="about-summary">
					<h1>About Circle K International</h1>
					<p>
					Originally chartered on March 7, 1974, UCLA Circle K is a community service organization run by college students wishing
					to make a difference. We operate under three tenents: Service, Leadership, & Fellowship.
					</p>

					<div className="service">
						<img src="/static/griffith.jpg" />
						<div>
							<h2>Service</h2>
							<p>Service is the leading tenet of Circle K International—the aspect of the organization that our members hold closest to their hearts.
							It is through service that our members can change the world for good, their small contributions building up over time.
							From weekly animal adoptions to serving food to homeless communities, from fundraisers for various charities to gardening and
							painting benches at local schools, Circle K provides a variety of opportunities for everyone to get involved with the local communities
							and make a difference.</p>
						</div>
							<h4>District Large-Scale Service Project</h4>
							<p>Every year, the California Nevada Hawaii District hosts a large-scale service project abbreviated as DLSSP for everyone to attend in
							order to improve our communities. Due to the size of our district, there is a North and South DLSSP so that clubs have a more convenient
							location to go to in order to do service.</p>
					</div>

					<div className="leadership">
						<img src="/static/kimbap.jpg" />
						<div>
							<h2>Leadership</h2>
							<p>As the second tenet of Circle K, leadership bears great weight in nurturing our members to support our communities and the world.
							We provide our members various opportunities for leadership development—from participation in committees, to election as officers,
							to heading new service projects. Members of UCLA Circle K will also learn professionalism and grasp the basics of networking through
							our beloved alumni and district/divisional opportunities.</p>
						</div>
					</div>

					<div className="fellowship">
						<img src="/static/Member-Retreat.jpg" />
						<div>
							<h2>Fellowship</h2>
							<p>UCLA Circle K is not just a service organization, but a community as well! With Fellowship as one our three tenets, UCLA Circle K aims to
							develop friendship by connecting its members through their common interests, which include service. Large-scale socials like movie nights
							and the buddy system is just one of the many facets we have to create camaraderie between our members. Alongside other things like mentorship,
							the family system, service events, general and committee meetings, and more, close relationships are formed and fostered in the club.</p>
						</div>
					</div>

					<Statistics />
				</div>
				<hr/>

				<div className="kiwanis">

					<h1>Beyond UCLA</h1>
					
					<div className="division">
						<div>
							<h2>Metro Division</h2>
							<p>The Metro Division consists of 8 schools in the LA area</p>
							<ul>
								<li>UCLA</li>
								<li>CSU Long Beach</li>
								<li>CSU Northridge</li>
								<li>Pierce College</li>
								<li>USC</li>
								<li>El Camino College</li>
								<li>LA Harbor College</li>
								<li>Cerritos College</li>
							</ul>
						</div>
					</div>
					<div className="district">
						<div>
							<h2>CNH District</h2>
							<p>9 divisions spanning California, Nevada, and Hawaii form the CNH District</p>
							<a href="http://cnhcirclek.org">Check out the District Website</a>
						</div>
					</div>
					<div className="kiwanis-family">
						<div>
							<h2>Kiwanis International</h2>
							<p>Established in 1915, Kiwanis members around the world strive to better our local communities. The primary focus has
							been “serving the children of the world” since 2005. Kiwanis extends its reach through Student Leadership Programs,
							allowing students from elementary school to college to engage in helping their communities and building their leadership
							skills. Below are the branches of the Kiwanis Family:</p>
							<ul>
								<li>
									<Link href="www.kkids.org"><a>K-Kids</a></Link> - Elementary School
								</li>
								<li>
									<Link href="www.buildersclub.org"><a>Builders Club</a></Link> - Middle School
								</li>
								<li>
									<Link href="www.kiwins.org"><a>KIWINS</a></Link> - High School
								</li>
								<li>
									<Link href="www.keyclub.org"><a>Key Club</a></Link> - High School
								</li>
								<li>
									<Link href="www.circlek.org"><a>Circle K</a></Link> - College
								</li>
								<li>
									<Link href="www.aktionclub.org"><a>Aktion Club</a></Link> - Adults with Disabilities
								</li>
								<li>
									<Link href="www.kiwanis.org"><a>Kiwanis</a></Link> - Adults
								</li>
							</ul>
						</div>
					</div>
				</div>
				
				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
						// background: rgba(255, 255, 255, 0.2);
						background: rgba(0, 0, 0, 0.6);
						margin: 0 5%;
						padding-left: 20px;
						padding-right: 20px;	// Overriding padding-bottom makes it crash into the footer
					}
					.about-summary {
						margin: 50px auto 0px;
						padding: 20px 0;
						color: white;
						// background: white;

						// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 8px 12px 6px #444444;
					}
					.about-summary h1 {
						margin: 0;
					}
					// @media (min-width: 768px) {
					//   .about-summary {
					//     width: 750px;
					//   }
					// }

					// @media (min-width: 992px) {
					//   .about-summary {
					//     width: 970px;
					//   }
					// }

					// @media (min-width: 1200px) {
					//   .about-summary {
					//     width: 1170px;
					//   }
					// }
					// .service>div, .leadership>div, .fellowship>div {
					// 	background-color: rgba(255, 255, 255, 0.75);

					// 	padding: 1px 10px;
					// }
					.service, .leadership, .fellowship {	/* No idea why it works to make the div respect float height */
						overflow: hidden;
					}
					.service > img, .leadership > img, .fellowship > img {
						clear: both;
						margin: 10px;
						max-width: 25%;
						float: right;
					}
					// .service {
					// 	background-image: url('/static/griffith.jpg');
					// 	background-size: cover;
					// 	background-position: 0 50%;
					// 	// background-attachment: fixed;
					// 	// margin-bottom: 10px;
					// }
					// .leadership {
					// 	background-image: url('/static/awards.jpg');
					// 	background-size: cover;
					// 	background-position: 0 60%;
					// 	// background-attachment: fixed;
					// 	// margin-bottom: 10px;
					// }
					// .fellowship {
					// 	background-image: url('/static/Member-Retreat.jpg');
					// 	background-size: cover;
					// 	background-position: 0 40%;
					// 	// background-attachment: fixed;
					// 	// margin-bottom: 10px;
					// }


					.kiwanis {
						overflow: hidden;
					}
					.kiwanis h1 {
						text-align: center;
					}
					.kiwanis h2, .kiwanis p, .kiwanis a {
						font-family: "Century Gothic";
						// margin: 0;
					}
					.kiwanis .division, .kiwanis .district, .kiwanis .kiwanis-family {
						position: relative;
						height: 500px;
						background-size: cover;
						overflow: hidden;
						background-attachment: fixed;
					}
					.kiwanis .division {
						background-image: url('/static/Dance-Marathon.jpg');
					}
					.kiwanis .division > div {
						// position: absolute;
						// bottom: 0;
						// left: 250px;
						// right: 0;
						// top: 0;
						// padding: 50px;
						// width: 400px;
						// height: auto;
						// background-color: rgba(45, 43, 43, 0.6);
						background-color: rgba(0, 0, 0, 0.5);	// graphic standards blue
						width: auto;
						height: 100%;

						padding: 40px 20px;
						color: white;
					}
					// .kiwanis .division > div > 
					
					.kiwanis .district {
						background-image: url('/static/awards.jpg');
					}
					.kiwanis .district > div {
						// position: relative;
						// margin: 0 auto;
						// padding: 50px;
						// width: 400px;
						// height: calc(100% - 100px);
						// background-color: rgba(45, 43, 43, 0.6);
						background-color: rgba(242, 225, 139, 0.6);	// graphic standards blue
						color: black;
						width: auto;
						height: 100%;

						padding: 40px 20px;
					}

					.kiwanis .kiwanis-family {
						background-image: url('/static/Banquet.jpg');
					}
					.kiwanis .kiwanis-family > div {
						background-color: rgba(0, 61, 121, 0.6);	// graphic standards blue
						width: auto;
						height: 100%;
						padding: 40px 20px;
						color: white;
					}
					.kiwanis .kiwanis-family a {
						color: white;
					}
				`}</style>
			</div>
		);
};

class Statistics extends Component {
	render(){
		return (
			<div className="container">
				<div className="stat-box">
					<img src="/static/Graphics/gear.png" alt="gear" />
					<p>2044 Hours</p>
					<h3>Service</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/globe.png" alt="globe" />
					<p>1052 Hours</p>
					<h3>Leadership</h3>
				</div>
				<div className="stat-box">
					<img src="/static/Graphics/heart.png" alt="heart" />
					<p>598 Hours</p>
					<h3>Fellowship</h3>
				</div>

			<style jsx>{`
					.container{
						/*Change color styling for the statistics section here*/
						--statistics-background:#7ea4ce; /*light blue-grey*/
						/*End of Statistics Styling*/
						margin-top: 20px;
						display: flex;
						flex-flow: row wrap;
						justify-content: space-around;
						text-align: center;
						// background-color: var(--statistics-background);
					}

					img {
						width: 100px;
						height: auto;
					}

					.stat-box p{
						font-size: 1.5em;
					}

					.stat-box h3{
						font-size: 2em;
					}
			`}</style>

			</div>
		);
	}
}

export default Main(About, 'About');