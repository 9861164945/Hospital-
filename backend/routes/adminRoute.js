const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  getAllemployeeController,
  changeAccountStatusController,
  changeEmployeeAccountStatusController,
} = require("../controller/adminCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//GET METHOD||EMPLOYEES
router.get("/getAllEmployees",authMiddleware,getAllemployeeController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
router.post(
  "/changeEmpAccountStatus",
  authMiddleware,
  changeEmployeeAccountStatusController
);


module.exports = router;