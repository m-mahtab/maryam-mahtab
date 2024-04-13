import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { BsArrowRight } from "react-icons/bs";

function Contact({ contact }) {

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is Empty'),
    })
    const onSubmit = (values, { resetForm }) => {

        console.log('Form submitted:', values);

        resetForm();
    };
    return (
        <div className='bg-maroon-1 text-center text-white relative w-full contact ' id='contact'>

            <div className='w-full h-full  relative hidden xl:block'>
                <img src='assets/images/backglow.png' alt='dotimg' className='backglow left-0' />
                <img src='assets/images/Ellipse39.png' alt='dotimg' className='absolute z-20 top-0 left-0 h-3/4 ' />
                <img src='assets/images/Intersect.png' alt='dotimg' className='h-32 absolute z-30 top-40  left-64 ' />
                <img src='assets/images/Union.png' alt='dotimg' className='h-80 absolute z-50 right-10 bottom-60' />
            </div>
            <div className="content  xl:absolute  xl:top-0   w-full px-5  sm:px-16 md:px-20 xl:px-24">

                <div className='pt-36 md:pt-48 xl:pt-0'>
                    <h3 data-aos = "fade-down" className='logo text-3xl sm:text-5xl md:text-6xl xl:text-7xl py-10 md:py-14 xl:py-20 font-bold '>{contact.title}</h3>
                </div>
                <div className='w-full xl:flex xl:justify-center'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form className='flex justify-center  w-full xl:w-2/5'>
                            <div className='w-full  md:mx-20 xl:mx-0'>


                                <div className='mt-5 xl:mt-0 flex flex-col  text-left' data-aos = "fade-right">

                                    <label htmlFor="name" className='pb-2 pl-4 text-sm md:text-base lg:text-xl lg:pl-7'>Name:</label>
                                    <Field className=' bg-bg-contact px-4 py-2 lg:px-7 lg:py-6 rounded-full w-full' type='text' id='name' name='name' placeholder='Enter your name here ...' />
                                    <ErrorMessage name="name" component="div" className='text-white ' />

                                </div>
                                <div className='mt-4 md:mt-6 xl:mt-11 flex flex-col  text-left' data-aos = "fade-right">
                                    <label htmlFor="email" className='py-2  pl-4 text-sm md:text-base lg:text-xl lg:pl-7'>Email:</label>
                                    <Field className='bg-bg-contact px-4 py-2 lg:px-7 lg:py-6 rounded-full w-full ' type='email' id='email' name='email' placeholder='Enter your email here ...' />
                                </div>

                                <div className='mt-4 md:mt-6 xl:mt-11 flex flex-col text-left' data-aos = "fade-right">
                                    <label htmlFor="text" className='py-2 pl-4 text-sm md:text-base lg:text-xl lg:pl-7'>Message:</label>
                                    <Field className='bg-bg-contact px-4 py-2 lg:px-7 lg:py-6 rounded-2xl h-44 w-full' type='text' id='message' name='message' placeholder='Enter your message here ...' />

                                </div>
                                <div className='absolute z-50 bottom-28 right-60 rotate-180 hidden xl:block' data-aos = "fade-right">
                                    <span className='text-pink text-9xl ' ><BsArrowRight /></span>
                                </div>

                                <div className='mt-6 md:mt-8 xl:mt-11'  data-aos = "fade-up">

                                    <span className=''>

                                        <button type='submit' className='bg-pink  py-2 px-5  rounded-full text-white ' ><a className='befor'>Send Message</a></button>
                                    </span>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
            <div className='opacity-50 text-xs py-11 xl:mt-9'>
                <h6>&#169; All Right Reserved by Maryam Mahtab</h6>

            </div>



        </div>
    )
}

export default Contact