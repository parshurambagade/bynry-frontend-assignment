import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: '100%',
//   height: '100%'
// };

function MapComponent({ location }) {
  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "600px", height: "450px" }}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
