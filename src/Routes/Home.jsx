import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../assets/Navbar";
import TypingAnimation from "../TypingAnimation";

const Home = () => {
  const [myPhoto, setMyPhoto] = useState("/smile.png");

  const showMyFace = () => {
    setMyPhoto("/sticker.png");
  };

  const hideMyFace = () => {
    setMyPhoto("/smile.png");
   
  };

  return (
    <>
      <div className="row align-items-center home">
        <div className="col-lg-6 order-lg-1">
         
          <img
            src={ myPhoto}
            width="500"
            height="500"
            onMouseOver={showMyFace}
            onMouseOut={hideMyFace}
            alt="My Photo"
          />
        </div>
        <div className="col-12 col-lg-6 order-lg-0">
          <p className="bio">
            My name is <span id="name">Masihullah</span>
          </p>
          <div className="">
            <p className="bio">
              <TypingAnimation />
            </p>
            <p>I am Full stack web developer with 1+ year experience in Front-end web development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
