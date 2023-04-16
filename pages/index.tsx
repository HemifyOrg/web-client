import Head from 'next/head';
import { useSelector } from 'react-redux';
import { formatBalance } from '@/components/ConnectWallect'

import { RootState } from '../app/store';

export default function Home() {
  const account = useSelector((state: RootState) => state.account);

  return (
    <div>
      <Head>
        <title>Bidz & Bazaar</title>
      </Head>

      <main>
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
