import { MapPin, Building2, Droplets, AlertTriangle } from "lucide-react";

const RequestCard = ({ request }) => {
  const urgencyColor = () => {
    switch (request.urgency) {
      case "Critical":
        return "critical";

      case "Medium":
        return "medium";

      default:
        return "low";
    }
  };

  return (
    <div className="request-card">
      <div className="card-header">
        <h3>{request.patientName}</h3>

        <div className={`urgency ${urgencyColor()}`}>
          <AlertTriangle size={14} />

          {request.urgency}
        </div>
      </div>

      <div className="card-info">
        <p>
          <Droplets size={18} />
          Blood:
          {request.bloodGroup}
        </p>

        <p>
          <Building2 size={18} />

          {request.hospital}
        </p>

        <p>
          <MapPin size={18} />

          {request.city}
        </p>
      </div>

      <button className="donate-btn">Respond</button>
    </div>
  );
};

export default RequestCard;
