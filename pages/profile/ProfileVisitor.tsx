import React, {useState} from 'react'
import Image from "next/image";
import coverImage from '../../public/profile_images/cover_image.png'
import Summary from "./profileComponents/Summary";
import Favourites from "./profileComponents/Favourites";

const Visitor = () => {
  const [ favourites , setFavourites ] = useState(false);
  const [ summary, setSummary ] = useState(true);

    // const tabs: any = [
    //     { name: 'Summary' },
    //     { name: 'WalletHistory' },
    //     { name: 'Favourites' },
    //   ];
      // const [selectedTab, setSelectedTab] = useState("Summary");
    

    return (
        <div className="bg-[#E8E8E8]">
            <div className="w-[100%] relative">
                <Image src={coverImage} alt="cover image" className="w-full"/>

                <svg className="cursor-pointer hover:scale-110 absolute right-[2rem] top-[68%]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M4.25 7.25C3.55252 7.25 3.20378 7.25 2.91766 7.32667C2.1412 7.53472 1.53472 8.1412 1.32667 8.91766C1.25 9.20378 1.25 9.55252 1.25 10.25V11.15C1.25 12.4101 1.25 13.0402 1.49524 13.5215C1.71095 13.9448 2.05516 14.289 2.47852 14.5048C2.95982 14.75 3.58988 14.75 4.85 14.75H11.15C12.4101 14.75 13.0402 14.75 13.5215 14.5048C13.9448 14.289 14.289 13.9448 14.5048 13.5215C14.75 13.0402 14.75 12.4101 14.75 11.15V10.25C14.75 9.55252 14.75 9.20378 14.6733 8.91766C14.4653 8.1412 13.8588 7.53472 13.0823 7.32667C12.7962 7.25 12.4475 7.25 11.75 7.25M11 4.25L8 1.25M8 1.25L5 4.25M8 1.25V10.25" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            {/* ------------------------- */}

            <div className="flex justify-between w-[90%] m-auto mt-[1rem]">
                {/* profile image section */}
                <div className="relative block w-[20%] md:w-[14%]">
                    <div className="w-[4.125rem] h-[4.125rem] border-2 border-white bg-black absolute top-[-2rem]" >

                        
                    </div>
                    <p className="flex font-bold text-[0.875rem] absolute bottom-0">@greenlight <svg className="block  mt-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 10 10" fill="none">
                    <g clip-path="url(#clip0_9645_85672)">
                    <path d="M3.96501 1.21492C3.70928 1.43285 3.39132 1.56456 3.05639 1.59129C2.27479 1.65366 1.65415 2.27431 1.59177 3.0559C1.56505 3.39083 1.43334 3.70879 1.21541 3.96452C0.706843 4.5613 0.706843 5.43903 1.21541 6.0358C1.43334 6.29153 1.56505 6.6095 1.59177 6.94443C1.65415 7.72602 2.27479 8.34667 3.05639 8.40904C3.39132 8.43577 3.70928 8.56747 3.96501 8.78541C4.56179 9.29397 5.43952 9.29397 6.03629 8.78541C6.29202 8.56747 6.60998 8.43577 6.94491 8.40904C7.72651 8.34667 8.34716 7.72602 8.40953 6.94443C8.43626 6.6095 8.56796 6.29153 8.78589 6.0358C9.29446 5.43903 9.29446 4.5613 8.78589 3.96452C8.56796 3.70879 8.43626 3.39083 8.40953 3.0559C8.34716 2.27431 7.72651 1.65366 6.94491 1.59129C6.60998 1.56456 6.29202 1.43285 6.03629 1.21492C5.43952 0.706355 4.56179 0.706355 3.96501 1.21492Z" fill="#542A8F"/>
                    <path d="M3.75065 5.00016L4.58398 5.8335L6.45898 3.9585M3.05639 1.59129C3.39132 1.56456 3.70928 1.43285 3.96501 1.21492C4.56179 0.706355 5.43952 0.706355 6.03629 1.21492C6.29202 1.43285 6.60998 1.56456 6.94491 1.59129C7.72651 1.65366 8.34716 2.27431 8.40953 3.0559C8.43626 3.39083 8.56796 3.70879 8.78589 3.96452C9.29446 4.5613 9.29446 5.43903 8.78589 6.0358C8.56796 6.29153 8.43626 6.6095 8.40953 6.94443C8.34716 7.72602 7.72651 8.34667 6.94491 8.40904C6.60998 8.43577 6.29202 8.56747 6.03629 8.78541C5.43952 9.29397 4.56179 9.29397 3.96501 8.78541C3.70928 8.56747 3.39132 8.43577 3.05639 8.40904C2.27479 8.34667 1.65415 7.72602 1.59177 6.94443C1.56505 6.6095 1.43334 6.29153 1.21541 6.0358C0.706843 5.43903 0.706843 4.5613 1.21541 3.96452C1.43334 3.70879 1.56505 3.39083 1.59177 3.0559C1.65415 2.27431 2.27479 1.65366 3.05639 1.59129Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_9645_85672">
                    <rect width="10" height="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg> 
                    </p>
                </div>

                <div className="flex justify-between text-center bg-[#FAFAFA] rounded-[0.5rem] px-[.4rem]">

                    <div className="p-[1rem]"> 
                        <p className="text-[0.75rem] font-bold ">50</p>
                        <p className="text-[0.625rem] font-normal text-[#A0A4A8] ">followers</p>
                    </div>
                    <div className="border-[#E8E8E8] border-[.1rem]"></div>
                    <div className="p-[1rem]">
                        <p className="text-[0.75rem] font-bold">120</p>
                        <p className="text-[0.625rem] font-normal text-[#A0A4A8] ">following</p>

                </div>

                </div>
                <button className="flex h-[3rem] p-[.7rem] text-center text-[#6E5E1B] rounded-[1.5rem] border-2 border-[#6E5E1B]">
                <p className="text-[.85rem] font-medium">Follow</p>
                </button>
            </div>

            {/* MEDIA LINKS */}
            <div className="flex justify-between w-[8%] md:w-[4%] m-auto mt-[1rem]">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.8474 3.5532C11.9607 3.13987 11.0007 2.83987 10.0007 2.66653C9.99196 2.66625 9.98324 2.6679 9.97518 2.67136C9.96711 2.67481 9.95991 2.67999 9.95406 2.68653C9.83406 2.90653 9.69406 3.1932 9.60073 3.4132C8.54006 3.2532 7.4614 3.2532 6.40073 3.4132C6.3074 3.18653 6.1674 2.90653 6.04073 2.68653C6.03406 2.6732 6.01406 2.66653 5.99406 2.66653C4.99406 2.83987 4.04073 3.13987 3.1474 3.5532C3.14073 3.5532 3.13406 3.55987 3.1274 3.56653C1.31406 6.27987 0.814063 8.91987 1.06073 11.5332C1.06073 11.5465 1.0674 11.5599 1.08073 11.5665C2.28073 12.4465 3.43406 12.9799 4.57406 13.3332C4.59406 13.3399 4.61406 13.3332 4.62073 13.3199C4.8874 12.9532 5.1274 12.5665 5.33406 12.1599C5.3474 12.1332 5.33406 12.1065 5.3074 12.0999C4.9274 11.9532 4.5674 11.7799 4.21406 11.5799C4.1874 11.5665 4.1874 11.5265 4.2074 11.5065C4.28073 11.4532 4.35406 11.3932 4.4274 11.3399C4.44073 11.3265 4.46073 11.3265 4.47406 11.3332C6.7674 12.3799 9.24073 12.3799 11.5074 11.3332C11.5207 11.3265 11.5407 11.3265 11.5541 11.3399C11.6274 11.3999 11.7007 11.4532 11.7741 11.5132C11.8007 11.5332 11.8007 11.5732 11.7674 11.5865C11.4207 11.7932 11.0541 11.9599 10.6741 12.1065C10.6474 12.1132 10.6407 12.1465 10.6474 12.1665C10.8607 12.5732 11.1007 12.9599 11.3607 13.3265C11.3807 13.3332 11.4007 13.3399 11.4207 13.3332C12.5674 12.9799 13.7207 12.4465 14.9207 11.5665C14.9341 11.5599 14.9407 11.5465 14.9407 11.5332C15.2341 8.5132 14.4541 5.8932 12.8741 3.56653C12.8674 3.55987 12.8607 3.5532 12.8474 3.5532ZM5.68073 9.93987C4.99406 9.93987 4.42073 9.30653 4.42073 8.52653C4.42073 7.74653 4.98073 7.1132 5.68073 7.1132C6.3874 7.1132 6.9474 7.7532 6.94073 8.52653C6.94073 9.30653 6.38073 9.93987 5.68073 9.93987ZM10.3274 9.93987C9.64073 9.93987 9.0674 9.30653 9.0674 8.52653C9.0674 7.74653 9.6274 7.1132 10.3274 7.1132C11.0341 7.1132 11.5941 7.7532 11.5874 8.52653C11.5874 9.30653 11.0341 9.93987 10.3274 9.93987Z" fill="#A0A4A8"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M5.026 15.0002C11.064 15.0002 14.367 9.9972 14.367 5.6662C14.367 5.5262 14.367 5.3842 14.361 5.2442C15.0041 4.77869 15.5591 4.20236 16 3.5422C15.3993 3.80706 14.7628 3.98161 14.111 4.0602C14.7975 3.64984 15.3117 3.00417 15.558 2.2432C14.913 2.62533 14.207 2.89358 13.471 3.0362C12.9762 2.50923 12.3214 2.16012 11.6081 2.04296C10.8948 1.9258 10.1627 2.04713 9.52534 2.38814C8.88796 2.72916 8.38081 3.27083 8.08245 3.92927C7.78409 4.5877 7.71118 5.32614 7.875 6.03021C6.56974 5.96476 5.29282 5.62567 4.12704 5.03495C2.96127 4.44422 1.93268 3.61505 1.108 2.6012C0.68934 3.32429 0.561574 4.17961 0.750646 4.99347C0.939718 5.80734 1.43145 6.51873 2.126 6.9832C1.60554 6.96552 1.09652 6.82576 0.64 6.5752V6.6202C0.640897 7.37769 0.903307 8.11163 1.38287 8.69796C1.86244 9.2843 2.52975 9.68708 3.272 9.83821C2.99026 9.91582 2.69923 9.95451 2.407 9.95321C2.20098 9.95383 1.99538 9.93474 1.793 9.8962C2.00279 10.5483 2.41127 11.1184 2.96125 11.5267C3.51122 11.935 4.17513 12.1611 4.86 12.1732C3.69656 13.087 2.2594 13.5826 0.78 13.5802C0.519321 13.5813 0.258823 13.5663 0 13.5352C1.50151 14.4925 3.2453 15.0008 5.026 15.0002Z" fill="#A0A4A8"/>
            </svg>
            </div>

            {/* ------MENU------ */}
            
            <div className="md:w-[80%] w-[83%] bg-[#fff] flex justify-between m-auto rounded-[1.5rem] p-[.8rem] mt-[1.75rem]">
                <button className={`${summary ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[46%] py-2`} onClick={() => {setSummary(true); setFavourites(false)}}>Summary</button>
                <button className={`${favourites ? 'bg-[#6E5E1B] text-white transition' : null} hover:border-[#6E5E1B] border-[.1rem] rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[46%] py-2`}  onClick={() => {setSummary(false); setFavourites(true)}}>Wallet History</button>
          </div>

          {
            summary ? <Summary /> : null
          }
          {
            favourites ? <Favourites /> : null
          }
      </div>
  )
}

export default Visitor