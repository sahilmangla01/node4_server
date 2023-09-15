const route = require("express").Router();
const { register, login } = require("../Controller/userController");
const {dashboard , profile} = require("../Controller/articleController");
const authMiddleware = require("../middleware/userAuth");


route.post("/register" , register)
route.post("/login" , login)
route.get("/dashboard",authMiddleware , dashboard)
route.get("/profile",authMiddleware , profile)
module.exports= route;