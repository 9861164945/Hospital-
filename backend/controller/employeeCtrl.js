const userModel=require('../models/userModel');
const employeemodel=require('../models/employeemodel');


//get EmployeeInfo controller
const getemployeeInfoController=async(req,res)=>{
    try{
        const employee=await employeemodel.findOne({userId:req.body.userId})
        res.data(200).send({
            success:true,
            message:"Employee data Fetch Success",
            data:employee,
        });
    }
    catch(error){
        console.log(error);
      ({  success:false,
        error,
        message:"Error in Fetching Employee details",
    });

    
    }
}

// get single Employee

const getemployeeIdController=async(req,res)=>{
    try{
        const employee=await employeemodel.findOne({_id:req.body.employee_id});
        res .status(200).send({
            success:true,
            message:"Single Employee Info fetched",
            data:employee,
        })
    }
    catch(error){
        console.log(error);
                res.status(500).send({
                    success:false,
                    error,
                    message:"Error in single Info",


            })

        
    }
}
module.exports={getemployeeInfoController,getemployeeIdController

};