import React, { FC } from 'react';
import TransferComp from "../miniComponents/TransferComp";
import { HISTORY } from '@/utils/dummyDatas/profileIndex';

 interface Data  {
  id: number;
    type: string;
    process?: string;
    medium: string;
    amount: number;
    date: Date;
}

const Transfer: React.FC<Data > = () => {
   

  return (
    <section >

        
        {
            HISTORY.map((historyData) => {
                return historyData.type === 'Transfer' && <TransferComp key={historyData.id} value={historyData} />
            })
        }

    </section>
  )
}

export default Transfer