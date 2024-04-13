import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

import { LuDownload } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Banner({ banner }) {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <section className="banner overflow-hidden  " id='home'>
        <div className='container '>
          <span className="bg-gradient"></span>
          <div className="bg">
            <img src="assets/images/line.png" alt="" className="bg-img hidden md:block xl:h-1/2 md:h-2/5 h-1/3 top-72 md:top-64 xl:top-64 right-40 md:right-60  xl:right-1/3" />
            <img src="assets/images/lg-circle.png" data-aos="zoom-in-up" alt="" className="bg-img h-32 md:h-60 xl:h-80 xl:right-48 md:right-20 right-6 bottom-0" />
            <img src="assets/images/sm-circle.png" data-aos="zoom-in-up" alt="" className="bg-img  hidden md:block h-12 md:h-16  xl:h-20 right-7 md:right-28 xl:right-60 top-48 md:top-52 xl:top-60" />
            <img src="assets/images/line.png" alt="" className="bg-img hidden md:block h-1/4 xl:h-1/2 md:h-2/5 top-52 md:top-72 xl:top-60 right-5 md:right-8 xl:right-28 transform rotate-144 " />
          </div>
          <div className="pt-10 md:pt-28 xl:pt-52 pr-0 pb-24 xl:pl-20 md:pl-12 pl-5 flex justify-between items-center">
            <div className="col col-1 w-full  md:w-1/4 xl:w-1/3 pr-2 xl:pr-8 ">
              <div className="flex flex-col text-start text-white pt-16 md:pt-5">
                <h1 data-aos="fade-right" className='text-4xl  md:text-6xl logo  xl:text-7xl font-bold '>{banner.title}</h1>
                <p data-aos="fade-right" className='text-xs md:text-sm xl:w-3/5 pt-2 md:pt-4 xl:pt-5'>{banner.desc}</p>
              </div>
            </div>
            <div className="col col-2 w-1/5 md:2/5 xl:w-1/2 flex ">
              <a href="assets/cv.pdf" download>
                <div className='cv text-white rounded-full font-bold flex  items-center justify-center pt-40 md:pb-24 md:pt-32 '>
                  <span className='one h-20 w-20 xl:h-28 xl:w-28 bg-bg-pink rounded-full  flex justify-center items-center'>
                    <span className="two h-14 w-14 xl:h-20 xl:w-20 bg-bg-pink rounded-full  flex justify-center items-center">
                      <span className="h-10 w-10 xl:h-16 xl:w-16 text-sm xl:text-base bg-pink rounded-full flex justify-center items-center"><LuDownload />CV</span>
                    </span>
                  </span>

                </div>
              </a>
            </div>
            <div className="col col-3">
              <div>
                <ul className='space-y-5 text-3xl px-8 w-1/5 md:w-2/5 xl:w-1/5'>
                  <li><BsGithub /></li>
                  <li><BsLinkedin /></li>
                  <li><BsInstagram /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Banner