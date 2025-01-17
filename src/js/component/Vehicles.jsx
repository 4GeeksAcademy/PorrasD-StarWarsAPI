import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

const Vehicles = () => {
  const { store, actions } = useContext(Context);

  


  useEffect(() => {
    actions.fetchVehicles();
  }, []);

  return (
    <div>
      <h1>Vehicles </h1>
      <ul>
        {store.vehicles && store.vehicles.map((vehicles, index) => {
          return (
            <div class="container text-center">

              <div class=" row">
                <div class=" col">
                  <div class="card">
                    <li key={index}>{vehicles.name}
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

export default Vehicles;