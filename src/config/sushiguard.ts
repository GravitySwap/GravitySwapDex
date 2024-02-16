import { ChainId } from './rpc'

export const SUSHIGUARD_RELAY: { [chainId in ChainId]?: string } = {
  [ChainId.ETHEREUM]: 'https://api.sushirelay.com/v1',
  [ChainId.SEPOLIA]: 'https://eth-sepolia.g.alchemy.com/v2/mh6w43djJzFvypQLVYu39UiyNhctBXNL',
}
