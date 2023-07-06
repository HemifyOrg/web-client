import { createTransform } from "redux-persist";
import { AccountState } from "@/features/accountSlice";

const providerAccountTransform = createTransform<any, any>(
  (inboundState: AccountState, _key) => {
    // // Modify the inbound state to remove the 'provider' property
    // const { ...rest } = inboundState;
    // return rest;
  },
  (outboundState: AccountState, _key) => {
    // Add the 'provider' property back to the outbound state during rehydration
    const { address, networkId, balance, usdtBalance } = outboundState;
    return {
      address,
      networkId,
      balance,
      usdtBalance,
      // provider: null, // Exclude the 'provider' property from persistence
    };
  }
);

export default providerAccountTransform;
