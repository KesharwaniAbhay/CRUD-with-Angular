const app = require('express');
const router = app.Router();
const db = require("../db.js");

router.post("/deleteUser", async (req, res) => {
    // console.log("delete user data -->", req.body);
    var userData = req.body;
    const query = `
    DELETE FROM registration_user
    WHERE username = '${userData.username}';`;
    db.query(query, function (err, result) {
        if (err) {
            res.send({ msg: 'error' })
        } else {
            res.send({ msg: 'deleted' })
        }

    })
});

module.exports = router;