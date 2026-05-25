import { useState } from "react";
import api from "../services/api";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

import {
  User,
  Droplets,
  Building2,
  MapPin,
  FileText,
  Package,
} from "lucide-react";

import "../styles/CreateRequest.css";
import { useNavigate } from "react-router-dom";

export const CreateRequest = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    unitsNeeded: "",
    hospital: "",
    city: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/request/createRequest", formData);

      alert("Request created");

      setFormData({
        patientName: "",
        bloodGroup: "",
        unitsNeeded: "",
        hospital: "",
        city: "",
        description: "",
      });
      navigate("/dashboard")
      
    } catch (error) {
      console.log(error);

      alert("Creation failed");
    }
  };

  return (
    <div className="create-page">
      <DashboardNavbar />

      <div className="request-wrapper">
        <div className="request-card">
          <div className="request-header">
            <h1>Create Blood Request</h1>

            <p>AI-assisted emergency request system</p>
          </div>

          <form onSubmit={handleSubmit} className="request-form">
            <div className="form-grid">
              <div className="input-box">
                <User size={18} />

                <input
                  name="patientName"
                  placeholder="Patient Name"
                  value={formData.patientName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-box">
                <Droplets size={18} />

                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Blood Group</option>

                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div className="input-box">
                <Package size={18} />

                <input
                  name="unitsNeeded"
                  type="number"
                  placeholder="Units Needed"
                  value={formData.unitsNeeded}
                  onChange={handleChange}
                />
              </div>

              <div className="input-box">
                <Building2 size={18} />

                <input
                  name="hospital"
                  placeholder="Hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                />
              </div>

              <div className="input-box full">
                <MapPin size={18} />

                <input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="textarea-box full">
                <FileText size={18} />

                <textarea
                  name="description"
                  placeholder="Describe emergency situation..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="submit-btn">Create Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};
