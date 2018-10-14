import React, { Component } from 'react';
import Main from '../../layout/main.js';
import Link from 'next/link';

const Subchair = () => {

		return(
			<div className="content">
				<div className="content-block intro">
					<p>Application is due <strong>October 20th, 11:59PM.</strong> Click <a href="http://uclacki.org/subcommittee">here</a> to apply!</p>
					<p>Click on the following to jump to a committee (click on committee icon to go to committee page):</p>
					<ul className="bookmarks">
						<li><a className="service" href="#service">Service</a></li>
						<li><a className="fundraising" href="#fundraising">Fundraising</a></li>
						<li><a className="kfam" href="#kfam">Kiwanis Family</a></li>
						<li><a className="graphtech" href="#graphtech">GraphTech</a></li>
						<li><a className="publicrelations" href="#publicrelations">Public Relations</a></li>
						<li><a className="spiritship" href="#spiritship">Spiritship</a></li>
						<li><a className="specialevents" href="#specialevents">Special Events</a></li>
					</ul>
				</div>

				<hr />

				<div id="service" className="content-block">

					<Link href="/committees/service"><img src="/static/Committees/Committee Icons/Service B.png" /></Link>

					<h2><span>Small Scale Service</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Community Outreach</h4>
							<p>1) What is one community organization you would like to see Circle K partner with?</p>
							<p>2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Family Service Liason</h4>
							<p>1) What is one smaller service project that you would want an individual family to take on?</p>
							<p>2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
					</div>

					<h2><span>Large Scale Service</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Event Planning</h4>
							<p>1) If you could plan any service event (keeping in mind a $500 budget), focused on our District Service Initiative (disabilities) what would it be? Provide a timeline of steps you would take to plan it (just do your best to imagine what you'd need to do) How/why would this event be meaningful to you?</p>
							<p>2) List your time commitments outside of Circle K and list hours per week (include academics as well as present and future potential commitments).</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="fundraising" className="content-block">

					<Link href="/committees/mdeer"><img src="/static/Committees/Committee Icons/Fundraising B.png" /></Link>

					<h2><span>Small Scale Fundraising</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>External Fundraising (EA)</h4>
							<p>As External Fundraising chair you will be primarily assisting with Bruin Walk fundraisers and restaurant fundraisers. What are some ideas you have for Bruin Walk fundraisers? How would you deal with unexpected challenges while fundraising on Bruin walk? (Ex: Different organizations selling the same food on the same day)</p>
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
							<p>The Key Club Liason would be assist in promoting relations with our surrounding Key clubs/KIWIN'S as well as working along side the Event Planning chair and I in coming up with new events or programs geered towards our Key Clubbers/KIWINNERS.</p>
							<p>1) What are some ideas (events/ programs/resources) you have in mind our CKI club can host for our Key Clubs/KIWIN'S?</p>
							<p>2) Do you, if any, have past experience working with or have been in Key Club/KIWIN'S and please elaborate? (Prior experience is not requeired)</p>
							<p>3) If answered yes to number three, HOW DO YOU FEEL?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>K-Kids Liason</h4>
							<p>Our Circle K club is fortunate enough to be located close enough to a K-Kids club, Playa Del Rey Elementary School's K-Kids. They have monthly meetings in which we as UCLA CKI attend and interact with the kids. They are ususally the first thursday of every Month and are from 2:45-3:45 in which we block out 2pm-5pm time period for the event as a whole including transportation time there and back. As K-Kids liason you would help in attending these meeting if your schedule permits as well as find activites or programs we can put on for the K-Kids either within the meeting or outside.</p>
							<p>1) Would you be able to make those meeting times of Monthly Thursday meetings from 2:00pm-5:00pm?</p>
							<p>2) What are some ideas you have in mind for future service progrojects or event we as UCLA CKI can do for the K-Kids, and how you execute?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Builder's Club Liason</h4>
							<p>As kiwanis Family youth chair sometimes it is hard to get members interested in the Kiwanis Family and as Promotion chairit is your job to help find way to get people engaged and active within the Kiwanis Family, what are some ideas you have in mind to promote kiwanis family relations?</p>							<p>1) Would you be able to make those meeting times of Monthly Thursday meetings from 2:00pm-5:00pm?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Promotional chair</h4>
							<p>Our Circle K club is fortunate enough to be located close enough to a Builders club, Lincoln Middle School's Builders club. They have monthly meetings in which we as UCLA CKI attend and interact with the kids,. They are ususally the first tuesday of every Month and are from 3:15-4:15 in which we block out 2pm-5pm time period for the event as a whole including transportation time there and back. As Builders Club liason you would help in attending these meeting if your schedule permits as well as find activites or programs we can put on for the Builders Clubs either within the meeting or outside.</p>
							<p>1) Would you be able to make those meeting times of Monthly Thursday meetings from 2:00pm-5:00pm?</p>
							<p>2) What are some ideas you have in mind for future service progrojects or event we as UCLA CKI can do for the Builders club and how you execute?</p>
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
							<p>The Circle K Relations chair would increase relations with other Circle K clubs — most likely clubs within our division (Metro Division), but we can work with others too.</p>
							<p>1) List an idea for interclub (events along the lines of service, socials, spirit sessions, etc. with members from another club) events with other Circle K clubs.</p>
							<p>2) If applicable, do you have any existing relationships with any Metro Division club (ie USC, ECC, CSULB, CSUDH, CSUN, Pierce College) or a Circle K club outside of our division?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Kiwanis Relations Chair</h4>
							<p>1) What are some ideas you have to promote Kiwanis events and encourage members to attend them?</p>
							<p>2) When we spend time with Santa Monica Kiwanians, we are the face of the UCLA CKI club that they sponsor. How can we put our best foot forward when we interact with them?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Professional Development Chair</h4>
							<p>Career Development Night gears towards assisting our attendees in obtaining knowledge within the professional environment: preparing for an interview, how to build a resume etc. This will be your signature event, which takes place in Winter Quarter. What are two specific workshops or components you would like to have at this event?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Key to Life Programming Chair</h4>
							<p>Key to Life is an event that is going to take place during Fall Quarter. It is where Kiwanians, alumni, and special guests present past experiences and lessons learned that have helped them in, well, life. Note that this event has nothing to do with developing professionally as that will be done during Career Development Night, this event is all about what to expect during post-college and adulthood. We as college students need that guidance and Key to Life provides it. What are two things — unrelated to the Professional environment (jobs, interviews, etc) — that college students should be aware of post-college and going into adulthood?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="graphtech" className="content-block">

					<Link href="/committees/graphtech"><img src="/static/Committees/Committee Icons/GraphTech B.png" /></Link>

					<h2><span>Graphics</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Miscellaneous Graphics</h4>
							<p>Why do you think graphics are important and what do you want to gain from being in this subcommittee (hoping I can help you lots)!</p>
						</div>
					</div>

					<h2><span>Technology</span></h2>
					<div className="positions">
						<div className="col-lg-4 col-sm-12">
							<h4>Website Team</h4>
							<p>What part of the website would you like to work on (e.g. management/updating, infrastructure, design, experimentation)? [No experience required, learning encouraged]</p>
						</div>
						<div className="col-lg-4 col-sm-12">
							<h4>Media Team (Intercommittee--Public Relations)</h4>
							<p>Why do you want to be part of the media team?</p>
							<p>How can you contribute to the media production of the club?</p>
						</div>
						<div className="col-lg-4 col-sm-12">
							<h4>Projects Team</h4>
							<p>Give an idea you have for the club (in regards to technology) or an aspect of the club that could potentially be enhanced/streamlined with technology.</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="publicrelations" className="content-block">

					<Link href="/committees/publicrelations"><img src="/static/Committees/Committee Icons/PR B.png" /></Link>

					<h2><span>Campus Outreach</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
						</div>
					</div>

					<h2><span>Media Relations</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Photo Assistant</h4>
							<p>As Photo Assistant, you will take photos and/or designate
							people to take photos at events. You will have access to the UCLA Circle K
							Photos page and make sure that the page is updated consistently.</p>
							<p>1. How will you ensure that photos are uploaded
							(and tagged) promptly after events occur?</p>
							<p>2. Prior photography experience is not required,
							but do you have any experience taking photos? If so, briefly describe them.</p>
							<p>3. (Optional) Provide a link to photos you have taken in the past so I can get an idea of your aesthetic and skill level.</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>News Article Editor</h4>
							<p>As News Article Editor, you will contact members almost daily to write articles and revise all articles you receive before sending them to me to post on our website (uclacki.org).</p>
							<p>1. How will you ensure that every event is documented with an article in a timely manner?</p>
							<p>2. If you have written an article before, what do you think can be improved upon or changed in the article request email?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							{/*<h4>Video Editor</h4>
							<p>As Video Editor, you will work with me to create promotional videos to advertise Circle K events and fundraisers, as well as create weekly vlog-style recap videos.</p>
							<p>1. A Krispy Kreme fundraiser on Bruin Walk is coming up next week (it's not). Create a brief outline for an idea for a short video to promote this event. Be creative!</p>
							<p>2. To create weekly vlogs, you will need to make sure that people record footage at events. How will you ensure that all events are vlogged?</p>
							<p>3. Prior video-editing experience is not required, but do you have any experience with editing videos? If so, please briefly describe them (using Final Cut Pro, iMovie, Windows Movie Maker, etc.).</p>
							<p>4. (Optional) Provide a link to a video you have edited in the past, so that I can get an idea of your aesthetic and skill level.</p>*/}
							<h4>Media Team</h4>
							<p>See: GraphTech's Media Team</p>
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
							<p>As the Member Recognition Assistant, you will be assisting in recognition projects for our club members. These projects include but are not limited to: updating the Humans of Circle K page, putting together monthly birthday videos, and assisting in presenting Members of the Week and Quarter.</p>
							<p>1. What ideas do you have for other ways that members could be recognized within our club? Or, what ideas do you have that could improve the way recognition already carries out in the club?</p>
							<p>2. Why are you interested in this position? In your opinion, what is the importance of recognition?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>FTC/DCON Skit Coordinator</h4>
							<p>The FTC/DCON Skit Coordinator will be responsible for working with many members to curate and corrdinate practices for convention skits that are used to represent our club at the district level. Creativity is encouraged! How would you enourage participation in FTC and DCON skits? What kinds of acts are you interested in coordinating?</p>
						</div>
					</div>

					<h2><span>Fellowship</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Campus Event Coordinator</h4>
							<p>As the Campus Events Coordinator you will help organize member attendance of various on-campus social events. Besides Culture Nights, what are some possible on-campus events Circle K can attend this quarter? How would you promote these events to our members?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Large Scale Social Planner</h4>
							<p>The Large-Scale Social Planner would help in the creation and management of various projects throughout the year (i.e. buddy system, Snowcial, Assassins, and more). Do you have a project that you'd personally like to create? (And why?) If not, how would you expand on the projects already listed above?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Gaming Moderator</h4>
							<p>With the recent Facebook group "UCLA Circle K Gaming" created, a Gaming Coordinator will help manage and organize games. What games would you promote on the page? How would you maintain people's interest and encourage activity?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Intramural Sports Coordinator</h4>
							<p>As Intramural Sports Coordinator, you will help form IM teams.</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="specialevents" className="content-block">

					<Link href="/committees/specialevents"><img src="/static/Committees/Committee Icons/Special Events B.png" /></Link>

					<h2><span>Signature Event</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Special Events Fundraising Liason</h4>
							<p>As Special Events Fundraising Liason, your responsibility will included primarily filling out funding applications. If necessary, you will also facilitate in planning fundraisers to support the special events committee. This means that you will provide descriptions of the event and convince others why our event should be funded over other events hosted on campus. How would you market this event to others to secure funding?</p>						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Special Events Administrative Outreach Chair</h4>
							<p>As Speical Events Administrative Outreach Chair, you will help contact alumni and general members to convince them to attend our special event.  Moreover, this position will also contact other food companys and ask for any possible donations that could be made to provide food for the special event antendees. How would you market this event to alumni, general members, and other sponsors?</p>
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