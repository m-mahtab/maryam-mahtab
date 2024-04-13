import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Iframe from 'react-iframe'


function Projects({ projects }) {
   useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
  return (
    <div className='bg-maroon-1 text-left md:text-right  relative text-white  projects' id='projects'>
      <div className='overflow-hidden '>

        <div className='relative h-screen xl:pb-0  '>
          <span className='project-gradient z-10 right-0 '></span>

        </div>
        <div className='relative h-450 md:h-screen xl:h-72'>
          <span className='project-gradient1 z-10 -left-11 '></span>

        </div>
      </div>
      <div className='absolute z-30 top-0 px-5 md:px-12 xl:px-20 text-center md:text-right'>


        <div className=''>
          <h3 className='logo text-3xl sm:text-5xl md:text-6xl xl:text-7xl py-10 md:py-14 xl:py-20 font-bold'>{projects.title}</h3>
        </div>
        <div className='grid grid-rows-1  grid-cols-1 xl:grid-cols-2 xl:grid-rows-1  '>
          <div>



            <div className='xl:px-10' data-aos = "fade-down">
              <Iframe url="https://aatelecom.me/"
              

                id=""
                className="bg-white relative block h-60 md:h-72 xl:h-80 w-full "

              />
            </div>
            <div className=' items-center text-left xl:pl-11 py-5 xl:py-11 ' data-aos = "fade-up">

              <h4 className='text-2xl md:text-3xl xl:text-4xl font-bold logo'>{projects.subtitle1}</h4>
              <p className='py-5 text-sm md:text-base'>{projects.desc}</p>
              <a href='https://aatelecom.me/' target= "_blank">
                <button className='bg-pink px-3 py-2 rounded-full' >
                  View Project
                </button>
              </a>
            </div>
          </div>
          <div className=''>

            <div className='xl:px-10' data-aos = "fade-down">
              <Iframe url="https://malaikamishaal.site/"
                
                id=""
                className="bg-white relative block h-60 md:h-72 xl:h-80 w-full" />
            </div>
            <div className=' items-center text-left xl:pl-11 py-10 xl:py-11 ' data-aos = "fade-up">
              <h4 className='text-2xl md:text-3xl xl:text-4xl font-bold logo'>{projects.subtitle2}</h4>
              <p className='py-5 text-sm md:text-base'>{projects.desc}</p>
              <a href='https://malaikamishaal.site/' target= "_blank">
                <button className='bg-pink px-3  py-2 rounded-full' target= "_blank">
                  View Project
                </button>
              </a>
            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Projects