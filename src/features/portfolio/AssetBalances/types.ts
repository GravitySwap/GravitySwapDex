import { Currency, CurrencyAmount } from 'gravityswap_core-sdk' //'@sushiswap/core-sdk'

export interface Assets {
  asset: CurrencyAmount<Currency>
  strategy?: { token: string; apy: number; targetPercentage: number; utilization: number }
}
