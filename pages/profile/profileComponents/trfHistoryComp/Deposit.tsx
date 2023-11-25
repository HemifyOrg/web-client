import React from 'react'
import AllComp from "../miniComponents/AllComp";
import { HISTORY } from '@/utils/dummyDatas/profileIndex';

 interface Data  {
        id: number;
        type: string ;
        medim: string;
        amount: number;
        date: number;
}

const Deposit: React.FC<Data > = () => {
   

  return (
    <section >

        
        {
            HISTORY.map((historyData) => {
                return historyData.type === 'Deposit' && <AllComp key={historyData.id} value={historyData} />
            })
        }

    </section>
  )
}

export default Deposit