import React from "react";
import "../../styles/home.css";
import Planets from "../component/Planets.jsx";
import People from "../component/People.jsx";
import Vehicles from "../component/Vehicles.jsx";

// home seria el home View
// dos columns de 4-8 el de 4 lleva un list group con cada uno de los grupos de opciones(personas, vehiculos,planetas)
// el de 8 un display de la info del boton seleccionado con imagen y nombre 

// un pagination prev y next con el link que da la api

export const Home = () => (
    <div className="container text-center">
        <div className="row ">
            <div className="col-2 border-end ">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action list-group-item-dark">People</li>
                    <li className="list-group-item list-group-item-action list-group-item-dark">Vehicles</li>
                    <li className="list-group-item list-group-item-action list-group-item-dark">Planets</li>
                </ul>
            </div>
            <div className="col-10">
          <Planets />
          <nav aria-label="Page navigation example" className="d-flex justify-content-end fixed-bottom mb-3 me-3">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
        </div>
    </div>

);
