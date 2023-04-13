import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: 'Bidz and Bazaar',
    infura_id: process.env.INFURA_KEY,
    chain_id: process.env.CHAIN_ID,
    network_name: process.env.NETWORK_NAME,
    usdt_contract_address: '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02',
  })
}
