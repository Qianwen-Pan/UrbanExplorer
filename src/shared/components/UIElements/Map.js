import React, { useRef, useEffect } from "react";
import "./Map.css";

function Map(props) {
  const mapRef = useRef();
  const {location, zoom} = props;
  useEffect(() => {
    

    const initMap = async () => {
      // Request needed libraries.
      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await window.google.maps.importLibrary(
        "marker"
      );

      // The map, centered at Uluru
      const map = new Map(mapRef.current, {
        zoom: zoom,
        center: location,
        mapId: "DEMO_MAP_ID",
      });

      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerView({
        map: map,
        position: location,
        title: "Uluru",
      });
    };

    // Call the function to initialize the map
    if (window.google) {
      initMap();
    } else {
      window.addEventListener("load", initMap);
    }
  }, [location, zoom]);
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}
export default Map;
