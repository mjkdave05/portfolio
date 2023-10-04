import dav from '../assets/dav.png'

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center mt-6">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>

      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl 
      mx-auto min-h-[24rem] mt-28 flex gap-6 lg:flex-row flex-col-reverse items-center ">
        <div >
          <h2 className="text-2xl font-semibold px-">Do you want any work from me?</h2>
          <p className="lg:text-left text-justify max-w-lg text-lg mt-4 text-gray-200 leading-6 px-6">
          I&apos;m super excited to bring my skills to exciting new projects. Whether you&apos;re a recruiter or a fellow developer, 
          I&apos;d love to connect and work together to craft amazing web experiences. Reach out to me through my Linkedin or website, 
          and let&apos;s shape the web&apos;s future side by side! <br /> Check out my projects section to see some of my proudest projects.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img src={dav} alt="" className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-14 object-cover  "/>
      </div>

    </section>
  )
}

export default Hireme