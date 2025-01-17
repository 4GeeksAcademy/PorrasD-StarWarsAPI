import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

const Planets = () => {
  const { store, actions } = useContext(Context);




  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  return (
    <div>
      <h1>Planets </h1>
      <ul>
        {store.planets && store.planets.map((planet, index) => {
          return (
            <div class="container text-center">

              <div class=" row">
                <div class=" col">
                  <div class="card">
                    <li key={index}>{planet.name}
                    </li>
                  </div>
                </div>
              </div>
            </div>

          )
        })
        }
      </ul>
    </div>
  );
};

export default Planets;