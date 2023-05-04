import mapData from "../data/parkDara.json";
import React from "react";
import { NavLink } from "react-router-dom";

const PropertyDetail = () => {
    console.log(mapData.features,"rty")
  let id = window.location.href;
  const urlId = id.split("/");
  id = urlId[urlId.length - 1];
  console.log(id, "props");
  
  


  return(
    <>
    <h1 className="property-heading">Selected Property Detail...</h1>
    <NavLink to={`/`}>
          <button className="back-home">Go to Home</button>
        </NavLink>
    <div className="propertyDetail">
    { mapData.features.map((item) =>
      item.properties.PARK_ID == id ? (
      <>
      <h2>Property Detail of Id : {id}</h2>
      <h1>Name: {item.properties.NAME}</h1>
      <h3>Location: {item.properties.LOCATION}</h3>
      <h4>Lanes: {item.properties.LANES}</h4>
      <p>Description: {item.properties.DESCRIPTIO}</p>
      
      </>)
      : ""
    )}
    </div>
    </>
  )
};

export default PropertyDetail;
