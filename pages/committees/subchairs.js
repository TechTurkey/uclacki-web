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
						</div>
					</div>

					<h2><span>Large Scale Service</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
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
							<p>As External Fundraising chair you will be assisting with Bruin Walk fundraisers and restaurant fundraisers. What are some ideas you have for Bruin Walk fundraisers? How would you deal with unexpected challenges while fundraising on Bruin walk? (Ex: Different organizations selling the same food on the same day) </p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Publicity</h4>
							<p>Publicity plays a large role in fundraising and can be crucial to having a successful fundraiser. How would you publicize fundraising events besides flyering, making a facebook post and/or facebook event page/other social media? How would you ensure it's success? Please be as detailed as possible!</p>
						</div>
					</div>

					<h2><span>Large Scale Fundraising</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
						</div>
					</div>
				</div>

				<hr />

				<div id="kfam" className="content-block">

					<Link href="/committees/kfam"><img src="/static/Committees/Committee Icons/KFam B.png" /></Link>

					<h2><span>Kiwanis Family Youth</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>K-Kids/Builder Club Liason</h4>
							<p>Our Circle K club is fortunate enough to be located close to a K-Kids club and Builders Club, Playa Del Rey Elementary School's K-Kids and  Lincoln Middle School's Builders club. They have monthly meetings in which we as UCLA CKI attend and interact with the kids. K-Kids Meetings for this quarter are set to be on Wednesday, February 20th from 2-5pm, and Wednesday or Thursday, March 6th/7th 2-5pm including transportation time there and back. Builder Club meeting this quarter will be Tuesday, February 5th 2:30-5:00pm and March 5th, 2:30-5:00pm. As K-Kids/Builders Club liason you would help in attending these meeting if your schedule permits as well as find activites or programs we can put on for the K-Kids either within the meeting or outside.</p>
							<p>1) Would you be able to make those meeting times for either meeting?</p>
							<p>2) What are some ideas you have in mind for future service progrojects or event we as UCLA CKI can do for the K-Kids/Builder Club, and how you execute?</p>
						</div>
					</div>

					<h2><span>Kiwanis Family Networking</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Professional Development Chair</h4>
							<p>Career Development Night gears towards assisting our attendees in obtaining knowledge within the professional environment: preparing for an interview, how to build a resume etc. This will be your signature event, which takes place in Winter Quarter. What are two specific workshops or components you would like to have at this event?</p>
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
							<p>Why are you applying to graphics?</p>
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
							<h4>FTC/DCON Skit Coordinator</h4>
							<p>The FTC/DCON Skit Coordinator will be responsible for working with many members to curate and coordinate practices for convention skits that are used to represent our club at the district level. Creativity is encouraged! How would you encourage participation in FTC and DCON skits? What kinds of acts are you interested in coordinating?</p>
						</div>
					</div>

					<h2><span>Fellowship</span></h2>
					<div className="positions">
						<div className="col-lg-6 col-sm-12">
							<h4>Campus Event Coordinator</h4>
							<p>As the Campus Events Coordinator you will help organize member attendance of various on-campus social events. Besides Culture Nights, what are some possible on-campus events Circle K can attend this quarter? How would you promote these events to our members?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Gaming Moderator</h4>
							<p>With the recent Facebook group "UCLA Circle K Gaming" created, a Gaming Coordinator will help manage and organize games. What games would you promote on the page? How would you maintain people's interest and encourage activity?</p>
						</div>
						<div className="col-lg-6 col-sm-12">
							<h4>Intramural Sports Coordinator</h4>
							<p>As Intramural Sports Coordinator, you will help form IM teams. How will you encourage participation and/or support for Circle K’s IM team(s)?</p>
						</div>
					</div>
				</div>

				<hr />

				<div id="specialevents" className="content-block">

					<Link href="/committees/specialevents"><img src="/static/Committees/Committee Icons/Special Events B.png" /></Link>

					<h2><span>Signature Event</span></h2>
					<div className="positions">
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