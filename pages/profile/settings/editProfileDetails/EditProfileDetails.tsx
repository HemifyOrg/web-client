import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import profileImage from '../../../../public/images/user-pic.png'
import CoverImage from '../../../../public/profile_images/cover_image.png';
import { useSettingsContext } from '../../../context/SettingsContext';
import XLink from '@/components/settingsComponent/XLink';
import TelegramModal from '@/components/settingsComponent/TelegramModal';

const EditProfileDetails = () => {
    const router = useRouter();
    const {  xLink, setXlink, telegramModal, setTelegramModal } = useSettingsContext();
    console.log(xLink);

  return (
    <div className='bg-[#E8E8E8] pb-2'>

        <div className='mt-24 flex justify-between w-[85%] m-auto'>
            <svg onClick={() => {router.push('/profile/settings')}} className='hover:cursor-pointer hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

            <p className='md:mr-[40%]  mr-[33%] text-[1.25rem] font-bold '>Edit Profile Details</p>
        </div>

        <div className='bg-white w-[80%] m-auto rounded-2xl pt-4 pb-4'>
            <p className='text-center text-[#A0A4A8] mb-3'>Profile Image</p>
            <div className='md:w-[19%] w-[25%] h-max bg-[#A0A4A8] m-auto p-0 rounded-xl '>
                <Image src={profileImage} alt='profile picture' className='w-[100%] h-[100%] block'/>
                <button className='bg-[#6E5E1B] p-2 w-[100%] m-auto rounded-xl text-white text-[1rem] font-medium'>Edit <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1.91866 12.0771C1.94929 11.8015 1.96461 11.6636 2.00631 11.5348C2.04331 11.4205 2.09559 11.3117 2.16173 11.2114C2.23627 11.0984 2.33433 11.0003 2.53045 10.8042L11.3347 2.00004C12.071 1.26366 13.2649 1.26366 14.0013 2.00004C14.7377 2.73642 14.7377 3.93033 14.0013 4.66671L5.19712 13.4709C5.001 13.667 4.90294 13.7651 4.78989 13.8396C4.6896 13.9058 4.58083 13.958 4.46653 13.995C4.3377 14.0367 4.19987 14.0521 3.92421 14.0827L1.66797 14.3334L1.91866 12.0771Z" stroke="#FAFAFA" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
                </button>
            </div>

            <p className='text-center text-[#A0A4A8] mb-3 mt-5'>Cover Image</p>
            <div className='w-[80%] m-auto rounded-b-3xl overflow-hidden z-5'>
                <Image src={CoverImage} alt='Cover Image' className='z-5 w-[100%] h-[100%]'/>
            </div>
            <button className='text-center block z-10 bg-[#6E5E1B] m-auto p-2 rounded-xl text-white '>upload <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M3.16667 6.33333C2.54669 6.33333 2.2367 6.33333 1.98236 6.40148C1.29218 6.58642 0.753083 7.12551 0.568148 7.8157C0.5 8.07003 0.5 8.38002 0.5 9V9.8C0.5 10.9201 0.5 11.4802 0.717987 11.908C0.909734 12.2843 1.21569 12.5903 1.59202 12.782C2.01984 13 2.57989 13 3.7 13H9.3C10.4201 13 10.9802 13 11.408 12.782C11.7843 12.5903 12.0903 12.2843 12.282 11.908C12.5 11.4802 12.5 10.9201 12.5 9.8V9C12.5 8.38002 12.5 8.07003 12.4319 7.8157C12.2469 7.12551 11.7078 6.58642 11.0176 6.40148C10.7633 6.33333 10.4533 6.33333 9.83333 6.33333M9.16667 3.66667L6.5 1M6.5 1L3.83333 3.66667M6.5 1V9" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            {/* i'm not sure what to do here, so just change the div tag to form tag */}
        <div className='mt-3 w-[80%] m-auto'>
            <p className='mt-4 mb-2 text-[#A0A4A8]'>Username</p>
            <input placeholder='username eg: @johndoe' className='border border-[#A0A4A8] w-[100%] p-3 rounded-xl outline-none focus:scale-110 transition' required/>

            <p className='mt-4 mb-2 text-[#A0A4A8]'>Name</p>
            <input placeholder='name eg: John Doe' className='border border-[#A0A4A8] w-[100%] p-3 rounded-xl outline-none focus:scale-110 transition' required/>

            <p className='mt-4 mb-2 text-[#A0A4A8]'>Email Address</p>
            <input placeholder='email eg: johnDoe@yahoo.com' className='border border-[#A0A4A8] w-[100%] p-3 rounded-xl outline-none focus:scale-110 transition' required/>
        </div>
        {/* socials */}
        <div className='w-[80%] m-auto'>
            <p className='mt-4 mb-3 text-[#A0A4A8]'>Socials</p>
            <div className='flex justify-between '>
                <p className='mt-1 text-[#202121]'>Twitter <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99386 8.11454L0 0.666504H4.74756L8.44753 5.2699L12.4004 0.687231H15.0151L9.71175 6.84282L16 14.6665H11.2666L7.2603 9.68822L2.98317 14.6527H0.354296L5.99386 8.11454ZM11.9565 13.2865L2.91105 2.04649H4.0571L13.0912 13.2865H11.9565Z" fill="black"/>
                </svg>
                </p>

                <button className='bg-[#6E5E1B] text-white p-2 rounded-xl w-[20%]' onClick={() => {setXlink(!xLink)}}>connect</button>
            </div>
            <div className='flex justify-between mt-3 mb-2'>
                <p className='mt-1 text-[#202121]' >Telegram <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0C3.58173 0 0 3.58173 0 8C0 12.4183 3.58173 16 8 16Z" fill="url(#paint0_linear_12805_34078)"/>
  <path d="M2.97791 8.39129C3.9131 7.87616 4.95704 7.44622 5.93244 7.01409C7.6105 6.30629 9.29524 5.61076 10.997 4.96322C11.3281 4.85289 11.923 4.74499 11.9813 5.23566C11.9494 5.93019 11.818 6.62066 11.7278 7.31112C11.4991 8.82952 11.2347 10.3427 10.9768 11.8561C10.888 12.3602 10.2565 12.6212 9.85244 12.2986C8.88137 11.6427 7.90284 10.9931 6.94417 10.322C6.63014 10.0029 6.92134 9.54466 7.2018 9.31679C8.0016 8.52859 8.8498 7.85892 9.6078 7.02999C9.81227 6.53622 9.20814 6.95236 9.00887 7.07986C7.91394 7.83439 6.8458 8.63499 5.6914 9.29812C5.10174 9.62272 4.41447 9.34532 3.82507 9.16419C3.2966 8.94539 2.52219 8.72496 2.97786 8.39132L2.97791 8.39129Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_12805_34078" x1="6.00093" y1="0.6672" x2="2.00093" y2="10" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1"/>
    </linearGradient>
  </defs>
                </svg>
                </p>

                <button className='bg-[#6E5E1B] text-white p-2 rounded-xl w-[20%]' onClick={() => {setTelegramModal(!telegramModal)}}>connect</button>
                {
                    xLink ? <XLink /> : null
                }
                {
                    telegramModal ? <TelegramModal /> : null
                }
            </div>

            <button type='submit' className='m-auto block bg-[#6E5E1B] text-white p-2 rounded-xl w-[30%]'>Submit</button>
        </div>


        </div>
        {

        }
    </div>
  )
}

export default EditProfileDetails