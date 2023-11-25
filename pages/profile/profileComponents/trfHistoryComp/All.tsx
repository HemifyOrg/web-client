import React from 'react'
import AllComp from "../miniComponents/AllComp";
import { HISTORY } from '@/utils/dummyDatas/profileIndex';

 interface Data  {
        id: number;
        type: string ;
        process?: string;
        medim: string;
        amount: number;
        date: number;
}

const All: React.FC<Data > = () => {
   

  return (
    <section >

        
        {
            HISTORY.map((historyData) => {
                return <AllComp key={historyData.id} value={historyData} />
            })
        }

    </section>
  )
}

export default All