const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");
const employeemodel=require("../models/employeemodel")

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllemployeeController = async (req, res) => {
  try {
    const employees= await employeemodel.find({});
    res.status(200).send({
      success: true,
      message: "Employee data List",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching employees",
      error,
    });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    console.log("Sambit", doctors)
    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};

// doctor account status
const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
    const user = await userModel.findOne({ _id: doctor.userId });
    const notifications = user.notifications;
    notifications.push({
      type: "doctor-account-request-updated",
      message: `Your Doctor Account Request Has ${status} `,
      onClickPath: "/notification",
    });
    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Account Status",
      error,
    });
  }
};
//Employee Status Update
const  changeEmployeeAccountStatusController=async (req,res)=>{

  try{
    const{employeeId,status}=req.body;
    const employee=await employeemodel.findByIdAndUpdate(employeeId,{status});
    const user=await userModel.findOne({_id:employee.userId});
    const notifications=user.notifications;
    notifications.push({
      type:"employee-account-request-update",
      message:`Your Employee Account Request Has ${status}`, onClickPath:"/notifications",
    });
    user.isEmployee = status === "approved" ? true : false;
        await user.save();
    res.status(201).send({
      success:true,
      message:"Account Status Updated",
      data:employee,
    })
  }
  catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in Account Status",
      error,
    })
  }
}

module.exports = {
  getAllDoctorsController,
  getAllUsersController,
  getAllemployeeController,
  changeAccountStatusController,
  changeEmployeeAccountStatusController,

};