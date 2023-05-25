import React,{useEffect,useState} from "react";

const Project  = () =>{
    return(<>
    <div className="pt-5 projects">

        <h4 className="text-light mt-5 mb-5">And here you can see some examples of my work</h4>
<div className="container"> 
      <div className="icon-image">
        <div className="icon">
        <a target="_blank" href="https://buildResume.vercel.app" > <img src="/buildResume.PNG" alt="" /></a>

        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="/buildResume.PNG" alt="" />
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
        <a target="_blank" href="https://weather-masih.vercel.app" > <img src="/weather.PNG" alt="" /></a>

        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="/weather.PNG" alt="" />
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
        <a target="_blank" href="https://iphonecalculator.vercel.app" > <img src="/calculator.PNG" alt="" /></a>

        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="/calculator.PNG" alt="" />
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
        <a target="_blank" href="https://betrino.vercel.app" > <img src="/betrino.PNG" alt="" /></a>
          
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="/betrino.PNG" alt="" />
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
        <a target="_blank" href="https://squadGame.vercel.app" > <img src="/squadGame.PNG" alt="" /></a>
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src="/squadGame.PNG" alt="" />
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