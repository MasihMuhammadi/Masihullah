import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{
    return<>
        <div className="navbar  ">
            <div className=" ">
                <Link className=" link-home links"  to="/">Home</Link>
                <Link className=" link-home links"  to="About">About</Link>
                <Link className=" link-home links"  to="Resume">Resume</Link>
                <Link className=" link-home links"  to="Skills">Skills</Link>
                <Link className=" link-home links"  to="Project">Project</Link>
                <Link className=" link-home links"  to="Contact"> Contact</Link>
            </div>
        </div>
        
    </>
}
export default Navbar;