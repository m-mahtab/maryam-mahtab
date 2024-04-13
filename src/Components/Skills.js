import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function SkillItem({ name, dots }) {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <li className='flex items-center '>
            <span className='text-sm md:text-base xl:text-3xl w-28 md:w-28' data-aos="fade-right">{name}</span>
            <span className='flex space-x-2 md:space-x-6 lg:space-x-5 md:px-6 xl:px-10'data-aos="fade-left">
                {dots.map((dot, index) => <span key={index} className={dot}></span>)}
            </span>
        </li>
    );
}

function Skills() {
    const skills = [
        { name: 'CSS', dots: ['dot', 'dot', 'dot', 'dot', 'dot', 'dot1', 'dot1'] },
        { name: 'Bootstrap', dots: ['dot', 'dot', 'dot', 'dot', 'dot', 'dot1', 'dot1'] },
        { name: 'Javascript', dots: ['dot', 'dot', 'dot', 'dot', 'dot', 'dot1', 'dot1'] },
        { name: 'React', dots: ['dot', 'dot', 'dot', 'dot', 'dot', 'dot', 'dot1'] },
        { name: 'Tailwind', dots: ['dot', 'dot', 'dot', 'dot', 'dot', 'dot', 'dot1'] },
        { name: 'Figma', dots: ['dot', 'dot', 'dot', 'dot1', 'dot1', 'dot1', 'dot1'] },
        { name: 'Node.js', dots: ['dot', 'dot', 'dot', 'dot1', 'dot1', 'dot1', 'dot1'] },
        { name: 'Next.js', dots: ['dot', 'dot', 'dot', 'dot1', 'dot1', 'dot1', 'dot1'] },
    ];

    return (
        <div className='bg-maroon-1 text-left text-white relative skills'>
            <div className='relative h-450 md:h-screen xl:h-600 w-full'>
                <span className='skill-gradient md:bottom-48  xl:bottom-32 z-10 -left-11'></span>
            </div>
            <div className='absolute px-5 md:px-12 xl:px-28 z-20 top-0 w-full'>
                <div className='flex justify-center md:justify-start'>
                    <h3 data-aos="fade-up-right" className='logo text-4xl  md:text-5xl lg:text-7xl  py-10 md:py-14 xl:py-20 font-bold'>My Skills</h3>
                </div>
                <div className='grid grid-col-1 lg:grid-cols-2 text-2xl pb-20 xl:pb-10 xl:px-20'>
                    <div className='pr-0 xl:pr-60 items-center flex justify-center'>
                        <ul className='space-y-5 xl:space-y-10 '>
                            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                                <SkillItem key={index} name={skill.name} dots={skill.dots} />
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-center '>
                        <ul className='space-y-5 xl:space-y-10 pt-5 xl:pt-0 '>
                            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                                <SkillItem key={index} name={skill.name} dots={skill.dots} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
