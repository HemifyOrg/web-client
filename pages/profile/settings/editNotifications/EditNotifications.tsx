import React from 'react'
import { useRouter } from 'next/navigation'

const EditNotifications = () => {
    const router = useRouter();

  return (
    <div className='bg-[#E8E8E8]'>
        <div className='mt-24 flex justify-between w-[85%] m-auto mb-3'>
    <svg onClick={() => {router.push('/profile/settings')}} className='hover:cursor-pointer hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <p className='md:mr-[40%]  mr-[38%] text-[1.25rem] font-bold '>Edit Notifications</p>
    </div>

    <div className=' w-[90%] m-auto'>
        <p className='text-[#52575C] text-xl mb-2'>Wager</p>
        <div className='bg-white w-[100%] rounded-2xl overflow-hidden'>

            <div className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>Wager Matched</p>
                    <p className='text-[#A0A4A8]'>Get notified when your wager gets a challenger</p>
                </div>
            </div>

            <div  className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>New Message</p>
                    <p className='text-[#A0A4A8]'>Get notified when you receive a wager message</p>
                </div>
            </div>

            <div  className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>Favourite</p>
                    <p className='text-[#A0A4A8]'>Get notified when a wager in your favorite category is posted in the lobby</p>
                </div>
            </div>

            <div className='p-3 border-b-2 rounded-b-2xl'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>win or loss</p>
                    <p className='text-[#A0A4A8]'>Get notified when you win or lose a wager</p>
                </div>
            </div>

            
        </div>
        

    </div>

    {/* ------------------------------ */}
    <div className=' w-[90%] m-auto'>
        <p className='text-[#52575C] text-xl mb-2 mt-3'>Platform</p>
        <div className='bg-white w-[100%] rounded-2xl overflow-hidden'>

            <div className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>New Follow</p>
                    <p className='text-[#A0A4A8]'>Receive notification when you get a new follow</p>
                </div>
            </div>

            <div  className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>Offers and promotions</p>
                    <p className='text-[#A0A4A8]'>Be the first to receive promotional updates</p>
                </div>
            </div>

            <div  className='p-3 border-b-2 rounded-b-2xl mb-3'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>Newsletter</p>
                    <p className='text-[#A0A4A8]'>Be the first to receive Hemify weekly newsletter</p>
                </div>
            </div>

            <div className='p-3 border-b-2 rounded-b-2xl'>
                <div >
                    <p className='text-black font-semibold text-[1rem]'>Product Update</p>
                    <p className='text-[#A0A4A8]'>Be the first to receive updates on Hemify</p>
                </div>
            </div>

            
        </div>
        

    </div>
    <button className='bg-[#6E5E1B] p-4 block m-auto w-[30%] rounded-xl mt-3 mb-3 text-white hover:scale-110'>Save changes</button>

    </div>
  )
}

export default EditNotifications