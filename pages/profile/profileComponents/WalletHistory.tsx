import React from 'react'
import HistoryComp from './miniComponents/HistoryComp';
import { HISTORY } from '@/utils/dummyDatas/profileIndex';

 interface Data  {
        id: number;
        type: string ;
        medim: string;
        amount: number;
        date: number;
}

const WalletHistory: React.FC<Data > = () => {
   

  return (
    <section >

        <div className='flex justify-between md:w-[80%] w-[83%] m-auto mt-2 mb-2'>
            <p className='text-[#000] text-[1.25rem] font-bold leading-[1.75rem]'>Deposit</p>

            <button className='bg-[#FAFAFA] rounded-[1rem] p-[.5rem] text-[#A0A4A8] font-medium leading-[1rem] text-[0.75rem]'>View all</button>
        </div>
        {
            HISTORY.map((historyData) => {
                return historyData.type === 'Deposit' && <HistoryComp key={historyData.id} value={historyData} />
            })
        }

        <div className='flex justify-between md:w-[80%] w-[83%] m-auto mt-2 mb-2'>
            <p className='text-[#000] text-[1.25rem] font-bold leading-[1.75rem]'>Withdraw</p>

            <button className='bg-[#FAFAFA] rounded-[1rem] p-[.5rem] text-[#A0A4A8] font-medium leading-[1rem] text-[0.75rem]'>View all</button>
        </div>
        {
            HISTORY.map((historyData) => {
                return historyData.type === 'Withdraw' && <HistoryComp key={historyData.id} value={historyData} />
            })
        }

    </section>
  )
}

export default WalletHistory