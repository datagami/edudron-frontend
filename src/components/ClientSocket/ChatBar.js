import React, {useState, useEffect} from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])
console.log(users)
    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='chat__sidebar'>
        <input type='text' placeholder='Search' className='ps-3 '/>
        <div className='user_box'>
            {/* <h4  className='chat__header'>ACTIVE USERS</h4> */}
            <div className=''>
                {/* {users.map(user => <p className='chat__users' key={user.socketID}>{user.userName}</p>)} */}
            </div>
        </div>
  </div>
  )
}

export default ChatBar