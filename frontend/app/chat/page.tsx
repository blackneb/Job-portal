'use client'
import React, { useState, useEffect } from 'react'


const page = () => {
  const [inputMessage, setInputMessage] = useState('');
  const socket = new WebSocket('ws://127.0.0.1:8000/ws/chat/');
  useEffect(() => {
    const connectWebSocket = async () => {
      const socket = new WebSocket('ws://127.0.0.1:8000/ws/chat/');

      // Wait for the WebSocket connection to open
      await new Promise((resolve) => {
        socket.onopen = resolve;
      });

      console.log('WebSocket connected');

      // Send a message to the server
      socket.send('Hello from the client!');

      // Wait for the server response
      const response = await new Promise((resolve) => {
        socket.onmessage = (event) => resolve(event.data);
      });

      console.log(`Received from server: ${response}`);
    };

    connectWebSocket();
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
    <div className='flex justify-center h-screen'>
      <p>chat with me</p>
      <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default page
