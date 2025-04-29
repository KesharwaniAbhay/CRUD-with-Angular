const app = require("express");
const router = app.Router();
const db = require("../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../environment/.env');
const { encrypt } = require("./jwtcheck.js");



router.post("/loginUser", async (req, res) => {
    var loginData = req.body;
    // console.log("login user data -->", loginData);
    const query = `SELECT * FROM registration_user WHERE username = '${loginData.username}';`;
    // console.log("queryy", query);

    db.query(query, async function (err, result) {
        if (err) {
            return res.status(500).json({ msg: "Server error" });
        }
        if (result.length === 0) {
            return res.status(200).json({ msg: "Invalid user" });
        }
        const user = result[0];

        const isMatch = await bcrypt.compare(loginData.password, user.password);

        if (!isMatch) {
            return res.status(200).json({ msg: "Invalid password" });
        }
        else {
            const token = jwt.sign(
                { username: user.username },
                config.secretKey,
                { expiresIn: '1h' }
            );
            const secrettoken = encrypt(token);
            // console.log("real token    ", token)
            // console.log("encrypted token        ", secrettoken);
            return res.status(200).json({ msg: "logged in", secrettoken });
        }

    });
});


// users all data fetch

router.post("/usersAllData", async (req, res) => {
    var userRef = req.body.userRef;
    const query = `select * from registration_user where userRef='${userRef}' and username != '${userRef}';`;
    // console.log("queryy", query);
    db.query(query, function (err, result) {
        // console.log("result", result);
        return res.status(200).json(result);
    });
});

//login user data

router.post("/getUser", async (req, res) => {
    var localData = req.body.userRef;
    // console.log("rewqust bpody", req.body);
    // console.log("data recived form the frontend", localData);
    const query = `select * from registration_user where username='${localData}';`;
    // console.log("queryy", query);
    db.query(query, function (err, result) {
        // console.log("user login dta", result);
        return res.status(200).json(result);
    });
});

module.exports = router;
