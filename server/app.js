const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const registerUser = require("./src/registerUser");
const loginUser = require('./src/loginUser');
const updateUser = require('./src/updateUser');
const deleteUser = require('./src/deleteUser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", loginUser);
app.use("/api", registerUser);
app.use("/api", updateUser);
app.use("/api", deleteUser);


const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
