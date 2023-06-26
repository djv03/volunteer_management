const { default: mongoose } = require("mongoose");

const students= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,  unique:true},
    phone:{type:Number, unique:true},
    age:{type:Number, required:true},
    role:{type:String},
    
   
},{timestamps:true});

export default mongoose.models.Allstudents ||  mongoose.model('Allstudents', students)