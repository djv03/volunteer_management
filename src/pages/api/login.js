import volunteers from "../../../models/volunteers";
import connectDB from "../../../db_utils/connect_to_db";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

async function handler(req, res) {
    if (req.method == 'POST') {

        // console.log(req.body);

        let student = await volunteers.findOne({ "email": req.body.email })
        
        if (student) {
            var bytes = CryptoJS.AES.decrypt(student.password, 'parita123');
            var student_name= student.name;
        // console.log(bytes);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        // console.log(decryptedPass);
            if (req.body.email == student.email && req.body.password == decryptedPass) {

                var token = jwt.sign({ email: student.email, name: student.name }, 'merchdjv123', { expiresIn: '1d' });
                res.status(200).json({ sucess: true, token,student_name })
            }
            else {
                res.status(200).json({ sucess: false, error: "invalid crendentials" })
            }
        }
        else {
            res.status(200).json({ sucess: false, error: "no user found for that email, please signup" })
        }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)