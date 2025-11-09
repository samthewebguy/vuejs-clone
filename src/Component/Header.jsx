import React, { useState } from 'react'
import NavLinks from '../Component/NavLinks'
import Languages from './Languages'
import GithubIcon from '../assets/Images/Github icon.svg'
import XIcon from '../assets/Images/X.svg'
import DiscordIcon from '../assets/Images/Discord.svg'
import MoreOptionIcon from '../assets/Images/more option.svg'
import MobileNav from './MobileNav'

const Header = () => {

    const [changeMode, setChangeMode] = useState(false);
    const [MoreOption, setMoreOption] = useState(false);
    const [mobileMenu, setmobileMenu] = useState(false);

    const SetWhiteMode = () => {
        setChangeMode(true);
    }

    const SetDarkMode = () => {
        setChangeMode(false);
    }

    const openMoreOption = () => {
        setMoreOption(true);
    }

    const closeMoreOption = () => {
        setMoreOption(false);
    }

     const openMobileMenu = () => {
        setmobileMenu(true);
    }

    const closeMobileMenu = () => {
        setmobileMenu(false);
    }


  return (
     <>
    <header className='w-full relative bg-[#1a1a1a] h-[55px] flex flex-row items-center border-b border-b-[#5454547a] px-6 md:px-8'>
        <nav className='w-full flex'>
            <div className='w-full Container flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    
                    {/* Site Logo */}

                    <div className='flex flex-row items-center justify-center gap-2'>
                        <a href="/">
                         <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                            <style>
                            {`.st0 { fill: #42B883; } .st1 { fill: #35495E; }`}
                            </style>
                            <path className="st0" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" />
                            <path className="st1" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" />
                        </svg>
                        </a>
                        <span className='text-[#ffffffde] text-base font-medium'><a href="/">Vue.js</a></span>
                    </div>
                    {/* Search Bar */}

                    <div className='mr-6'>
                        <button type='search' className="group DocSearch DocSearch-Container flex flex-row items-center ml-4 cursor-pointer hover:text-[#ffffffde]">
                            <span className='flex flex-row items-center gap-3 mr-2 text-sm text-[#ebebeb99] hover:text-[#ffffffde] transition-colors duration-500 ease-in-out'>
                                <svg className='DocSearch-Search-Icon text-[#ebebeb99] group-hover:text-[#ffffffde] transition-colors duration-500 ease-in-out hidden md:flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1" strokeWidth="1.6px"></path></svg>
                                <span className='hidden lg:block'>Search</span>
                            </span>
                            <span className='hidden lg:flex flex-row bg-transparent items-center border border-[#3c3c3c] rounded-sm px-2 py-0 text-sm text-[#ebebeb61] group-hover:text-[#42b883] group-hover:border-[#42b883] focus:border-[#42b883] transition-colors duration-500 ease-in-out'>
                                <kbd>⌘</kbd>
                                <kbd className='ml-1'>K</kbd>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex flex-row relative items-center'>
                    {/* Navigation Menu */}

                    <NavLinks/>
                    <Languages/>

                    {/* Mode Button */}
                    <div className='flex flex-row gap-2 hidden xl:flex'>
                        <button onClick={SetWhiteMode} type='button' className={`bg-[#2f2f2f] border border-[#545454a6] pl-5 ml-6 rounded-xl cursor-pointer  ${changeMode ? 'hidden': 'flex' }`}>
                              <svg className='vt-switch-icon bg-black w-5 h-5 p-1 rounded-[50%]'
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path
                                    d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9
                                        c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0
                                        c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22z
                                        M9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8
                                        c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
                                    fill="#FFFFFF"
                                    fillOpacity="0.87"
                                    />
                                </svg>
                        </button>

                        <button onClick={SetDarkMode} type='button' className={`bg-[#f1f1f1] border border-[#3c3c3c4a] pr-5 ml-6 rounded-xl cursor-pointer ${changeMode ? 'flex': 'hidden' }`}>
                            <svg className='vt-switch-icon bg-[#ffffff] p-1 rounded-[50%]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"  aria-hidden="true" focusable="false">
                            <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z" fillOpacity="1" fill="#000000"/>
                            <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z" fillOpacity="1" fill="#000000"/>
                            <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z" fillOpacity="1" fill="#000000"/>
                            <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z" fillOpacity="1" fill="#000000"/>
                            <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z" fillOpacity="1" fill="#000000"/>
                            <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z" fillOpacity="1" fill="#000000"/>
                            <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z" fillOpacity="1" fill="#000000"/>
                            <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z" fillOpacity="1" fill="#000000"/>
                            <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z" fillOpacity="1" fill="#000000"/>
                            </svg>
                        </button>
                    </div>

                    {/* Social icon */}

                    <div className='flex flex-row gap-4 ml-6'>
                        <a href="https://github.com/vuejs/" target='_blank' className='hidden lg:hidden xl:flex'>
                        <img src={GithubIcon} alt="Github icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' />
                        </a>
                        <a href="https://x.com/vuejs" target='_blank' className='hidden lg:hidden xl:flex'><img src={XIcon} alt="X icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                        <a href="https://discord.com/invite/vue" target='_blank' className='hidden lg:hidden xl:flex'><img src={DiscordIcon} alt="Discord icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                    </div>

                    {/* To Large Screen More Option Button */}

                    <button onMouseOver={openMoreOption} type='button' className='cursor-pointer ml-2 hidden md:flex xl:hidden'>
                        <img src={MoreOptionIcon} alt="more option icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' />
                    </button>

                    <div onMouseLeave={closeMoreOption} className={`z-10 absolute top-8 right-0 flex items-center justify-center ${MoreOption ? 'flex' : 'hidden' }`} >
                        <div className='bg-[#1a1a1a] flex flex-col border border-[#5454547a] rounded-md'>
                            <div className='flex flex-row items-center justify-between p-4'>
                                <p className='text-[#ebebeb99] text-[12px] mr-8'>Appearance</p>
                                <div className='flex flex-row gap-2'>
                                    <button onClick={SetWhiteMode} type='button' className={`bg-[#2f2f2f] border border-[#545454a6] hover:border-[#ffffff5d] pl-5 ml-6 rounded-xl cursor-pointer transition-colors ${changeMode ? 'hidden': 'flex' }`}>
                                    <svg className='vt-switch-icon bg-black w-5 h-5 p-1 rounded-[50%]'
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                    focusable="false"
                                    >
                                    <path
                                    d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9
                                        c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0
                                        c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22z
                                        M9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8
                                        c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
                                    fill="#FFFFFF"
                                    fillOpacity="0.87"
                                    />
                                    </svg>
                                    </button>

                                    <button onClick={SetDarkMode} type='button' className={`bg-[#f1f1f1] border border-[#3c3c3c4a] pr-5 ml-6 rounded-xl cursor-pointer ${changeMode ? 'flex': 'hidden' }`}>
                                    <svg className='vt-switch-icon bg-[#ffffff] p-1 rounded-[50%]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"  aria-hidden="true" focusable="false">
                                    <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z" fillOpacity="1" fill="#000000"/>
                                    <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z" fillOpacity="1" fill="#000000"/>
                                    <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z" fillOpacity="1" fill="#000000"/>
                                    <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z" fillOpacity="1" fill="#000000"/>
                                    <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z" fillOpacity="1" fill="#000000"/>
                                    <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z" fillOpacity="1" fill="#000000"/>
                                    <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z" fillOpacity="1" fill="#000000"/>
                                    <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z" fillOpacity="1" fill="#000000"/>
                                    <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z" fillOpacity="1" fill="#000000"/>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-row items-start border-t border-[#5454547a] p-4'>
                                <div className='flex flex-row gap-4'>
                                    <a href="https://github.com/vuejs/" target='_blank' >
                                    <img src={GithubIcon} alt="Github icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' />
                                    </a>
                                    <a href="https://x.com/vuejs" target='_blank'><img src={XIcon} alt="X icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                                    <a href="https://discord.com/invite/vue" target='_blank'><img src={DiscordIcon} alt="Discord icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* To Medium Screen Search button & Hamburger */}

                    <div className='flex flex-row gap-4 md:hidden'>
                        <button type='search' className="group DocSearch DocSearch-Container flex flex-row items-center cursor-pointer hover:text-[#ffffffde]">
                            <svg className='DocSearch-Search-Icon text-[#ebebeb99] group-hover:text-[#ffffffde] transition-colors duration-500 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1" strokeWidth="1.6px"></path></svg>
                        </button>
                        <div className='flex flex-row gap-2'>
                            <button onClick={openMobileMenu} type='button' className={`hamburger hamburgerContainer items-center cursor-pointer ${mobileMenu ? 'hidden' : 'flex' }`}>
                                <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="vt-hamburger-svg"
                                >
                                <rect className="bar top" x="0" y="4" width="24" height="2" fill="#ffffffde" />
                                <rect className="bar middle" x="12" y="11" width="12" height="2" fill="#ffffffde" />
                                <rect className="bar bottom" x="6" y="18" width="18" height="2" fill="#ffffffde" />
                                </svg>
                            </button>
                            <button onClick={closeMobileMenu} type='button' className={`hamburger hamburgerContainer items-center cursor-pointer ${mobileMenu ? 'flex' : 'hidden' }`}>
                                <svg width="20" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6894 0.321198C13.2753 -0.0929086 12.6064 -0.0929086 12.1923 0.321198L7 5.50284L1.80774 0.31058C1.39363 -0.103527 0.724687 -0.103527 0.31058 0.31058C-0.103527 0.724687 -0.103527 1.39363 0.31058 1.80774L5.50284 7L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49716L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 7L13.6894 1.80774C14.0929 1.40425 14.0929 0.724687 13.6894 0.321198Z" fill="#FFFFFFDE"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        <div className={`w-full h-full sticky top-8 inset-0 z-50 flex flex-col items-center justify-center  md:hidden ${mobileMenu ? 'flex' : 'hidden' }`} >
        <MobileNav />
        </div>
       </>
  )
}

export default Header