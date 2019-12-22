import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="App">
			<nav>
				<h3>Navbar</h3>
				<ul className="nav-links">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/shop">
						<li>Shop</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
