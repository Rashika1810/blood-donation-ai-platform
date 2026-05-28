const DonationResponse = require("../models/DonationResponse");

const respondToRequest = async (req, res) => {
  try {
    const { requestId } = req.body;
    const donorId = req.user.id;

    const exists = await DonationResponse.findOne({ requestId, donorId });

    if (exists) {
      return res.status(400).json({ message: "Already responded" });
    }
    const response = await DonationResponse.create({
      requestId,
      donorId,
      status: "accepted",
    });
    req.app.get("io").emit("donorAccepted", response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getResponses = async (req, res) => {
  try {
    const responses = await DonationResponse.find()

      .populate(
        "donorId",

        "name email bloodGroup",
      )

      .populate("requestId");

    res.json(responses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { respondToRequest,getResponses };
