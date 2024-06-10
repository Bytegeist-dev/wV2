import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ homeRef, aboutRef, projectsRef, servicesRef, contactRef }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobileMenu');
    mobileMenu.classList.toggle('hidden');
  }
  return (
    <div>
        <header className=' font-poppins flex items-center justify-between w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
            <div>
                <h1 className='text-2xl font-bold text-gray-800 font-poppins'>b.</h1>
            </div>
            <nav>
                <button className='relative md:hidden block' onClick={handleMobileMenu}><FontAwesomeIcon icon={faBars}/></button>
                <div className='absolute right-[0] '>
                    <ul className='md:hidden flex flex-col w-full h-full items-center justify-center space-y-8  hidden mobileMenu w-full h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-9'>
                        <li>
                            <button onClick={() => scrollToSection(homeRef)} className='text-gray-800 hover:text-gray-600'>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(aboutRef)} className='text-gray-800 hover:text-gray-600'>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(projectsRef)} className='text-gray-800 hover:text-gray-600'>
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(servicesRef)} className='text-gray-800 hover:text-gray-600'>
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(contactRef)} className='text-gray-800 hover:text-gray-600'>
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
                <ul className='md:flex items-center space-x-4 hidden '>
                    <li>
                        <button onClick={() => scrollToSection(homeRef)} className='text-gray-800 hover:text-gray-600'>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(aboutRef)} className='text-gray-800 hover:text-gray-600'>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(projectsRef)} className='text-gray-800 hover:text-gray-600'>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(servicesRef)} className='text-gray-800 hover:text-gray-600'>
                            Services
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(contactRef)} className='text-gray-800 hover:text-gray-600'>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}
