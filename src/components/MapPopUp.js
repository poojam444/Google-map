import React from "react";
import { NavLink } from "react-router-dom";

const MapPopUp = ({ selectedProperty,closePopUp }) => {
console.log(selectedProperty,"yu")
  return (
    <div className="mapPopUp">
      <div className="wrapper">
        <h1>{selectedProperty?.properties?.LOCATION}</h1>
        <p>{selectedProperty?.properties?.NAME}</p>
        <p>{selectedProperty?.properties?.DESCRIPTIO}</p>
        <NavLink to={`/property/${selectedProperty?.properties?.PARK_ID}`}>
          <button>View More</button>
        </NavLink>
      </div>
      <button className="cancel-btn" onClick={closePopUp}>X</button>
    </div>
  );
};

export default MapPopUp;
