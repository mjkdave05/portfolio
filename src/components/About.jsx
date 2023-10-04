import aboutImg from '../assets/aboutImage.png'

const About = () => {
  const info = [
    {text: "Years experience", count: "01" },
    {text: "Completed Projects", count: "02" },
    {text: "Company Work", count: "01" },
  ]
  return (
    <section id="about" className="py-10 text-white mb-9">
      <div className="text-center mt-8">
        <h3 className="text-5xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">

          <div className="p-2">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                Hey there! I&apos;m Majekodunmi David, a front-end developer with a passion for design. My journey 
                started with a simple curiosity, which led me to dive into HTML, CSS, and JavaScript before moving 
                on to learning React.js and Tailwind CSS. <br /> I&apos;ve got a knack for design that adds a creative touch to my work.
                I&apos;m always on the hunt for new knowledge, keeping up with the latest trends and making sure my creations are accessible 
                to all. I&apos;m a team player at heart and thrive in diverse collaborations. 
                 
                </p>
                <div className="flex mt-10 items-center gap-7">
                  {info.map(content => (
                      <div key={content.text}>
                          <h3 className="md:text-5xl text-2xl font-bold text-white">
                            {content.count} 
                            <span className="text-cyan-600">+</span>{" "}
                          </h3>  
                        <span className='md:text-base text-sm'>{content.text}</span>
                      </div>
                    ))
                  }
                </div>
                <br />
                <br />
                <a href="./src/assets/David Resume.pdf" download>
                  <button className="btn-primary ">Download Resume</button>
                </a>
              </div>
          </div>

          <div className="flex-1 md:mt-0 mt-8 flex justify-center items-center">
                  <div className=" lg:w-96 h-full relative sm:w-10/12 max-w-sm aboutImg">
                    <img 
                      src= {aboutImg} 
                      alt="" className="w-full object-cover bg-cyan-600 rounded-xl  " 
                    />  
                  </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About