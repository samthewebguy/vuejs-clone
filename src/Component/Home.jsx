import React, { useState } from 'react'
import { useEffect } from 'react'
import PlayIcon from '../assets/Images/playIcon.svg'
import ArrowForward from '../assets/Images/arrowForward.svg'
import LinkIcon from '../assets/Images/Link-icon.svg'
import PlatinumSponsors from './PlatinumSponsors'
const Home = () => {

const [homeVideo, setHomeVideo] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setHomeVideo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const showHomeVideo = () => {
    setHomeVideo(true)
  };

  const closeHomeVideo = () =>{
    setHomeVideo(false)
  };

  return (
    <>

    {/* Hero Section */}
      <section className='w-full bg-[#1a1a1a] flex flex-col text-center items-center justify-center px-6 md:px-8 py-24 md:py-32'>
        <h1 className='max-w-full md:max-w-[900px] text-[48px] md:text-[64px] lg:text-[80px] bg-[linear-gradient(145deg,#42d392_25%,#647eff)] bg-clip-text text-transparent leading-tight letter-spacing-[-1.5px] font-black mb-4'>The Progressive JavaScript Framework</h1>
        <p className='text-base md:text-xl text-[#ebebeb99] leading-normal letter-spacing-[-4%] font-normal'>An approachable, performant and versatile framework for building web user interfaces.</p>
        <div className='flex flex-col md:flex-row items-center mt-8 gap-4'>

          <button  onClick={showHomeVideo} type='button' className='bg-[#42b883] px-4 py-2 hover:bg-[#369870] text-[#213547] text-base font-medium rounded-lg leading-none flex items-center justify-center gap-2 cursor-pointer transition-colors duration-500 ease-in-out'>
            <span className='flex items-center'><img className='w-8 h-8 object-contain block fix-icon' src={PlayIcon} alt="Play icon" /></span>
            Why Vue
          </button>

          <div className='flex flex-row items-center gap-4'>
            <a className='group bg-[#2f2f2f] hover:bg-[#3a3a3a] flex items-center justify-center rounded-lg px-4 py-3 gap-2 text-[#aac8e4] text-base transition-colors duration-500 ease-in-out' href="https://vuejs.org/guide/introduction.html">Get Started<span><img className='w-3 h-3 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1' src={ArrowForward} alt="Arrow forward" /></span></a>
            <a className='bg-[#2f2f2f] hover:bg-[#3a3a3a] flex items-center justify-center rounded-lg px-4 py-3 gap-2 text-[#aac8e4] text-base transition-colors duration-500 ease-in-out' href="https://vuejs.org/guide/quick-start.html">Install</a>
          </div>
          <a className='group bg-[#2f2f2f] hover:bg-[#3a3a3a] flex items-center justify-center rounded-lg px-4 py-2 gap-2 text-[#aac8e4] text-base transition-colors duration-500 ease-in-out border-gradient' href="https://v2.vuejs.org/eol/">Get Security Updates for Vue 2<span><img className='w-3 h-3 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1' src={LinkIcon} alt="Open link icon" /></span></a>
        </div>
      </section>

      {/* Video Embed (Button click) */}

      {homeVideo && (
      <div onClick={closeHomeVideo} className={`fixed inset-0 z-50 flex items-center justify-center ${homeVideo ? 'flex' : 'hidden' }`} >
        <div onClick={(e) => e.stopPropagation()} className='w-full max-w-[90%] md:max-w-[70%] h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh] bg-[#242424] rounded-md overflow-hidden flex flex-col items-center p-2'>
            <iframe className='h-full w-full rounded-md object-cover' title="Vue Mastery Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen src="https://youtube.com/embed/LzMnsfqjzkA?si=fPnIPuXxdzMtXNKv"></iframe>
            <div className='flex flex-row items-center text-center justifu-center py-2 px-4'>
                <p className='text-[12px] text-[#ebebeb99]'>Video by <a href="" className='text-[#42b983]'>Vue Mastery.</a> Watch the Vue Mastery's free <a href="" className='text-[#42b983]'>Intro to Vue Course.</a></p>
            </div>
        </div>
      </div>
      )}

    {/* Section Two */}

      <section className='w-full bg-[#1a1a1a] text-center px-6 md:px-8 py-4 border-t border-t-[#5454547a] border-b border-b-[#5454547a]'>
        <a className='text-[12px] text-[#ebebeb99] leading-normal font-normal' href="https://vuejs.org/sponsor/#tier-benefits">Special Sponsor slot is now vacant - Inquire now</a>
      </section>

    {/* Section Three */}

      <section className='w-full flex items-center justify-center px-6 md:px-8 py-16 md:py-20'>
        <div className='flex flex-col md:flex-row items-start justify-between max-w-[900px] gap-[60px]'>
          <div>
            <h3 className='text-xl text-[#ffffffde] font-medium leading-tight mb-4'>Approachable</h3>
            <p className='text-base text-[#ebebeb99] font-normal leading-normal'>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
          </div>
          <div>
            <h3 className='text-xl text-[#ffffffde] font-medium leading-tight mb-4'>Performant</h3>
            <p className='text-base text-[#ebebeb99] font-normal leading-normal'>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
          </div>
          <div>
            <h3 className='text-xl text-[#ffffffde] font-medium leading-tight mb-4'>Versatile</h3>
            <p className='text-base text-[#ebebeb99] font-normal leading-normal'>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
          </div>
        </div>
      </section>

      {/* Sponsor */}

      <section className='w-full flex items-center justify-center px-6 md:px-8 py-16 md:py-20'>
        <PlatinumSponsors />
      </section>
    </>
  )
}

export default Home