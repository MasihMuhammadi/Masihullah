import React, {useState, useEffect, useRef } from 'react';

const Skills = () => {

    const [html,setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [js, setJs] = useState(0);
    const [react, setReact] = useState(0);
    const [node, setNode] = useState(0);
    const [express, setExpress] = useState(0);
    const [mongo, setMongo] = useState(0);
    const [php, setPhp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (html < 95) {
        setHtml(html + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [html]);
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (css  <90) {
        setCss(css + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [css]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bootstrap < 88) {
        setBootstrap(bootstrap + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [bootstrap]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (js <80) {
        setJs(js + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [js]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (react <85) {
        setReact(react + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [react]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (node <75) {
        setNode(node + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [node]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (express <68) {
        setExpress(express + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [express]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mongo <70) {
        setMongo(mongo + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [mongo]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (php <70) {
        setPhp(php + 1);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [php]);


    return (<>
    <div className="row pt-5 w-100 text-light fw-bold " id='skills '>
        <div className="col ">
            <img src="../public/read.png" width="400" />
        </div>
        <div className="mx-5 col w-100 progresses">
                HTML, Css & Bootstrap 

            <div className="progress skill" style={{height:"40px"}}> 
                <div className="progress-bar " style={{width: `${html}%`,height:"40px"}}>95%</div>
            </div>
            Javascript:
                <div className="progress mt-3 skill" style={{height:"40px"}}>
                <div className="progress-bar " style={{width: `${js}%`,height:"40px"}}>80%</div>
            </div>
            React:
                <div className="progress mt-3 skill"  style={{height:"40px"}}>
                <div className="progress-bar " style={{width: `${react}%`,height:"40px"}}>85%</div>
            </div>
            NodeJs & Express
                <div className="progress mt-3 skill" style={{height:"40px"}}>
                <div className="progress-bar " style={{width: `${node}%`,height:"40px"}}>75%</div>
            </div>
            
            mongoDB:
                <div className="progress mt-3 skill" style={{height:"40px"}}>
                <div className="progress-bar " style={{width: `${mongo}%`,height:"40px"}}>68%</div>
            </div>
            PHP:
                <div className="progress mt-3 skill" style={{height:"40px"}}>
                <div className="progress-bar " style={{width: `${php}%`,height:"40px"}}>70%</div>
            </div>

        </div>
    </div>
      </>
    );
  };


export default Skills;
