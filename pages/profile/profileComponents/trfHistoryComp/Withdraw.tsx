import React from 'react'
import WithdrawComp from "../miniComponents/WithdrawComp";
import { HISTORY } from '@/utils/dummyDatas/profileIndex';

 interface Data  {
        id: number;
        type: string ;
        medim: string;
        amount: number;
        date: number;
}

const Withdraw: React.FC<Data > = () => {
   

  return (
    <section >

        
        {
            HISTORY.map((historyData) => {
                return historyData.type === 'Withdraw' && <WithdrawComp key={historyData.id} value={historyData} />
            })
        }

    </section>
  )
}

export default Withdraw