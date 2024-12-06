import React, {useState} from 'react'
import checkPageStatus from "../utils/functions"
import { FcAddImage, FcVideoCall } from 'react-icons/fc'
const ChatFooter = ({socket}) => {
  const user_details=JSON.parse(localStorage.getItem('login_result'));
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e) => {
        e.preventDefault()

        if(message.trim() && localStorage.getItem("userName")) {
        socket.emit("message", 
            {
            text: message, 
            name: localStorage.getItem("userName"), 
            id: `${socket.id}${Math.random()}`,
            sender_id:user_details?.data?._id,
            reciver_id:'',
            // media:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            // media:'https://htx.loopncode.com/public/front/assets/hammer-tradex.pdf'
            media:''
            }
        )
        checkPageStatus(message, localStorage.getItem("userName"))
        }
        setMessage("")
    }
  return (
    <div className='chat__footer'>
        <form className='form' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Write message' 
            className='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
            />
            <label className='_label'> <FcAddImage className="icons" style={{fontSize:'30px',cursor:'pointer'}}/> 
            <input className='input_file' type="file" accept="image/png, image/jpg, image/gif, image/jpeg video/mp4,video/x-m4v,video/* application/pdf,application/vnd.ms-excel"/>
            </label>
            <button className="sendBtn">SEND</button>
        </form>
     </div>
  )
}

export default ChatFooter