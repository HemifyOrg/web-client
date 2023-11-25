// HistoryComp.tsx
import React from 'react';
import Image from 'next/image';
import depositIcon  from "../../../../public/profile_images/depositIcon.png"
import withdrawIcon  from "../../../../public/profile_images/withdrawIcon.png"
import transferIcon  from "../../../../public/profile_images/transferIcon.png"

interface DataProps {
  value : {
    id: number;
    type: string;
    process?: string;
    medium: string ;
    amount: number;
    date: Date;
  };
}

const AllComp: React.FC<DataProps> = ({ value }) => {

  const icon: any = value.type === 'Deposit' ? depositIcon : value.type === 'Transfer' ? transferIcon : withdrawIcon;
  const currentDate: Date = value.date;
  const formattedDate = currentDate.toLocaleString();

  return (
    <div className='flex justify-between md:w-[80%] w-[83%] m-auto p-[.5rem] mb-2 rounded-[0.75rem] bg-[#FAFAFA]'>
        <div className='flex justify-between'>
            <div className='w-[2rem] h-[2rem] bg-[#E8E8E8] rounded-[0.75rem] mt-1 mr-1'><Image className={`${value.type === 'Transfer' ? 'm-auto mt-2' : null}`}  src={icon} alt='icon' /></div>
            <div >
                <p className='text-[#000] text-[0.875rem] font-normal leading-[1.5rem]'>{value.type === 'Transfer' ? value.process : value.type}</p>
                <p className='text-[#A0A4A8] font-normal text-[0.75rem] leading-[1rem]'>{value.medium}</p>
            </div>
        </div>

        {
          value.type === 'Transfer' ? 
          <div className='text-right'>
            <p className={`${value.medium === 'Received' ? 'text-[#2AC769]' : 'text-[#F33]'} text-[0.875rem] font-bold leading-[1.5rem]`}>{value.medium === 'Received' ? '+' : '-'} ${value.amount} </p>
            <p className='text-[#A0A4A8] font-normal text-[0.75rem]'>{formattedDate} </p>
        </div> :
        <div className='text-right'>
        <p className={`${value.type === 'Deposit' ? 'text-[#2AC769]' : 'text-[#F33]'} text-[0.875rem] font-bold leading-[1.5rem]`}>{value.type === 'Deposit' ? '+' : '-'} ${value.amount} </p>
        <p className='text-[#A0A4A8] font-normal text-[0.75rem]'>{formattedDate} </p>
    </div>
        }
    </div>
  );
};

export default AllComp;