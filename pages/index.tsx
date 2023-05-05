import { useState, useEffect } from "react";
import Head from 'next/head';
// import { useSelector } from 'react-redux';
// import { formatBalance } from '@/components/ConnectWallect'

import { RootState } from '../app/store';

interface SlideType {
  id: number;
  image: string;
  price: string;
  time: {
      days: string;
      hours: string;
      minutes: string;
  };
}

export default function Home() {
  // const account = useSelector((state: RootState) => state.account);

  
  const [hotBidz, setHotBidz] = useState<Array<SlideType>>([]);
  const [selectedSlide, setSelectedSlide] = useState(0)
  
  useEffect(() => {
    let slidesList: Array<SlideType> = [
      {
        id: 0,
        image: "/images/ape.webp",
        price: "0.9",
        time: { days: "1", hours: "02", minutes: "23" }
      },
      {
        id: 1,
        image: "/images/ape.webp",
        price: "0.87",
        time: { days: "10", hours: "22", minutes: "30" }
      },
      {
        id: 2,
        image: "/images/ape.webp",
        price: "1.02",
        time: { days: "5", hours: "24", minutes: "50" }
      }
    ]
    setHotBidz([...slidesList])
  }, [])

  const handleSlide = (action: "right" | "left") => {
    if (action === "right") {
      let nextSelectedSlide = selectedSlide < hotBidz.length - 1 ? selectedSlide + 1 : selectedSlide
      setSelectedSlide(nextSelectedSlide)
    } if (action === "left" && selectedSlide > -1) {
      console.log(selectedSlide)
      let previousSelectedSlide = selectedSlide < hotBidz.length - 2 ? selectedSlide : selectedSlide - 1
      setSelectedSlide(previousSelectedSlide)
    }
  }


  return (
    <div>
      <Head>
        <title>Bidz & Bazaar</title>
      </Head>

      <main className="px-4 mt-2">
        {/* hero section */}
        <div className="flex items-center justify-between w-full py-4 px-8 h-full m-auto lg:flex-row flex-col-reverse">

          {/* left hero */}
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
          <div className="relative mr-2 mt-5 select-none">

            {/* arrows */}
            <div className="w-full absolute top-[50%] z-10 flex justify-between items-center">
              {/* left */}
              <div onClick={() => handleSlide("left")} className="p-2 bg-[#F1E7D480] flex items-center justify-center -translate-x-5 w-10 h-10 rounded-full">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.6665 15H2.33317M2.33317 15L14.8332 2.5M2.33317 15L14.8332 27.5" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </div>

              {/* right */}
              <div onClick={() => handleSlide("right")} className="p-2 bg-[#F1E7D480] flex items-center justify-center translate-x-5 w-10 h-10 rounded-full">
                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.3335 15H35.6668M35.6668 15L23.1668 2.5M35.6668 15L23.1668 27.5" stroke="black" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            </div>
            {/* end arrows */}

            {/* hot bids */}
            <div className="absolute top-2 -left-10 z-10 -rotate-[35deg] flex items-center gap-2 font-semibold bg-[#FFF9E5] rounded-full px-4">
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

            {hotBidz && hotBidz.length > 0 ? hotBidz.map((n, i) => (
              <figure key={i} style={{ backgroundImage: `url(${n.image})` }}
                className={`w-[400px] h-[400px] transition-all ${selectedSlide !== n.id ? `top-0 ${hotBidz.length - 1 === n.id ? "-rotate-[5deg]": "rotate-[5deg]"} absolute z-[-1]`: ""} py-4 px-8 bg-cover overflow-hidden bg-no-repeat
                bg-center rounded-lg flex justify-center items-end bg-gradient-to-t from-pink-400 to-pink-800 shadow-none`}>
              <div className="w-full bg-[#0000005e] text-white backdrop-blur-sm rounded-xl pt-4 pb-6 px-5 flex justify-between">
                {/* left side */}
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className='text-sm'>Current Bid</span>
                  <div className="flex gap-2 text-xl font-semibold items-center">
                    <span>{n.price} ETH</span>
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
                      <span>{n.time?.days}d</span>
                    <div className="w-1 h-full bg-[#15120D80]"></div>

                      <span>{n.time?.hours}h</span>
                    <div className="w-1 h-full bg-[#15120D80]"></div>

                      <span>{n.time?.minutes}m</span>
                  </div>
                </div>
              </div>
            </figure>
            )) : (
              <figure className={`w-[400px] h-[400px] transition-all z-[-1] animate-pulse py-4 px-8 bg-cover overflow-hidden bg-no-repeat
              bg-center rounded-lg flex justify-center items-end bg-gradient-to-t from-gray-200 to-gray-300 shadow-none`}></figure>
            )}

          </div>
        </div>

        {/* how it works */}
        <div className="">

          <div className="w-full absolute"></div>
        <svg className="w-full" height="326" viewBox="0 0 1488 326" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7988 166.424C219.159 378.24 326.27 375.728 509.366 166.424" stroke="#D2B37D" stroke-width="1.48503" stroke-dasharray="24.75 14.85"/>
          <path d="M978.633 166.424C1177.99 378.24 1285.1 375.728 1468.2 166.424" stroke="#D2B37D" stroke-width="1.48503" stroke-dasharray="24.75 14.85"/>
          <path d="M498.969 177.822C698.329 -33.9938 805.44 -31.4824 988.536 177.822" stroke="#D2B37D" stroke-width="1.48503" stroke-dasharray="24.75 14.85"/>
          <circle cx="19.8004" cy="19.8004" r="19.8004" transform="matrix(1 0 0 -1 0 190.678)" fill="#F20606" fill-opacity="0.2"/>
          <circle cx="9.9002" cy="9.9002" r="9.9002" transform="matrix(1 0 0 -1 9.90039 180.778)" fill="#F20606"/>
          <circle cx="19.8004" cy="19.8004" r="19.8004" transform="matrix(1 0 0 -1 731.625 39.7)" fill="#F1F434" fill-opacity="0.2"/>
          <circle cx="9.9002" cy="9.9002" r="9.9002" transform="matrix(1 0 0 -1 741.525 29.8)" fill="#F1F434"/>
          <circle cx="19.8004" cy="19.8004" r="19.8004" transform="matrix(1 0 0 -1 1448.4 190.678)" fill="#07CA1A" fill-opacity="0.2"/>
          <circle cx="9.9002" cy="9.9002" r="9.9002" transform="matrix(1 0 0 -1 1458.3 180.778)" fill="#07CA1A"/>
          <g filter="url(#filter3_d_1182_586)">
            <path d="M455.75 216.608C457.64 214.656 460.761 214.631 462.682 216.552C464.55 218.42 464.585 221.437 462.76 223.348L457.319 229.046C456.892 229.493 456.679 229.716 456.547 229.978C456.431 230.209 456.362 230.462 456.344 230.72C456.323 231.012 456.393 231.313 456.532 231.915L459.915 246.578C460.058 247.196 460.129 247.504 460.106 247.803C460.086 248.068 460.012 248.325 459.889 248.56C459.75 248.826 459.526 249.05 459.078 249.498L458.352 250.224C457.165 251.411 456.571 252.005 455.964 252.112C455.433 252.206 454.888 252.077 454.455 251.756C453.96 251.388 453.695 250.592 453.164 248.999L449.228 237.192L442.677 243.743C442.286 244.134 442.09 244.33 441.959 244.56C441.843 244.764 441.765 244.987 441.728 245.219C441.687 245.48 441.717 245.755 441.778 246.305L442.138 249.543C442.199 250.092 442.229 250.367 442.188 250.629C442.151 250.86 442.073 251.084 441.957 251.288C441.826 251.518 441.63 251.713 441.239 252.104L440.853 252.491C439.926 253.418 439.463 253.881 438.948 254.015C438.497 254.133 438.018 254.085 437.598 253.881C437.12 253.649 436.757 253.104 436.03 252.014L432.959 247.407C432.829 247.212 432.764 247.115 432.688 247.026C432.621 246.948 432.548 246.875 432.47 246.808C432.382 246.732 432.284 246.667 432.09 246.538L427.483 243.466C426.392 242.74 425.847 242.376 425.615 241.898C425.411 241.478 425.364 240.999 425.481 240.548C425.615 240.033 426.079 239.57 427.005 238.644L427.392 238.257C427.783 237.866 427.978 237.67 428.209 237.539C428.413 237.424 428.636 237.345 428.867 237.308C429.129 237.267 429.404 237.297 429.953 237.358L433.191 237.718C433.741 237.779 434.016 237.81 434.277 237.768C434.509 237.731 434.732 237.653 434.936 237.537C435.166 237.406 435.362 237.211 435.753 236.819L442.304 230.268L430.497 226.332C428.904 225.802 428.108 225.536 427.74 225.041C427.419 224.608 427.29 224.063 427.384 223.532C427.492 222.925 428.085 222.331 429.272 221.144L429.998 220.418C430.446 219.97 430.671 219.746 430.936 219.607C431.171 219.484 431.429 219.41 431.693 219.39C431.992 219.367 432.301 219.438 432.918 219.581L447.526 222.952C448.133 223.092 448.436 223.162 448.729 223.141C449.012 223.121 449.287 223.04 449.536 222.903C449.793 222.761 450.01 222.537 450.443 222.089L455.75 216.608Z" fill="#2D4C82"/>
            <path d="M455.75 216.608C457.64 214.656 460.761 214.631 462.682 216.552C464.55 218.42 464.585 221.437 462.76 223.348L457.319 229.046C456.892 229.493 456.679 229.716 456.547 229.978C456.431 230.209 456.362 230.462 456.344 230.72C456.323 231.012 456.393 231.313 456.532 231.915L459.915 246.578C460.058 247.196 460.129 247.504 460.106 247.803C460.086 248.068 460.012 248.325 459.889 248.56C459.75 248.826 459.526 249.05 459.078 249.498L458.352 250.224C457.165 251.411 456.571 252.005 455.964 252.112C455.433 252.206 454.888 252.077 454.455 251.756C453.96 251.388 453.695 250.592 453.164 248.999L449.228 237.192L442.677 243.743C442.286 244.134 442.09 244.33 441.959 244.56C441.843 244.764 441.765 244.987 441.728 245.219C441.687 245.48 441.717 245.755 441.778 246.305L442.138 249.543C442.199 250.092 442.229 250.367 442.188 250.629C442.151 250.86 442.073 251.084 441.957 251.288C441.826 251.518 441.63 251.713 441.239 252.104L440.853 252.491C439.926 253.418 439.463 253.881 438.948 254.015C438.497 254.133 438.018 254.085 437.598 253.881C437.12 253.649 436.757 253.104 436.03 252.014L432.959 247.407C432.829 247.212 432.764 247.115 432.688 247.026C432.621 246.948 432.548 246.875 432.47 246.808C432.382 246.732 432.284 246.667 432.09 246.538L427.483 243.466C426.392 242.74 425.847 242.376 425.615 241.898C425.411 241.478 425.364 240.999 425.481 240.548C425.615 240.033 426.079 239.57 427.005 238.644L427.392 238.257C427.783 237.866 427.978 237.67 428.209 237.539C428.413 237.424 428.636 237.345 428.867 237.308C429.129 237.267 429.404 237.297 429.953 237.358L433.191 237.718C433.741 237.779 434.016 237.81 434.277 237.768C434.509 237.731 434.732 237.653 434.936 237.537C435.166 237.406 435.362 237.211 435.753 236.819L442.304 230.268L430.497 226.332C428.904 225.802 428.108 225.536 427.74 225.041C427.419 224.608 427.29 224.063 427.384 223.532C427.492 222.925 428.085 222.331 429.272 221.144L429.998 220.418C430.446 219.97 430.671 219.746 430.936 219.607C431.171 219.484 431.429 219.41 431.693 219.39C431.992 219.367 432.301 219.438 432.918 219.581L447.526 222.952C448.133 223.092 448.436 223.162 448.729 223.141C449.012 223.121 449.287 223.04 449.536 222.903C449.793 222.761 450.01 222.537 450.443 222.089L455.75 216.608Z" stroke="#D2B37D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <g filter="url(#filter4_d_1182_586)">
            <path d="M947.107 124.096C948.951 126.091 948.803 129.209 946.779 131.02C944.81 132.782 941.795 132.65 939.989 130.722L934.601 124.973C934.178 124.522 933.967 124.297 933.713 124.151C933.489 124.022 933.241 123.939 932.984 123.907C932.693 123.87 932.389 123.923 931.78 124.028L916.952 126.594C916.328 126.702 916.015 126.756 915.718 126.716C915.455 126.681 915.202 126.593 914.974 126.458C914.717 126.304 914.506 126.068 914.083 125.596L913.398 124.83C912.279 123.579 911.719 122.954 911.645 122.341C911.581 121.807 911.74 121.269 912.085 120.855C912.479 120.381 913.289 120.16 914.909 119.718L926.916 116.443L920.738 109.539C920.369 109.126 920.185 108.92 919.962 108.777C919.765 108.65 919.547 108.56 919.317 108.51C919.058 108.454 918.782 108.469 918.23 108.499L914.977 108.679C914.425 108.71 914.149 108.725 913.89 108.669C913.661 108.619 913.443 108.528 913.245 108.401C913.023 108.258 912.838 108.052 912.469 107.64L912.105 107.232C911.231 106.256 910.794 105.768 910.689 105.246C910.596 104.789 910.67 104.314 910.897 103.906C911.156 103.441 911.72 103.109 912.849 102.444L917.619 99.6323C917.821 99.5135 917.921 99.4541 918.014 99.3837C918.096 99.3212 918.173 99.2523 918.244 99.1777C918.324 99.0937 918.394 99.0001 918.535 98.8128L921.857 94.3832C922.643 93.3351 923.036 92.811 923.527 92.6054C923.957 92.4251 924.437 92.4043 924.882 92.5468C925.388 92.7093 925.825 93.1974 926.699 94.1738L927.063 94.5814C927.432 94.9935 927.616 95.1996 927.734 95.4367C927.839 95.6468 927.904 95.874 927.929 96.1073C927.956 96.3708 927.91 96.6435 927.819 97.1889L927.28 100.402C927.188 100.947 927.143 101.22 927.17 101.483C927.194 101.717 927.26 101.944 927.364 102.154C927.482 102.391 927.666 102.597 928.035 103.009L934.213 109.914L938.797 98.3427C939.416 96.782 939.725 96.0017 940.24 95.6619C940.689 95.3653 941.241 95.2669 941.766 95.39C942.366 95.5309 942.926 96.1565 944.045 97.4075L944.73 98.1727C945.153 98.6451 945.364 98.8813 945.488 99.1541C945.598 99.3956 945.657 99.6568 945.663 99.922C945.669 100.222 945.581 100.526 945.404 101.135L941.229 115.533C941.055 116.131 940.969 116.43 940.973 116.724C940.977 117.008 941.043 117.287 941.166 117.543C941.294 117.807 941.505 118.036 941.928 118.493L947.107 124.096Z" fill="#2D4C82"/>
            <path d="M947.107 124.096C948.951 126.091 948.803 129.209 946.779 131.02C944.81 132.782 941.795 132.65 939.989 130.722L934.601 124.973C934.178 124.522 933.967 124.297 933.713 124.151C933.489 124.022 933.241 123.939 932.984 123.907C932.693 123.87 932.389 123.923 931.78 124.028L916.952 126.594C916.328 126.702 916.015 126.756 915.718 126.716C915.455 126.681 915.202 126.593 914.974 126.458C914.717 126.304 914.506 126.068 914.083 125.596L913.398 124.83C912.279 123.579 911.719 122.954 911.645 122.341C911.581 121.807 911.74 121.269 912.085 120.855C912.479 120.381 913.289 120.16 914.909 119.718L926.916 116.443L920.738 109.539C920.369 109.126 920.185 108.92 919.962 108.777C919.765 108.65 919.547 108.56 919.317 108.51C919.058 108.454 918.782 108.469 918.23 108.499L914.977 108.679C914.425 108.71 914.149 108.725 913.89 108.669C913.661 108.619 913.443 108.528 913.245 108.401C913.023 108.258 912.838 108.052 912.469 107.64L912.105 107.232C911.231 106.256 910.794 105.768 910.689 105.246C910.596 104.789 910.67 104.314 910.897 103.906C911.156 103.441 911.72 103.109 912.849 102.444L917.619 99.6323C917.821 99.5135 917.921 99.4541 918.014 99.3837C918.096 99.3212 918.173 99.2523 918.244 99.1777C918.324 99.0937 918.394 99.0001 918.535 98.8128L921.857 94.3832C922.643 93.3351 923.036 92.811 923.527 92.6054C923.957 92.4251 924.437 92.4043 924.882 92.5468C925.388 92.7093 925.825 93.1974 926.699 94.1738L927.063 94.5814C927.432 94.9935 927.616 95.1996 927.734 95.4367C927.839 95.6468 927.904 95.874 927.929 96.1073C927.956 96.3708 927.91 96.6435 927.819 97.1889L927.28 100.402C927.188 100.947 927.143 101.22 927.17 101.483C927.194 101.717 927.26 101.944 927.364 102.154C927.482 102.391 927.666 102.597 928.035 103.009L934.213 109.914L938.797 98.3427C939.416 96.782 939.725 96.0017 940.24 95.6619C940.689 95.3653 941.241 95.2669 941.766 95.39C942.366 95.5309 942.926 96.1565 944.045 97.4075L944.73 98.1727C945.153 98.6451 945.364 98.8813 945.488 99.1541C945.598 99.3956 945.657 99.6568 945.663 99.922C945.669 100.222 945.581 100.526 945.404 101.135L941.229 115.533C941.055 116.131 940.969 116.43 940.973 116.724C940.977 117.008 941.043 117.287 941.166 117.543C941.294 117.807 941.505 118.036 941.928 118.493L947.107 124.096Z" stroke="#D2B37D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          </defs>
        </svg>
        </div>
      </main>
    </div>
  );
}
