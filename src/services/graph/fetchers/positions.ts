import { getAddress } from '@ethersproject/address'
import { ChainId } from 'app/config/rpc'
import { fetcher, TridentPoolData } from 'app/services/graph'
import { getTridentPositionsQuery } from 'app/services/graph/queries'
import { Token } from 'gravityswap_core-sdk' //'@sushiswap/core-sdk'
import { PoolType } from 'gravityswap_trident-sdk' //'@sushiswap/trident-sdk'

interface TridentPositionQueryResult {
  liquidityPositions?: TridentPosition[]
}

interface TridentPosition {
  balance: string
  id: string
  pair: TridentPoolData
}

export interface TridentPositionRow {
  id: string
  assets: Token[]
  type: PoolType
  swapFeePercent: number
  twapEnabled: boolean
  value: number
  legacy?: boolean
}

export const getTridentPositions = async (
  chainId: ChainId = ChainId.ETHEREUM,
  variables: undefined
): Promise<TridentPositionRow[]> => {
  const result: TridentPositionQueryResult = await fetcher(chainId, getTridentPositionsQuery, variables)
  if (!result?.liquidityPositions) return []

  return result.liquidityPositions.map(({ pair, balance }) => ({
    id: getAddress(pair.id),
    assets: [pair.token0, pair.token1].map(
      ({ id, name, symbol, decimals }) => new Token(chainId, getAddress(id), Number(decimals), symbol, name)
    ),
    type: PoolType.ConstantProduct,
    swapFeePercent: Number(pair.swapFee) / 100,
    twapEnabled: Boolean(pair.twapEnabled),
    value: (Number(balance) / Number(pair.liquidity)) * Number(pair.liquidityUSD),
    apy: pair.apr,
    legacy: false,
  }))
}
