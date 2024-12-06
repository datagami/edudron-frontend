import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import { RiShutDownLine } from 'react-icons/ri';

const ChatBody = ({ messages, typingStatus, lastMessageRef, urllink }) => {
  const [extension, setExtension] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  console.log(extension)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const ext = (url) => {
    if (url) {
      return (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).split('#')[0].substr(url.lastIndexOf("."));
    }
  }
  useEffect(() => {
    setExtension(ext(urllink))
    ext(urllink);

  }, [urllink])


  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/post")
    // window.location.reload()
  }

  return (
    <>
      <header className='chat__mainHeader'>
        <p>Hangout with Colleagues</p>
        <div className='leaveChat__btn fs-3' onClick={handleLeaveChat}><RiShutDownLine /></div>
      </header>


      <div className='message__container'>
        {messages?.map(message => (
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              {/* <p className='sender__name'>You</p> */}
              <div className='message__sender'>
                <div className='message__sender_inner'>
                {extension == '.svg' ? <img src={message.media} /> : extension == '.pdf' ? <Document file={message.media} onLoadSuccess={onDocumentLoadSuccess}>

                </Document> : extension == '.mp4' ? <video controls width="250"><source src={message.media}
                  type="video/mp4" /></video> : ''}
                {/* {extension=='.pdf' ?  <Document file={message.media} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>:''} */}
                <p className='msg_text'>{message?.text}</p>
              </div>
              </div>
            </div>
          ) : (
            <div className="message__chats " key={message.id}>
              {/* <p>{message.name}</p> */}
              <div className='message__recipient'>
                <div className='message__recipient_inner'>
                {extension == '.svg' ? <img src={message.media} /> : extension == '.pdf' ? <Document file={message.media} onLoadSuccess={onDocumentLoadSuccess}>

                </Document> : extension == '.mp4' ? <video controls width="250"><source src={message.media}
                  type="video/mp4" /></video> : ''}
                {/* {extension=='.pdf' ?  <Document file={message.media} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>:''} */}
                <p className='mb-0 msg_text'>{message?.text}</p>
                </div>
              </div>
            </div>
          )
        ))}

        <div className='message__status'>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  )
}

export default ChatBody