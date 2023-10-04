

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
         <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">

            <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
               className="w-32 h-32 flex items-center justify-center rounded-full hover:text-cyan-600 ">
                <div className="text-7xl ">
                <ion-icon name="logo-html5"></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-2">HTML5</p>
            </div>

            <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
               className="w-32 h-32 flex items-center justify-center rounded-full hover:text-cyan-600">
                <div className="text-7xl ">
                <ion-icon name="logo-css3"></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-2">CSS3</p>
            </div>

            <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
               className="w-32 h-32 flex items-center justify-center rounded-full hover:text-cyan-600">
                <div className="text-7xl ">
                <ion-icon name="logo-javascript"></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-2">JavaScript</p>
            </div>

            <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
               className="w-32 h-32 flex items-center justify-center rounded-full hover:text-cyan-600">
                <div className="text-7xl ">
                <ion-icon name="logo-react"></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-2">React.js</p>
            </div>

            <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
               className="w-32 h-32 flex items-center justify-center rounded-full hover:text-cyan-600">
                <div className="text-7xl ">
                <ion-icon name="logo-github"></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-2">GitHub</p>
            </div>

         </div>
      </div>
    </section>
  )
}

export default Skills