const axios = require('axios')

const { sendFireBaseNOtificationFCM } = require('./fcmNotification');
const Notification  = require('../models/notifyModel')


async function saveNotification(notification_type, title, body, send_to, msg_type, sendto_array = null, other = []) {
  //  const members = [];
  const token = [];
  var id = [];
  var contact = contact;
  console.log(contact)
  // members.push(sendto_array);
  sendto_array.forEach(element => {

    token.push(element.firebaseToken);
    id.push(element.ownerId);
    contact = element.phone.replace("+", "")
  });
  var strArray = notification_type.split(',');




  if (other['type'] == 'recharge') {
    if (strArray.indexOf('firebase') != -1) {
      var message;
      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }
    //   if (strArray.indexOf('sms') != -1) {
    //   }
    //   if (strArray.indexOf('mail') != -1) {
    //   }
    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];

    
    }
  }
  else if (other['type'] == 'chat_end_user') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    //   if (strArray.indexOf('sms') != -1) {
    //   }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];
      console.log(other['amount'], 'perms')

     

    }


  }
  else if (other['type'] == 'chat_end_astrologer') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    //   if (strArray.indexOf('sms') != -1) {
    //   }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];
      console.log(other['amount'], 'perms')


    }
  }
  else if (other['type'] == 'user_chat_start_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];


    }


  }
  else if (other['type'] == 'astro_chat_start_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];

    }

  }
  else if (other['type'] == 'user_call_start_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];


    }

  }
  else if (other['type'] == 'astro_call_start_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];



    }

  }


  else if (other['type'] == 'user_call_end_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];


    }

  }
  else if (other['type'] == 'astro_call_end_notify') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    if (strArray.indexOf('sms') != -1) {
      let otpUrl = `http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=HUELANE&password=13%23APR$2021&msisdn=${other['phone']}&sid=HUELAN&msg=${body}&fl=0&gwid=2`
      let data = {};
      await axios.get(otpUrl)
        .then(response => { data = response.data })
        .catch(err => console.log('error', err));
    }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

    if (strArray.indexOf('whatsapp') != -1) {
      // send whatsapp notification
      var template = '';
      var perms = [];



    }

  }
  else if (other['type'] == 'call_cancel') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    // if (strArray.indexOf('sms') != -1) {
    // }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

 

  }
  else if (other['type'] == 'call_cancel') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    // if (strArray.indexOf('sms') != -1) {
    // }
    //   if (strArray.indexOf('mail') != -1) {
    //   }

  }
  else if (other['type'] == 'call_ratting_user') {
    if (strArray.indexOf('firebase') != -1) {
      var message;

      message = {
        "title": title,
        "body": body
      }

      sendFireBaseNOtificationFCM(token, message)
    }

    // if (strArray.indexOf('sms') != -1) {
    // }
    //   if (strArray.indexOf('mail') != -1) {
    //   }


  }

  //save notification in db
  const newNotification = new Notification({
    'trans_type': notification_type,
    'title': title,
    'body': body,
    'image': null,
    'soundtype': null,
    'sendto_Id': id,
    'sendto': send_to,
    'msg_type': msg_type,
    'other': null

  }
  )
  await newNotification.save();
}



exports.saveNotification = saveNotification