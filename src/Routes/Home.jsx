
import TypingAnimation from "../TypingAnimation";

const Home = () => {
  




  return (
    <>
      <div className="row align-items-center home">
        <div className="col-lg-6 order-lg-1">
         
          <img
            src="/smile.png"
            width="500"
            height="500"
          
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
            <h5>I'm a seasoned Frontend Web Developer with over 2 years of experience.</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
