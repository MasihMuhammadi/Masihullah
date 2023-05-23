import React,{useEffect,useState} from "react";

const About  = () =>{
    return(<>
    <div id="about" className="row ">
        <h5>Do You wan't to know more about About me..?</h5>
            <div class="col-sm-12 col-md-4 mt-4 mb-4">
            <div className="cards " >
                    <img src='/education.png'  />
                    <h5>Web development</h5>
                    <p>
                    I'm driven by a passion for originality, purpose, and optimization in creating outstanding web applications. My focus is on developing innovative websites that meet user needs with intuitive interfaces and engaging content, leaving a lasting impact.
                    </p>
                    </div>
            </div>
            <div class="col-sm-12 col-md-4">
            <div className="cards-b mt-sm-5" >
                    <img className="icon" src='/painting.png'  />
                    <h5>Graphic Design </h5>
                    <p>
                    I'm passionate about crafting original, purposeful interfaces. My goal is to develop innovative websites and applications that seamlessly blend functionality and aesthetics, ensuring exceptional user experiences that meet their needs.
                    </p>
                    </div>

            </div>
            <div class="col-sm-12 col-md-4 mt-4">
            <div className="cards" >
                    <img src='/taking a photo.png'  />
                    <h5>Photo Grapher</h5>
                    <p>
                    I'm fueled by a passion for capturing moments with originality, purpose, and artistic precision. My focus is on creating stunning photographs that resonate with viewers, showcasing intuitive compositions, and evoking a lasting impact through engaging visual storytelling.
                    </p>
                    </div>
    </div>

  
    </div>
    </>)
}
export default About;