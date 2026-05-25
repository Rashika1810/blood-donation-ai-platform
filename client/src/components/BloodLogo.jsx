import { Link } from "react-router-dom";

const BloodLogo = ({ size = 120 }) => {
  return (
    <Link to="/dashboard">
    <div className="logo-container">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="blood-svg"
      >
        <defs>
          <linearGradient
            id="bloodGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff5c5c" />
            <stop offset="100%" stopColor="#7a0000" />
          </linearGradient>
        </defs>

        {/* Blood Drop */}
        <path
          d="
          M100 20
          C130 60 160 90 160 125
          C160 160 133 180 100 180
          C67 180 40 160 40 125
          C40 90 70 60 100 20
          "
          fill="url(#bloodGradient)"
        />

        {/* AI Circuit Nodes */}
        <circle cx="100" cy="90" r="8" fill="white" />
        <circle cx="70" cy="120" r="6" fill="white" />
        <circle cx="130" cy="120" r="6" fill="white" />

        <line
          x1="100"
          y1="90"
          x2="70"
          y2="120"
          stroke="white"
          strokeWidth="4"
        />

        <line
          x1="100"
          y1="90"
          x2="130"
          y2="120"
          stroke="white"
          strokeWidth="4"
        />

        <line
          x1="70"
          y1="120"
          x2="130"
          y2="120"
          stroke="white"
          strokeWidth="4"
        />
      </svg>

      <div className="pulse-ring"></div>
    </div></Link>
  );
};

export default BloodLogo;