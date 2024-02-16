import { selectBalancesCurrency } from 'app/features/portfolio/portfolioSlice'
import { useCurrency } from 'app/hooks/Tokens'
import { Currency } from 'gravityswap_core-sdk' //'@sushiswap/core-sdk'
import { useSelector } from 'react-redux'

type UseBalancesSelectedCurrency = () => Currency | undefined
export const useBalancesSelectedCurrency: UseBalancesSelectedCurrency = () => {
  const currency = useSelector(selectBalancesCurrency)
  return useCurrency(currency) ?? undefined
}
