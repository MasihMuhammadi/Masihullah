

const About  = () =>{

        const downloadCv = () => {
            
                const pdfURL = '/MyFile.pdf';
            
                const link = document.createElement('a');
                link.href = pdfURL;
                link.download = 'Masih-cv.pdf';
                link.click();
              };
    return(<>
    <div id="about" className="">
        <h2>Get to Know Me</h2>
        <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
            <div className="cards " >
                    <img src='/laptop wave.png' className="text-center" />
                    <h5>Front-End Web development</h5>
                    <p>
                    I'm a skilled Frontend Web Developer with 2+ years of experience, dedicated to creating visually stunning and user-friendly websites. My portfolio reflects a commitment to blending design and technology for exceptional web experiences
                    </p>
                    </div>
            </div>
            <div className="col-sm-12 col-md-4">
            <div className="cards " >
                    <img src='/sleep glasses.png' className="text-center" />
                    <h5>Front-End Web development</h5>
                    <p>
                    I'm a skilled Frontend Web Developer with 2+ years of experience, dedicated to creating visually stunning and user-friendly websites. My portfolio reflects a commitment to blending design and technology for exceptional web experiences
                    </p>
                    </div>
            </div>
            
                
            <div className="col-sm-12 col-md-4 ">
            <div className="cards" >
                    <img src='/design.png'  />
                    <h5>UI Designer</h5>
                    <p>I'm a UI Designer passionate about crafting intuitive and visually captivating user interfaces. My work combines artistry and usability, leaving a lasting impact through purposeful compositions and engaging storytelling..
                    </p>
                    </div>      
         </div>
         <button className="btn mx-2 mt-3 d-block text-center " style={{background:"white",color:"rgb(5, 32, 30)", width:"200px", textAlign:"center"}} onClick={downloadCv}>Download Resume</button>

        </div>
    </div>

    </>)
}
export default About;