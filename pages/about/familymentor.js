import React, { Component } from 'react';
import MainFactory from '../../layout/main.js';

const FamiliesAndMentors = () => {

		return(
			<div className="content">

				<div className="content-block">
					<h1>Families</h1>
					<p>
					Since UCLA CKI is a large organization, the family system breaks it down into more mangageable and
					welcoming groups where you can get to meet and know some people in the club closer. There are 8
					different families you will be placed into if you register as a member:
					</p>
					<ul>
						<li>FAMILIES TBA</li>
					</ul>
				</div>

				<div className="content-block">
					<h1>Mentorship</h1>
					<p>
					To complement the family system is our mentorship system. If you sign up for a mentor, you will
					be paired with a returning member who will help you out, whether that is academic, life, or Circle 
					K related.
					</p>
					<strong>Mentor and Mentee applications are live! Both are due October 14th, 2018 at 11:59PM</strong>
					<p><a href="https://docs.google.com/document/d/1O8cl1DIy3peSWmm9n3sTBCZ9RhJN31uHOz1Jb4SKKJ8"
					target="_blank">Mentor App</a> <strong>(soft deadline October 7th, 11:59PM for guaranteed mentee(s))</strong></p>
					<p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWLeuJgIMR2imr95MpCd9iB-oPhhcQAuzu1sBI4egvT9Ps4g/viewform"
					target="_blank">Mentee App</a></p>
				</div>

				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
						// color: white;
					}
					.content-block {
						margin: 50px auto 0px;
						padding: 20px 0;
						// background: white;

						// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 8px 12px 6px #444444;
					}
					.content-block h1 {
						margin: 0;
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
					p {
						font-size: 18px;
					}
					a {
						color: black;
					}
					a:hover {
						color: blue;
					}
					img {
						width: 100%;
						height: auto;
					}
				`}</style>
			</div>
		);
};

export default MainFactory({headerTitle: 'Families & Mentors'})(FamiliesAndMentors);