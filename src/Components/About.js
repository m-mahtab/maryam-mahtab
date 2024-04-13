import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { BsArrowRight } from "react-icons/bs";

function About({about}) {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    function openWhatsApp(phoneNumber) {
        const encodedPhoneNumber = encodeURIComponent(phoneNumber);
        window.open(`whatsapp://send?phone=${encodedPhoneNumber}`, '_blank');
    }
    return (
        <div className='about relative pb-16 md:pb-9 xl:pb-32 overflow-hidden' id='about'>
              <div className='relative h-500 xl:h-screen w-full '>
                <span className='about-gradient z-10 '></span>
                <span className='about-gradient1 z-10 -right-11'></span>

            </div>

            <div className='grid grid-col-1  px-5 md:grid-cols-2 grid-rows-1 md:px-12 xl:px-20  absolute z-20 top-24 md:top-40  '>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src='assets/images/abtlaptop.png' alt='laptop' className=' h-60 md:h-72 xl:h-96 ' />

                        <img src="assets/images/Ellipse4.png" alt="" className=" hidden xl:block h-20 absolute bottom-5" />
                    </div>
                </div>
                <div className='md:pr-5 text-xs md:text-base xl:pr-11 text-justify md:text-left md:pt-2 xl:pt-32 ' >
                    <p className='text-white pt-6' data-aos="fade-right">{about.abtdesc}</p>
                    <div className='py-3 md:py-6 xl:py-11' data-aos="fade-up">

                        <button   className='bg-pink  py-2 px-5  rounded-full text-white ' onClick={() => openWhatsApp('+923151721049')}>
                            Contact me
                        </button>
                    </div>

                </div>

            </div>
            <div className='flex md:pt-5 xl:pt-16 xl:text-left text-right  justify-center absolute z-30 w-full xl:w-1/3  xl:left-96 top-7 '>
                <h2 className='logo  text-white text-4xl md:text-6xl xl:text-7xl font-bold ' data-aos="fade-right">About me</h2>
                <span data-aos="fade-right" className='text-pink px-5 text-5xl md:text-7xl xl:text-9xl '><BsArrowRight /></span>
            </div>
        </div>
    )
}

export default About