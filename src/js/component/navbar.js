import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-dark mb-3 p-2">
			<Link to="/">
				<span className="navbar-brand text-danger mb-0 h1"><i className="fa-solid fa-jedi"></i></span>
			</Link>
			<div className="ml-auto mt-3 mb-3 ">
				<div className="dropdown">
					<button
						className="btn btn-outline-danger dropdown-toggle"
						type="button"
						id="favoritesDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No favorites added</li>
						) : (
							store.favorites.map((fav, index) => (
						<li key={index} className="dropdown-item d-flex justify-content-between">
							{fav.name}
							<button
								className="btn btn-sm btn-danger"
								onClick={() => actions.toggleFavorite(fav)}
							>
								&times;
							</button>
						</li>
						))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};