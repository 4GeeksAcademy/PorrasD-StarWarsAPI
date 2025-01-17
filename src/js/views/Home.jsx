import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [activeTab, setActiveTab] = useState("planets"); // Controla la pestaña activa
  const [page, setPage] = useState(1); // Controla la página actual

  const fetchData = async (tab, page) => {
    if (tab === "planets") {
      await actions.fetchPlanets(page);
    } else if (tab === "people") {
      await actions.fetchPeople(page);
    } else if (tab === "vehicles") {
      await actions.fetchVehicles(page);
    }
  };

  const handleTabClick = async (tab) => {
    setActiveTab(tab);
    setPage(1); // Reinicia la página a 1 al cambiar de pestaña
    await fetchData(tab, 1);
  };

  const handleNextClick = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchData(activeTab, nextPage);
  };

  const handlePrevClick = async () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      await fetchData(activeTab, prevPage);
    }
  };


    const renderResults = () => {
      const data =
        activeTab === "planets"
          ? store.planets
          : activeTab === "people"
            ? store.people
            : store.vehicles;

      return (
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card bg-dark text-white">
                  {/* Imagen dinámica */}
                  <img
                    src={
                      activeTab === "planets"
                        ? `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`
                        : activeTab === "people"
                          ? `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`
                          : `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`
                    }
                    className="card-img-top"
                    alt={item.name}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available")} // Imagen por defecto si falla
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {activeTab === "planets" && (
                        <>
                          <strong>Climate:</strong> {item.climate || "Unknown"} <br />
                          <strong>Population:</strong> {item.population || "Unknown"}
                        </>
                      )}
                      {activeTab === "people" && (
                        <>
                          <strong>Height:</strong> {item.height || "Unknown"} <br />
                          <strong>Mass:</strong> {item.mass || "Unknown"}
                        </>
                      )}
                      {activeTab === "vehicles" && (
                        <>
                          <strong>Model:</strong> {item.model || "Unknown"} <br />
                          <strong>Manufacturer:</strong> {item.manufacturer || "Unknown"}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    };

    return (
      <div className="container text-center">
        <div className="row">
          {/* Menú lateral */}
          <div className="col-2 border-end">
            <ul className="list-group">
              <button
                className="btn btn-dark mb-2"
                onClick={() => handleTabClick("planets")}
              >
                Planets
              </button>
              <button
                className="btn btn-dark mb-2"
                onClick={() => handleTabClick("people")}
              >
                People
              </button>
              <button
                className="btn btn-dark"
                onClick={() => handleTabClick("vehicles")}
              >
                Vehicles
              </button>
            </ul>
          </div>

          {/* Contenido principal */}
          <div className="col-10">
            {renderResults()}

            <nav
              aria-label="Page navigation example"
              className="d-flex justify-content-end fixed-bottom mb-3 me-3"
            >
              <ul className="pagination">
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={handlePrevClick}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={handleNextClick}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  };
