import Container from 'app/components/Container'
import useMenu from 'app/components/Header/useMenu'
import Web3Network from 'app/components/Web3Network'
import Web3Status from 'app/components/Web3Status'
import useIsCoinbaseWallet from 'app/hooks/useIsCoinbaseWallet'
import { useActiveWeb3React } from 'app/services/web3'
import { useNativeCurrencyBalances } from 'app/state/wallet/hooks'
import { NATIVE } from 'gravityswap_core-sdk' //'gravityswap_core-sdk' //'@sushiswap/core-sdk'
import Image from 'next/image'
import React, { FC } from 'react'

import logo from '../../../public/images/Logo_White_Blue.png'
// import globeIcon from '../../../public/images/globe.png'
import Dots from '../Dots'
import Typography from '../Typography'
import { NavigationItem } from './NavigationItem'

const Desktop: FC = () => {
  const menu = useMenu()
  const { account, chainId, library } = useActiveWeb3React()
  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']
  const isCoinbaseWallet = useIsCoinbaseWallet()
  const [showBanner, setShowBanner] = React.useState<boolean>(true)

  return (
    <>
      <header className="header fixed z-20 hidden w-full lg:block">
        <nav>
          <Container maxWidth="full" className="mx-auto">
            <div className="flex items-center justify-between gap-4 px-6 py-2">
              <div className="flex items-center">
                <Image src={logo} alt="Swap logo" width="220px" height="27px" />
              </div>
              <div className="flex gap-4 navbar">
                {menu.map((node) => {
                  return <NavigationItem node={node} key={node.key} />
                })}
              </div>

              <div className="flex items-center justify-end w-auto shadow select-none whitespace-nowrap">
                {account && chainId && (
                  <Typography weight={700} variant="sm" className="px-2 font-bold">
                    {userEthBalance ? (
                      `${userEthBalance?.toSignificant(4)} ${NATIVE[chainId].name}` // @todo: change hardcode
                    ) : (
                      <Dots>FETCHING</Dots>
                    )}
                  </Typography>
                )}

                {library && (library.provider.isMetaMask || isCoinbaseWallet) && (
                  <div className="hidden sm:inline-block">
                    <Web3Network />
                  </div>
                )}

                <Web3Status />

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> */}
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <div />
    </>
  )
}

export default Desktop
