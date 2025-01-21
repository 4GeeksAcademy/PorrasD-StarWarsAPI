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
            <div className="container text-center">

              <div className=" row">
                <div className=" col">
                  <div className="card">
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