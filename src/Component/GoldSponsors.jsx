import React from 'react'
import { Link } from 'react-router-dom'
import TideliftLogo from '../assets/Images/Gold Sponsor/tidelift.avif'
import LaravelLogo from '../assets/Images/Gold Sponsor/laravel.avif'
import LyCorporationLogo from '../assets/Images/Gold Sponsor/ly_corporation.png'
import FenetreLogo from '../assets/Images/Gold Sponsor/Fenetre.svg'
import LocalazyLogo from '../assets/Images/Gold Sponsor/Localazy.png'
import FathomLogo from '../assets/Images/Gold Sponsor/fathom.png'
import SentryLogo from '../assets/Images/Gold Sponsor/sentry.avif'
import CertibleLogo from '../assets/Images/Gold Sponsor/Certible.svg'
import QbToolHubLogo from '../assets/Images/Gold Sponsor/quickbooks_tool_hub.avif'
import VueJobsLogo from '../assets/Images/Gold Sponsor/vuejobs.avif'
import LambdaTestLogo from '../assets/Images/Gold Sponsor/Lambdatest.png'
import VuepdfviewerLogo from '../assets/Images/Gold Sponsor/Vuepdfviewer.png'
import CrispLogo from '../assets/Images/Gold Sponsor/crisp.avif'
import GoReadLogo from '../assets/Images/Gold Sponsor/goread_io.avif'
import PopreyLogo from '../assets/Images/Gold Sponsor/poprey___buy_instagram_likes.avif'
import FortuneGamesLogo from '../assets/Images/Gold Sponsor/fortune_games.avif'
import ITMLogo from '../assets/Images/Gold Sponsor/it_m.avif'
import BlastupLogo from '../assets/Images/Gold Sponsor/blastup.avif'
import StormlikesLogo from '../assets/Images/Gold Sponsor/stormlikes.avif'
import LeofameLogo from '../assets/Images/Gold Sponsor/buy_instagram_followers___likes.avif'
import TwicsyLogo from '../assets/Images/Gold Sponsor/buy_instagram_followers_twicsy.avif'
import SocialBoostingLogo from '../assets/Images/Gold Sponsor/socialboosting.avif'
import DamanGameLogo from '../assets/Images/Gold Sponsor/daman_game.avif'
import BuzzoidLogo from '../assets/Images/Gold Sponsor/buy_youtube_views_on_buzzoid.avif'
import TirangaLogo from '../assets/Images/Gold Sponsor/tiranga_game.avif'
import Views4YouLogo from '../assets/Images/Gold Sponsor/views4you.avif'
import DamanClubLogo from '../assets/Images/Gold Sponsor/daman_club.avif'
import BDGgameLogo from '../assets/Images/Gold Sponsor/bdg_game.avif'
import SikkimGameLogo from '../assets/Images/Gold Sponsor/sikkim_game.avif'
import DamangameLogo from '../assets/Images/Gold Sponsor/daman_game.avif'
import BetWinnerLogo from '../assets/Images/Gold Sponsor/guidebook_betwinner.avif'


const GoldSponsors = () => {

    const GoldSponsors = [
        {image: TideliftLogo, url:'https://tidelift.com/subscription/npm/vue', alt:'Tidelift logo'},
        {image: LaravelLogo, url:'https://laravel.com', alt:'Laravel logo'},
        {image: LyCorporationLogo, url:'https://www.lycorp.co.jp/en/', alt:'LY Corporation logo'},
        {image: FenetreLogo, url:'https://www.fenetre.nl', alt:'Fenetre logo'},
        {image: LocalazyLogo, url:'https://localazy.com/blog/how-to-localize-vuejs-app-with-vue-i18n-and-localazy?utm_source=vuejs&utm_medium=banner&utm_campaign=sponsorships_vuejs&utm_content=logo', alt:'Localazy logo'},
        {image: FathomLogo, url:'https://usefathom.com', alt:'Fathom Analytics logo'},
        {image: SentryLogo, url:'https://sentry.io/for/vue?utm_source=vuejs.org&utm_medium=paid-community', alt:'Sentry logo'},
        {image: CertibleLogo, url:'https://www.certible.com', alt:'Certible logo'},
        {image: QbToolHubLogo, url:'https://qbtoolhub.com', alt:'QuickBooks Tool Hub logo'},
        {image: VueJobsLogo, url:'https://vuejobs.com/?utm_source=vuejs.com&utm_campaign=sponsor', alt:'VueJobs logo'},
        {image: LambdaTestLogo, url:'https://lambdatest.com', alt:'Lambda Test logo'},
        {image: VuepdfviewerLogo, url:'https://www.vue-pdf-viewer.dev/?utm_source=vuejs&utm_medium=referral&utm_campaign=sponsorship', alt:'Vue PDF Viewer logo'},
        {image: CrispLogo, url:'https://crisp.chat/en', alt:'Crisp logo'},
        {image: GoReadLogo, url:'https://goread.io/buy-instagram-followers', alt:'GoRead.io logo'},
        {image: PopreyLogo, url:'https://poprey.com', alt:'Poprey logo'},
        {image: FortuneGamesLogo, url:'https://www.fortunegames.com', alt:'Fortune Games logo'},
        {image: ITMLogo, url:'https://opensource.muenchen.de/improve.html#sponsoring', alt:'ITM logo'},
        {image: BlastupLogo, url:'https://blastup.com/buy-instagram-likes', alt:'Blastup logo'},
        {image: StormlikesLogo, url:'https://stormlikes.com', alt:'Stormlikes logo'},
        {image: LeofameLogo, url:'https://leofame.com/buy-instagram-followers', alt:'Leofame logo'},
        {image: TwicsyLogo, url:'https://twicsy.com/buy-instagram-followers', alt:'Twicsy logo'},
        {image: SocialBoostingLogo, url:'https://www.socialboosting.com', alt:'Social Boosting logo'},
        {image: DamanGameLogo, url:'https://damanapp.download/', alt:'Daman Game logo'},
        {image: BuzzoidLogo, url:'https://buzzoid.com/buy-youtube-views', alt:'Buzzoid logo'},
        {image: TirangaLogo, url:'https://tirangaagame.io', alt:'Tiranga Game logo'},
        {image: Views4YouLogo, url:'https://views4you.com/buy-youtube-subscribers', alt:'Views4You logo'},
        {image: DamanClubLogo, url:'https://damangame.club', alt:'Daman Club logo'},
        {image: BDGgameLogo, url:'https://www.bdggame.io', alt:'BDG Game logo'},
        {image: SikkimGameLogo, url:'https://sikkimgames.io', alt:'Sikkim Game logo'},
        {image: DamangameLogo, url:'https://damanappdownload.io', alt:'Daman Game logo'},
        {image: BetWinnerLogo, url:'https://guidebook.betwinner.com', alt:'Bet Winner logo'},
        
    ]

  return (

    // Gold Sponsors Logos

    <div className='w-full flex flex-col gap-4 items-start text-left max-w-[900px]'>
        <h3 className='text-xl text-[#ffffffde] font-medium leading-tight mb-2'>Gold Sponsors</h3>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-between gap-2'>
            {GoldSponsors.map((sponsor, index) => (
            <a key={index} href={sponsor.url} target='_blank'><div className='group hover:bg-white bg-[#242424] px-8 py-2 flex items-center justify-center rounded-sm transition duration-200 ease'>
                <img src={sponsor.image} alt={sponsor.alt}  className='w-[150px] h-[70px] object-contain grayscale invert-[1] group-hover:invert-[0] group-hover:grayscale-0'/>
            </div>
            </a>
            ))}

            <Link to="https://vuejs.org/sponsor" className='flex items-center justify-center bg-[#242424] hover:bg-white p-8 text-[10px] text-center text-[#ebebeb99] hover:text-[#242424] rounded-sm transition duration-200 ease'>Become a Sponsor</Link>
        </div>
    </div>

  )
}

export default GoldSponsors