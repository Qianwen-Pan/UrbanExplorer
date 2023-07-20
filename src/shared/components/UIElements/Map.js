import React, { useRef, useEffect } from "react";
import "./Map.css";
function Map(props) {
  const mapRef = useRef();
  useEffect(() => {
    const position = { lat: -25.344, lng: 131.031 };

    // The map, centered at Uluru
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 4,
      center: position,
    });

    // The marker, positioned at Uluru
    new window.google.maps.Marker({
      map: map,
      position: position,
    });
  }, []);
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}
export default Map;
