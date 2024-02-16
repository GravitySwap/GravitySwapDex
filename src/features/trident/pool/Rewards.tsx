import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import ListPanel from 'app/components/ListPanel'
import Typography from 'app/components/Typography'
import { ChainId } from 'app/config/rpc'
import { tryParseAmount } from 'app/functions'
import useDesktopMediaQuery from 'app/hooks/useDesktopMediaQuery'
import { useActiveWeb3React } from 'app/services/web3'
// import { SUSHI } from 'gravityswap_core-sdk' //'@sushiswap/core-sdk'
import { GRAVITY } from 'gravityswap_core-sdk'
import React, { FC } from 'react'

const Rewards: FC = () => {
  const { chainId } = useActiveWeb3React()
  const isDesktop = useDesktopMediaQuery()
  const { i18n } = useLingui()

  // TODO ramin:
  // @ts-ignore TYPE NEEDS FIXING
  const rewardCurrency = GRAVITY[chainId]

  return (
    <>
      <div className="flex flex-col gap-3">
        {isDesktop && (
          <div className="flex flex-row justify-between">
            <Typography variant="h3" className="text-high-emphesis" weight={700}>
              {i18n._(t`Rewards`)}
            </Typography>
            <div className="hidden lg:flex lg:flex-col">
              <Typography variant="sm" className="text-high-emphesis">
                Farm APR: <b>12%</b>
              </Typography>
            </div>
          </div>
        )}

        {isDesktop ? (
          <ListPanel
            header={
              <div className="px-5 flex justify-between h-[56px] items-center">
                <Typography className="text-high-emphesis">Token</Typography>
                <Typography className="text-high-emphesis">Amount</Typography>
              </div>
            }
            items={[
              <ListPanel.Item
                key={0}
                left={
                  <div className="flex flex-row items-center gap-4">
                    <CurrencyLogo size={30} currency={rewardCurrency} className="!rounded-full" />
                    <Typography weight={700} className="text-high-emphesis">
                      {rewardCurrency?.symbol}
                    </Typography>
                  </div>
                }
                right={
                  <div className="flex flex-row justify-end gap-1">
                    <Typography weight={700} className="text-high-emphesis">
                      69.74 GRAVITY per Day
                    </Typography>
                  </div>
                }
              />,
            ]}
          />
        ) : (
          <ListPanel
            header={<ListPanel.Header title={i18n._(t`Rewards`)} />}
            items={[
              <ListPanel.Item
                left={<ListPanel.Item.Left amount={tryParseAmount('401.34', GRAVITY[ChainId.SEPOLIA])} />} // SUSHI[ChainId.ETHEREUM]
                right={
                  <div className="flex flex-row justify-end gap-1">
                    <Typography variant="sm" weight={700}>
                      GRAVITY
                    </Typography>
                    <Typography variant="sm" className="text-secondary" weight={700}>
                      {i18n._(t`PER DAY`)}
                    </Typography>
                  </div>
                }
                key={0}
              />,
            ]}
          />
        )}
      </div>
    </>
  )
}

export default Rewards
