const app = require('express');
const router = app.Router();
const db = require("../db.js");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');


const storage = multer.diskStorage({
    destination: '\\\\192.168.1.179\\Layout365Data\\Abhay',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage,
    // limits: { fileSize: 1000000 } // Limit file size to 1MB
});


function fileupload(req, res, next) {
    upload.single("userImage")(req, res, function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        next();
    });
}

router.post('/ImageUpload', fileupload, (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully' });
});




//bcrypt
var hashPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    // console.log("namak itthe hai veere ", salt)
    return await bcrypt.hash(pass, salt);
};


//user registration

router.post("/registerUser", async (req, res) => {
    // console.log("register user data -->", req.body);
    var userData = req.body;
    const hashedPassword = await hashPassword(userData.password);

    const query = `Insert into registration_user (Fullname, username, password, phone_no, age, Address, userRef,image_path) values ('${userData.Fullname}',
    '${userData.username}','${hashedPassword}','${userData.phone_no}','${userData.age}','${userData.Address}','${userData.userRef}','${userData.image_path}')`;
    try {
        db.query(query, function (err, result) {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    // console.log("yduplicae");
                    return res.status(400).json({ msg: 'Duplicate Entry' });
                } else {
                    // console.log('DB error:', err);
                    return res.status(500).json({ msg: 'Database error' });
                }
            }
            if (result.affectedRows > 0) {
                return res.status(200).json({ msg: 'User registered successfully!' });
            } else {
                return res.status(400).json({ msg: 'User registration failed' });
            }
        });
    } catch (error) {
        // console.error('Try-catch error:', error);
        return res.status(500).json({ msg: 'Server error', error });
    }
});

module.exports = router;