import React, { Component } from 'react';
import Main from '../../layout/main.js';
import Link from 'next/link';

const Subchair = () => {

		return(
			<div className="content">
				<div className="content-block intro">
					{/*<p>Application is due <strong>October 20th, 11:59PM.</strong> Click <a href="http://uclacki.org/subcommittee">here</a> to apply!</p>
					*/}<p>Click on the following to jump to a committee (click on committee icon to go to committee page):</p>
					<ul className="bookmarks">
						<li><a className="service" href="#service">Service</a></li>
						<li><a className="fundraising" href="#fundraising">Fundraising</a></li>
						<li><a className="kfam" href="#kfam">Kiwanis Family</a></li>
						<li><a className="commarket" href="#commarket">Communications & Marketing</a></li>
						<li><a className="spiritship" href="#spiritship">Spiritship</a></li>
					</ul>
				</div>

				<hr />

				<div id="service" className="content-block">

					<Link href="/committees/service"><img src="/static/Committees/Committee Icons/Service B.png" /></Link>

					<h2><span>Small Scale Service</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Family Service Liason</h4>
							<p>1) What is one smaller service project that you would want an individual family to take on?  2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Event Coordinator</h4>
							<p>1) You have booked an event and need five people to go. Explain your game plan in making this event successful. Describe what a successful event is for you.  2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Community Outreach</h4>
							<p>1) What are some organizations that you would like to see Circle K work with (on and off campus) and why? 2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
					</div>

					<h2><span>Large Scale Service</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Research and Budgeting</h4>
							<p>As my Research and Budgeting subchair, you will be helping me get in contact with different groups and organizations, while also helping me with the budgeting aspect of my large-scale events!</p>
							<p>1) What experience do you have in online research/communications? Similarly, what experience do you have in budget managment? (Please be very thorough with this answer!)</p>
							<p>2) What kinds of time commitments do you currently have or may have in the future? Please include any academics, as well as number of hours per week for each of your commitments.</p>
							<p>3) If you were any type of animal, what would you be and why?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Creativity and Planning</h4>
							<p>Do you want to help in adding a special flare to my large scale events? Well this is the position for you! You will be helping me turn my large scale events into a more fun and interesting experience, while also helping me come up with interesting ideas/plans for said events.</p>
							<p>1) Okay, here's the scenario: My large scale event is a UCLA campus tour for children. They are split into groups of 5-10 kids and taken around campus by different volunteers. How will you make this event more interesting/exciting for them? (Go wild with this answer!)</p>
							<p>2) What kinds of time commitments do you currently have or may have in the future? Please include any academics, as well as number of hours per week for each of your commitments.</p>
							<p>3) If you were any type of animal, what would you be and why?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="fundraising" className="content-block">

					<Link href="/committees/mdeer"><img src="/static/Committees/Committee Icons/Fundraising B.png" /></Link>

					<h2><span>Small Scale Fundraising</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>External Fundraising</h4>
							<p>As External Fundraising chair you will be assisting with Bruin Walk fundraisers and restaurant fundraisers. What are some ideas you have for Bruin Walk fundraisers? How would you deal with unexpected challenges while fundraising on Bruin walk? (Ex: Different organizations selling the same food on the same day)</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>District Fundraising Initiative Chair</h4>
							<p>The profits from most of our fundraisers go directly to the District Fundraising Initiatives. The District Fundraising Initiatives for the 2018-19 term are the Pediatric Trauma Program, the Kiwanis Family House, and Feeding America. It is important for our general members to know what our DFIs are and for the general public to know what their money is going towards. As the DFI education chair, how would you promote awareness of the DFIs? Please be as detailed as possible!</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Publicity</h4>
							<p>Publicity plays a large role in fundraising and can be crucial to having a successful fundraiser. How would you publicize fundraising events besides flyering, making a facebook post and/or facebook event page/other social media? How would you ensure it's success? Please be as detailed as possible!</p>
						</div>
					</div>

					<h2><span>Large Scale Fundraising</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Internal Fundraising</h4>
							<p>As Internal Fundraising Chair you will be responsible for coordinating events within the club such as Double Dare Week, Board/MDEER Auctions and Bruin Plaza Fundraisers. Come up with a bruin plaza fundraiser and outline the steps you will need to make the event successful. Please be as detailed as possible!</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Large Scale Event Coordinator</h4>
							<p>As the Large Scale Event Coordinator, you will be helping the Large Scale Fundraising Chair plan and execute large scale events such as the gaming tournament or concert or tv tapings. What are the main obstacles you would expect when trying to execute a big event? How would you solve these problems? Please be as detailed as possible</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Logistics</h4>
							<p>As Logistics chair, you will be primarily working with the treasurer in filling out funding applications. Often, when filling out funding applications you will need to be persuasive and crafty in the language you use on the application. Convince me (an environmentalist) why I should buy a plastic water bottle over a reusable water bottle.  Secondly, sometimes when we apply for funding, we do not get the full amount we requested. In the event that this happens, how would you go about to resolve this issue?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="kfam" className="content-block">

					<Link href="/committees/kfam"><img src="/static/Committees/Committee Icons/KFam B.png" /></Link>

					<h2><span>Kiwanis Family Youth</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Key Club KIWIN'S Liason Liason</h4>
							<p>The Key Club Liason would be assist in promoting relations with our surrounding Key clubs/KIWIN'S  as well as working along side the Event Planning chair and I in coming up with new events or programs geered towards our Key Clubbers/KIWINNERS.</p>
							<p>1) What are some ideas (events/ programs/resources) you have in mind our CKI club can host for our Key Clubs/KIWIN'S?</p>
							<p>2) Do you, if any, have past experience working with or have been in Key Club/KIWIN'S and please elaborate? (Prior experience is not requeired)</p>
							<p>3) If answered yes to number two, HOW DO YOU FEEL?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>K-Kids/Builder Club Liason</h4>
							<p>Our Circle K club is fortunate enough to be located close to a K-Kids club and Builders Club, Playa Del Rey Elementary School's K-Kids and  Lincoln Middle School's Builders club. They have monthly meetings in which we as UCLA CKI attend and interact with the kids. K-Kids Meetings for this quarter are set to be on Thursday, April 25th from 2-5pm, Thursday, May 16 from 2-5pm including transportation time there and back. Builder Club meeting this quarter will be Tuesday, April 30 from 2:30-5:00pm and thier banquet will be on May 7, 2:30-5:00pm. As K-Kids/Builders Club liason you would help in attending these meeting if your schedule permits as well as find activites or programs we can put on for the K-Kids either within the meeting or outside.</p>
							<p>1) Would you be able to make those meeting times for either meeting?</p>
							<p>2) What are some ideas you have in mind for future service progrojects or event we as UCLA CKI can do for the K-Kids/Builder Club, and how you execute?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Event planning Chair</h4>
							<p>As Kiwanis Family youth chair, it is the chairs job to plan events such as Key to College amoung other things as event planning chair you would assitant in planning such events. What, if any, past events have you planned or assisted in planning? What are the key steps one must take when planning an event (ex: setting up date, promoting, etc) please try to do in chronological order?</p>
						</div>
					</div>

					<h2><span>Kiwanis Family Networking</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Circle K Relations Chair</h4>
							<p>The Circle K Relations Chair would help me build better relationships with other Circle K clubs, mostly in our division (Metro).</p>
							<p>1) List an idea for interclub (events along the lines of service, socials, spirit sessions, etc. with members from another club) events with other Circle K clubs.</p>
							<p>2) If applicable, do you have any existing relationships with any Metro Division club (ie USC, ECC, CSULB, CSUDH, CSUN, Pierce College) or a Circle K club outside of our division?</p>
							<p>3) Why do you think it's important to build connections with other Circle K clubs?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Kiwanis Relations Chair</h4>
							<p>As Kiwanis Relations Chair, you will be helping me build stronger connections with our sponsors, the Santa Monica Kiwanis Club.</p>
							<p>1) What are some ideas you have to promote Kiwanis events and encourage members to attend them?</p>
							<p>2) When we spend time with Santa Monica Kiwanians, we are the face of the UCLA CKI club that they sponsor. How can we put our best foot forward when we interact with them?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="commarket" className="content-block">

					<img src="/static/Committees/Committee Icons/GraphTech B.png" />

					<h2><span>Graphics</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Miscellaneous Graphics</h4>
							<p>Why do you think graphics are important and what do you want to gain from being in this subcommittee?</p>
						</div>
					</div>

					<h2><span>Campus Outreach</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Digest Creative Editor</h4>
							<p>Do you like making quirky assignments? How would you write a column of writing that is interesting to read and something that members look forward to reading?</p>
						</div>
					</div>

					<h2><span>Media Relations</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Photo Assistant</h4>
							<p>"As Photo Assistant, you will take photos and/or designate people to take photos at events. You need to help me ensure that EVERY event is documented with photos. You will need to contact chairs of 5-8 events per week.</p>
							<p>1. How will you ensure that photos are taken at the events I assign to you?</p>
							<p>2. Prior photography experience is not required,
							but do you have any experience taking photos? If so, briefly describe them.</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>News Article Editor</h4>
							<p>As News Article Editor, you will revise all articles written for events I designated for them to be posted on our website (uclacki.org). Your workload will be three articles per week.</p>
							<p>If you have written an article before, what do you think can be improved upon or changed in the article request email?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="spiritship" className="content-block">

					<Link href="/committees/spiritship"><img src="/static/Committees/Committee Icons/Spiritship B.png" /></Link>

					<h2><span>Spirit & Recognition</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Member Recognition Assistant</h4>
							<p>As Member Recognition assistant, I will have you assist me with several projects: Humans of Circle K, birthday videos, and recognition gifts.</p>
							<p>1. Do you have any ideas for new ways to recognize members in the club?</p>
							<p>2. Any new ideas for gifts when giving to members that are recognized?</p>
							<p>3. How would you try to incorporate cheers into the club?</p>
							<p>4. What qualities make you right for this specific job?</p>
						</div>
					</div>

					<h2><span>Fellowship</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Campus Event Coordinator</h4>
							<p>As the Campus Event Organizer, you will be in charge of organizing member attendance for events like culture festival and Spring Sing. Besides these socials, how what other events can you help organize and how will you promote them to the general members?  What resources will you use to find the necessary info for such events?</p>
						</div>
					</div>
				</div>

				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
						// color: white;
					}
					.content-block {
						margin: 0px auto 0px;
						padding: 20px 0;
						// background: white;

						// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 8px 12px 6px #444444;
					}
					.content-block h1, .content-block h2 {
						margin: 0;
					}
					.intro > ul {
						list-style: none;
						display: flex;
						flex-flow: row wrap;
						padding: 0;
						margin: 5px 0 0 0;
					}
					intro p {
						margin: 0;
					}
					.intro li {
						margin: 0 5px;
					}
					.intro .service { color: #F2E18B; }
					.intro .fundraising { color: #6A9448; }
					.intro .kfam { color: #003D79; }
					.intro .graphtech { color: purple; }
						.intro .commarket { color: purple; }
					.intro .publicrelations { color: #820024; }
					.intro .spiritship { color: #00A5D9; }
					.intro .specialevents { color: #C7D6EE; }
					.content-block > h2 {
						// display: inline-block;
						text-align: center;
						position: relative;
						// border-bottom: solid 1px gray;
					}
					.content-block > h2::before {
						background: #aaa;
						content: "";
						display: block;
						height: 2px;
						position: absolute;
						top: 50%;
						width: 50%;
						left: 25%;
					}
					.content-block > h2 span {
						background: #fff;
						  padding: 0 15px;
						  position: relative;
						  z-index: 1;
					}
					@media (min-width: 768px) {
					  .content-block {
					    width: 750px;
					  }
					}

					@media (min-width: 992px) {
					  .content-block {
					    width: 970px;
					  }
					}

					@media (min-width: 1200px) {
					  .content-block {
					    width: 1170px;
					  }
					}

					.content-block > img {
						display: block;
						max-width: 100px;
						height: auto;
						margin: 15px auto;
						cursor: pointer;
					}

					p {
						font-size: 18px;
					}
					img {
						width: 100%;
						height: auto;
					}



					.positions {
					  display: grid;
					  grid-template-columns: repeat(12, 1fr);
					  grid-gap: 20px;
					}

					.col-sm-12 {
					    grid-column: span 12;
				   	}
					@media (min-width: 1200px) {
					  .col-lg-6 {
					    grid-column: span 6;
					  }
					  .col-lg-4 {
					  	grid-column: span 4;
					  }
					}

				`}</style>
			</div>
		);
};

export default Main({headerTitle: 'Subchair Positions'})(Subchair);