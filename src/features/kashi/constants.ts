import { Fraction, Percent } from 'gravityswap_core-sdk' //'gravityswap_core-sdk' //'@sushiswap/core-sdk'

export const LTV = new Fraction(75, 100)
export const DEFAULT_BORROW_SLIPPAGE_TOLERANCE = new Percent(50, 10_000)
export const PADDING = new Fraction(95, 100)