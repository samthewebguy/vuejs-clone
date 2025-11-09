import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PlusIcon from '../assets/Images/plus-solid-full.svg'
import ArrowUp from '../assets/Images/arrowup.svg'
import MobileLanguages from './MobileLanguages'
import GithubIcon from '../assets/Images/Github icon.svg'
import XIcon from '../assets/Images/X.svg'
import DiscordIcon from '../assets/Images/Discord.svg'

const MobileNav = () => {

const [activeDropdown, setActiveDropdown] = useState(null);
const [changeMode, setChangeMode] = useState(false);

    const SetWhiteMode = () => {
        setChangeMode(true);
    }

    const SetDarkMode = () => {
        setChangeMode(false);
    }

        const Mobilelinks = [
            {   
                name: 'Docs',
                to: '',
                plusIcon: PlusIcon,
                children: [
                    { name: "Guide", to: "https://vuejs.org/guide/introduction" },
                    { name: "Tutorial", to: "https://vuejs.org/tutorial" },
                    { name: "Examples", to: "https://vuejs.org/examples" },
                    { name: "Quick Start", to: "https://vuejs.org/guide/quick-start" },
                    { name: "Glossary", to: "https://vuejs.org/glossary" },
                    { name: "Error Reference", to: "https://vuejs.org/error-reference" },
                    { name: "Vue 2 Docs", to: "https://v2.vuejs.org", icon: ArrowUp },
                    { name: "Migration from Vue 2", to: "https://v3-migration.vuejs.org", icon: ArrowUp },
                ],
            },
            { 
                name: 'API',
                to: 'https://vuejs.org/api'
            },
            { 
                name: 'Playground',
                to: 'https://play.vuejs.org/'
            },
            { 
                name: 'Ecosystem',
            },
            { 
                name: 'About',
                to: '',
                plusIcon: PlusIcon,
                children: [
                    { name: "FAQ", to: "https://vuejs.org/about/faq" },
                    { name: "Team", to: "https://vuejs.org/about/team" },
                    { name: "Releases", to: "https://vuejs.org/about/releases" },
                    { name: "Community Guide", to: "https://vuejs.org/about/community-guide" },
                    { name: "Code of Conduct", to: "https://vuejs.org/about/coc" },
                    { name: "Privacy Policy", to: "https://vuejs.org/about/privacy" },
                    { name: "The Documentary", to: "https://www.youtube.com/watch?v=OrxmtDw4pVI", icon: ArrowUp },
                ]
            },
            { 
                name: 'Sponsor',
                to: 'https://vuejs.org/sponsor'
            },
            { 
                name: 'Partners',
                to: 'https://vuejs.org/partners'
            },
        ];


  return (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col items-center px-6 py-6 md:hidden z-50">
      {Mobilelinks.map((mobilelink, index) => (
        <div key={index} className="w-full px-10 relative group" 
             onClick={() => setActiveDropdown(activeDropdown === index ? null : index)} 
            >
          <NavLink 
            to={mobilelink.to} 
            className="flex justify-between items-center w-full text-sm text-[#ffffffde] border-b border-[#5454547a] py-4 font-normal text-nowrap hover:text-[#42b883] transition"
          >
            {mobilelink.name}
            {mobilelink.plusIcon && <img src={mobilelink.plusIcon} alt="" className="ml-1 w-4 h-4" />}
          </NavLink>

          {/* Children */}
          
          {mobilelink.children && activeDropdown === index && (
            <div className="w-full left-0 mt-2 px-4 border-b border-[#5454547a] py-2 z-10">
              {mobilelink.children.map((child, i) => (
                <NavLink
                  key={i}
                  to={child.to}
                  className="block py-2 text-[12px] text-[#ffffffde] hover:text-[#42b883]"
                >
                  {child.name}
                  {child.icon && <img src={child.icon} alt="" className="inline-block ml-2 w-3 h-3" />}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        ))}

        {/* Languages */}

        <div className='w-full px-10 mt-6'>
            <MobileLanguages/>
        </div>

        {/* Mode */}

        <div className='w-full flex items-center justify-center px-10 mt-6' >
                                <div className='w-full bg-[#1a1a1a] flex flex-col rounded-md'>
                                    <div className='bg-[#242424] flex flex-row items-center justify-between rounded-md p-4'>
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

                                    {/* Social icons */}

                                    <div className='flex flex-row items-center justify-center p-4'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <a href="https://github.com/vuejs/" target='_blank' >
                                            <img src={GithubIcon} alt="Github icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' />
                                            </a>
                                            <a href="https://x.com/vuejs" target='_blank'><img src={XIcon} alt="X icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                                            <a href="https://discord.com/invite/vue" target='_blank'><img src={DiscordIcon} alt="Discord icon" className='h-5 w-5 invert-[0.3] hover:invert-0 transition' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>      
    </div>
  )
}

export default MobileNav