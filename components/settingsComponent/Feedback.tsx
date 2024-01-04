import React from 'react'
import { useSettingsContext } from '../../pages/context/SettingsContext';

const Feedback = () => {
    const {  feedBackModel, setFeedBackModel } = useSettingsContext();
    console.log(feedBackModel);

  return (
    <div className='bg-black fixed inset-0 items-center z-50 bg-opacity-50' >
        <div className='bg-white rounded-[2rem] md:w-[50%] w-[80%] m-auto md:mt-[15%] mt-[28%] p-4'>
            <button className='p-3 rounded-[1rem] block text-right hover:scale-110 transition ml-auto text-[#A0A4A8]' onClick={() => {setFeedBackModel(!feedBackModel)}}>X</button>

        <form  className='w-[100%] m-auto p-5'>
            <p className='text-center font-bold text-[1.2rem] mb-4'>Write your feedback here</p>
            <textarea placeholder='write how you feel about hemify' typeof='string' required className='focus:scale-110 transition outline-none w-[100%] rounded-xl p-4 h-40 bg-[#E8E8E8]'/>

            <button type='submit' className='block m-auto bg-[#F1F5F9] p-3 rounded-[1rem] text-[#A0A4A8] w-[13rem] hover:scale-110 transition mt-7'>leave review</button>
        </form>
        </div>
       
    </div>
  )
}

export default Feedback