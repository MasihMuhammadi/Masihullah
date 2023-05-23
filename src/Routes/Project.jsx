import React,{useEffect,useState} from "react";

const Project  = () =>{
    return(<>
    <div className="pt-5">
        {/* <img src="../public/betrino.png" width="600" />
        <img src="../public/squadGame.png" width="600" />
        <img src="../public/buildResume.png" width="600" />
        <img src="../public/calculator.png" width="600" />
        <img src="../public/weather.png" width="600" /> */}
<div className="container"> 
      <div className="icon-image">
        <div className="icon">
          <img src="../public/buildResume.png" alt="" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="../public/buildResume.png" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Resume builder</div>
              <div className="job">HTML, CSS & ReactJs</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src="../public/weather.png" alt="" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="../public/weather.png" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Weather App</div>
              <div className="job">Html, CSS & Vue</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src="../public/calculator.png" alt="" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="../public/calculator.png" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Calculator</div>
              <div className="job">HTML, CSS and React</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src="../public/betrino.png" alt="" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="../public/betrino.png" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Web Game</div>
              <div className="job">HTML, CSS & React</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image last">
        <div className="icon">
          <img src="../public/squadGame.png" alt="" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="../public/squadGame.png" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Web Game</div>
              <div className="job">HTML, CSS & React</div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    </>)
}
export default Project;