import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../services/socket";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

import RequestCard from "../components/Dashboard/RequestCard";

import "../styles/Dashboard.css";

export const Dashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function loadRequests() {
      try {
        const res = await api.get("/request/getAllRequest");

        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadRequests();

    const handleNewRequest = (data) => {
      setRequests((prev) => [data, ...prev]);
    };

    socket.on("newRequest", handleNewRequest);

    return () => {
      socket.off("newRequest", handleNewRequest);
    };
  }, []);

  const criticalCount = requests.filter((r) => r.urgency === "critical").length;

  const cityCount = new Set(requests.map((r) => r.city)).size;

  return (
    <div className="dashboard">
      <DashboardNavbar />

      <div className="dashboard-content">
        <div className="stats">
          <div className="stat-card">
            <h3>{requests.length}</h3>

            <p>Total Requests</p>
          </div>

          <div className="stat-card critical-box">
            <h3>{criticalCount}</h3>

            <p>Critical Cases</p>
          </div>

          <div className="stat-card">
            <h3>{cityCount}</h3>

            <p>Cities</p>
          </div>
        </div>

        <div className="section-title">
          <h2>Emergency Requests</h2>

          <input placeholder="Search city..." />
        </div>

        <div className="request-grid">
          {requests.map((request) => (
            <RequestCard key={request._id} request={request} />
          ))}
        </div>
      </div>
    </div>
  );
};
