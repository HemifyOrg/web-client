import React from 'react'
import { useRouter } from 'next/navigation';
import { useSettingsContext } from '../../context/SettingsContext';
import Feedback from '../../../components/settingsComponent/Feedback'
import ShareHemify from '../../../components/settingsComponent/ShareHemify'
import FollowHemify from '../../../components/settingsComponent/FollowHemify'

const Settings : React.FC = () =>  {
    const router = useRouter();
    const {  feedBackModel, setFeedBackModel, shareHemify, setShareHemify, followHemify, setFollowHemify } = useSettingsContext();
    console.log(feedBackModel);

  return (
    <div className='w-[100%] bg-[#E8E8E8]'>
    <div className='mt-24 flex justify-between w-[85%] m-auto'>
    <svg onClick={() => {router.push('/profile')}} className='hover:cursor-pointer hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <p className='md:mr-[40%]  mr-[38%] text-[1.25rem] font-bold '>My Settings</p>
    </div>

    <div className='w-[85%] m-auto' >
        <p className='text-[1.3rem] font-bold mb-2 '>Account</p>
        <div  className='bg-white flex justify-between p-3 rounded-xl mb-1 cursor-pointer' onClick={() => {router.push('/profile/settings/editProfileDetails')}}>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
                <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg"  width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path d="M9 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5ZM11 21L14.1014 20.1139C14.2499 20.0715 14.3241 20.0502 14.3934 20.0184C14.4549 19.9902 14.5134 19.9558 14.5679 19.9158C14.6293 19.8707 14.6839 19.8161 14.7932 19.7068L21.25 13.25C21.9404 12.5597 21.9404 11.4403 21.25 10.75C20.5597 10.0596 19.4404 10.0596 18.75 10.75L12.2932 17.2068C12.1839 17.3161 12.1293 17.3707 12.0842 17.4321C12.0442 17.4866 12.0098 17.5451 11.9816 17.6066C11.9497 17.6759 11.9285 17.7501 11.8861 17.8987L11 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='w-[70%]' >
                <p className='text-[0.875rem] font-semibold text-[#000]'>Edit Profile details</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Change your profile image,username, socials and other important information </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    </div>

    <div className='w-[85%] m-auto mt-[1.5rem]'>
        <p className='text-[1.3rem] font-bold mb-2 '>Notification</p>
        <div  className='bg-white flex justify-between p-3 rounded-xl mb-1 cursor-pointer' onClick={() => {router.push('/profile/settings/editNotifications')}}>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
                <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg"  width="27" height="27" viewBox="0 0 24 24" fill="none">
  <path d="M14.3928 18.0148C14.8216 19.6152 13.8719 21.2602 12.2715 21.689C10.6711 22.1178 9.02609 21.1681 8.59726 19.5677M10.8934 5.74085C11.1976 5.19355 11.2978 4.53205 11.1229 3.87945C10.7656 2.54579 9.39471 1.75433 8.06104 2.11168C6.72738 2.46904 5.93592 3.83988 6.29328 5.17355C6.46814 5.82614 6.88567 6.34891 7.42277 6.67079M16.2377 9.44529C15.8808 8.11316 14.9279 6.99919 13.5886 6.34846C12.2493 5.69773 10.6334 5.56353 9.09632 5.97539C7.55924 6.38725 6.22692 7.31142 5.39244 8.54461C4.55796 9.7778 4.28968 11.219 4.64662 12.5511C5.2372 14.7552 5.12252 16.5135 4.74957 17.8497C4.3245 19.3725 4.11197 20.134 4.16939 20.2869C4.23508 20.4618 4.2826 20.5098 4.45683 20.5773C4.60912 20.6363 5.24889 20.4649 6.52843 20.122L18.3935 16.9428C19.673 16.6 20.3128 16.4285 20.4152 16.3013C20.5323 16.1557 20.5495 16.0904 20.5189 15.906C20.4922 15.7449 19.9274 15.1918 18.7979 14.0855C17.8068 13.1148 16.8283 11.6493 16.2377 9.44529Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>Edit your notification</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Personalize your notification to suit your interest </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
{/* ------------------------------------------ */}
    <div className='w-[85%] m-auto mt-[1.5rem]'>
        <p className='text-[1.3rem] font-bold mb-2 '>Hemify</p>
        <div className='rounded-xl overflow-hidden mb-2 bg-white'>
        <div  className='bg-white flex justify-between p-3 cursor-pointer rounded-b-xl border-b-2' onClick={() => {setShareHemify(!shareHemify)}}>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
            <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
  <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>Share Hemify</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Share Hemify with your friends and family </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div  className='bg-white flex justify-between p-3 cursor-pointer rounded-b-xl border-b-2' onClick={() => {setFollowHemify(!followHemify)}}>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
                <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg"  width="27" height="27" viewBox="0 0 24 24" fill="none">
  <path d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>Follow Hemify</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Follow Hemify on it's social accounts </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div  className='bg-white flex justify-between p-3 cursor-pointer ' onClick={() => {setFeedBackModel(!feedBackModel)}}>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
                <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg"  width="27" height="27" viewBox="0 0 24 24" fill="none">
  <path d="M11.3074 3.20693C11.5349 2.81107 11.6486 2.61315 11.7973 2.54681C11.927 2.48895 12.0751 2.48895 12.2048 2.54681C12.3535 2.61315 12.4672 2.81107 12.6947 3.20693L14.6498 6.60925C14.7341 6.75579 14.7762 6.82906 14.8352 6.88231C14.8874 6.92942 14.949 6.96498 15.0159 6.98666C15.0916 7.01117 15.1761 7.011 15.3451 7.01065L19.2692 7.00272C19.7257 7.00179 19.954 7.00133 20.0858 7.09691C20.2007 7.18028 20.2748 7.30858 20.2895 7.4498C20.3064 7.61171 20.1919 7.80918 19.9628 8.20412L17.9939 11.5985C17.9091 11.7447 17.8667 11.8178 17.8501 11.8955C17.8354 11.9643 17.8354 12.0355 17.8501 12.1043C17.8667 12.182 17.9091 12.2551 17.9939 12.4013L19.9628 15.7957C20.1919 16.1906 20.3064 16.3881 20.2895 16.55C20.2748 16.6912 20.2007 16.8195 20.0858 16.9029C19.954 16.9985 19.7257 16.998 19.2692 16.9971L15.3451 16.9891C15.1761 16.9888 15.0916 16.9886 15.0159 17.0131C14.949 17.0348 14.8874 17.0704 14.8352 17.1175C14.7762 17.1707 14.7341 17.244 14.6498 17.3905L12.6947 20.7929C12.4672 21.1887 12.3535 21.3867 12.2048 21.453C12.0751 21.5108 11.927 21.5108 11.7973 21.453C11.6486 21.3867 11.5349 21.1887 11.3074 20.7929L9.35226 17.3905C9.26805 17.244 9.22595 17.1707 9.16691 17.1175C9.11467 17.0704 9.05308 17.0348 8.98616 17.0131C8.91053 16.9886 8.82603 16.9888 8.65701 16.9891L4.73293 16.9971C4.27637 16.998 4.04809 16.9985 3.91631 16.9029C3.80137 16.8195 3.7273 16.6912 3.71257 16.55C3.69568 16.3881 3.81022 16.1906 4.03931 15.7957L6.00822 12.4013C6.09302 12.2551 6.13542 12.182 6.15202 12.1043C6.1667 12.0355 6.1667 11.9643 6.15202 11.8955C6.13542 11.8178 6.09302 11.7447 6.00822 11.5985L4.03931 8.20411C3.81022 7.80918 3.69568 7.61171 3.71257 7.4498C3.7273 7.30858 3.80137 7.18028 3.91631 7.09691C4.04809 7.00133 4.27637 7.00179 4.73293 7.00272L8.65701 7.01065C8.82603 7.011 8.91053 7.01117 8.98616 6.98666C9.05308 6.96498 9.11467 6.92942 9.16691 6.88231C9.22595 6.82906 9.26805 6.75579 9.35226 6.60925L11.3074 3.20693Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>Feedback</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Drop your honest feedback(s) about Hemify </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
    </div>

    <div className='w-[85%] m-auto mt-[1.5rem]'>
        <p className='text-[1.3rem] font-bold mb-2 '>Help</p>
        <div className='rounded-xl overflow-hidden mb-2 bg-white'>
        <div  className='bg-white flex justify-between p-3 cursor-pointer rounded-b-xl border-b-2'>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
                <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18M5.5 21C4.11929 21 3 19.8807 3 18.5V16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5V18.5C8 19.8807 6.88071 21 5.5 21ZM18.5 21C17.1193 21 16 19.8807 16 18.5V16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>Support</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>You will get support</p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div  className='bg-white flex justify-between p-3 cursor-pointer'>
            <div className='bg-[#E8E8E8] p-2 rounded-xl w-[15%]'>
            <svg className='m-auto mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8.00224C10.1762 7.50136 10.524 7.07901 10.9817 6.80998C11.4395 6.54095 11.9777 6.4426 12.501 6.53237C13.0243 6.62213 13.499 6.89421 13.8409 7.30041C14.1829 7.70661 14.37 8.22072 14.3692 8.75168C14.3692 10.2506 12.1209 11 12.1209 11M12.1499 14H12.1599M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className='w-[70%]'>
                <p className='text-[0.875rem] font-semibold text-[#000]'>FAQ</p>
                <p className='text-[0.75rem] font-normal text-[#A0A4A8]'>Get frequently asked questions here. </p>
            </div>

            <svg className='w-[10%] mt-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#6E5E1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        </div>
    </div>

    {
    feedBackModel ? <Feedback /> : null   
    }
    {
        shareHemify ? <ShareHemify /> : null
    }
    {
        followHemify ? <FollowHemify /> : null
    }

    </div>
  )
}

export default Settings