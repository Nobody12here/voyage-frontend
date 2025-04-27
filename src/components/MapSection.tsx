import React, { useState, useEffect, useMemo } from "react";
import GoogleMap from "google-maps-react-markers";
import { LocationData } from "../types";
import { useLocationStore } from "../stores/locationStore";

// Sample location data
// const initialLocations: Omit<LocationData, "show">[] = [
//   {
//     id: 1,
//     lat: 59.955413,
//     lng: 30.337844,
//     title: "Winter Palace",
//     description:
//       "The former imperial palace and current home of the Hermitage Museum, showcasing one of the world's largest art collections.",
//   },
//   {
//     id: 2,
//     lat: 59.93428,
//     lng: 30.335099,
//     title: "St. Isaac's Cathedral",
//     description:
//       "An impressive 19th-century cathedral with a golden dome, offering panoramic city views from its colonnade.",
//   },
//   {
//     id: 3,
//     lat: 59.940007,
//     lng: 30.315608,
//     title: "Peter and Paul Fortress",
//     description:
//       "The original citadel of St. Petersburg, containing the Peter and Paul Cathedral and the burial place of Russian emperors.",
//   },
// ];

// InfoWindow component
const InfoWindow = ({ location }: { location: LocationData }) => {
  const infoWindowStyle = {
    position: "relative" as const,
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
    borderRadius: "4px",
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: "8px" }}>
        {location.title}
      </div>
      <div style={{ fontSize: 14, color: "grey" }}>{location.description}</div>
    </div>
  );
};

// Marker component
const Marker = ({
  show,
  location,
  onClick,
}: {
  show: boolean;
  location: LocationData;
  onClick: () => void;
}) => {
  const markerStyle = {
    position: "absolute" as const,
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <div onClick={onClick}>
      <div style={markerStyle}>
        <div
          className={`px-2 py-1 text-sm font-medium rounded-md shadow-md ${
            show ? "bg-blue-700 text-white" : "bg-white text-blue-700"
          }`}
        >
          {location.title}
        </div>
        <div
          style={{
            marginTop: "2px",
            width: 0,
            height: 0,
            marginLeft: "auto",
            marginRight: "auto",
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: show ? "8px solid #1d4ed8" : "8px solid white",
          }}
        ></div>
      </div>
      {show && <InfoWindow location={location} />}
    </div>
  );
};

const MapSection: React.FC= () => {

  const [locations, setLocations] = useState<LocationData[]>([]);
  const locationsData = useLocationStore((set)=>set.locations);
  // Calculate a key that changes when locations are ready
  const mapKey = useMemo(() => {
    if (locations.length > 0) {
      return `${locations[0].lat}-${locations[0].lng}`; // key based on center
    }
    return "default-map";
  }, [locations]);
  const center = locations && locations.length > 0
  ? { lat: locations[0].lat, lng: locations[0].lng }
  : {lat:0,lng:0};

  useEffect(() => {
    // Initialize locations with show: false
    setLocations(
      locationsData.map((location) => ({
        ...location,
        show: false,
      }))
    );
  }, [locationsData]);

  // Handle marker click - toggle show property
  const handleMarkerClick = (key: number) => {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === key
          ? { ...location, show: !location.show }
          : { ...location, show: false }
      )
    );
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <div className="w-full h-96 relative">
            <GoogleMap
              apiKey="AIzaSyC3YHeB6cGNALtLHQkx5foNgvj3R_2SJCw"
              defaultCenter={center}
              key={mapKey}
              defaultZoom={11}
            >
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  // These props are used by GoogleMapReact for positioning
                  lat={location.lat}
                  lng={location.lng}
                  // These are custom props for our component
                  show={location.show}
                  location={location}
                  onClick={() => handleMarkerClick(location.id)}
                />
              ))}
            </GoogleMap>
          </div>
          <div className="p-4 bg-blue-900 text-white">
            <h3 className="text-lg font-medium">
              Discover popular destinations
            </h3>
            <p className="text-gray-300 text-sm">
              Explore our curated selection of amazing places to visit. Click on
              markers to see details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
