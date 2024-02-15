import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const userData = {
    Image: ("23px")?() => {
      return(
        <image src={./assets/whatsapp}/>
      )
    },
    name: 'Syed Huzaifa Nazim',
    profession: 'Frontend Developer',
    experience: 'Fresh',
    degree: 'BS-AI',
    university: 'Dawood University Of Engineering & Technology'
  };

  return (
    <div className="app">
      <header className="app-header">
        <aside>{userData.image}</aside>
        <h1>{userData.name}</h1>
        <p>{userData.profession}</p>
      </header>
      <section className="app-content">
        <div>
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer currently studying for a BS in AI at Dawood UET. Although I'm a fresh graduate, my enthusiasm and commitment drive me to excel in the field of web development.
          </p>
        </div>
        <div>
          <h2>Education</h2>
          <p>
            <strong>Degree:</strong> {userData.degree}
          </p>
          <p>
            <strong>University:</strong> {userData.university}
          </p>
        </div>
        <div>
          <h2>Experience</h2>
          <p>
            <strong>{userData.experience} Experience</strong>
          </p>
          {/* Add any relevant details about your experience */}
        </div>
      </section>
      <footer className="app-footer">
        <p>Contact me at: nsyedhuzaifa6924@gmail.com</p>
      </footer>
    </div>
  );
};
export default App
