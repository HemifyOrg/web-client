
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export default function handler(req: any, res: any) {
  res.status(200).json({
    name: 'Hemify',
    infuraId: process.env.INFURA_KEY,
    chainId: process.env.CHAIN_ID,
    networkName: process.env.NETWORK_NAME,
    usdtContractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  })
}
