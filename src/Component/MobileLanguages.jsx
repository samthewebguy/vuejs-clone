import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowUp from '../assets/Images/arrowup.svg'
import GithubIcon from '../assets/Images/github.svg'

const MobileLanguages = () => {

const Otherlanguage = [
    { name: '简体中文', to: "https://cn.vuejs.org/", url: "https://github.com/vuejs-translations/docs-zh-cn" },
    { name: '日本語', to: "https://ja.vuejs.org/", url: "https://github.com/vuejs-translations/docs-ja" },
    { name: 'Українська', to: "https://ua.vuejs.org/", url: "https://github.com/vuejs-translations/docs-uk" },
    { name: 'Français', to: "https://fr.vuejs.org/", url: "https://github.com/vuejs-translations/docs-fr" },
    { name: '한국어', to: "https://ko.vuejs.org/", url: "https://github.com/vuejs-translations/docs-ko" },
    { name: 'Português', to: "https://pt.vuejs.org/", url: "https://github.com/vuejs-translations/docs-pt" },
    { name: 'বাংলা', to: "https://bn.vuejs.org/", url: "https://github.com/vuejs-translations/docs-bn" },
    { name: 'Italiano', to: "https://it.vuejs.org/", url: "https://github.com/vuejs-translations/docs-it" },
    { name: 'فارسی', to: "https://fa.vuejs.org/", url: "https://github.com/vuejs-translations/docs-fa" },
    { name: 'Русский', to: "https://ru.vuejs.org/", url: "https://github.com/vuejs-translations/docs-ru" },
    { name: 'Čeština', to: "https://cs.vuejs.org/", url: "https://github.com/vuejs-translations/docs-cs" },
    { name: '繁體中文', to: "https://zh-hk.vuejs.org/", url: "https://github.com/vuejs-translations/docs-zh-hk" },
    { name: 'Polski', to: "https://pl.vuejs.org/", url: "https://github.com/vuejs-translations/docs-pl" },
]

  return (
    <div className=" w-full bg-[#242424] text-white rounded-md py-4 ">
        <p className='text-[12px] text-[#ebebeb99] font-light text-left pl-4 mb-2' >Translations</p>
        {Otherlanguage.map((lang, index) => (
        <NavLink
        key={index}
        to={lang.to}
        className="flex justify-between items-center px-4 py-2 text-[12px] text-[#ffffffde] transition"
        >
        <div className="flex items-center gap-2">
            <span className='hover:text-[#42b883]'>{lang.name}</span>
            <img src={ArrowUp} alt="arrow" className="ml-1 w-3 h-3" />
        </div>
              <button onClick={() => window.open(lang.url, "_blank")} className="cursor-pointer">
                <img src={GithubIcon} alt="GitHub" className="w-4 h-4 opacity-100" />
                </button>
            </NavLink>
        ))}
        <div className="mt-2 pt-2 border-t border-[#5454547a]">
            <NavLink to="https://vuejs.org/translations/" className="block px-4 py-2 text-sm text-[#ffffffde] hover:text-[#42b883] transition">Help Us Translate!</NavLink>
        </div>
    </div>
  )
}

export default MobileLanguages