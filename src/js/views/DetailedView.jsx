import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = () => {
  const { id, type } = useParams(); 
  const { actions } = useContext(Context);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await actions.fetchResourceDetails(type, id);
      setDetails(data);
    };
    fetchDetails();
  }, [id, type]);

  if (!details) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
            alt={details.name || "Detail"}
            className="img-fluid"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Not+Available")
            }
          />
        </div>
        <div className="col-md-6">
          <h1>{details.name}</h1>
          <ul className="list-group">
            {Object.entries(details).map(([key, value], index) => (
              <li key={index} className="list-group-item bg-dark text-white">
                <strong>{key.replace("_", " ").toUpperCase()}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;