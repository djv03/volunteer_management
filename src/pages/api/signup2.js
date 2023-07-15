import volunteers_collection from "../../../models/volunteers"; 
import connectDB from "../../../db_utils/connect_to_db";


async function handler(req, res) {
    if (req.method == 'POST') {
        // console.log(req.body);
        let emailexist = await volunteers_collection.findOne({ "email": req.body.email })
        let phoneexist = await volunteers_collection.findOne({ "phone": req.body.phone })
        if (emailexist || phoneexist) {
            res.status(200).json({ fail: "email or phone already exist, we will contact you soon" })
        } else {

            const { name,email,phone,age,role } = req.body
            let u = new volunteers_collection({
                name,
                email,
                phone,
                age,
                role
            })
            await u.save()
            res.status(200).json({ sucess: "sucessfully registered!!!" })
        }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)