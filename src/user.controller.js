const User=require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail=require("../util/mailer")

const userController={
    register : async (req, res) => {
        const {
          accountType,
          fname,
          lname,
          username,
          email,
          phone,
          password,
          user_type
          // address_id,
          // plan_id,
          // is_subscribe,
         
        } = req.body;
      if(!accountType){
        return res.status(400).json({ status:false,data:[],msg: 'Account Type is required' });
      }
      if(!fname){
        return res.status(400).json({ status:false,data:[],msg: 'First Name is required' });
      }
      if(!lname){
        return res.status(400).json({ status:false,data:[],msg: 'Last Name is required' });
      }
      if(!email){
        return res.status(400).json({ status:false,data:[],msg: 'Email is required' });
      }
      if(!phone){
        return res.status(400).json({ status:false,data:[],msg: 'Phone is required' });
      }
      if(!password){
        return res.status(400).json({ status:false,data:[],msg: 'Password is required' });
      }
      if(!username){
        return res.status(400).json({status:false,data:[], msg: 'Username is required' });
      }
      if(!email){
        return res.status(400).json({status:false,data:[], msg: 'Email is required' });
      }
      const user_exist_username=await User.findOne({username:username});
      const user_exist_email=await User.findOne({email:email});

      if(user_exist_username){
        return res.status(400).json({status:false,data:[], msg: 'username already taken' });
      }
      // if(!user_type){
      //   return res.status(400).json({ msg: 'user_type is required' });
      // }
      if(user_exist_email){
        return res.status(400).json({status:false,data:[], msg: 'email already taken' });
      }
        try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const register = new User({
            accountType,
            fname,
            lname,
            username,
            email,
            phone,
            user_type:"user",
            password:hashedPassword,
            // address_id,
            // plan_id,
            // is_subscribe,
            
          });
      
          await register.save();
      
          res.status(201).json({status:true, msg: 'User registered successfully.',data:[] });
        } catch (error) {
          console.error('Error registering user:', error);
          res.status(500).json({ status:false,data:[],msg: 'An error occurred while registering the user.' });
        }
      },
      
      login : async (req, res) => {
          const { email, password } = req.body;
        
          try {
         
            const user = await User.findOne({ email });
            if (!user) {
              return res.status(404).json({status:false,data:[], msg: 'User not found.' });
            }
        
          
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
              return res.status(401).json({ status:false,data:[],msg: 'Invalid password.' });
            }
            const update_fcm=await User.findOneAndUpdate({email:email},{fcm_token:req.body.fcm_token},{new:true})
            const token = jwt.sign({ userId: user._id,user_type:user.user_type }, 'wser4bqiltopf4', { expiresIn: '24h' });
        
            res.status(200).json({status:true,msg:"success",data:user,token:token });
          } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ status:false,data:[],msg: 'An error occurred while logging in.' });
          }
        },
        forgotPassword : async (req, res) => {
          try {
            const { email } = req.body;
        
            
            const user = await User.findOne({ email });
        
            if (!user) {
              return res.status(404).json({status:false,data:[], msg: 'User not found' });
            }
        
            
            const token = Math.random().toString(36).slice(-8);
        
            
            // user.resetPasswordToken = token;
            // user.resetPasswordExpires = Date.now() + 3600000; 
            // await user.save();
        
            
            const subject = 'Password Reset';
            const text = `You are receiving this email because you requested a password reset. Please visit the following link to reset your password: ${process.env.CLIENT_URL}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`;
        
            
            // await sendEmail(user.email, subject, text);
        
            res.status(200).json({status:false,data:[], msg: 'Password reset email sent' });
          } catch (error) {
            console.log(error);
            res.status(500).json({status:false,data:[], msg: 'Internal server error' });
          }
        },
        verifyOTP : async (req, res) => {
          try {
            const { email,otp,new_password } = req.body;
        
            
            const user = await User.findOne({ email });
        
            if (!user) {
              return res.status(404).json({status:false,data:[], msg: 'User not found' });
            }
            if(otp !== 123456){
              return res.status(404).json({status:false,data:[],msg:"otp did not match"});
            }
            
            const token = Math.random().toString(36).slice(-8);

            const hashedPassword = await bcrypt.hash(new_password, 10);
            
            user.password=hashedPassword;
            await user.save();
        
         
            const subject = 'Password Reset';
            const text = `You are receiving this email because you requested a password reset. Please visit the following link to reset your password: ${process.env.CLIENT_URL}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`;
        
            
            // await sendEmail(user.email, subject, text);
            
        
            res.status(200).json({status:false,data:[], msg: 'Password reset successfully' });
          } catch (error) {
            console.log(error);
            res.status(500).json({status:false,data:[], msg: 'Internal server error' });
          }
        }
};

module.exports=userController;


  
  
  
  
  
  
  
