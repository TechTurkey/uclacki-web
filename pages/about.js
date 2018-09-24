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
						<div>
							<h2>Service</h2>
							<p>Service is the leading tenet of Circle K International—the aspect of the organization that our members hold closest to their hearts.
							It is through service that our members can change the world for good, their small contributions building up over time.
							From weekly animal adoptions to serving food to homeless communities, from fundraisers for various charities to gardening and
							painting benches at local schools, Circle K provides a variety of opportunities for everyone to get involved with the local communities
							and make a difference.</p>

							<h4>District Large-Scale Service Project</h4>
							<p>Every year, the California Nevada Hawaii District hosts a large-scale service project abbreviated as DLSSP for everyone to attend in
							order to improve our communities. Due to the size of our district, there is a North and South DLSSP so that clubs have a more convenient
							location to go to in order to do service.</p>
						</div>
					</div>

					<div className="leadership">
						<div>
							<h2>Leadership</h2>
							<p>As the second tenet of Circle K, leadership bears great weight in nurturing our members to support our communities and the world.
							We provide our members various opportunities for leadership development—from participation in committees, to election as officers,
							to heading new service projects. Members of UCLA Circle K will also learn professionalism and grasp the basics of networking through
							our beloved alumni and district/divisional opportunities.</p>
						</div>
					</div>

					<div className="fellowship">
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
							<p>From __far school__ to __far school__, we form the Metro Division</p>
							<ul>
								<li>UCLA</li>
								<li>CSU Long Beach</li>
								<li>Pierce College</li>
							</ul>
						</div>
					</div>
					<div className="district">
						<div>
							<h2>CNH District</h2>
							<p>9 divisions spanning California, Nevada, and Hawaii form the CNH District</p>
							<a>Link to District Website</a>
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

				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

				<div className="title">
					<div className="outline-box">
						<h1>Who are we?</h1>
					</div>
				</div>

				
				<p>
				We make vol­un­teer­ing simpler for busy col­lege stu­dents by offer­ing a wide vari­ety of projects and events to choose from each week.
				These range from small events like beach clean-​ups, res­cued dog walk­ing, tutor­ing chil­dren, and cook nights, to big­ger events such as
				Winter Leadership Retreat, var­i­ous walks for can­cer and dis­ease cures, school beautifications, and much more!
				Find out more about these projects on the Events page.
				UCLA Circle K is part of the Metro Division, which is part of the California-Nevada-Hawai’i (CNH) District.
				Our fellow Metro Division clubs are CSU Dominguez Hills, CSU Long Beach, CSU Northridge, Cerritos College, El Camino College, Long Beach City College,
				Los Angeles Harbor College, Pierce College, and USC.
				</p>

				<br/>

				<div className="title">
					<div className="outline-box">
						<h1>What is Circle K?</h1>
					</div>
				</div>

				Founded as the collegiate branch of the Kiwanis family, Circle K International (CKI) is the world’s premier community service and leadership
				development organization. With more than 13,770 members in 17 nations, CKI makes a positive impact on campuses and in local communities.
				CKI is a self-governing organization—electing its own officers, conducting its own meetings, and determining its focuses for service projects
				and fundraising goals.
				Check out the International website for CKI here. Check out the California-Nevada-Hawai’i District’s website here.

				<br/>

				
				<ul>
				<li>Diverse, fulfilling events for service and fundraising.</li>
				<li>Offer various large-scale events that many members can attend.</li>
				<li>Raise money for Alexandria House, Step Up on Second, Daniel’s Place.</li>
				</ul>

				<p>
				What is Service?	
				Service is the leading tenet of Circle K International—the aspect of the organization that our members hold closest to their hearts.
				It is through service that our members can change the world for good, their small contributions building up over time.
				From weekly animal adoptions to serving food to homeless communities, from fundraisers for various charities to gardening and
				painting benches at local schools, Circle K provides a variety of opportunities for everyone to get involved with the local communities
				and make a difference.

				Service Initiatives	
				Each term, the California Nevada Hawaii District selects a new service initiative to focus on; this initiative is then advocated by
				the members and officers across the district. For the 2017–18 term, the District Service Initiative, or DSI, is
				Be the Change: Personal Health. Self-care is an important thing in a world where stress overwhelms us day by day.
				By improving our physical, emotional, and mental health, we can set a precedent by which our communities can advance.
				Additionally, the International Board of Circle K International selects a service initiative for all Circle K clubs
				around the world to focus on as well. For the 2017–18 term, the International Service Initiative, or ISI, is Focusing
				on the Future: Children. Our future will be handled by the new generations of children, and in order to foster them in a healthy
				environment, it is up to us to provide the proper resources and wisdom so that the times ahead will shine bright.

				Member Testimonials	
				The Johnnie Cochran Science Field Trip was one of the most memorable service events I attended this past year! Not only did I get a chance to visit Griffith Observatory, I got to meet some really cool middle-schoolers! I was in charge of one of the science experiments. (Groups visited different exhibits and experiments during a scavenger hunt.) It was great being able to see the gears turning in the students’ heads as they tried to answer the questions I asked them! I would definitely recommend this event to someone who enjoys working with kids!
				Jolene Chan, 2017–18 Small-Scale Fundraising
				I truly enjoyed service at the West LA Food Coalition. This was actually the first event I ever attended for Circle K, even before attending a general meeting. There is nothing like service people and seeing them directly benefit from your help. In this case, I was serving food to the hungry. Service is ultimately the greatest action one can take, for the betterment of oneself and the world.
				Samantha Shen, 2017–18 Special Events Programming

				District Large-Scale Service Project	
				Every year, the California Nevada Hawaii District hosts a large-scale service project abbreviated as DLSSP for everyone to attend in
				order to improve our communities. Due to the size of our district, there is a North and South DLSSP so that clubs have a more convenient
				location to go to in order to do service.

				Divisional Service Project	
				Circle K International is divided into districts, which are then separated into divisions. UCLA Circle K International is located in the
				Metro Division of the California-Nevada-Hawaii District. Each month, clubs in Metro Division host service projects for members across the
				division to attend and help make a difference.





				Our Service Partners	
				Circle K International supports a variety of causes, and each club has their own selection of local organizations they assist along
				with our large-scale initiatives. Below are some of UCLA Circle K’s service and fundraising partners—organizations that we often
				have events with at least monthly! Causes range from temporary family housing to animal care to homeless support.

				Alexandria House	
				Alexandria House is a transitional residence and house of hospitality for women and their children who are transitioning out of
				homelessness or escaping from abusive/dangerous home environments. They focus on providing the necessary stability and resources for
				women to build up their economic stability and find permanent housing. Alexandria House provides services such as child day-care,
				english-as-a-second-language classes, teen programs and tutoring services, which give its residents the support and encouragement
				they need to succeed.
				Unfortunately Alexandria House receives little financial support from the government, which means that it relies on donations and
				volunteers to keep running. Circle K has a long history of working with Alexandria House, both through fundraising (we provided the
					funds to remodel their kitchen) and service (cook nights, tutoring, volunteering at fundraising events). Our support means a lot
				to the residents, and you can contribute too by coming out to Alexandria House service events!

				???	
				Another organization will take this spotlight soon! Stay tuned, as this will be coming out later in February 2018.




				Our Fundraisers	
				In addition to fundraising for both local and international charities, Circle K actively volunteers with various organizations that
				range from homeless shelters to animal shelters, setting it apart from traditional organizations. Circle K raises money for three main
				organizations that are part of its district’s fundraising initiatives: the American Foundation for Suicide Prevention, Kiwanis Family
				House, and the Pediatric Trauma Program. To reach fundraising goals, members sell items on campus, visit participating restaurants in
				Westwood, attend TV tapings with various studios in the Los Angeles area, and much more.
				Jolene Chan and Jonathan Fan appreciate all the fundraising efforts of their fellow Circle K members. Fun fact: Jonathan Fan loves
				his dog Stanley.

				District Fundraising Initiatives	
				The Pediatric Trauma Program hopes to raise funds in order to promote community outreach, assist partner hospital, and to provide
				advanced medical training for doctors. The funds raised will go towards the end goal of preventing unintentional injury and death
				and to provide safety items for children around the world.
				For more information about the Pediatric Trauma Program, please visit http://www.cnhfoundation.org/how-to-help/h2h-pediatric-trauma-program/.
				Established in 1987 with local chapter in 50 states, AFSP help to prevent suicide, educate and inform in order to inform people about
				mental health, and support those that are affected by suicide. In order to accomplish this, they fund scientific research, produce
				short films for audiences of all ages, and facilitate the formation of community among those affected by suicide. For more information about AFSP, please visit http://afsp.org/.
				The KFH seeks to provide housing for families of ill or injured children staying at the UC Davis Medical Center in Sacramento, CA.
				Funds raised for this cause help provide additional resources and improve the stay for these families so that they may be there to
				support their children. For more information about Kiwanis Family House, please visit http://kiwanisfamilyhouse.org/.

				Ongoing Fundraisers	
				Like to go grocery shopping? Link your Ralph’s card to UCLA Circle K so that every time you make a purchase, we get a percentage of it!
				iGive is the first online shopping mall where a portion of each purchase is donated to a cause.
				All you have to do is register and download the Chrome extension, and we get money!
				Click here for info on how to sign up with Ralph’s and iGive!
				</p>

				<h4>Leadership</h4>
				<ul>
				<li>Provide opportunities for members to get involved in committees.</li>
				<li>Increase campus involvement through service projects.</li>
				<li>Increase transparency between board and general membership.</li>
				</ul>

				<p>
				What is Leadership?	
				As the second tenet of Circle K, leadership bears great weight in nurturing our members to support our communities and the world.
				We provide our members various opportunities for leadership development—from participation in committees, to election as officers,
				to heading new service projects. Members of UCLA Circle K will also learn professionalism and grasp the basics of networking through
				our beloved alumni and district/divisional opportunities.

				Being an Officer	
				Being an officer in the club, or being a district board member… they provide ways for members of Circle K International to develop their
				skills as a leader while integrating our other tenets. In UCLA Circle K, we have 21 board positions established so that our members
				can give back to the club and community through what they feel suits them best. From service engagement, to member spirit, to graphic
				design, we want our members to learn as they continue through college.

				Member Testimonials
				My first friend in Circle K was actually a board member! She was extremely kind and open, helping me transition into the club and in
				college as a whole. She was also incredibly down-to-earth. She never let her position go to her head!
				Anonymous
				Dedicating yourself to the club, to the division, to the district, to Circle K International as a whole—there are so many reasons as
				to why I strive to be a leader in this club. From meeting new friends to inspiring others to try new things…it’s an ocean of endless
				opportunity.
				Braden Lem, 2017–18 External Relations, District C&M
				I never thought that I would be as involved in Circle K as I am today. I remember the welcoming invitation of being a part of a
				committee and really understand the inner works of what makes our club great. For me, knowing what goes on in the background makes
				me really appreciate the club a lot more, and to be a part of the execution of an event for others to experience is a humbling reward
				within itself.
				Kevin Nguyen, 2017–18 Special Events Logistics

				Committees and MDEER	
				With weekly committee meetings for Service, Fundraising, Kiwanis Family, Special Events, GraphTech, Public Relations, and Spiritship,
				our members are encouraged to assist the club and provide their suggestions in making our goals a reality. Without the investment of
				club members, UCLA Circle K would not be here. Additionally, members are given the chance to become family heads and godparents for the
				Family System under the MDEER committee. Through this, members nurture the fellowship tenet and bring our members close together.

				Words from our AVP	
				“There’s no way to define a leader or what a good leader is. There are many forms of leadership: both bad and good. We all have our own way
				of leading others. Through Circle K, however, we strive to develop our own forms of leadership through the many opportunities it offers,
				such as being a part of board, MDEER, or even as just a mentor.”
				—Calvin Ly, 2017–18 Administrative Vice President
				</p>

				<p> link to board and committees </p>

				<h4>Fellowship</h4>
				<ul>
				<li>Increase networking within the club and within the division.</li>
				<li>Retain members through mentorship and the family system.</li>
				<li>Boost recognition for seniors, notable members, etc.</li>
				</ul>

				<p>
				What is Fellowship?	
				

				Assassins	
				What a macabre name for a large-scale social—but it is well-deserved upon observing how invested our members become. Assassins is not a
				little game of tag; members are given targets to tag with certain items, bringing the amount of participants down until there is only one.
				With a popular social comes many nonsensical rules to increase the intensity and fun.

				Member Testimonials	
				One of the highlights of this year was assassinating Ryan Leong during his LS3 lecture. This was my first time playing, and I was on the
				verge of giving up on the game when opportunity struck. He put down his safety item to have a snack and I was able to kill him! Best. Day.
				Ever.
				Jolene Chan, 2017–18 Small-Scale Fundraising
				Fellowship is my favorite part of the club. I never felt like I didn’t have a home and although I wasn’t part of their family, people
				always treated me like I was their friend.
				Sena Ji, 2017–18 Godparent
				Mentorship provides the chance for me to really connect with a person and my mentor supports me through everything I do. Plus, nothing
				like being spoiled by your mentor with food. I’ve met my best friends through the family system, and it was the first time in college
				that I thought I really belonged somewhere. I love that there is always a huge group of people ready to help me out and to always go out
				and have fun with me.
				Eileen Lu, 2017–18 Subcommittee Chair

				Mentorship	
				Mentorship connects our newer members of UCLA Circle K with our returning members, providing a chance for knowledge to be shared and
				memories to be created. Mentors and mentees are paired based on a variety of factors—ranging from personality to academic aspirations—so
				that mentees have someone to rely on in the club.

				Family System	
				To give members a chance to bond with others outside of our many service events, the family system was established. Grouping members into
				families connects our beloved members in UCLA Circle K with family heads and godparents to create the titular family bonds that our returning
				members cherish.
				</p>

				<p> link to families </p>

				<h1>What is Kiwanis?</h1>
				<p>Kiwanis International—a community service organization established in 1915. Since then, members around the world strive to better our
				local communities. The primary focus has been “serving the children of the world” since 2005. The word “Kiwanis” comes from
				“Nunc Kee-wanis,” meaning “we trade” in an American Indian language in Detroit.</p>
				<p>Now, Kiwanis extends its reach through Student Leadership Programs, allowing students from elementary school to college to also engage in
				helping their communities and building their leadership skills. Below are the other branches of the Kiwanis Family—named so because members
				of all ages come together under the common values of service.</p>
				<h2>K-Kids</h2>
				<p>K-Kids is the elementary school branch of the Kiwanis Family. As a club, it is designed to instill a love of service within elementary
				school students through service projects and programs that help their school and the community around them so that they see the immediate
				affect of the work that they accomplish. UCLA Circle K works closely with the K-Kids club of Playa del Rey Elementary School, located in
				Culver City!</p>
				<p>Learn more at the <strong><a href="http://www.kiwaniskids.org/en/KKids/Home.aspx">K-Kids website</a></strong>!</p>
				<h2>Builders Club</h2>
				<p>Builders Club is the middle school branch of the Kiwanis Family, catering to students in middle and junior high school. They strive to
				do service in their community while building leadership skills within their members. UCLA Circle K works with the Builders Club of
				Lincoln Middle School, located in Santa Monica!</p>
				<p>Learn more at the <strong><a href="http://www.buildersclub.org/Home.aspx">Builders Club website</a></strong>!</p>
				<h2>KIWIN’S</h2>
				<p>KIWIN’S is a district of Key Club International who operate as their own separate organization while sharing similarities, such as their
				core values. KIWIN’S exists within California, Nevada and Hawaii. Like Key Club, KIWIN’S allows its members to foster their leadership skills
				through providing service to their community and the world at large. UCLA Circle K works with the KIWIN’S club of Palisades Charter High School!</p>
				<p>Learn more at the <strong><a href="https://www.kiwins.org/">KIWIN’S website</a></strong>!</p>
				<h2>Key Club</h2>
				<p>At well over 250,000 members worldwide, Key Club International is the largest student-led service organization for high school students.
				Their organization’s core tenants are leadership, character building, caring and inclusiveness; as such, students are given the opportunity
				to build themselves as individuals and leaders through community service. UCLA Circle K works with Santa Monica High School Key Club!</p>
				<p>Learn more at the <strong><a href="https://www.keyclub.org/">Key Club website</a></strong>!</p>
				<h2><strong>Kiwanis International</strong></h2>
				<p>Kiwanis International is a community service organization for adults. Its mission is to “improve the world by making a difference
				in the lives of children.” Kiwanis members participate in service projects raise millions of dollars a year for charity. Our sponsoring
				Kiwanis branch is the Santa Monica Kiwanis Club.</p>
				<p>Learn more at the official <a href="http://www.kiwanis.org/home"><strong>Kiwanis International website</strong></a>!</p>
			
				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
					}
					.about-summary {
						margin: 50px auto 0px;
						padding: 20px 0;
						// background: white;

						// -webkit-box-shadow: 0 8px 6px -6px #383838;
						// -moz-box-shadow: 0 8px 6px -6px #383838;
						// box-shadow: 4px 8px 12px 6px #444444;
					}
					.about-summary h1 {
						margin: 0;
					}
					@media (min-width: 768px) {
					  .about-summary {
					    width: 750px;
					  }
					}

					@media (min-width: 992px) {
					  .about-summary {
					    width: 970px;
					  }
					}

					@media (min-width: 1200px) {
					  .about-summary {
					    width: 1170px;
					  }
					}
					p {
						font-size: 18px;
					}
					img {
						width: 100%;
						height: auto;
					}
					.service>div, .leadership>div, .fellowship>div {
						background-color: rgba(255, 255, 255, 0.75);

						padding: 1px 10px;
					}
					.service {
						background-image: url('/static/griffith.jpg');
						background-size: cover;
						background-position: 0 50%;
						// background-attachment: fixed;
						// margin-bottom: 10px;
					}
					.leadership {
						background-image: url('/static/awards.jpg');
						background-size: cover;
						background-position: 0 60%;
						// background-attachment: fixed;
						// margin-bottom: 10px;
					}
					.fellowship {
						background-image: url('/static/Member-Retreat.jpg');
						background-size: cover;
						background-position: 0 40%;
						// background-attachment: fixed;
						// margin-bottom: 10px;
					}


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
						color: white;
						background-size: cover;
						overflow: hidden;
						background-attachment: fixed;
					}
					.kiwanis .division {
						background-image: url('/static/Dance-Marathon.jpg');
					}
					.kiwanis .division > div {
						position: absolute;
						bottom: 0;
						left: 250px;
						right: 0;
						top: 0;
						padding: 50px;
						width: 400px;
						height: auto;
						background-color: rgba(45, 43, 43, 0.75);
					}
					// .kiwanis .division > div > 
					
					.kiwanis .district {
						background-image: url('/static/awards.jpg');
					}
					.kiwanis .district > div {
						position: relative;
						margin: 0 auto;
						padding: 50px;
						width: 400px;
						height: calc(100% - 100px);
						background-color: rgba(45, 43, 43, 0.75);
					}

					.kiwanis .kiwanis-family {
						background-image: url('/static/Banquet.jpg');
					}
					.kiwanis .kiwanis-family > div {
						background-color: rgba(0, 61, 121, 0.75);	// graphic standards blue
						width: auto;
						height: 100%;

						padding: 40px 20px;
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

export default Main(About, 'About', {stillBackground: true});