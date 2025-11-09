import React from 'react'
import GoldSponsors from './GoldSponsors'
import VuemasteryLogo from '../assets/Images/Platinum Sponsor/vuemastery.avif'
import VehiklLogo from '../assets/Images/Platinum Sponsor/vehikl.avif'
import VuejsAmsterdamLogo from '../assets/Images/Platinum Sponsor/vue_js_amsterdam.avif'
import StoryblokLogo from '../assets/Images/Platinum Sponsor/storyblok.avif'
import ChromeFrameworksFundLogo from '../assets/Images/Platinum Sponsor/chrome_frameworks_fund.avif'
import HerodevsLogo from '../assets/Images/Platinum Sponsor/herodevs.avif'
import JavascriptCertificationLogo from '../assets/Images/Platinum Sponsor/javascript_certification.png'
import CoderabbitLogo from '../assets/Images/Platinum Sponsor/coderabbit_.avif'
import ImagekitLogo from '../assets/Images/Platinum Sponsor/imagekit_io.svg'
import GreptileLogo from '../assets/Images/Platinum Sponsor/greptile.avif'
import { Link } from 'react-router-dom'

const PlatinumSponsors = () => {

    const PlatinumSponsors = [
        {image: VuemasteryLogo, url:'https://www.vuemastery.com', alt:'Vue Mastery logo'},
        {image: VehiklLogo, url:'https://vehikl.com', alt:'Vehikl logo'},
        {image: VuejsAmsterdamLogo, url:'https://vuejs.amsterdam', alt:'Vue js Amsterdam logo'},
        {image: StoryblokLogo, url:'https://www.storyblok.com', alt:'Storyblok logo'},
        {image: ChromeFrameworksFundLogo, url:'https://opencollective.com/2021-frameworks-fund', alt:'Chrome Framworks Fund logo'},
        {image: HerodevsLogo, url:'https://www.herodevs.com/support/vue', alt:'Herodevs logo'},
        {image: JavascriptCertificationLogo, url:'https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS', alt:'Javascript Certification logo'},
        {image: CoderabbitLogo, url:'https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025', alt:'CodeRabbit logo'},
        {image: ImagekitLogo, url:'https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage', alt:'Imagekit.io logo'},
        {image: GreptileLogo, url:'https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page', alt:'Greptile logo'},
    ]

  return (

    // Platinum Sponsors Logo
    
        <div className='w-full flex flex-col max-w-[900px]'>
            <div className='w-full flex flex-col gap-4 items-start text-left mb-12'>
                <h3 className='text-xl text-[#ffffffde] font-medium leading-tight mb-2'>Platinum Sponsors</h3>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 justify-between gap-2'>
                    {PlatinumSponsors.map((sponsor, index) => (
                    <a key={index} href={sponsor.url} target='_blank'><div className='group hover:bg-white bg-[#242424] px-8 py-2 flex items-center justify-center rounded-sm transition duration-200 ease'>
                        <img src={sponsor.image} alt={sponsor.alt}  className='w-[210px] h-[70px] md:h-[100px] object-contain grayscale invert-[1] group-hover:invert-[0] group-hover:grayscale-0'/>
                    </div>
                    </a>
                    ))}

                    <Link to="https://vuejs.org/sponsor" className='flex items-center justify-center bg-[#242424] hover:bg-white p-8 text-[10px] text-center text-[#ebebeb99] hover:text-[#242424] rounded-sm transition duration-200 ease'>Become a Sponsor</Link>
                </div>
            </div>
            <div>
                <GoldSponsors />
            </div>
        </div>

  )
}

export default PlatinumSponsors