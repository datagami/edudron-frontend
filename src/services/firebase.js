


import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
} from 'firebase/firestore';


const firebaseConfig = {
    // apiKey: "AIzaSyCx7GDjVeGNdvFINSHvXwq9jkxTLrav_cY",
    // authDomain: "jyotishee-cb7f3.firebaseapp.com",
    // projectId: "jyotishee-cb7f3",
    // storageBucket: "jyotishee-cb7f3.appspot.com",
    // messagingSenderId: "362449511746",
    // appId: "1:362449511746:web:5a740c6da477aba1ded4db",
    // measurementId: "G-DSP40B55H1"
    apiKey: "AIzaSyB_L91xyNbDWHDLbMAF47PtoQrK5NhqMG0",
    authDomain: "manhelper-84cf7.firebaseapp.com",
    projectId: "manhelper-84cf7",
    storageBucket: "manhelper-84cf7.appspot.com",
    messagingSenderId: "456143694226",
    appId: "1:456143694226:web:e6c0febdfb49ea369cb94b",
    measurementId: "G-SW3CSSWH2V"
};

export const getTokens = (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BEKOXDHZNydgsAo21eDZVYnswEbeZ2uLmh7220Fw1PepkLXgw9niZ_6ZBbzXHhzXZV5xb3vjTqvYSlkqalnO5-Q' }).then((currentToken) => {
        if (currentToken) {
    console.log(currentToken)
            setTokenFound({status:true,token:currentToken});


        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    }).catch((err) => {
console.log(err)
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });


// async function loginWithGoogle() {
//     try {
//         const provider = new GoogleAuthProvider();
//         const auth = getAuth();

//         const { user } = await signInWithPopup(auth, provider);

//         return { uid: user.uid, displayName: user.displayName };
//     } catch (error) {
//         if (error.code !== 'auth/cancelled-popup-request') {
//             console.error(error);
//         }

//         return null;
//     }
// }
// const provider=JSON.parse(localStorage.getItem('provider'));
//console.log(provider?.provider_data?.id)
// async function sendMessage(roomId, user, text) {
//     try {
//         await addDoc(collection(db, 'chatRoom', roomId, 'chats'), {
//             //   uid: user.uid,
//             //   displayName: user.displayName,
//             //   text: text.trim(),
//             //   timestamp: serverTimestamp(),
//             uid: user?.data?.id || null,
//             displayName: user?.data?.display_name || null,
//             user_type:user?.data?.user_type,
//             reciver_id:provider?.provider_data?.id,
//             text: text.trim(),
//             timestamp: serverTimestamp(),
//         });
  
//     } catch (error) {
//         console.error(error);
//     }
// }

// function getMessages(roomId, callback) {
//     return onSnapshot(
//         query(
//             collection(db, 'chatRoom', roomId, 'chats'),
//             orderBy('timestamp', 'asc')
//         ),
//         (querySnapshot) => {
//             const messages = querySnapshot.docs.map((doc) => ({ 
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             console.log(messages)
//             callback(messages);
//         }
//     );
// }


// export { loginWithGoogle, sendMessage, getMessages };
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
const db = getFirestore(app);