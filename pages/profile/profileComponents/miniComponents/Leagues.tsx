import React from 'react'
import Image from 'next/image'
import PL from "@/public/favouritesImages/EPL.png"
import BL from "@/public/favouritesImages/Bundesliga.png"
import LL from "@/public/favouritesImages/LaLiga.png"
import SA from "@/public/favouritesImages/SerieA.png"

const Leagues = () => {
  return (
    <>
     <div className='bg-[#FAFAFA] md:w-[80%] w-[83%] m-auto rounded-[0.75rem] p-[0.5rem] mb-[1.5rem] flex '>
      {/* teams icons */}
      <div className='w-[13%]'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={PL} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>EPL</p>
      </div>
      {/* ------------ */}
      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={BL} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>B. LIGA</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={LL} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>La Liga</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={SA} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>Serie A</p>
      </div>
      {/* ------------ */}
    </div>
    </>
  )
}

export default Leagues