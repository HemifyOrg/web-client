import React, { useState } from 'react'
import {useRouter} from 'next/navigation';
import All from '../profileComponents/trfHistoryComp/All';
import Deposit from '../profileComponents/trfHistoryComp/Deposit';
import Withdraw from '../profileComponents/trfHistoryComp/Withdraw';
import Transfer from '../profileComponents/trfHistoryComp/Transfer';

const index = () => {
    const router = useRouter();
    const [all, showAll] = useState(true);
    const [deposit, showDeposit] = useState(false);
    const [withdraw, showWithdraw ] = useState(false);
    const [transfer, showTransfer] = useState(false);

    let currentDate = new Date();

  return (
  <main className='w-[100%]'>
  <div className='pl-[2.4rem] mt-[5rem] py-2 flex justify-between w-[54%]'>
    <svg onClick={() => {router.push('/profile')}} className='hover:scale-110 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <p className='text-[#000] font-bold text-[1.25rem]'>Wallet</p>

  </div>

  {/* ----------------WALLET-------------- */}

  <div className="text-center w-[70%] md:w-[50%]  m-auto bg-[#FAFAFA] mt-[2rem] p-3 rounded-md">
                <p className=" text-center text-[#52575C] text-[0.625rem] font-normal">Wallet Balance <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M8.25 7H8.255M1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V4.5C10.5 3.94772 10.0523 3.5 9.5 3.5L2.5 3.5C1.94772 3.5 1.5 3.05228 1.5 2.5ZM1.5 2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H8.5M8.5 7C8.5 7.13807 8.38807 7.25 8.25 7.25C8.11193 7.25 8 7.13807 8 7C8 6.86193 8.11193 6.75 8.25 6.75C8.38807 6.75 8.5 6.86193 8.5 7Z" stroke="#52575C" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> </p>
                <p className='font-bold text-[1.6rem] text-[#6E5E1B] leading-9'>$7893.02</p>

                <div className="flex justify-around mt-[1rem] px-2 w-[95%] m-auto">
                    <button className=" border-[.1rem] text-[0.925rem] text-[#2AC769] border-[#2AC769] rounded-[1rem] p-[.5rem] inline-flex">Deposit <svg className="mt-2 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
  <path d="M4.37654 2.25049V7.74938M4.37654 7.74938L6.43862 5.6873M4.37654 7.74938L2.31445 5.6873" stroke="#2AC769" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                    <button className=" border-[.1rem] text-[0.925rem] text-[#F33] border-[#F33] rounded-[1rem] p-[.5rem] inline-flex">Withdraw <svg className="mt-2  ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
  <path d="M4.62458 7.74938V2.25049M4.62458 2.25049L2.5625 4.31257M4.62458 2.25049L6.68667 4.31257" stroke="#FF3333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                    <button className=" border-[.1rem] text-[0.925rem] text-[#542A8F] border-[#542A8F] rounded-[1rem] p-[.5rem] inline-flex ">Transfer <svg className="mt-2  ml-1" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M2.74805 8.5H10.748M10.748 8.5L8.74805 6.5M10.748 8.5L8.74805 10.5M10.748 3.5H2.74805M2.74805 3.5L4.74805 1.5M2.74805 3.5L4.74805 5.5" stroke="#542A8F" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                </div>
  </div>

  {/* ------MENU------ */}
            
  <div className="md:w-[80%] w-[87%] bg-[#fff] flex justify-between m-auto rounded-[1.5rem] p-[.8rem] mt-[1.75rem] mb-8">
                <button className={`${all ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {
                    showAll(true); 
                    showDeposit(false); 
                    showTransfer(false); 
                    showWithdraw(false)}}
                    >All</button>
                <button className={`${deposit ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {
                    showAll(false);
                    showDeposit(true); 
                    showTransfer(false); 
                    showWithdraw(false)}}
                >Deposit</button>

                <button className={`${withdraw ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {
                    showAll(false); 
                    showDeposit(false); 
                    showTransfer(false); 
                    showWithdraw(true)}}
                >Withdraw</button>

                <button className={`${transfer ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {
                    showAll(false); 
                    showDeposit(false); 
                    showTransfer(true); 
                    showWithdraw(false)}}
                    >Transfer</button>


                <svg className='cursor-pointer ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            {
                all ? <All id={0} type={''} medim={''} amount={0} date={0} process={''} /> :
                deposit ? <Deposit id={0} type={''} medim={''} amount={0} date={0} /> :
                withdraw ? <Withdraw id={0} type={''} medim={''} amount={0} date={0} /> :
                transfer ? <Transfer id={0} type={''} medium={''} amount={0} date={currentDate} process={''} /> :
                 null
            }

  
  </main>
  )
}

export default index
