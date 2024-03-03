import React from "react";
import Image from "next/image";
import trollImage from '../../public/communityImages/communityChatBubble.png'
import trophy from '../../public/communityImages/communityTrophy.png'
import learnImg from '../../public/communityImages/communityLearn.png'
import megaPhone from '../../public/communityImages/communityMegaphone.png'
import faq from '../../public/communityImages/communityFaq.png'

const CommunityPage = () => {
  return (
  <div>
    <div className="mt-24 ">
      <p className="font-bold text-[1.5rem] text-center">Community</p>

      <div className="flex justify-around h-[8rem] mt-4">
        
        <div className="bg-[#9276B9] rounded-lg w-[40%] flex flex-col justify-center items-center relative cursor-pointer hover:scale-110 transition">
          <p className="text-center  z-50 text-white font-bold">Troll Hub</p>
          <Image src={trollImage} alt="chat bubble" className="absolute bottom-0 right-0 z-0" />
        </div>

        <div  className="bg-[#FFEB9B] w-[40%] flex flex-col justify-center items-center relative rounded-lg cursor-pointer hover:scale-110 transition">
          <p className="text-center  z-50 text-black font-bold">Leaderboard</p>
          <Image src={trophy} alt="trophy" className="absolute bottom-0 right-0 z-0"  />
        </div>

      </div>

      <div className="flex justify-around h-[8rem] mt-4">
        
        <div className="bg-[#FF99A0] rounded-lg w-[40%] flex flex-col justify-center items-center relative cursor-pointer hover:scale-110 transition">
          <p className="text-center  z-50 text-white font-bold">Learn</p>
          <Image src={learnImg} alt="learn image" className="absolute bottom-0 right-0 z-0" />
        </div>

        <div  className="bg-[#CBCBCC] w-[40%] flex flex-col justify-center items-center relative rounded-lg cursor-pointer hover:scale-110 transition">
          <p className="text-center  z-50 text-black font-bold">Promotions</p>
          <Image src={megaPhone} alt="megaphone" className="absolute bottom-0 right-0 z-0"  />
        </div>

      </div>

      <div className="flex justify-around h-[8rem] mt-4">
        
        <div className="bg-[#A0A4A8] rounded-lg w-[40%] flex flex-col justify-center items-center relative mb-5 cursor-pointer hover:scale-110 transition">
          <p className="text-center  z-50 text-white font-bold">FAQ's</p>
          <Image src={faq} alt="FAQ's Image" className="absolute bottom-0 right-0 z-0" />
        </div>

      </div>
      <button  className="text-center text-white w-[90%] bg-[#9276B9] block m-auto mb-4 p-3 rounded-lg hover:scale-105 transition">Help & Support</button>
    </div>
  </div>
    )
};

export default CommunityPage;
