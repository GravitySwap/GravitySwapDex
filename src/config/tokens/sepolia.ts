import { ChainId } from 'app/config/rpc'
import { Token } from 'gravityswap_core-sdk' //'gravityswap_core-sdk' //'@sushiswap/core-sdk'

export const USDC = new Token(ChainId.SEPOLIA, '0xf08A50178dfcDe18524640EA6618a1f965821715', 18, 'USDC', 'USD Coin')
export const WETH = new Token(
  ChainId.SEPOLIA,
  '0xb02E071E0ffBc1707A0D561b5a3DF06872485cc7',
  18,
  'WETH',
  'Wrapped Ether'
)
export const GRAVITY = new Token(
  ChainId.SEPOLIA,
  '0x6C544B1b70A6aa064b5447DF50C5E4f3899cfd4a',
  18,
  'GVT',
  'GravitySwapToken'
)

export const XGRAVITY = new Token(
  ChainId.SEPOLIA,
  '0x580252B7583678A1392C4Af498B5707775B327c6',
  18,
  'xGVT',
  'xGravitySwapToken'
)
