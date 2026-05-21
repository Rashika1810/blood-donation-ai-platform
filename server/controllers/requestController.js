const BloodRequest = require("../models/BloodRequest");
const User = require("../models/User");
const axios = require("axios");
const compatibility = require("../utils/bloodCompatibility");

const createRequest = async (req, res) => {
  try {
    const {
      patientName,
      bloodGroup,
      unitsNeeded,
      hospital,
      city,
      description,
    } = req.body;
    let urgency = "normal";
    try {
      const aiResponse = await axios.post("http://127.0.0.1:8000/predict", {
        text: description,
      });
      urgency = aiResponse.data.urgency;
    } catch (error) {
      console.log("AI service unavailable");
    }
    const request = await BloodRequest.create({
      patientName,
      bloodGroup,
      unitsNeeded,
      hospital,
      city,
      description,
      urgency,
      requestedBy: req.user.id,
    });
    res.status(201).json(request);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllRequest = async (req, res) => {
  try {
    const request = await BloodRequest.find({
      status: "open",
    })
      .populate("requestedBy", "name email bloodGroup city")
      .sort({
        createdAt: -1,
      });

    res.json(request);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getMatchingDonors = async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await BloodRequest.findById(requestId);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    const donors = await User.find({
      bloodGroup: {
        $in: compatibility[request.bloodGroup]
      },
      city: request.city,
      available: true,
      role: "donor",
    }).select("-password");

    res.json(donors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createRequest, getAllRequest, getMatchingDonors };
