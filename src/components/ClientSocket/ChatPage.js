import React, { useEffect, useState, useRef} from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'


const ChatPage = ({socket}) => { 
  const [messages, setMessages] = useState([]);

  const[urlink,setUrllink]=useState('')
  const [typingStatus, setTypingStatus] = useState("")
  const lastMessageRef = useRef(null);
  console.log(messages);
  useEffect(()=>{
    const _user=JSON.parse(localStorage.getItem('login_result'));
  const userName=_user.data.fullname
  localStorage.setItem("userName", userName);
        socket.emit("newUser", {userName, socketID: socket.id})
        
  },[])
       

  useEffect(()=> {
    socket.on("messageResponse", data => {
      setMessages([...messages, data])
      setUrllink(data.media)
    })
  }, [socket, messages])

  /** 
    Uncomment to Fetch the messages from the API route
  */
    useEffect(()=> {
      function fetchMessages() {
        fetch("http://localhost:4001/api")
        .then(response => response.json())
        .then(data => setMessages(data))
      }
      fetchMessages()
  }, [socket])

  useEffect(()=> {
    socket.on("typingResponse", data => setTypingStatus(data))
  }, [socket])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);
 

  return (
    <>
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-10  mx-auto'>
      </div>
    </div>
    <div className="chat">
      <ChatBar socket={socket}/>
      <div className='chat__main'>
        <ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef} urllink={urlink} />
        <ChatFooter socket={socket}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default ChatPage