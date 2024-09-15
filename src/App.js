import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import { Element } from "react-scroll";
import Home from "./pages/home";
import Services from "./pages/services";
import Resume from "./pages/Resume";
import Work from "./pages/work";
import ContactMe from "./pages/contactme";
import Achievements from "./pages/Achievements";

function App() {
  return ( 

     <Router>
      <NavBar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="resume" className="">
        <Resume  />
      </Element>
      <Element name="work">
        <Work />
      </Element>
       <Achievements></Achievements>
      <Element name="contactme">
        <ContactMe />
      </Element>
    </Router> 
   
    
  );
}

export default App;
