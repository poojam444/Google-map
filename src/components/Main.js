import mapData from "../data/parkDara.json";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";
import MapPopUp from "./MapPopUp";
const containerStyle = {
  width: "90vw",
  height: "90vh",
};
const center = {
  lat: 28.6139,
  lng: 77.209,
};
const myPlaces = [
  { id: "place1", pos: { lat: 28.6139, lng: 77.209 } },
  { id: "place2", pos: { lat: 28.4595, lng: 77.0266 } },
  { id: "place3", pos: { lat: 28.5355, lng: 28.5355 } },
  { id: "place3", pos: { lat: 28.4089, lng: 77.3178 } },
];
const options = {
  minZoom: 4,
  maxZoom: 18,
};

const Main = (props) => {
  const [map, setMap] = React.useState(null);
  const [selectedMarker, setSelectedMarker] = useState('');
  const [selectedProperty, setSelectedProperty] = useState("");
  // const handleMarker = (marker)=>{
  //   console.log(marker,"rty")
  //   setSelectedMarker(true)
  //   }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBXIJfTKR84y0PIGZbkLDgewksX2fAEq-g",
  });
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onMarkerLoad = (marker) => {
    console.log("marker: ", marker);
  };
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const setMarker = (marker, id) => {
    
    if (selectedMarker) {
      setSelectedMarker("");
      setSelectedProperty("");
    } else {
      setSelectedMarker(marker.properties.PARK_ID);
      setSelectedProperty(marker);
    }
  };

  const closePopUp=()=>{
    setSelectedMarker(!selectedMarker)
    console.log("closed")
  }

  return (
    <>

      <h1>React Google Map API.</h1>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          //  zoom={10}
          //  minZoom={1}
          onLoad={onLoad}
          onUnmount={onUnmount}
          //  getPixelPositionOffset=(())
        >
          {mapData.features.map((marker) => {
            console.log(marker.geometry.coordinates, "marker");
            return (
              <>
                <div key={marker.id}>
                  <Marker
                    position={{
                      lat: marker.geometry.coordinates[0],
                      lng: marker.geometry.coordinates[1],
                    }}
                    onLoad={onMarkerLoad}
                    clickable={true}
                    onClick={() => setMarker(marker, marker.properties.PARK_ID)}
                  />
                </div>
              </>
            );
          })}
          {selectedMarker && <MapPopUp selectedProperty={selectedProperty}  closePopUp={closePopUp}/>}
          {/* <Marker position={myPlaces} onLoad={onMarkerLoad}/> */}
          {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
        </GoogleMap>
      ) : (
        "Loading......"
      )}
    </>
  );
};

// <GoogleMap
//   defaultZoom={8}
//   defaultCenter={{ lat: -34.397, lng: 150.644 }}
// >
//   {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
// </GoogleMap>
export default Main;
