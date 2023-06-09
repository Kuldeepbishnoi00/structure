const express = require("express");
const {userragestor} = require("../controllers/UserRagistration");
userRoutes = express.Router()

userRoutes.post("/signup",userragestor)



module.exports=userRoutes