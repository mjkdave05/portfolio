
import { Swiper, SwiperSlide } from "swiper/react"
import project1 from "../assets/project1.png"
import resturant from "../assets/resturant.png"

import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay,} from "swiper/modules"

const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className=" text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          My Works
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative pt-5">
        <div className=" w-full">
          
        <Swiper
        slidesPerView={1.2}
        spaceBetween={12}
        breakpoints={{
          768: {
            slidesPerView:2
            }
        }}
        loop={true}
        autoplay={{
          delay:4000
        }}
        pagination={{
          clickable: true, 
        }}
        scrollbar={{ 
          draggable: true 
          }}
       
        modules={[Pagination, Autoplay,]}

        className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project1} alt="" className="rounded-lg w-2xl h-2xl" />
              <h3 className="text-xl my-4">Todo-list</h3>
              <div className="flex gap-3">
                <a href="https://github.com/mjkdave05/Todo-List.git" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">GitHub</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl pb-8">
              <img src={resturant} alt="" className="rounded-lg " />
              <h3 className="text-xl my-4">Resturant Landing Page</h3>
              <div className="flex gap-3">
                <a href="https://github.com/mjkdave05/restaurant.git" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">GitHub</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>
          {/*<SwiperSlide>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project1} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Todo-list</h3>
              <div className="flex gap-3">
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">GitHub</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project1} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Todo-list</h3>
              <div className="flex gap-3">
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">GitHub</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project1} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Todo-list</h3>
              <div className="flex gap-3">
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">GitHub</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>*/}
        </Swiper>

        </div>
      </div>
    </section>
  )
}

export default Project