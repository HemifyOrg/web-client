import Image from "next/image"
import hemifyLogo from "@/public/images/logos/Hemify_Logo.png"
import user_image from "../../public/images/logos/picture_icon.png"
// Import components
// import { MatchCardComponet } from "@/components/home/trending/MatchCardComponet"
import { Footer } from "@/components/footer"

export default function liveMatches() {

    return (
        <div>
            <nav className="flex bg-slate-300 mx-auto w-[80%] py-[0.5rem] px-[1rem] bg-[#FFFCEE] justify-between rounded-b-[1rem]">
            <div className="pt-0.5">
                <Image src={hemifyLogo} alt="Hemify logo" />
            </div>

            <div className="flex">
                {/* search icon */}
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pt-0.5"> <g clip-path="url(#clip0_7064_64206)">
                    <path d="M21.5 21L17.15 16.65M11.5 6C14.2614 6 16.5 8.23858 16.5 11M19.5 11C19.5 15.4183 15.9183 19 11.5 19C7.08172 19 3.5 15.4183 3.5 11C3.5 6.58172 7.08172 3 11.5 3C15.9183 3 19.5 6.58172 19.5 11Z" stroke="#52575C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_7064_64206">
                            <rect x="0.5" width="24" height="24" rx="12" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                {/* icon and amount */}

                <button className="flex rounded-[0.75rem] bg-[#6E5E1B] p-1 ">
                    <Image src={user_image} alt="userImage" className="mr-2"/>
                    <p className="text-[0.75rem] font-bold text-[#FAFAFA] pt-0.5">$7893.02</p>
                </button>
            </div>


        </nav>

            {/* footer starts here*/}
            <Footer />
        </div>
        
    )
}
