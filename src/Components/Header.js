import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'

function Header({ header }) {


    const [isOpen, setIsOpen] = useState(false);
    const [headerColor, setHeaderColor] = useState('#0006'); 
    const [headerPadding, setHeaderPadding] = useState('px-3 py-5 md:p-10 xl:p-12'); 
   

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Define the scroll threshold at which you want to change the color
            const scrollThreshold = 200; 

            
            const defaultColor = '#0006'; 
            const scrolledColor = '#2c1b35'; 

            const defaultPadding = 'px-3 py-5 md:p-10 xl:p-12';
            const scrolledPadding = 'px-2 py-3 md:pt-0 pt-0 xl:pt-0 '; 

           

        
            const newColor = scrollPosition > scrollThreshold ? scrolledColor : defaultColor;
            const newPadding = scrollPosition > scrollThreshold ? scrolledPadding : defaultPadding;
           

            // Update the color state
            setHeaderColor(newColor);
            setHeaderPadding(newPadding);
            

        };

      
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function openWhatsApp(phoneNumber) {
        const encodedPhoneNumber = encodeURIComponent(phoneNumber);
        window.open(`whatsapp://send?phone=${encodedPhoneNumber}`, '_blank');
    }
    return (
        <div className={ `fixed z-50 ${headerPadding}  px-3 py-5 md:p-10 xl:p-12 w-full`} >
           <header style={{ backgroundColor: headerColor } } className={`flex text-white rounded-full bg-bg-black border border-black justify-between px-3 xl:p-4 md:px-0`}>

                <div className='w-1/2 md:w-auto xl:w-1/3 flex justify-start  items-center'>
                    <div>

                        <h1 className='text-sm md:text-2xl  xl:text-3xl logo font-bold px-3 md:pl-4 md:pr-11'>{header.logo}</h1>
                    </div>
                </div>
                <div className='relative flex justify-end w-1/2 xl:w-80'>
                    <button className="xl:hidden text-xs sm:text-sm block cursor-pointer " onClick={toggleMenu}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} duration={0.8} color='#b80ede' rounded />

                    </button>
                    <nav className={`${isOpen ? 'block' : 'hidden'} `}>
                        <ul className='lowercase absolute right-4 top-10 bg-bg-marun flex flex-col  justify-center space-y-5  p-3 rounded-lg border border-bg-maroon text-xs cursor-pointer '>
                            {header.listItems.map((item, index) => (
                                <li key={index} >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='hidden xl:flex justify-center'>
                    <ul className='font-bold flex justify-between text-base cursor-pointer flex-row space-x-5 items-center'>
                        {header.listItems.map((item, index) => (
                            <li  key={index}>
                                <a  href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                </div>

                
                <div className='flex items-center pr-3 '>
                    <button className='  bg-black rounded-full hidden md:block text-xs xl:text-base px-4 py-2 ' onClick={() => openWhatsApp('+923151721049')}>Hire Me</button>
                </div>
            </header>
        </div>
    )
}

export default Header