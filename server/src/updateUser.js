const app = require('express');
const router = app.Router();
const db = require("../db.js");
const bcrypt = require('bcrypt');


var hashPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    console.log("namak itthe hai veere ", salt)
    return await bcrypt.hash(pass, salt);
};



//update user details
router.post("/updateUser", async (req, res) => {
    console.log("edit user data -->", req.body);
    // const { Fullname, username, password, phone_no, age, Address } = req.body;
    var userData = req.body;
    console.log("hiii", req.body.Fullname);

    // console.log("askdfuhdsfu");
    const hashedPassword = await hashPassword(userData.password);
    const query = `UPDATE registration_user SET Fullname = '${userData.Fullname}', 
      username = '${userData.username}', 
      password = '${hashedPassword}', 
      phone_no = '${userData.phone_no}', 
      age = ${userData.age}, 
      Address = '${userData.Address}',
      image_path='${userData.image_path}'
    WHERE username = '${userData.username}';`

    db.query(query, function (err, result) {
        console.log("registerr res", result);
        if (err) {
            console.log("reg error ise", err);
            return;
        }
        if (result != undefined) {
            return res.status(200).json({ msg: 'Successfully Updated!' });
        } else {
            return res.status(200).json({ msg: 'Duplicate Entry' });
        }
    })
});

module.exports = router;