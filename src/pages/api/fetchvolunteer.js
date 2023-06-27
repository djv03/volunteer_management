import volunteers_collections from "../../../models/volunteers";
import connectDB from "../../../db_utils/connect_to_db";

 async function handler(req, res) {
  try {
    
    let allvolunteers = await volunteers_collections.find();

    res.status(200).json(allvolunteers  )
  } 
  catch (error) {
    res.status(500).json({error:'unusual error happned'})
  }
}
export default connectDB(handler)


