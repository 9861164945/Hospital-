const express = require("express");
const {
    getemployeeInfoController,getemployeeIdController,
} = require("../controller/employeeCtrl");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getEmployeeInfo", authMiddleware, getemployeeInfoController);


//POST  GET SINGLE DOC INFO
router.post("/getEmployeeById", authMiddleware, getemployeeIdController);




module.exports = router;
