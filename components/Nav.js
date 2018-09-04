import Link from 'next/link';
import Authentication from '../pages/auth.js';


const Nav = () => (
	<div>
		<nav>
			<Link href="/index"><img src="../static/Theme-Logo.jpg" /></Link>
			<ul>
				<li>
					<Link href="/about"><a>About</a></Link>
				</li>
				<li>
					<Link href="#"><a>News</a></Link>
				</li>
				<li>
					<Link href="/events"><a>Events</a></Link>
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
				
				padding: 0 2%;

				-webkit-box-shadow: 0 8px 6px -6px #383838;
				-moz-box-shadow: 0 8px 6px -6px #383838;
				box-shadow: 0px 4px 6px 0px #383838;

				z-index: 1;
				position: relative;
			}

			nav img {
				height: 100%;
				width: auto;
			}

			ul {
				list-style-type: none;
				display: flex;
				align-items: center;
			}

			ul > li {
				margin: 0 15px;
			}

			ul > li a {
				text-decoration: none;
			}
		`}</style>
	</div>
);

export default Nav;