import React from "react";

import profileImage from "../assets/me.jpeg";

function Home() {
  return (
    <div className="home-container ">
      <header className="header">
        <h1 className="intro ">
          <span>Hello I'm </span>
          <span className="highlight">Kavindrika Piyushan</span>
        </h1>
        <h2 className="role">IT Undergraduate at University of Moratuwa</h2>
        <p className="description">
          Motivated IT undergraduate with a passion for learning and applying
          new technologies. Strong team player with leadership skills,
          adaptability, and a commitment to achieving goals efficiently. Eager
          to contribute as a software engineering intern and expand knowledge in
          the field of Information Technology.
        </p>
        <div className="social-buttons">
          <button className="download-cv">Download CV</button>
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
        <img src={profileImage} alt="Kavindrika Piyushan" />
      </div>
    </div>
  );
}

export default Home;
