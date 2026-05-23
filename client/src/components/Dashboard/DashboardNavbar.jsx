import BloodLogo from "../BloodLogo";

const DashboardNavbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <BloodLogo size={60} />

        <h2>Blood AI</h2>
      </div>

      <div className="live-status">
        <div className="live-dot"></div>
        Live Updates
      </div>
    </div>
  );
};

export default DashboardNavbar;
