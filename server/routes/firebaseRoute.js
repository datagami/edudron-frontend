const router = require('express').Router()
const admin = require('../fcmNotification')
const admin_auth = require('../middleware/auth')
const notify = require('../fcmNotification')



const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
  };

 
router.post('/firebase/notification', admin_auth, (req, res)=>{
    const  registrationToken = req.body.registrationToken
    const message = req.body.message
    const options =  notification_options
    
    notify.sendFireBaseNOtificationFCM(registrationToken, message, options)
      .then( response => {

       res.status(200).send("Notification sent successfully"+response)
        
      })
      .catch( error => {
          console.log(error);
      });

})

router.get('/axios' , (req,res)=>{
  console.log('get')
  res.send('axios')
})

router.post('/user/firebase/notification', (req, res)=>{
  const  registrationToken = req.body.registrationToken
  const message = req.body.message
  const options =  notification_options
  
  notify.sendFireBaseNOtificationFCM(registrationToken, message, options)
    .then( response => {

     res.status(200).send("Notification sent successfully"+response)
      
    })
    .catch( error => {
        console.log(error);
    });

})




module.exports = router