import React, { Children } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ArrowUp from '../assets/Images/arrowup.svg'
import ArrowDown from '../assets/Images/ArrowDown.svg'

const NavLinks = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);

    const links = [
        {   
            name: 'Docs',
            to: '',
            arrow: ArrowDown,
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
            arrow: ArrowDown,
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
    <div className="flex gap-6">
      {links.map((link, index) => (
        <div key={index} className="relative group hidden md:block" 
             onMouseEnter={() => setActiveDropdown(index)} 
             onMouseLeave={() => setActiveDropdown(null)}>
          <NavLink 
            to={link.to} 
            className="text-sm text-[#ffffffde] py-6 font-normal text-nowrap hover:text-[#42b883] transition"
          >
            {link.name}
            {link.arrow && <img src={link.arrow} alt="" className="inline-block ml-1 w-4 h-4" />}
          </NavLink>

          {/* Children */}
          
          {link.children && activeDropdown === index && (
            <div className="absolute right-0 mt-2 bg-[#1a1a1a] border border-[#5454547a] shadow-lg rounded-md py-2 w-50 z-10">
              {link.children.map((child, i) => (
                <NavLink
                  key={i}
                  to={child.to}
                  className="block px-4 py-2 text-[12px] text-[#ffffffde] hover:text-[#42b883]"
                >
                  {child.name}
                  {child.icon && <img src={child.icon} alt="" className="inline-block ml-2 w-3 h-3" />}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLinks