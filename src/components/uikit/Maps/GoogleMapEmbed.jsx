/* eslint-disable react/prop-types */
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function GoogleMapInteractive({ lat, lng, zoom = 5, height = 320 }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const center = { lat, lng };
  if (!isLoaded) return <div style={{ height }}>Loading map…</div>;
  return (
    <div style={{ width: "100%", height }}>
      <GoogleMap mapContainerStyle={{ width: "100%", height: "100%" }} center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export { GoogleMapInteractive };
