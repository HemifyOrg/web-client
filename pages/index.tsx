import Head from 'next/head';
// import { useSelector } from 'react-redux';
// import { formatBalance } from '@/components/ConnectWallect'

import { RootState } from '../app/store';

export default function Home() {
  // const account = useSelector((state: RootState) => state.account);

  return (
    <div>
      <Head>
        <title>Bidz & Bazaar</title>
      </Head>

      <main className="px-4 mt-2">
        <div className="flex items-center justify-between w-full py-4 px-8 h-full flex-wrap">
          <div className="flex flex-col gap-6 items-start h-full justify-center">
            <div className='flex gap-1 flex-col text-left justify-start text-4xl lg:text-5xl leading-relaxed tracking-wide font-semibold'>
              <div className='flex gap-2'>
              <span>The</span>
              <div className='relative mr-1'>
                <div className="absolute animate-hero-swipe bg-[#D2B37D] z-[-1] skew-x-[-10deg] skew-y-[-10deg] w-[110%] h-[110%] scale-105" />
                  <span className="text-white animate-hero-swipe">
                    first
                  </span>
              </div>
              <span>multichain auction &</span>
              </div>
              <span>p2p power house</span>
            </div>
            <span>Giving power to creators and community</span>
            <div className="flex gap-2 items-center justify-center">
              <button title="Explore Auctions" type="button" className="bg-btnImage font-semibold py-3 px-4 rounded-full shadow-sm">Explore Auctions</button>
              <button title="Click To Create" type="button" className="border border-themeColor font-semibold py-3 px-4 w-32 rounded-full shadow-sm">Create</button>
            </div>
          </div>

          {/* right hero */}
          <div className="relative mr-2">
            {/* arrows */}
            <div className="w-full absolute top-[50%] flex justify-between items-center">
              <div className="p-2 bg-[#F1E7D480] flex items-center justify-center -translate-x-5 w-10 h-10 rounded-full">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.6665 15H2.33317M2.33317 15L14.8332 2.5M2.33317 15L14.8332 27.5" stroke="black" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div className="p-2 bg-[#F1E7D480] flex items-center justify-center translate-x-5 w-10 h-10 rounded-full">
                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.3335 15H35.6668M35.6668 15L23.1668 2.5M35.6668 15L23.1668 27.5" stroke="black" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
            {/* end arrows */}

            {/* hot bids */}
            <div className="absolute top-2 -left-10 -rotate-[35deg] flex items-center gap-2 font-semibold bg-[#FFF9E5] rounded-full px-4">
              <span>Hot Bidz</span>
              <span>
              <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_878_2637)">
                  <path d="M9.65917 16.2082C10.1366 17.2489 11.0804 19.0336 12.0927 19.4407C12.0927 19.4407 10.7102 17.6798 11.7799 13.8514C12.2107 12.3102 11.6785 10.8594 10.7616 10.0702C10.2417 9.62346 9.61568 9.36787 9.11735 9.22473C8.8258 9.13975 8.78451 8.74573 9.05575 8.60428C10.6981 7.75135 13.5498 6.69815 16.2498 8.82854C17.435 9.76376 18.1954 10.9983 18.7017 12.4078C19.0262 13.3073 19.5528 15.4194 20.8666 14.9575C21.8045 14.6282 21.8255 13.7197 21.7297 13.1299C21.6897 12.8845 21.9253 12.6813 22.1611 12.7596C24.5284 13.56 25.7555 15.4042 26.4116 17.2229C27.6794 20.7388 25.7916 24.9204 22.5862 26.771C18.582 29.0829 14.0716 28.6321 10.8507 24.9621C9.55131 23.4801 7.80768 20.0701 9.03952 16.2412C9.12988 15.9552 9.53327 15.9301 9.65917 16.2082Z" fill="url(#paint0_radial_878_2637)"/>
                  <path d="M19.6831 18.3643C17.1102 17.3167 16.5195 14.7673 16.3829 13.6944C16.3659 13.5526 16.1742 13.5205 16.1122 13.6493C15.7267 14.4478 15.0129 16.2153 15.2331 17.9955C15.5297 20.4029 16.1347 21.3158 17.2877 22.1917C17.9822 22.7195 17.7281 23.0632 17.5726 23.1876C17.422 23.3092 17.2056 23.287 17.0173 23.242C16.4727 23.1079 15.9763 22.8247 15.5838 22.4241C15.4997 22.3385 15.3522 22.3868 15.34 22.5043C15.2481 23.3952 15.5948 24.5395 15.995 25.2589C17.2315 27.4831 20.083 28.2183 22.2849 26.947C25.06 25.3449 25.3097 21.1087 22.2339 19.4637C21.3399 18.984 20.6225 18.7464 19.6831 18.3643Z" fill="url(#paint1_radial_878_2637)"/>
                </g>
                <defs>
                <radialGradient id="paint0_radial_878_2637" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.8223 27.2794) rotate(150.249) scale(13.2352 21.7163)">
                  <stop offset="0.314" stopColor="#FF9800"/>
                  <stop offset="0.662" stopColor="#FF6D00"/>
                  <stop offset="0.972" stopColor="#F44336"/>
                </radialGradient>
                <radialGradient id="paint1_radial_878_2637" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.8805 15.5018) rotate(60.5787) scale(13.8481 10.4217)">
                  <stop offset="0.214" stopColor="#FFF176"/>
                  <stop offset="0.328" stopColor="#FFF27D"/>
                  <stop offset="0.487" stopColor="#FFF48F"/>
                  <stop offset="0.672" stopColor="#FFF7AD"/>
                  <stop offset="0.793" stopColor="#FFF9C4"/>
                  <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804"/>
                  <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529"/>
                  <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209"/>
                  <stop offset="0.941" stopColor="#FFF176" stopOpacity="0"/>
                </radialGradient>
                <clipPath id="clip0_878_2637">
                  <rect width="24" height="24" fill="white" transform="translate(0.0664062 12.9282) rotate(-30)"/>
                </clipPath>
                </defs>
              </svg>

              </span>
            </div>
            <figure style={{ backgroundImage: `url(/images/ape.webp)` }} className="w-[400px] h-[400px] py-4 px-8 bg-cover overflow-hidden bg-no-repeat bg-center rounded-lg flex justify-center
             items-end bg-gradient-to-t from-pink-400 to-pink-800 shadow-none">
              <div className="w-full bg-[#0000005e] text-white backdrop-blur-sm rounded-xl pt-4 pb-6 px-5 flex justify-between">
                {/* left side */}
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className='text-sm'>Current Bid</span>
                  <div className="flex gap-2 text-xl font-semibold items-center">
                    <span>0.09 ETH</span>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5835 11.5L7.00026 17.3334L12.4168 11.5L7.00016 12.75L1.5835 11.5Z" fill="#FAF7F0"/>
                      <path d="M0.333496 8.16681L7.00016 9.83335L13.6668 8.16669L7.00016 0.666687L0.333496 8.16681Z" fill="#FAF7F0"/>
                      <path d="M7.00016 0.666687V6.50009V0.666687Z" fill="#FAF7F0"/>
                      <path d="M0.333496 8.16681L7.00016 6.50009L13.6668 8.16669" fill="#FAF7F0"/>
                    </svg>
                  </div>
                </div>

                {/* right side */}
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <span className='text-sm'>Ends in</span>
                  <div className="flex gap-2 text-xl font-semibold items-center">
                    <span>1d</span>
                    <div className="w-1 h-full bg-[#15120D80]"></div>

                    <span>02h</span>
                    <div className="w-1 h-full bg-[#15120D80]"></div>

                    <span>23m</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}
