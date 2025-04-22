const express = require("express");
const authcontroller = require("../controller/authcontroller");
const router = express.Router();
router.get("/users",authcontroller.getAllUsers);
router.get("/uder/:email",authcontroller.getUser);
router.post("/adduser",authcontroller.createUser);
router.put("/updateuser/:email",authcontroller.editUser);
router.delete("/")