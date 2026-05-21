const express=require("express");
const protectedRoute = require("../middleware/authMiddleware");
const { createRequest, getAllRequest, getMatchingDonors } = require("../controllers/requestController");
const requestRoutes=express.Router();


requestRoutes.post("/createRequest",protectedRoute,createRequest)
requestRoutes.get("/getAllRequest",protectedRoute,getAllRequest)
requestRoutes.get("/:id/matches",protectedRoute,getMatchingDonors)

module.exports=requestRoutes;