import React from 'react'
import { useRouter } from 'next/router';
import transferCoin from '../../../public/profile_images/transferCoin.png'
import '../../../styles/globals.css';

const Transfer = () => {
    const router = useRouter();
    const destRoute = router.route;
    return (
      <div className='bg-[#E8E8E8] w-[86%] m-auto'>
          <div className='mt-24 w-[100%] m-auto p-2 rounded-xl mb-3'>
          <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {router.push('/profile')}}>
    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
  
          {/* deposit navbar */}
          <div className='flex w-[100%] m-auto justify-between bg-white rounded-3xl' >
              <button className={`w-[33.3%] p-[0.56rem] rounded-3xl hover:bg-[#6E5E1B] hover:text-white transition`} onClick={() => {router.push('/profile/deposit')}}>Deposit</button>
              <button className={`w-[33.3%] p-[0.56rem] rounded-3xl text-[#52575C] hover:bg-[#6E5E1B] transition hover:text-white`} onClick={() => {router.push('/profile/withdraw')}}>Withdraw</button>
              <button className={`w-[33.3%] p-[0.56rem] rounded-3xl transition hover:bg-[#6E5E1B] hover:text-white ${destRoute === '/profile/transfer' ? 'bg-[#6E5E1B] text-white' : 'bg-white text-black'}`} onClick={() => {router.push('/profile/transfer')}}>Transfer</button>
          </div>
  
          <p className='w-[100%] m-auto mt-7 text-black text-[1.1rem] font-semibold mb-[1.6rem]'>Send funds to the other Hemify user.</p>
          
          <div className=' bg-[#542A8F] w-[100%] m-auto pt-6 pb-4 rounded-xl overflow-hidden'>
            <p className='text-white text-center text-[0.9rem] font-normal'>Wallet Balance</p>
            <p className='text-[#FFDE59] text-center text-[2.25rem] font-bold'>$20000.03</p>
        </div>

        <form className='bg-white w-[100%] rounded-xl p-8 mt-9 mb-5'>
            <p className='text-[#A0A4A8] text-[0.975rem]'>Enter the user's name</p>
            <div className='bg-[#E8E8E8] flex rounded-3xl  hover:scale-105 transition'>
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
  <path d="M16.6654 17.5C16.6654 16.337 16.6654 15.7555 16.5218 15.2824C16.1987 14.217 15.365 13.3834 14.2996 13.0602C13.8265 12.9167 13.245 12.9167 12.082 12.9167H7.91537C6.7524 12.9167 6.17091 12.9167 5.69775 13.0602C4.63241 13.3834 3.79873 14.217 3.47556 15.2824C3.33203 15.7555 3.33203 16.337 3.33203 17.5M13.7487 6.25C13.7487 8.32107 12.0698 10 9.9987 10C7.92763 10 6.2487 8.32107 6.2487 6.25C6.2487 4.17893 7.92763 2.5 9.9987 2.5C12.0698 2.5 13.7487 4.17893 13.7487 6.25Z" stroke="#A0A4A8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input placeholder='eg @John Doe' className=' bg-transparent w-[90%]  p-4 outline-none' required/>
            </div>

            <p className='text-[#A0A4A8] text-[0.975rem] mt-8'>Input the amount</p>
            <div className='bg-[#E8E8E8] flex rounded-3xl  hover:scale-105 transition'>
                <input placeholder='eg 450' className=' bg-transparent w-[90%]  p-4 outline-none' type='number' required/>
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#26A17B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4431 13.0373V13.0358C13.3606 13.0418 12.9353 13.0673 11.9866 13.0673C11.2291 13.0673 10.6958 13.0448 10.5083 13.0358V13.038C7.59231 12.9098 5.41581 12.402 5.41581 11.7945C5.41581 11.1878 7.59231 10.68 10.5083 10.5495V12.5325C10.6988 12.546 11.2448 12.5783 11.9993 12.5783C12.9046 12.5783 13.3583 12.5408 13.4431 12.5333V10.551C16.3531 10.6808 18.5243 11.1885 18.5243 11.7945C18.5243 12.402 16.3531 12.9083 13.4431 13.0373ZM13.4431 10.3448V8.57026H17.5036V5.86426H6.44781V8.57026H10.5083V10.344C7.20831 10.4955 4.72656 11.1495 4.72656 11.9325C4.72656 12.7155 7.20831 13.3688 10.5083 13.521V19.2075H13.4431V13.5195C16.7378 13.368 19.2136 12.7148 19.2136 11.9325C19.2136 11.1503 16.7378 10.497 13.4431 10.3448Z" fill="white"/>
                </svg>
            </div>
            <p className='text-[#A0A4A8] text-[0.975rem]'>enter amount not less than $1</p>

            <div className='w-[100%] flex justify-between mt-6 mb-4'>
                <p className='text-[#52575C]'>Transfer fee</p>
                <p className='text-black font-medium'>free</p>
            </div>

            <div className='flex w-[100%] bg-[#FFFCEE] p-3'>
            <svg className='mt-[0.3rem] mr-2' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 16 16" fill="none">
  <path d="M8 5.33323V7.99989M8 10.6666H8.00667M2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76558 14.5363 7.8657 14.5569C7.95431 14.5751 8.04569 14.5751 8.1343 14.5569C8.23441 14.5363 8.32895 14.4838 8.51802 14.3788L13.4514 11.638C13.651 11.5271 13.7509 11.4716 13.8236 11.3927C13.8879 11.3229 13.9366 11.2402 13.9663 11.1501C14 11.0482 14 10.934 14 10.7056V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62101C8.32895 1.51598 8.23441 1.46346 8.1343 1.44287C8.04569 1.42464 7.95431 1.42464 7.8657 1.44287C7.76558 1.46346 7.67105 1.51598 7.48198 1.62101L2.54865 4.36176C2.34896 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75956 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419Z" stroke="#F59E0B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <p className=' font-medium text-[0.95rem] md:mt-[0.35rem] mt-0'>Carefully check your transfer details before hitting the <span className='text-[#6E5E1B]'>transfer</span> button</p>
            </div>
        </form>
    
    </div >
  )
}

export default Transfer