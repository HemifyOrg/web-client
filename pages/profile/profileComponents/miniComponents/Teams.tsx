import React from 'react'
import Image from 'next/image'
import chelsea from "@/public/favouritesImages/chelsea.png"
import everton  from "@/public/favouritesImages/everton.png"
import barca  from "@/public/favouritesImages/barca.png"
import arsenal  from "@/public/favouritesImages/arsenal.png"
import interMilan  from "@/public/favouritesImages/interMilan.png"
import athleticoMadrid  from "@/public/favouritesImages/athleticoMadrid.png"

const Teams = () => {
  return (
    <>
    <div className='bg-[#FAFAFA] md:w-[80%] w-[83%] m-auto rounded-[0.75rem] p-[0.5rem] flex justify-between '>
      {/* teams icons */}
      <div className='w-[13%]'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={chelsea} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>CFC</p>
      </div>
      {/* ------------ */}
      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={everton} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>EVE</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={barca} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>EVE</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={arsenal} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>ARS</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={interMilan} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>INTER</p>
      </div>
      {/* ------------ */}

      {/* teams icons */}
      <div className='w-[13%] ml-2'>
        <div className='bg-[#E8E8E8] rounded-[1rem] p-[0.5rem] w-[100%]'>
          <Image src={athleticoMadrid} alt='chelsea png' className='block m-auto'/>
        </div>
        <p className='text-center text-[#A0A4A8] text-[0.725rem] mt-1'>ATM</p>
      </div>
      {/* ------------ */}
    </div>
    </>
  )
}

export default Teams