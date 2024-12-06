const socket = io('https://social-med-backend-node.herokuapp.com', { transports : ['websocket'] });
const messages = document.getElementById('messages');
const msgForm = document.getElementById('msgForm');

socket.on('addMessageToClient', data => {
    console.log(data)
    appendMessages(data.text) 
})

socket.on('output-messages', data => {
    console.log(data)
    if (data.length) {
        data.forEach(message => {
            appendMessages(message.msg)
        });
    }
})

socket.emit('list-all-activeAstro');

socket.on('AllAstrologer', data => {
    console.log(data)
})



socket.emit('list-one-activeAstro',(id="62f35b01569d87a2589c773b"));

socket.on('OneAstrologer', data => {
    console.log(data)
})



IdForm.addEventListener('submit', e => {
    e.preventDefault()
    const user={
        id: IdForm.userID.value
    }
    socket.emit('joinUser', user)
    console.log('submit from Idform ', IdForm.userID.value)
    msgForm.msg.value = '';


})

msgForm.addEventListener('submit', e => {
    e.preventDefault()
    const msgValue={
        text:msgForm.msg.value,
        media:"www.google.com",
        sender:"62e50e29adb262e58ad1f920",
        recipient:"62ed7c2fb9b57bcc0cc4315b",
        chatId:"62fbbabf80cab81f17ff5fc9",
    }
    socket.emit('addMessage', msgValue) 
    console.log('submit from msgfrom', msgForm.msg.value)
    msgForm.msg.value = '';


})

function appendMessages(message) {
    const html = `<div>${message}</div>`
    messages.innerHTML += html
}



//




document.getElementById('rzp-button1').onclick = async function (e) {
    e.preventDefault();

    let order = await fetch('http://localhost:8000/api/createpayment', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: 500

        })
    })
    let orderData = await order.json()
    console.log(orderData)
    var options = {
        "key": "rzp_test_LyVZxCMGmjKGmq", 
        "amount": orderData.amount,
        "currency": "INR",

        "order_id": orderData.order.id,
        "handler":async function (response) {
            // here will post again with user.id and the response that payment is success
            let order = await fetch('http://localhost:8000/api/successpayment', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    memberId:"62e50e29adb262e58ad1f920",
                    amount: orderData.amount,
                    paymentId:response.razorpay_payment_id,
                    orderId:response.razorpay_order_id,
                    signature:response.razorpay_signature,
        
                })
            })
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },

    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}
