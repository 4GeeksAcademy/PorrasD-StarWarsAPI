import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

// home seria el home View
// dos columns de 4-8 el de 4 lleva un list group con cada uno de los grupos de opciones(personas, vehiculos,planetas)
// el de 8 un display de la info del boton seleccionado con imagen y nombre 

// un pagination prev y next con el link que da la api

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
