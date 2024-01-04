import React from 'react'
import { useSettingsContext } from '../../pages/context/SettingsContext';

const XLink = () => {
    const {  xLink, setXlink } = useSettingsContext();
    console.log(xLink);

  return (
    <div className='bg-black fixed inset-0 items-center z-50 bg-opacity-50' >
        <div className='bg-white rounded-[2rem] md:w-[50%] w-[80%] m-auto md:mt-[15%] mt-[28%] p-4'>
            <button className='p-2 rounded-[1rem] block text-right hover:scale-110 transition ml-auto text-[#A0A4A8]' onClick={() => {setXlink(!xLink)}}>X</button>

            <p className='text-center font-bold text-[1.2rem] mb-4'>Enter your X profile link</p>
            <form onSubmit={(e) => {e.preventDefault()}}>
              <input placeholder='https://twitter.com/username' className='w-[80%] block p-3 rounded-xl m-auto focus:scale-110 transition outline-none border border-[#CBCDCF]'/>

              <button className='bg-[#F1F5F9] block m-auto rounded-xl w-[30%] hover:bg-[#6E5E1B] hover:text-white p-3 mt-3 mb-3'>connect X</button>
            </form>



        </div>
       
    </div>
  )
}

export default XLink