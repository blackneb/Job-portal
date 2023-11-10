'use client'
import React, { useState, useEffect } from 'react'


const page = () => {
  const [inputMessage, setInputMessage] = useState('');
  const socket = new WebSocket('ws://127.0.0.1:8000/ws/chat/lobby/');
  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:8000/ws/chat/lobby/');
      socket.addEventListener('open', (event:any) => {
        console.log('WebSocket connection opened:', event);
      });
  
      // Listen for messages
      socket.addEventListener('message', (event:any) => {
        console.log('WebSocket message received:', event.data);
      });
  }, []);
  const sendMessage = async () => {
    if (socket) {
      const message = 'Hello from the client!';
      console.log(`Sending message: ${inputMessage}`);

      // Send a message to the server
      socket.send(inputMessage);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <p>chat with me</p>
      <input
          type="text"
          value={inputMessage}
          placeholder='type here'
          onChange={(e) => setInputMessage(e.target.value)}
        />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default page
