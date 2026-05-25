import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const bloodIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3654/3654898.png",

  iconSize: [35, 35],
});

function DonorMap({ donors }) {
  const validDonors = donors.filter(
    (donor) =>
      donor.location &&
      donor.location.latitude !== undefined &&
      donor.location.longitude !== undefined,
  );

  console.log(donors);
console.log(validDonors);
  return (
    <MapContainer center={[22.5726, 88.3639]} zoom={11} className="leaflet-map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {validDonors.map((donor) => (
        <Marker
          key={donor._id}
          position={[donor.location.latitude, donor.location.longitude]}
          icon={bloodIcon}
        >
          <Popup>
            <h4>{donor.name}</h4>

            <p>
              Blood:
              {donor.bloodGroup}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default DonorMap;
