import dav from '../assets/dav.png'
import { Icon } from '@iconify/react'



const Hero = () => {
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex py-10 px-4 md:flex-row flex-col items-center "
      >  
        <div className=" flex-1 md:mt-0 mt-6 flex items-center justify-center px-9 md:px-4 ">
          <div className=' h-full relative mt-16 md:mt-0 dav'>
            <img 
            src={dav} 
            alt="" className="md:w-11/12 h-full object-cover bg-gray-400 rounded-xl  " />
          </div>
        </div>
        <div className="flex-1 mt-6">
          <div className="md:text-left text-center px-5">
            <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
              <span className="text-cyan-600 md:text-5xl text-4xl">
                Hello!
                <br />
              </span>
              My Name is <span>Majekodunmi David</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">Frontend Developer</h4>
            <button className="btn-primary mt-8">Contact Me</button> 
            <div className="mt-8 text-4xl flex items-center md:justify-start justify-center text-gray-500 gap-4">
                  
                    <a href='https://www.instagram.com/mjk_dave/' target="blank" className='hover:text-white cursor-pointer'><Icon icon="mdi:instagram" /></a>
                    <a href='https://github.com/mjkdave05' target="blank" className='hover:text-white cursor-pointer'><Icon icon="mdi:github" /></a>
                    <a href='https://www.linkedin.com/in/david-majekodunmi-b855a81a5/' target="blank" className='hover:text-white cursor-pointer'><Icon icon="mdi:linkedin" /></a>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero