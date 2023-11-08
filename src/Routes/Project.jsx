const projects = [
  {
    name: "Resume builder",
    link: "https://buildResume.vercel.app",
    image: "/buildResume.PNG",
    stack: "HTML, CSS & ReactJs",
  },
  {
    name: "Weather App",
    link: "https://weather-masih.vercel.app",
    image: "/weather.PNG",
    stack: "HTML, CSS & Vue",
  },
  {
    name: "Calculator",
    link: "https://iphonecalculator.vercel.app",
    image: "/calculator.PNG",
    stack: "HTML, CSS & React",
  },
  {
    name: "Web Game",
    link: "https://betrino.vercel.app",
    image: "/betrino.PNG",
    stack: "HTML, CSS & React",
  },
  {
    name: "Web Game",
    link: "https://squadGame.vercel.app",
    image: "/squadGame.PNG",
    stack: "HTML, CSS & React",
  },
  {
    name: "Hotel Booking Website",
    link: "https://reserv.vercel.app",
    image: "/reserv.png",
    stack: "HTML, CSS , React , NodeJs , Express & MongoDB",
  },
  {
    name: "Analog Clock",
    link: "fastCodingTricks.github.io/AnalogClock",
    image: "/analogClock.PNG",
    stack: "HTML, CSS & Javascript",
  },
  {
    name: "Guess Number game",
    link: "https://fastcodingtricks.github.io/GuessNumber/",
    image: "/guessNumber.PNG",
    stack: "HTML, CSS & Javascript",
  },
];

const Project = () => {
  return (
    <>
      <div className="pt-5 projects">
        <h2 className="text-light mt-5 mb-5">
        Project Showcase
        </h2>
        <div className="container">
          {projects.map((project, index) => (
            <div className="icon-image" key={index}>
              <div className="icon">
                <a target="_blank" rel="noreferrer" href={project.link}>
                  <img src={project.image} alt="" />
                </a>
              </div>
              <div className="hover-image one">
                <div className="img">
                  <img src={project.image} alt="" />
                </div>
                <div className="content">
                  <div className="details">
                    <div className="name">{project.name}</div>
                    <div className="job">{project.stack}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
