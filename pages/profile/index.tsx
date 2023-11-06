import React, {useState} from 'react'
import Image from "next/image";
import coverImage from '../../public/profile_images/cover_image.png'
import Summary from "./profileComponents/Summary";
import WalletHistory from "./profileComponents/WalletHistory";
import Favourites from "./profileComponents/Favourites";

const ProfilePage = () =>  {

    const [ summary , setSummary ] = useState(true);
    const [ walletHistory , setWalletHistory ] = useState(false);
    const [ favourites , setFavourites ] = useState(false);

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
                        <p className="text-[0.625rem] font-normal text-[#A0A4A8] ">followers</p>

                </div>

                </div>
                <button className="flex h-[3rem] p-[.7rem] text-center text-[#6E5E1B] rounded-[1.5rem] border-2 border-[#6E5E1B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M7.99935 12.9167H6.74935C5.58638 12.9167 5.00489 12.9167 4.53173 13.0602C3.46639 13.3834 2.63272 14.217 2.30955 15.2824C2.16602 15.7555 2.16602 16.337 2.16602 17.5M12.5827 6.25C12.5827 8.32107 10.9038 10 8.83268 10C6.76161 10 5.08268 8.32107 5.08268 6.25C5.08268 4.17893 6.76161 2.5 8.83268 2.5C10.9038 2.5 12.5827 4.17893 12.5827 6.25ZM9.66602 17.5L12.2505 16.7616C12.3742 16.7262 12.4361 16.7085 12.4938 16.682C12.5451 16.6585 12.5938 16.6298 12.6393 16.5965C12.6905 16.5589 12.736 16.5134 12.827 16.4224L18.2077 11.0417C18.783 10.4664 18.783 9.53362 18.2077 8.95831C17.6324 8.38302 16.6997 8.38303 16.1244 8.95833L10.7437 14.339C10.6526 14.43 10.6071 14.4756 10.5695 14.5267C10.5362 14.5722 10.5075 14.6209 10.484 14.6722C10.4575 14.7299 10.4398 14.7918 10.4044 14.9155L9.66602 17.5Z" stroke="#6E5E1B" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="ml-2 text-[.85rem] font-medium">Edit</p>
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

            <div className="md:w-[80%] w-[83%] bg-[#fff] flex justify-between m-auto rounded-[1.5rem] p-[.8rem] mt-[1.75rem]">
                <button className={`${summary ? 'bg-[#6E5E1B] text-white transition' : null} rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {setSummary(true); setFavourites(false); setWalletHistory(false)}}>Summary</button>
                <button className={`${walletHistory ? 'bg-[#6E5E1B] text-white transition' : null} rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {setWalletHistory(true); setFavourites(false); setSummary(false)}}>Wallet History</button>
                <button className={`${favourites ? 'bg-[#6E5E1B] text-white transition' : null} rounded-[1rem] text-[0.925rem] font-medium leading-[0.77775rem] w-[30%] py-2`} onClick={() => {setSummary(false); setFavourites(true); setWalletHistory(false)}}>Favourite</button>

                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            {
                summary ? <Summary /> : null
            }
            {
                walletHistory ? <WalletHistory id={0} type={''} medim={''} amount={0} date={0} /> : null
            }
            {
                favourites ? <Favourites /> : null
            }
            

        </div>
    )
}

export default ProfilePage;
