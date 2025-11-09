import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../assets/Images/arrowup.svg'

const Footer = () => {

    const DocLinks = [
        { title: 'Guide', to: 'https://vuejs.org/guide/introduction' },
        { title: 'Tutorial', to: 'https://vuejs.org/tutorial' },
        { title: 'Examples', to: 'https://vuejs.org/examples' },
        { title: 'Quick Start', to: 'https://vuejs.org/guide/quick-start' },
        { title: 'Glossary', to: 'https://vuejs.org/glossary' },
        { title: 'Error Reference', to: 'https://vuejs.org/error-reference' },
        { title: 'Vue 2 Docs', to: 'https://v2.vuejs.org', icon: Arrow },
        { title: 'Migration from Vue 2', to: 'https://v3-migration.vuejs.org', icon: Arrow },
    ]

    const AboutLinks = [
        { title: 'FAQ', to: 'https://vuejs.org/about/faq'},
        { title: 'Team', to: 'https://vuejs.org/about/team'},
        { title: 'Releases', to: 'https://vuejs.org/about/releases'},
        { title: 'Community Guide', to: 'https://vuejs.org/about/community-guide'},
        { title: 'Code of Conduct', to: 'https://vuejs.org/about/coc'},
        { title: 'Privacy Policy', to: 'https://vuejs.org/about/privacy'},
        { title: 'The Documentary', to: 'https://www.youtube.com/watch?v=OrxmtDw4pVI', icon: Arrow},
    ]

    const ResourcesLinks = [
        { title: 'Partners', to: 'https://vuejs.org/partners/'},
        { title: 'Themes', to: 'https://vuejs.org/ecosystem/themes'},
        { title: 'UI Components', to: 'https://ui-libs.vercel.app/', icon: Arrow},
        { title: 'Plugins Collection', to: 'https://www.vue-plugins.org/', icon: Arrow},
        { title: 'Certification', to: 'https://certificates.dev/vuejs/?ref=vuejs-nav', icon: Arrow},
        { title: 'Jobs', to: 'https://vuejobs.com/?ref=vuejs', icon: Arrow},
        { title: 'T-Shirt Shop', to: 'https://vue.threadless.com', icon: Arrow},
    ]

    const OfficialLibrariesLinks = [
        { title: 'Vue Router', to: 'https://router.vuejs.org', icon: Arrow},
        { title: 'Pinia', to: 'https://pinia.vuejs.org', icon: Arrow},
        { title: 'Tooling Guide', to: 'https://vuejs.org/guide/scaling-up/tooling.html'},
    ]

    const VideoCoursesLinks = [
        { title: 'Vue Mastery', to: 'https://www.vuemastery.com/courses', icon: Arrow},
        { title: 'Vue School', to: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown', icon: Arrow},
    ]

    const HelpLinks = [
        { title: 'Discord Chat', to: 'https://discord.com/invite/HBherRA', icon: Arrow},
        { title: 'Github Discussions', to: 'https://github.com/vuejs/core/discussions', icon: Arrow},
        { title: 'Dev Community', to: 'https://dev.to/t/vue', icon: Arrow},
    ]

    const NewsLinks = [
        { title: 'Blog', to: 'https://blog.vuejs.org', icon: Arrow},
        { title: 'Twitter', to: 'https://x.com/vuejs', icon: Arrow},
        { title: 'Event', to: 'https://events.vuejs.org', icon: Arrow},
        { title: 'Newsletters', to: 'https://vuejs.org/ecosystem/newsletters'},
    ]

    

  return (
    <footer className='w-full flex flex-col'>

        {/* Main Footer */}

        <div className='w-full bg-[#242424] px-12 md:px-8 py-12 flex items-center justify-center'>
            <div className='w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-6'>

                {/* First Row */}
                <div className='flex flex-col items-start gap-8'>
                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>Docs</h4>
                        {DocLinks.map((doclink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={doclink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {doclink.title}
                            {doclink.icon && <img src={doclink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>About</h4>
                        {AboutLinks.map((aboutlink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={aboutlink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {aboutlink.title}
                            {aboutlink.icon && <img src={aboutlink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Second Row */}

                <div className='flex flex-col items-start gap-8'>
                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>Resources</h4>
                        {ResourcesLinks.map((resourceslink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={resourceslink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {resourceslink.title}
                            {resourceslink.icon && <img src={resourceslink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>Offical Libraries</h4>
                        {OfficialLibrariesLinks.map((officiallibrarieslink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={officiallibrarieslink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {officiallibrarieslink.title}
                            {officiallibrarieslink.icon && <img src={officiallibrarieslink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>

                    {/* Last Row */}

                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>Video Courses</h4>
                        {VideoCoursesLinks.map((videocourseslink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={videocourseslink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {videocourseslink.title}
                            {videocourseslink.icon && <img src={videocourseslink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col items-start gap-8'>
                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>Help</h4>
                        {HelpLinks.map((helplink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={helplink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {helplink.title}
                            {helplink.icon && <img src={helplink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-start'>
                        <h4 className='footer-title'>News</h4>
                        {NewsLinks.map((newslink, index) =>(
                        <div key={index} className='flex flex-row items-center'>
                            <Link to={newslink.to} className=' text-[#ebebeb99] text-sm font-light tracking-[0.2px] mb-2'>
                            {newslink.title}
                            {newslink.icon && <img src={newslink.icon} alt="arrow icon" className="inline-block ml-1 w-3 h-3" />}
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Secondary Fotter */}

        <div className='w-full bg-[#1a1a1a] px-12 md:px-8 py-4 flex flex-col items-center justify-centerborder border-t  border-[#5454547a] gap-2'>
            <p className='text-[#ebebeb99] text-[12px] font-light'>Released under the <a href="https://opensource.org/licenses/MIT" className='text-[#ffffffde] hover:text-[#ebebeb99] transition-colors'>MIT License</a>.</p>
            <p className='text-[#ebebeb99] text-[12px] font-light'>Copyright © 2014-2025 Evan You</p>
        </div>
    </footer>
  )
}

export default Footer