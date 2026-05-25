import { useEffect, useState } from "react";

import api from "../services/api";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

import DonorMap from "../components/DonorMap";

import DonorCard from "../components/DonorCard";

import "../styles/MapPage.css";

function MapPage() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/request/donors/map");

        setDonors(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const bloodCount = new Set(donors.map((d) => d.bloodGroup)).size;

  return (
    <div className="map-page">
      <DashboardNavbar />

      <div className="map-content">
        <div className="top-stats">
          <div className="map-stat">
            <h2>{donors.length}</h2>

            <p>Total Donors</p>
          </div>

          <div className="map-stat">
            <h2>{bloodCount}</h2>

            <p>Blood Groups</p>
          </div>
        </div>

        <div className="map-layout">
          <div className="map-card">
            <div className="card-title">
              <h2>Nearby Donor Network</h2>

              <p>Real-time donor tracking</p>
            </div>

            <DonorMap donors={donors} />
          </div>

          <div className="donor-sidebar">
            <h2>Available Donors</h2>

            {donors.map((donor) => (
              <DonorCard key={donor._id} donor={donor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
