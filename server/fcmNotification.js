const axios = require('axios')
const Notify = require('./models/notifyModel')

async function sendFireBaseNOtificationFCM (registrationToken ,title, message, receiver, sender, options=null ){

    // console.log("fcm")
    // console.log(registrationToken , message)
    const notifydata =new Notify(
        {   
            recipients: receiver._id, // people who will get the notificaton []
            user: sender._id,                         
            text: title,                          // eg. added new post
            content: message,                       // Can be caption of the post
            image: receiver.avatar
        })

        await notifydata.save()

    const token = [];
    registrationToken.forEach(element => {

        token.push(element);
      });
console.log(registrationToken)
      var data = JSON.stringify({
        "to": registrationToken.toString(),
        "notification": {
          "title": title,
            "body": message,
            "sound": "default",
            "icon": "	https://www.jyotishee.com/assets/images/logo.png",
            "android_channel_id": "new_email_arrived_channel"
        },
        "data": {
          "options": options
        }
      });
      
      var config = {
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: { 
          'Authorization': 'key=AAAAsXYMvOQ:APA91bG70RUB87svu9y9mlZd0ptR0e_dH5qdb31CxLo3EU_32CVlmxk71iuKCRMitjvQoOyIL77IjvkorCwBQKLNf_zFkWnIJI-ckL3sCegeMYJ0H04tDYuiPAps9l0nEFj-bDjbn1C9',
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      

}



exports.sendFireBaseNOtificationFCM = sendFireBaseNOtificationFCM