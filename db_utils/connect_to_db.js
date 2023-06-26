import mongoose from "mongoose";

const connectDB = (handler) => 

    async (req, res) => {
        console.log("from mongoose.js");
        console.log(mongoose.connections.length);
        
        if (mongoose.connections[0].readyState) {
            //if connection is already made then return handler 
            return handler(req, res)
        }
        await mongoose.connect('mongodb+srv://Dhruvin:Dhruvin%40ir@cluster0.ukjigl4.mongodb.net/')
        .then(() => { console.log(' connected sucessfully to India Recycles cloud mongoDB databse ') })
        .catch((err) => { console.log(err) });
        
        return handler(req, res)
    
}
    
export default connectDB;
