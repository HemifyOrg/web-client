import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { connectAccount } from '../features/accountSlice'
import { BigNumber, utils } from 'ethers'
import { AppDispatch, RootState } from '@/app/store'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useEffect } from "react";

const WalletListItem = styled.li.attrs({
  className: 'flex flex-col group transition-all items-center justify-center',
})``

export const formatAddress = (address: string | null, padding = 4) => {
  if (address && address.length > 0) {
    return `${address.substr(0, padding + 2)}…${address.substr(padding * -1)}`
  } else {
    return address
  }
}

export const formatBalance = (balanceInWei: any) => {
  return parseFloat(utils.formatEther(BigNumber.from(balanceInWei))).toFixed(4)
}

function ConnectWallet(props: { label: string }) {
  const [showConnectPopup, setShowConnectPopup] = useState(false)
  const dispatch: AppDispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>()
  const account = useSelector((state: RootState) => state.account);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(account && !account.loading && account.address && account.networkId) setIsLoading(false)
  }, [account])

  function onWalletListItemClick(walletName: 'metamask' | 'walletconnect' | 'coinbase') {
    return ({ target }: {target: any}) => {
      setIsLoading(true)
      dispatch(connectAccount({walletType: walletName}))
      target.parentElement.parentElement.removeAttribute('open')
    }
  }

  return (
    <>
      {/* popup */}
      {showConnectPopup && (
      <div className="fixed flex justify-center w-screen h-screen left-0 items-center">

      <div onClick={() => setShowConnectPopup(false)} className="absolute w-full h-full  bg-[#000a] -top-7 lg:-left-8 -left-5 backdrop-blur-md"></div>
          <div className={`${isLoading ? "w-[30%] py-6 px-8" :"lg:w-2/5 w-3/4 py-3 px-5"} transition-all duration-500 z-10 border rounded-xl bg-white border-themeColor`}>
              
              {/* Wallet Connecting Loader */}
              <div className={`flex relative overflow-hidden items-center justify-between transition-all duration-500 ${isLoading? "opacity-100 z-10 h-auto w-auto": "opacity-0 z-[-10] w-0 h-0"}`}>
                <figure className="rounded-full bg-black w-10 h-10"></figure>
                
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-themeColor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>

                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.375 24.1667H29.3958M1.25 5.41667V34.5833C1.25 36.8845 3.11548 38.75 5.41667 38.75H34.5833C36.8845 38.75 38.75 36.8845 38.75 34.5833V13.75C38.75 11.4488 
                  36.8845 9.58334 34.5833 9.58334L5.41667 9.58333C3.11548 9.58333 1.25 7.71785 1.25 5.41667ZM1.25 5.41667C1.25 3.11548 3.11548 1.25 5.41667 1.25H30.4167M30.4167 24.1667C30.4167
                   24.742 29.9503 25.2083 29.375 25.2083C28.7997 25.2083 28.3333 24.742 28.3333 24.1667C28.3333 23.5914 28.7997 23.125 29.375 23.125C29.9503 23.125 30.4167 23.5914 30.4167
                   24.1667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>


              <div className={`flex-col relative gap-4 overflow-hidden transition-all ${!isLoading? "opacity-100 h-auto w-auto z-10": "opacity-0 z-[-10] w-0 h-0"}`}>
              {/* top */}
              <div className="w-full flex flex-col gap-3 justify-center items-center">
                <figure className="w-8 h-8 rounded-full p-1 bg-black shadow-sm"></figure>
                <h4 className="font-semibold">{props.label}</h4>
              </div>
                <fieldset className="flex gap-2 w-full justify-center items-center">
                  <input type="checkbox" id="policy-checkbox" name="policy-checkbox" title="click to accept" />
                  <label htmlFor="policy-checkbox">I have read and accepted the{" "}<a href="#">terms</a> and <a href="#">conditions</a></label>
                </fieldset>
                {/* wallet list */}
                <ul className="flex-wrap w-full justify-center grid grid-cols-2 items-center md:px-24 px-6">
                <WalletListItem onClick={onWalletListItemClick('metamask')}>
                <svg width="50" className="z-10 translate-y-2 group-hover:translate-y-0 transition-all" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_722_1393)">
                    <path d="M48.8381 0.257202L27.3863 16.3388L31.3754 6.86146L48.8381 0.257202Z" fill="#E17726"/>
                    <path d="M1.21208 0.276245L18.6281 6.86269L22.4159 16.4643L1.21208 0.276245ZM40.2051 34.4583L49.6865 34.6412L46.3728 46.046L34.8034 42.8188L40.2051 34.4583ZM9.79461 34.4583L15.1762 42.8188L3.62624 46.0462L0.332703 34.6412L9.79461 34.4583Z" fill="#E27625"/>
                    <path d="M21.901 14.0185L22.2884 26.6978L10.694 26.1634L13.992 21.1224L14.0338 21.0739L21.901 14.0185ZM27.9789 13.8771L35.9662 21.0743L36.0076 21.1226L39.3056 26.1636L27.7137 26.6978L27.9789 13.8771ZM15.5158 34.4951L21.8467 39.4928L14.4925 43.09L15.5158 34.4951ZM34.4853 34.4943L35.4874 43.0902L28.1537 39.4924L34.4853 34.4943Z" fill="#E27625"/>
                    <path d="M28.3156 39.0217L35.7574 42.6726L28.8351 46.0057L28.9069 43.8027L28.3156 39.0217ZM21.6822 39.0233L21.1141 43.7667L21.1608 46.0031L14.2222 42.6726L21.6822 39.0233Z" fill="#D5BFB2"/>
                    <path d="M19.5333 28.3527L21.478 32.4934L14.8571 30.5283L19.5333 28.3527ZM30.4665 28.3531L35.1647 30.5283L28.5222 32.4928L30.4665 28.3531Z" fill="#233447"/>
                    <path d="M16.0218 34.4528L14.9516 43.3642L9.21539 34.6477L16.0218 34.4528ZM33.9785 34.453L40.7851 34.6477L35.0274 43.3646L33.9785 34.453ZM39.4731 25.6594L34.5196 30.7742L30.7004 29.006L28.8719 32.9006L27.6732 26.2033L39.4731 25.6594ZM10.5242 25.6594L22.3264 26.2033L21.1276 32.9006L19.2987 29.0066L15.4998 30.7744L10.5242 25.6594Z" fill="#CC6228"/>
                    <path d="M10.1906 24.6098L15.795 30.3716L15.9891 36.0597L10.1906 24.6098ZM39.8152 24.5995L34.0062 36.0698L34.2249 30.3716L39.8152 24.5995ZM22.0526 24.9608L22.2782 26.3992L22.8355 29.9826L22.4772 40.9883L20.783 32.1471L20.7825 32.0557L22.0526 24.9608ZM27.9446 24.9408L29.2181 32.0557L29.2175 32.1471L27.5191 41.0105L27.4519 38.7935L27.1869 29.9173L27.9446 24.9408Z" fill="#E27525"/>
                    <path d="M34.7229 30.1426L34.5333 35.0846L28.6211 39.7515L27.426 38.896L28.7657 31.9047L34.7229 30.1426ZM15.2974 30.1426L21.234 31.9047L22.5737 38.896L21.3785 39.7515L15.4662 35.0842L15.2974 30.1426Z" fill="#F5841F"/>
                    <path d="M13.091 41.5812L20.6549 45.2122L20.6229 43.6616L21.2558 43.0987H28.742L29.3978 43.6597L29.3493 45.2091L36.8654 41.5903L33.208 44.6523L28.7857 47.7296H21.1951L16.7757 44.6396L13.091 41.5812Z" fill="#C0AC9D"/>
                    <path d="M27.7739 38.5383L28.8433 39.3038L29.47 44.3698L28.5631 43.594H21.4398L20.55 44.3854L21.1562 39.3042L22.226 38.5383H27.7739Z" fill="#161616"/>
                    <path d="M47.4219 0.702393L49.997 8.529L48.3888 16.4427L49.534 17.3376L47.9843 18.5354L49.149 19.4467L47.6069 20.8695L48.5536 21.5642L46.041 24.5372L35.7357 21.4971L35.6464 21.4486L28.2202 15.1018L47.4219 0.702393ZM2.5783 0.702393L21.7802 15.1018L14.3538 21.4486L14.2645 21.4971L3.95919 24.5372L1.44661 21.5642L2.39258 20.8701L0.851371 19.4467L2.01373 18.5364L0.440875 17.3352L1.6292 16.4397L0.00323486 8.5294L2.5783 0.702393Z" fill="#763E1A"/>
                    <path d="M35.2315 20.8323L46.1506 24.0532L49.698 35.1304H40.3391L33.8906 35.2127L38.5803 25.9514L35.2315 20.8323ZM14.7684 20.8323L11.419 25.9514L16.1093 35.2127L9.66379 35.1304H0.321594L3.84908 24.0534L14.7684 20.8323ZM31.91 6.80859L28.8559 15.1659L28.2078 26.4556L27.9597 29.9942L27.94 39.0339H22.0597L22.0406 30.0112L21.7918 26.4526L21.1434 15.1659L18.0897 6.80859H31.91Z" fill="#F5841F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_722_1393">
                      <rect width="50" height="47.4856" fill="white" transform="translate(0 0.257202)"/>
                    </clipPath>
                  </defs>
                </svg>
  
  
                    <span className="transition-all -translate-y-5 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">Metamask</span>
                  </WalletListItem>
                  <WalletListItem onClick={onWalletListItemClick('coinbase')}>
                  <svg className="z-10 translate-y-2 group-hover:translate-y-0 transition-all" xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 1024 1024">
                    <circle cx="512" cy="512" r="512" style={{fill:"#0052ff"}}/>
                    <path d="M516.3 361.83c60.28 0 108.1 37.18 126.26 92.47H764C742 
                    336.09 644.47 256 517.27 256 372.82 256 260 365.65 260 512.49S370 768 517.27 768c124.35 0 223.82-80.09 245.84-199.28H642.55c-17.22 
                    55.3-65 93.45-125.32 93.45-83.23 0-141.56-63.89-141.56-149.68.04-86.77 57.43-150.66 140.63-150.66z" fill="#fff" />
                  </svg>
                    <span className="transition-all -translate-y-5 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">Coinbase</span>
                  </WalletListItem>
                <WalletListItem onClick={onWalletListItemClick('walletconnect')}>
                <svg width="50" className="z-10 translate-y-2 group-hover:translate-y-0 transition-all" height="48" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24.8345 3.08997C36.9869 3.08997 46.8361 12.9391 46.8361 25.0916C46.8361 37.244 36.9869 47.0932 24.8345 47.0932C12.682 47.0932 2.83289 37.244 2.83289 25.0916C2.83289 12.9391 12.682 3.08997 24.8345 3.08997Z" fill="url(#paint0_radial_722_1435)"/>
                <path d="M16.816 20.0811C21.2421 15.7581 28.427 15.7581 32.8531 20.0811L33.3859 20.6054C33.6094 20.8202 33.6094 21.1726 33.3859 21.3874L31.5639 23.1665C31.4522 23.2782 31.2717 23.2782 31.16 23.1665L30.4294 22.4531C27.3355 19.4365 22.3335 19.4365 19.2396 22.4531L18.4575 23.218C18.3458 23.3298 18.1653 23.3298 18.0535 23.218L16.2315 21.439C16.0081 21.2241 16.0081 20.8718 16.2315 20.6569L16.816 20.0811ZM36.626 23.7595L38.2503 25.3409C38.4738 25.5557 38.4738 25.9081 38.2503 26.1229L30.9365 33.2649C30.7131 33.4797 30.3521 33.4797 30.1372 33.2649L24.9462 28.1942C24.8947 28.1426 24.8001 28.1426 24.7486 28.1942L19.5576 33.2649C19.3341 33.4797 18.9731 33.4797 18.7583 33.2649L11.4187 26.1229C11.1952 25.9081 11.1952 25.5557 11.4187 25.3409L13.043 23.7595C13.2665 23.5446 13.6274 23.5446 13.8423 23.7595L19.0333 28.8302C19.0849 28.8817 19.1794 28.8817 19.231 28.8302L24.422 23.7595C24.6454 23.5446 25.0064 23.5446 25.2213 23.7595L30.4123 28.8302C30.4638 28.8817 30.5584 28.8817 30.6099 28.8302L35.8009 23.7595C36.0416 23.5446 36.4025 23.5446 36.626 23.7595Z" fill="white"/>
                <defs>
                <radialGradient id="paint0_radial_722_1435" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.83302 25.0923) scale(44.0032)">
                <stop stopColor="#5D9DF6"/>
                <stop offset="1" stopColor="#006FFF"/>
                </radialGradient>
                </defs>
                  </svg>
                  <span className="transition-all -translate-y-5 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">WalletConnect</span>
                  </WalletListItem>
                 </ul>
              </div>
          </div>
        </div>
        )}
      <button className="rounded-full items-center px-4 py-2 flex gap-2 bg-btnImage" type="button" title="connect wallet" onClick={() => setShowConnectPopup(true)}>
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16.6667H20.0133M2 4.66667V23.3333C2 24.8061 3.19391 26 4.66667 26H23.3333C24.8061 26 26 24.8061 26 23.3333V10C26 8.52724 24.8061 7.33334 23.3333 7.33333L4.66667 7.33333C3.19391 7.33333 2 6.13943 2 4.66667ZM2 4.66667C2 3.19391 3.19391 2 4.66667 2H20.6667M20.6667 16.6667C20.6667 17.0349 20.3682 17.3333 20 17.3333C19.6318 17.3333 19.3333 17.0349 19.3333 16.6667C19.3333 16.2985 19.6318 16 20 16C20.3682 16 20.6667 16.2985 20.6667 16.6667Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{props.label}</span>
      </button>
    </>
  )
}
export default ConnectWallet;