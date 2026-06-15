import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetch data from the Node backend port
    fetch('http://localhost:8080/puttext', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Roxanne" }),
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
        // Handle success or error
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  });

  
  useEffect(() => {
    // Fetch data from the Node backend port
    fetch('http://localhost:8080/getdata')
      .then((res) => res.text())
      .then(data => setMessage(data));
  
  });

  console.log(message);

  useEffect(() => {
    // Fetch data from the Node backend port
    fetch('http://localhost:8080/getjson')
      .then((res) => res.json())
      .then(data => console.log(data));

  });

  // .then((res) => res.json())
  // .then((data) => setMessage(data.text))
  // .catch((err) => console.error("Error fetching data:", err));
  //}, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React & Node Connection</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;