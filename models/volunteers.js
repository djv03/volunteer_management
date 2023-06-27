import mongoose from 'mongoose';


const volunteers_schema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,  unique:true},
    phone:{type:Number, unique:true},
    age:{type:Number, required:true},
    role:{type:String,required:true},
    
   
},{timestamps:true});

export default mongoose.models.volunteers_collections ||  mongoose.model('volunteers_collections', volunteers_schema)