import { ChainId } from 'app/config/rpc'

import { Oracle } from './Oracle'

export class BandOracle extends Oracle {
  constructor(chainId: ChainId, address: string, data: string) {
    super(chainId, address, 'Band', data)
  }
}
