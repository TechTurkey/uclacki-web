import Link from 'next/link';
import Authentication from './auth.js';


const Nav = () => (
	<div>
		<nav>
			<Link href="/index"><img src="../static/Theme-Logo.jpg" /></Link>
			<ul>
				<li className="dropdown">
					<a>About</a>
					<div className="dropdown-content">
						<a>About Us</a>
						<a>Board</a>
						<a>Committees</a>
					</div>
				</li>
				<li className="dropdown">
					<a>Media</a>
				</li>
				<li className="dropdown">
					<a>Events</a>
				</li>
				<li>
					<Link href="/resources"><a>Resources</a></Link>
				</li>
				<li>
					<Authentication />
				</li>
				
			</ul>
		</nav>
		<style jsx>{`
			nav {
				display: flex;
				justify-content: space-between;
				height: 60px;
				// overflow: hidden;
				
				padding: 0 2%;

				-webkit-box-shadow: 0 8px 6px -6px #383838;
				-moz-box-shadow: 0 8px 6px -6px #383838;
				box-shadow: 0px 4px 6px 0px #383838;

				z-index: 1;
				position: relative;

				font-family: "Myriad Pro";
			}

			nav img {
				height: 100%;
				width: auto;
			}

			ul {
				list-style-type: none;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				margin: 0;
			}

			ul > li {
				margin: 0 15px;
				padding: 5px;
				border-radius: 3px;
				position: relative;
			}

			ul > li a {
				text-decoration: none;
			}







			/* DROPDOWN */
			.dropdown {
				// float: left;
				// overflow: hidden;
			}
			.dropdown:hover {
			  background-color: black;
			  color: white;
			}

			/* Dropdown content (hidden by default) */
			.dropdown-content {
			  display: none;
			  position: absolute;
			  left: 0;
			  // padding-top: 5px;
			  // border-top: 5px solid transparent;
			  background-color: #f9f9f9;
			  min-width: 160px;
			  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			  z-index: 100;
			}

			/* Links inside the dropdown */
			.dropdown-content a {
			  //float: none;
			  color: black;
			  padding: 12px 16px;
			  text-decoration: none;
			  display: block;
			  text-align: left;
			}

			/* Add a grey background color to dropdown links on hover */
			.dropdown-content a:hover {
			  background-color: #ddd;
			}

			/* Show the dropdown menu on hover */
			.dropdown:hover .dropdown-content {
			  display: block;
			}


			.dropdown > a::after {
				content: "";
				display: inline-block;
				width: 0;
				height: 0;
				margin-left: .255em;
				vertical-align: .255em;
				border-top: .3em solid;
				border-right: .3em solid transparent;
				border-bottom: 0;
				border-left: .3em solid transparent;
			}

			// .dropdown div {
			// 	position: absolute;
			// 	background-color: white;
			// 	min-width: 60px;
			// 	left: 0;

			// 	display: none;
			// }

			// .dropdown:hover div {
				
			// 	display: block;
				
			// }
			// .dropdown div:hover {
			// 	display: block;
			// }

			// .dropdown div a {
			// 	display: block;
			// 	padding: 5px 20px;
			// 	white-space: nowrap;
			// }

		`}</style>
	</div>
);

export default Nav;