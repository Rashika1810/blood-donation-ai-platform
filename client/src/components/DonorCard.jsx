import { MapPin, Droplets } from "lucide-react";

const DonorCard = ({ donor }) => {
  return (
    <div className="donor-card">
      <div className="donor-top">
        <h3>{donor.name}</h3>

        <div className="blood-badge">
          <Droplets size={14} />

          {donor.bloodGroup}
        </div>
      </div>

      <div className="location-row">
        <MapPin size={16} />
        Nearby Donor
      </div>
    </div>
  );
};

export default DonorCard;
