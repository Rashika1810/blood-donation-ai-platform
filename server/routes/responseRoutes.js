const express=require("express");
const protectedRoute = require("../middleware/authMiddleware");
const { respondToRequest, getResponses } = require("../controllers/responseController");
const responseRoutes=express.Router();


responseRoutes.post("/acceptRequest",protectedRoute,respondToRequest)
responseRoutes.get("/all",protectedRoute,getResponses)

module.exports=responseRoutes;