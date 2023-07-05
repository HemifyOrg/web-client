import { useDispatch } from "react-redux";
import { BigNumber, utils } from "ethers";
import { AppDispatch, RootState } from "@/app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { setShowConnectModal } from "@/features/configSlice";

export const formatAddress = (address: string | null, padding = 4) => {
  if (address && address.length > 0) {
    return `${address.substr(0, padding + 2)}…${address.substr(padding * -1)}`;
  } else {
    return address;
  }
};

export const formatBalance = (balanceInWei: any) => {
  return parseFloat(utils.formatEther(BigNumber.from(balanceInWei))).toFixed(4);
};

function ConnectWallet(props: { label: string }) {
  // const [showConnectPopup, setShowConnectPopup] = useState(false);
  const dispatch: AppDispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  return (
    <button
      className="rounded-full items-center transition-all duration-75 active:scale-75 px-3 lg:px-4 py-2 lg:text-base text-sm flex gap-2 bg-btnImage"
      type="button"
      title="connect wallet"
      onClick={() => dispatch(setShowConnectModal(true))}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="lg:stroke-2 stroke-1"
          d="M20 16.6667H20.0133M2 4.66667V23.3333C2 24.8061 3.19391 26 4.66667 26H23.3333C24.8061 26 26 24.8061 26 23.3333V10C26 8.52724 24.8061 7.33334 23.3333 7.33333L4.66667 7.33333C3.19391 7.33333 2 6.13943 2 4.66667ZM2 4.66667C2 3.19391 3.19391 2 4.66667 2H20.6667M20.6667 16.6667C20.6667 17.0349 20.3682 17.3333 20 17.3333C19.6318 17.3333 19.3333 17.0349 19.3333 16.6667C19.3333 16.2985 19.6318 16 20 16C20.3682 16 20.6667 16.2985 20.6667 16.6667Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden lg:flex">{props.label}</span>
    </button>
  );
}
export default ConnectWallet;
