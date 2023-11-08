import { useState, useRef } from 'react';

const TextAnimation = () => {
  const index = useRef(0);

  const [text, setText] = useState('');
  const [message ,setMessage] = useState("  I Am A Web Developer");
  
     
       setTimeout(() =>{
          setText((value = "") =>  value + message.charAt(index.current));
          index.current += 1;
        },250)
      
          
      
  return (
    <>
      <h3 className="message">{text}<span className="bord"></span></h3>
    </>


  );
};

export default TextAnimation;
