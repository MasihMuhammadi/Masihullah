import React,{useState,useEffect} from "react";

import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./assets/Navbar";
import TypingAnimation from "./TypingAnimation";
import Resume from "./Routes/Resume";
import Skills from "./Routes/Skills";

const App = () => {
  const [navbar,setNavbar] = useState('d-none');
  const [burgerClick,setBurgerClick] = useState();
  const [toggle,setToggle] = useState(false);
  const [text,setText] = useState('open')

  


      const hideNavbar = () =>{
          setToggle(!toggle);
          setNavbar('d-none');
          setNavbar(' sm-navbar-hide d-sm-none')
          setBurgerClick('')

         
      }
  
    const handleToggle = () =>{ 
      setToggle(!toggle);
     
      if(toggle == false){
          setNavbar(`d-block d-sm-none`);
          setBurgerClick('line1_hide')
       
      }
      else{
          
          setNavbar('sm-navbar-hide d-sm-none')
          setBurgerClick('')
         
      }
}
  return (
    <div className="">
      <BrowserRouter>
      <div className="burger d-block d-sm-none" onClick={handleToggle}>
            <div className={`line1 ${burgerClick}`}></div>
            <div className='line2 '></div>
            <div className="line3"></div>
        </div>

        <div className="">
             <div className={` sm-navbar-show ${navbar} ` }>
            <Link className="sm-links mx-3 d-sm-none mt-5  " onClick={hideNavbar} to="/">Home</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="About">About</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="Resume">Resume</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="Skills">Skills</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="Project">Project</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="Contact"> Contact</Link>
            
            </div> 
        </div>
      <div className="d-sm-block d-none">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<><h1>not Found</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
