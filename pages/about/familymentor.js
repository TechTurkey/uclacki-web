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
					<div className="families">
						<h3>Famurai Jack</h3>
						<div>
							<div className="image-container">
								<img src="/static/Famurai Jack.jpg" />
							</div>
							<div className="description">
								<p><strong>Matthew De Guia</strong> (Family Head) - Howdy, I’m Matthew! I’m a second year political science major, and currently work for the UCLA Police Department. I’m a basic boi that loves coffee, walking on the beach, and long drives. I can’t wait to meet y’all!</p>
								<p className="fun-fact"></p>

								<p><strong>Khoa Vinh</strong> (Family Head) - YO YO what's popping y'all, I'm Khoa and I'm a fourth year Mechanical Engineering major. I love eating (anything except bean sprouts), playing basketball, going to concerts, and playing video games. Hmu if you need a gym buddy, if you wanna watch some Laker games with me, or if you have a Six Flags season pass or AMC A-List!</p>
								<p className="fun-fact">-was born in Belgium<br/>
									-taught kids how to ride a bike this past summer.. learned how to ride a bike the day before</p>

								<p><strong>Nhu Dang</strong> (Godparent) - HELLO HELLO HELLO! I'm a second year biochem major but I still don't know what I want to pursue. If you hear someone snorting or screaming on your way to class, that's probably me snlaughing at my own joke or tripping over my own shoe again. I know I sound like a mess but BE MY FRIEND PLEASE. </p>
								<p className="fun-fact">-only games I'm good at are tetris and sudoku<br/>
								-(apparently I eat weird things) tator tots with whipcream/ppancakes with salt and syrup</p>

								<p><em>On a quest to defeat the monster of loneliness, stress, and exams, CKI’s greatest family, Famurai Jack, must master the art of eating, studying, chilling, and sleeping.</em></p>
							</div>
						</div>

						<h3>Fomo Jojo</h3>
						<div>
							<div className="image-container">
								<img src="/static/Fomo Jojo.jpg" /> 
							</div>
							<div className="description">
								<p><strong>Calvin Ly</strong> (Family Head) - Yo! I am a Fourth Environmental Science Major, Environmental Engineering Minor. I'm interested in either sustainability consultation or engineering so we'll see what happens. Hit me up you want to play video games or watch movies!</p>
								<p className="fun-fact">Only half of my nose works. I'm missing the ball part of my uvula</p>

								<p><strong>Jessica Doan</strong> (Family Head) - Hello! I am a 2nd year some sort of biology major (I made a mistake applying as Bio-E so I'm switching ^^). I really like crafts, baking, and stuffed animals. I'm always down to get boba, so hit me up sometime!</p>
								<p className="fun-fact">I once made a tiny pusheen stuffed animal!</p>

								<p><strong>Irene Sumampouw</strong> (Godparent) - Hey it’s Irene- your average 3rd year ucla psych student, going into food studies minor. Im into adventures little or big, we can explore nature or go to music festivals or lounge around until we spontaneously come up with something. Here for a good time but a short time (graduating next year hopefully hehe)</p>
								<p className="fun-fact">I love scary movies, so I watched all of bates motel then the original movie Psycho- now that’s my favorite scary movie.</p>

								<p><em>FOMO JOJO, the family that gives you FOMO. We're down to do anything and everything.</em></p>
							</div>
						</div>

						<h3>Bulba Buds</h3>
						<div>
							<div className="image-container">
								<img src="/static/Bulba Buds.jpg" />
							</div>
							<div className="description">
								<p><strong>Franky Maciel</strong> (Family Head) - Heyoo!! I am a second year Biochemistry major who may or may not be premed. In the future I strive to become a doctor, a medical researcher, or become a teacher. I am a Socal native who wants to explore the rest of LA with all of yall. I may be a bit on the quieter side at first but once you get to know me, you'll see my wilder side so... get to know me!!!</p>
								<p className="fun-fact">I can vibrate my eyes, pop my shoulder bone and fold my tongue into itself.</p>

								<p><strong>Jone Bacinskaite</strong> (Family Head) - Hiya friends! I'm a fourth year neuroscience major, bioinformatics minor aiming for a career in neurotech research and development. I love all things music, outdoors, food and sleep - so hmu for music reccomendations, hiking or running buddy requests, and if you wanna make some delicious meals together (sorry i sleep alone LOL XD).</p>
								<p className="fun-fact">I can ride a bike with no handlebars and have never eaten a donut</p>

								<p><strong>Uyen Tran</strong> (Godparent) - Hello! I am a second year Biology major. I'm interested in the forensic science, but I don't really know what I'm doing with my life, sorry! Hit me up if you need someone to talk to, eat with or study with. I'm down for anything!</p>
								<p className="fun-fact">1)The top of my head is a perfect circle.<br/>
									2) I can strech out my pinky toe without moving the other four toes.</p>

								<p><em>Hiheyhello! We're the Bulba Buds! Bulbasaurs may be a plant, but we still bring the heat because we’re the most LIT family.Just like Pokemon, we are pretty BALLER and any family that says otherwise can CATCH these hands.</em></p>
							</div>
						</div>
						<h3>Pikatroopers</h3>
						<div>
							<div className="image-container">
								<img src="/static/Pikatroopers.jpg" />
							</div>
							<div className="description">
								<p><strong>Sarah Chang</strong> (Family Head) - Hi friends I'm a fourth year Psychobiology major and Pre PA :) I'm from the suburbs of Sacramento and I'm super excited to finish my last year at UCLA with all you lovely people</p>
								<p className="fun-fact">I've lived four different places, all in California. I've read all the Harry Potter books in a week. I really like hummus.</p>

								<p><strong>Ryan Fang</strong> (Family Head) - Hiya friends! I'm a second year neuroscience major! I'm from the suburbs of Sacramento and I'm super excited to finish my second year at UCLA with all you lovely people</p>
								<p className="fun-fact"></p>

								<p><strong>Vicky Hung</strong> (Godparent) - Hi! I'm a second year psychology major, and I'm pre-OT (occupational therapy), for now at least. I grew up in Shanghai, and moved here last year for college, and I'm loving it so far (especially all the food). I joined Circle K in my freshmen year because my friend convinced me to, and I stayed because of the wonderful people I met in this club!</p>
								<p className="fun-fact">I play the piano, viola, drummed for a rock band once, and recently picked up the ukulele because I can't practice any of my other instruments here (sad). I also have the largest sweet tooth, I'll finish anyone's desserts for them if they can't finish.</p>

								<p><em>On the outside, we cute like Pikachu but we troopers in our hearts! So join us for some electrifying events! PikaYou gon want to be in our fam cuz a-a-a-a-Pikachooo we the sickest fam!</em></p>
							</div>
						</div>
						<h3>Scooby Snaccs</h3>
						<div>
							<div className="image-container">
								<img src="/static/Scooby Snaccs.jpg" />
							</div>
							<div className="description">
								<p><strong>Noah Alviz</strong> (Family Head) - Hello! I'm Noah, and I am a second year Atmospheric and Oceanic Science major! I'm from Camarillo, CA, which is about an hour away from UCLA. I was involved with Key Club in high school, which is one of the main reasons why I joined Circle K in college. In my free time, I enjoy any outdoor activities like walking, hiking, or running! I also enjoy the presence of my friends and doing fun things with them!</p>
								<p className="fun-fact">I was born in Guam and moved to CA when I was 1, I was a 3rd degree black belt in Taekwondo, I ran cross country and track all of HS, and my best mile time was 5:11</p>

								<p><strong>Jonathan Fan</strong> (Family Head) - Hiya friends! I'm a second year neuroscience major! I'm from the suburbs of Sacramento and I'm super excited to finish my second year at UCLA with all you lovely people</p>
								<p className="fun-fact">I used to know how to play seven instruments and I've forgotten how to play most of them. I'm pretty into edm and I'm learning how to DJ!</p>

								<p><strong>Katie Coates</strong> (Godparent) - I am a 4th year Sociology major and Film minor. When I'm not pondering how everything is a social construct or watching movies, I love to exercise and obsess over musical theater. This is my third year in the Kiwanis Family. I'm excited to take on an advisory role where I can mentor others for my last year in UCLA CKI.</p>
								<p className="fun-fact">I am a twin, I can juggle, my favorite animal is a kangaroo, when I'm not at UCLA I'm probably at Disneyland :)</p>

								<p><em>Zoinks, we're the Scooby Snaccs! We're those meddling kids who are solving the mystery of service, leadership, and fellowship!</em></p>
							</div>
						</div>
						<h3>THICC</h3>
						<div>
							<div className="image-container">
								<img src="/static/THICC.jpg" />
							</div>
							<div className="description">
								<p><strong>Jolene Chan</strong> (Family Head) - WOW! HI! HELLO! I'm a third year PhySci major. I'm planning on applying to med school, but if that doesn't work out, I'm definitely pre-health :) I was born and raised in the Bay Area so I love BART and the Warriors but not Karl the Fog. I've always been a super super picky eater, but I still love food (as long as it isn't spicy or has tomatoes)!</p>
								<p className="fun-fact">- Doesn't like avocados or tomatoes<br/>
									- Has a numb spot on my lower jaw because of jaw surgery<br/>
									- can't feel when crumbs or little pieces of food are there :'(</p>

								<p><strong>Tiffany Tu</strong> (Family Head) - I'm Tiffany, a 2nd year psychology major. Um, not sure what information is vital to a bio but I'm a California native. I'm not sure what I want to pursue down the road, but I guess that's most of us. Anyways, I'm interested in nutrition and consulting/management. Not sure how the two fit together but eh. Alright, I hope to meet all you lovely people this year!</p>
								<p className="fun-fact">Excercising is fun, sometimes. Especially yoga and running! I'm a little bit of a health nut. I'm a liberal vegetarian at best.</p>

								<p><strong>Jonathan Quach</strong> (Godparent) - Hi! I am in my fourth year now studying Linguistics & Computer Science.<br/>
									Coming into UCLA, I eventually found myself to be amused with natural language
									and how we interpret the world around us :)<br/>

									When I am not being so scholarly I am most likely exercising at Drake or Wooden, tilting in LoL,
									weebing out to a new anime I found, or trying my best to cook for myself hehe<br/>

									Feel free to reach out to me if ya have any curiosities towards Linguistics, Computer Science,
									 Data Science, PC parts, mechanical keyboards, LoL,..., me!</p>
								<p className="fun-fact">1. I am a colorblind lefty<br/>
									2. Favorite color is silver (just look at my electronics/ joggers!)<br/>
									3. Has typed 122 words per minute perfectly without pressing backspace</p>

								<p><em>We may be Turkey's Home for Imaginary Creative Cartoons, but we're far from imaginary! Our THICC presence can be felt YEAR ROUND at all types of events! We provide a home not just for imaginary creative cartoons, but also for all of our cubbies!</em></p>
							</div>
						</div>
						<h3>SICK</h3>
						<div>
							<div className="image-container">
								<img src="/static/SICK.jpg" />
							</div>
							<div className="description">
								<p><strong>Mara Lam</strong> (Family Head) - Hi everyone, I'm Mara and I'm a second year pre-IDS major!! I love helping people, playing video games, cooking, and jigsaw puzzles! If you ever give me an opportunity, I will gush about my rabbit Toast!! I love hanging out with new people, so let me know if you wanna try some new sweets or discuss how dogs deserve to vote~</p>
								<p className="fun-fact">1. Collects Yugioh cards in the years of our lord 2018-2019<br/>
									2. Once fell into a ditch with alligators (born and raised in Florida)<br/>
									3. Don't know how to snap or whistle ;m;</p>

								<p><strong>Sharlene Lim</strong> (Family Head) - Hello beautiful people~ I am a fourth year Psychobiology major! I'm working on getting into physical therapy school but also trying to enjoy life right now ^^ I hope to befriend so many people in my last year here so please hang out with me and be my friend in Circle K!</p>
								<p className="fun-fact">1. Wears bamboo sticks in her ear<br/>
									2. Auditioned to be in a kpop company twice (obviously didn't make it)!</p>

								<p><strong>Tiffany Feng</strong> (Godparent) - HELLO!! My name is Tiffany and I am a second year statistics major. I currently work part-time as a graphic designer on the hill but would like to pursue a job in data science in the future! (for now!) I'm from the 626 and love food, art, and funny shows. Feel free to hit me up if you wanna eat, hang, or talk!</p>
								<p className="fun-fact">1. Can't ride a bike<br/>
									2. Was born in Brooklyn, NY but raised in Socal</p>

								<p><em>When there’s trouble, you know who to call (SICK fam!)<br/>
									From social media, they can see it all (SICK fam!)<br/>
									When there’s service events the next day<br/>
									Or when we explore LA or stay<br/>
									Your SICK family will do it all<br/>
									Slade’s Incredible Cluster of Kids, go!</em></p>
							</div>
						</div>
						<h3>We Bare Bruins</h3>
						<div>
							<div className="image-container">
								<img src="/static/WBB.jpg" />
							</div>
							<div className="description">
								<p><strong>Amy Zheng</strong> (Family Head) - My name is Amy and I'm currently a 2nd year Physiological Science major who hopes to pursue a career in optometry in the future. I'm loud and out-going but I also have a soft spot for late night deep talks. Hit me up with your favorite restaurant! -I don't like sweets</p>
								<p className="fun-fact">I was born in Manhattan, NY but was raised in the SF Bay Area all my life</p>

								<p><strong>Jenny Phan</strong> (Family Head) - Hello~ I'm a third year Asian American Studies Major on the Pre-Med track. Yep, gonna be shooting to become a doctor in the future. I have been a part of the Kiwanist family since high school in Key Club and Kiwins. I love talking to people and getting to know them, but fair warning I am pretty shy at first, but also don't worry I warm up pretty quickly! I am so excited to get to know everyone during the year.</p>
								<p className="fun-fact">-can play the piano, guitar, violin, and ukelele although her proficiency in each instrument ranges<br/>
									-loves to create things with her hands, such as through baking, drawing, painting, doing makeup and hair, DIY projects, and so much more.</p>

								<p><strong>Danny Vu</strong> (Godparent) - Hi! I am a fourth year Bio major, Conservation Bio minor. I love animals, sweets, and funny jokes! See you around!</p>
								<p className="fun-fact"></p>

								<p><em>Hey what's up, it's the We Bare Bruins! Everyone in our family unique in their own ways just like how the 3 bear siblings are different but complement each other.</em></p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-block">
					<hr/>
				</div>

				<div className="content-block">

					<h1>Mentorship</h1>
					<p>
					To complement the family system is our mentorship system. If you sign up for a mentor, you will
					be paired with a returning member who will help you out, whether that is academic, life, or Circle 
					K related.
					</p>
					<strong>Mentor and Mentee applications are currently closed. Check back Spring 2019!</strong>
					<h3>CNH Circle K Mentorship Application</h3>
					<p>
						Apply to be paired with a Kiwanian or Alumni (outside of UCLA CKI!) who will mentor you through school, life, and more!
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSdiOcFNhMW_hW2Adu9t9xHGuNTWhNuydGXBlphiv9cxHdtm7w/viewform?fbclid=IwAR1qbv2_bupKrZ6BoIxrYmlMs9XKyQT54Wa28PyPHXSFUtnUZRcXaXR9FjQ">
						Check out the district application here!</a>
					</p>
				</div>

				<style jsx>{`
					.content {
						font-family: "Myriad Pro", "Century Gothic";
						overflow: auto;	// Don't let children's margin push down the main content
						// color: white;
					}
					.content-block {
						margin: 25px auto 0px;
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
					// img {
					// 	width: 100%;
					// 	height: auto;
					// }
					.families > div {
						// display: flex;
					}
					.families > div::after {	// prevent floating images to collapse
						content: " ";
						display: block;
						height: 0;
						clear: both;
					}
					@media (min-width: 989px) {
						.image-container {
							max-width: 30%;
							height: auto;
							float: left;
							margin-right: 20px;
						}
					}
					.families .image-container img {
						width: 100%;
						height: auto;
					}
					.families .description .fun-fact {
						margin-top: -8px;
						color: #aaa;
						font-size: 16px;
					}
				`}</style>
			</div>
		);
};

export default MainFactory({headerTitle: 'Families & Mentors'})(FamiliesAndMentors);