import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

const People = () => {
  const { store, actions } = useContext(Context);



  useEffect(() => {
    actions.fetchPeople();
  }, []);

  return (
    <div>
      <h1>People </h1>
      <ul>
        {store.people && store.people.map((people, index) => {
          return (
            <div className="container text-center">

              <div className=" row">
                <div className=" col">
                  <div className="card">
                    <li key={index}>{people.name}
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

export default People;