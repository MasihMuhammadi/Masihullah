import React,{useState,useEffect} from "react"

const Resume = () =>{
    return(<>
    <div className="row" id="education">
        <div className="col education ">
            <ul>
              <h1 className="border-bottom">Education</h1>
              <ul>
                <li>
                <h2>BACHELOR OF COMPUTER SCIENCE</h2>
                 <p> Kabul, Afghanistan</p>
                 <p>2019 - present</p>
                 <img src="/laptop teaching.png"    width="300" height="300" />

                </li>
              </ul>
            </ul>
        </div>
        <div className="col experience " style={{marginTop:"120px"}}>
              <h1 className="border-bottom">Experience</h1>
              <ul>
                <li>
                <h2>Front-End Web developer</h2>
                 <p> remote, Upwork</p>
                 <p>09/2022 - 01/2023</p>
                </li>
                <li>
                <h2>Persian Transcriber</h2>
                 <p> remote, LOFT</p>
                 <p>04/2022 - 08/2022</p>
                </li>
              </ul>

        </div>
    </div>
    </>)
}

export default Resume;