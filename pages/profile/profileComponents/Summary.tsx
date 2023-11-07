

const Summary = () => {
    const progressMax = 100;
    // you can handle this with use state sha
    const progressValue = 70;

  return (
    <section className="w-[83%] m-auto mt-[1.5rem]">

        <p className="text-center text-[1rem] font-semibold mb-[0.8rem]">My Statistics</p>

        <div className="bg-white p-2 rounded-xl">
            <div className="bg-[#E8E8E8] mb-2 text-center rounded-lg">
                <p className="text-[#542A8F] text-[1.5rem] font-bold leading-[2.5rem]">81%</p>
                <p className="text-[#52575C] text-[0.75rem] font-normal">win rate</p>
                <progress max={progressMax} value={progressValue} className="w-[80%] "></progress>
            </div>

            <div className="flex justify-between">
                <div className="bg-[#E8E8E8] w-[20%] text-center p-1 rounded-lg cursor-pointer">
                    <p className="text-[0.875] font-bold leading-[1.5rem] text-[#000]">114</p> 
                    <p className="text-[#52575C] text-[0.75rem] mt-2">Wagers</p>
                </div>
                <div className="bg-[#E8E8E8] w-[20%] text-center p-1 rounded-lg cursor-pointer">
                    <p className="text-[0.875] font-bold leading-[1.5rem] text-[#2AC769]">96</p>
                    <p className="text-[#52575C] text-[0.75rem] mt-2">Won</p>
                </div>
                <div className="bg-[#E8E8E8] w-[20%] text-center p-1 rounded-lg cursor-pointer">
                    <p className="text-[0.875] font-bold leading-[1.5rem] text-[#F33]">13</p> 
                    <p className="text-[#52575C] text-[0.75rem] mt-2">Lost</p>
                </div>
                <div className="bg-[#E8E8E8] w-[20%] text-center p-1 rounded-lg cursor-pointer">
                    <p className="text-[0.875] font-bold leading-[1.5rem] text-[#F59E0B]">5</p> 
                    <p className="text-[#52575C] text-[0.75rem] mt-2">Void</p>
                </div>
            </div>
        </div>

        <div className="flex justify-between px-1 mt-[1.75rem] mb-[1.25rem]">
            <p className="text-[#000] text-[1rem] font-semibold leading-[1.5rem]">My Performance</p>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 9L12 15L18 9" stroke="#A0A4A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="ml-2 text-[#A0A4A8] font-normal leading-[1.5rem] text-[0.875rem]">All time</p>
            </div>
        </div>

        <div className="bg-white p-2 rounded-xl mb-2">
            <div className=" text-center rounded-lg flex justify-between">

                <div className="bg-[#E8E8E8] w-[49%] rounded-[0.5rem] p-2">
                    <p className="text-[#542A8F] text-[1rem] font-bold leading-[1rem]">$9000<svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path d="M12.25 10L8.25 6L4.25 10" stroke="#2AC769" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></p>
                    < p className="mt-3 text-[#52575C] text-[0.75rem] leading-[1rem] font-normal">Profit</p>
                </div>
                <div className="bg-[#E8E8E8] w-[49%] rounded-[0.5rem] p-2">
                    <p  className="text-[#542A8F] text-[1rem] font-bold leading-[1rem]">57%<svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path d="M12.25 10L8.25 6L4.25 10" stroke="#2AC769" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></p>
                    < p className="mt-3 text-[#52575C] text-[0.75rem] leading-[1rem] font-normal">Yield</p>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Summary