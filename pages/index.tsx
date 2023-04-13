import { loadConfig } from '../features/configSlice';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import ConnectWallet, { formatAddress, formatBalance } from '@/components/ConnectWallect'

import { useEffect } from 'react';
import { AppDispatch, RootState } from '../app/store';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

export default function Home() {
  const config = useSelector((state: RootState) => state.config);
  const account = useSelector((state: RootState) => state.account);

  const dispatch: AppDispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>()
  useEffect(() => {
    dispatch(loadConfig());
  }, [dispatch, config]);

  return (
    <div>
      <Head>
        <title>Bidz & Bazaar</title>
      </Head>

      <main>
        <header className="flex justify-between items-center px-10 py-5">
          <div className="h-10 w-10 bg-amber-40 rounded-full"></div>
          {account.connected ? (
            <div className="space-x-3 font-mono">
              <span className="rounded-md py-1 px-2 bg-gradient-to-r from-pink-400 to-amber-200 font-mono tracking-wide">
                {formatAddress(account.address)}
              </span>
            </div>
          ) : (
            <ConnectWallet label="Login" />
          )}
        </header>

        {account.connected && (
          <div className="px-10">
            <h1 className="text-3xl font-semibold mb-5">Token Balance</h1>

            <div className="flex flex-col">
              <span>{formatBalance(account.balance)} ETH</span>
              <span>{formatBalance(account.usdtBalance)} USDT</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
