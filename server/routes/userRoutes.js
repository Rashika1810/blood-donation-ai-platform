const express=require("express");
const protectedRoute = require("../middleware/authMiddleware");
const { getProfile } = require("../controllers/userController");
const userRoutes=express.Router();


userRoutes.get("/profile",protectedRoute,getProfile)

module.exports=userRoutes;