const express = require('express');
const { register, login, getUser, verifyOtp, sendOtp } = require('../controller/user');
const authenticate = require('../middlewares/auth');
const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/get").get(authenticate, getUser);
router.route("/sendOTP").post(sendOtp);
router.route("/verifyOTP").post(verifyOtp);


module.exports = router; 































// const express = require('express');
// const { registerUser, loginUser } = require("../controller/userController");
// const router = express.Router();


// router.route("/register").post(registerUser)

// router.route("/login").post(loginUser)
 

// module.exports = router; 