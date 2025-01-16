import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand text-danger mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
				</Link>
			</div>
		</nav>
	);
};
