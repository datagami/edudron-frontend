const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const twilio = require("twilio");

const User = require("../models/userModel.js");
const VerModel = require("../models/verification.js");
const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const serviceId = process.env.SERVICE_ID;
const {

  requestPasswordReset,
  resetPassword,
} = require("../services/auth.service");

const authCtrl = {
  // sendOtp: async (req, res) => {
  //   try {
  //     const phone = req.body.phone;
  //     if (!phone) {
  //       return res.status(404).json({ msg: "Please enter a phone number" });
  //     }
  //     const user = await User.findOne({ phone });
  //     if (user) {
  //       return res.json({ msg: "This number already registered" });
  //     }

  //     const findNum = await VerModel.findOne({phone:phone})

  //     client.verify
  //       .services(serviceId)
  //       .verifications.create({ to: phone, channel: "sms" })
  //       .then((verification) => {
  //         console.log({ verification });
  //       })
  //       .catch((error) => {
  //          return res.json({ error });
  //       });

  //     if(findNum){
  //       return res.json({ msg: "OTP send Successfully Again" });
  //     }
  //     else{
  //     const saveData = await VerModel.create({ phone });
  //     return res.json({ msg: "OTP send Successfully" });
  //     }


  //   } catch (error) {
  //     console.log("catch error" ,error);
  //     return res.send({ msg: "Please enter phone number again" });
  //   }
  // },



  verifyOtp: async (req, res) => {
    try {
      const { phone, code } = req.body;

      //Verify OTP code
      // client.verify
      //   .services(serviceId)
      //   .verificationChecks.create({ to: phone, code: code })
      //   .then(async (verification_check) => {
      //     await VerModel.updateOne({ phone }, { $set: { isVerified: true } });
      //     return res.status(200).json({ verification_check });
      //   })
      //   .catch((error) => {
      //     return res.status(400).json({ error });
      //   });

      //Below code is temporary
      await VerModel.updateOne({ phone }, { $set: { isVerified: true } });
      // if(code=='1234'){
      return res.status(200).json({ verification: "Otp verified" })
      // }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: "Please enter phone number again" });
    }
  },

  register: async (req, res) => {
    try {
      const { phone, fullname, email, password, confirm_password, country, state, city, course } = req.body;
      if (!phone || !fullname || !email || !password || !confirm_password || !country || !state || !city || !course) {
        return res
          .status(400)
          .json({
            msg: "Please enter all credentials required",
            status: false,
            data: []
          });
      }

      if (password.length < 6)
        return res
          .status(400)
          .json({
            msg: "Password must be at least 6 characters.",
            status: false,
            data: []
          });

      if (password != confirm_password)
        return res
          .status(400)
          .json(
            {
              msg: "Password and confirm password not match.",
              status: false,
              data: []
            }
          );


      const isPhoneExist = await User.findOne({ phone });

      if (isPhoneExist) {
        return res.status(401).json({
          msg: "Phone number already exist please try with different phone number.",
          status: false,
          data: []
        });
      }

      const isEmailExist = await User.findOne({ email });
      if (isEmailExist) {
        return res.status(401).json({
          msg: "Email already exist please try with different Email Address.",
          status: false,
          data: []
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);
      const saveData = await User.create({
        fullname, phone, email, password: passwordHash, country, state, city

      });
      const access_token = createAccessToken({ id: saveData._id });
      res.status(200).json({
        status: true,
        msg: "User registered successfully",
        access_token,
        data: saveData
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: error.message,
        status: false,
        data: []
      });
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { password, confirm_password } = req.body
      if (password != confirm_password) {
        res.status(401).json({
          status: false,
          msg: "Password and confirm password not match",
          data: []
        });
      } else {
        const passwordHash = await bcrypt.hash(password, 12);

        await User.findOneAndUpdate(
          { email: req.user.email },
          {
            password: passwordHash
          }
        )
        res.clearCookie('jwt');
        // req.session.user = null;
        return res.status(200).json({
          status: true,
          msg: 'Password Changed Successfully',
          data: []
        });
      }
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message, data: [] });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({
            msg: "Please enter all credentials required",
            status: false,
            data: []
          });

      }
      const userData = await User.findOne({ email }).populate("followers").populate("following").populate("exp");
      if (!userData) {
        return res.status(400).json({ msg: "Credentials invalid", status: false, data: [] });
      }
      // if (password !== userData.password) {
      //   return res.status(400).json({ msg: "Credentials invalid" });
      // }

      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect.", status: false, data: [] });

      const access_token = createAccessToken({ id: userData._id });
      
// console.log(req.session)
      res.status(200).json({
        msg: "user logged in",
        status: true,
        access_token,
        data: userData,
      });

    } catch (error) {
      console.log(error.message);
      res.status(500).send({
        msg: error.message,
        status: false,
        data: []
      });
    }
  },

  forgotPassOtp: async (req, res, next) => {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.email
    );
    return res.json(requestPasswordResetService);
  },
  resetPasswordController: async (req, res, next) => {
    // console.log(req.query.id)
    const resetPasswordService = await resetPassword(
      req.query.id,
      req.query.token,
      req.query.password
    );
    return res.json(resetPasswordService);
  },

  logout: async (req, res) => {
    try {
      // console.log(req.session)
    req.user=null;

      logoutUser(req, res, function (err, data) {
        if (err) {
          res.json({ 'error': data.error, 'message': data.message });
        } else {
          res.json({ 'success': data.success, 'message': data.message });
        }
      });
      // return res.json({ msg: "Logged out!" });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        status: false,
        data: []
      });
    }
  },

};
const logoutUser = function (req, res, callback) {
  var sess = req.session;
  
  if (sess) {
    req.session.user = null;
    res.clearCookie('jwt');
    // console.log(req.session)
    req.user=null;
    // console.log(req.user)

    return callback(null, { 'success': true, "message": "user logout successfully" });
  }
  callback(null, { 'success': true, "message": "user logout successfully" });
}


const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};



module.exports = authCtrl;
