import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { toast } from "react-toastify";
import me from '../assets/me.webp'
import '../style/Home.css'

function Home() {
  const handleDownload = () => {
   
    const filePath = '../assets/Kavindrika_Piyushan.pdf';
    
    
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Kavindrika_Piyushan.pdf'); 

    
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
  };


  return (
    <div className="home-container 2xl:gap-[150px] ">
      <header className="header TextedArea">
        <h1 className="intro ">
          <span>Hello I'm </span>
          <span className="highlight">Kavindrika Piyushan</span>
        </h1>
        {/* <h2 className="role "  >IT Undergraduate at University of Moratuwa</h2> */}
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'IT Undergraduate at University of Moratuwa',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Sports Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.8em', display: 'inline-block' }}
      repeat={Infinity}
      className="role"
    />
        <p className="description">
          Motivated IT undergraduate with a passion for learning and applying
          new technologies. Strong team player with leadership skills,
          adaptability, and a commitment to achieving goals efficiently. Eager
          to contribute as a software engineering intern and expand knowledge in
          the field of Information Technology.
        </p>
        <div className="social-buttons">
          <button className="download-cv" onClick={handleDownload}  >Download CV</button>
          <div className="social-links">
            <a
              href="https://github.com/KavindrikaPiyushan"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kavindrikapiyushan/"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>

            <a
              href="mailto:kavindrikapiyushan@gmail.com"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-solid fa-envelope fa-2xl"></i>
            </a>
          </div>
        </div>
      </header>
      <div className="profile-image flex items-center justify-center text-center">
        <img src={me} alt="Kavindrika Piyushan" className="2xl:ml-10"/>
      </div>
    </div>
  );
}

export default Home;
