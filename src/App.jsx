import React, { Component } from 'react'
import './app1.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {data: {
      name : "Ajitesh Karan",
      role : "Full Stack Developer",
      bio : "I am a passionate developer with experience in building web applications.",
      status: [{label: "Posts", value: "45"}, {label: "Followers", value: "9.6K"}, {label: "Following", value: "264"}]
    }};
  }
  render() {
    const { data } = this.state;
    const BASEURL = import.meta.env.VITE_BASE_URL;
    return (
     <div className="card-container">
  <div className="profile">
    <img src="Profile.jpeg" alt="profile" />

    <div className="details">
      <h2>{data.name}</h2>
      <p className="role">{data.role}</p>
      <p className="bio">{data.bio}</p>

      <div className="actions">
        <button className="follow">Follow</button>
        <button className="message">Message</button>
      </div>
    </div>
  </div>

  <div className="stats">
    {data.status.map((d) => (
      <div className="stat" key={d.label}>
        <p className="value">{d.value}</p>
        <p className="label">{d.label.toUpperCase()}</p>
      </div>
    ))}
  </div>
</div>
    )
  }
}