const mongoose = require("mongoose");

const employeeSchema= new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    previousEmployment:{
        type:String,
        required:[true,"prevework is required"],
    },
    
    status: {
      type: String,
      default: "pending",
    },
}
   
);

const employeemodel = mongoose.model("employees", employeeSchema);
module.exports =employeemodel;