import BloodLogo from "../BloodLogo";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <BloodLogo size={60} />

        <div className="brand-text">
          <Link to="/dashboard" className="dashboard-link">
            <h2>Blood AI</h2>
          </Link>

          <span className="sub-text">Smart Donation Network</span>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/create" className="create-link">
          <button className="create-btn">
            <PlusCircle size={18} />
            Create Request
          </button>
        </Link>
        <Link to="/map" className="create-link">
          <button className="create-btn">
            <PlusCircle size={18} />
            Nearby Donors
          </button>
        </Link>

        <div className="live-status">
          <div className="live-dot"></div>
          Live Updates
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
