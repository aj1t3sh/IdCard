import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app1.css'

function App() {
  return (
    <div className="page">
      <div className="id-card">
        <div className="header">
          <h3>KL UNIVERSITY</h3>
        </div>

        <img src="Profile.jpeg" className="photo" alt="student" />

        <div className="details">
          <p className="name">Ajitesh Karan</p>
          <p className="course">B.Tech CSE</p>
          <p className="year">First Year</p>
          <p className="id">ID: 2500032236</p>
        </div>

        <div className="footer">
          <p>Valid Till: 2029</p>
        </div>
      </div>
    </div>
  );
}

export default App;


