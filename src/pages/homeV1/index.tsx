import { useLingui } from '@lingui/react'
// import { TridentBody } from 'app/layouts/Trident'
import { useActiveWeb3React } from 'app/services/web3'
// import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'

import Discord from '../../../public/images/Discord.png'
import ExpandCircle from '../../../public/images/expand_circle_right.png'
import Github from '../../../public/images/Github.png'
import logo from '../../../public/images/Logo_White_Blue.png'
import sync from '../../../public/images/sync_alt.png'
import Telegram from '../../../public/images/Telegram.png'
import Twitter from '../../../public/images/Twitter.png'

const HomePage: FC = () => {
  const { account } = useActiveWeb3React()
  const { i18n } = useLingui()
  return (
    <>
      <div className="wrapper">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 .col-lg-4">
                <div className="heading-img flex align-items-center banner-image">
                  <Image src={logo} width={450} height={50} alt="logo" />
                  <Image src={sync} width={150} height={100} alt="sync" />
                </div>
                <div className="heading-text">
                  <h1>
                    <span>Trade in the Orbit of Decentralised Finance</span>
                  </h1>
                  <p>Buy, Sell, and Explore the Universe of Tokens and NFTs</p>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="#">
                          <Image src={Telegram} alt="Telegram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image src={Github} alt="GitHub" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image src={Twitter} alt="Twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image src={Discord} alt="Discord" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ecosystem with-border">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 d-flex justify-content-start">
                <div className="heading-wrap">
                  <div className="heading-img flex align-items-center">
                    <h3>Gravity Swap</h3>
                    <Image src={ExpandCircle} width={80} height={80} alt="Expand Circle" />
                  </div>
                  <h3>Ecosystem</h3>
                </div>
              </div>
              <div className="col-12 col-md-4 justify-content-end">
                <div className="fix-width-wrapper">
                  <h2>GravitySwap</h2>
                  <p>
                    Elevate your trading experience across the cosmos with our decentralized exchange, where innovation
                    meets security in the vast expanse of DeFi space.
                  </p>
                </div>
              </div>
              <div className="col-12 protocol d-flex justify-content-end">
                <div className="heading-wrap">
                  <div className="heading-img flex align-items-center">
                    <Image src={ExpandCircle} width={80} height={80} alt="Expand Circle" />
                    <h2>
                      Protocol <span>Analytics</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ecosystem documentation">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="records">
                  <h1>
                    $489B+<span>Trade Volume</span>
                  </h1>
                  <h1>
                    71M+<span>All Time Trades</span>
                  </h1>
                  <h1>
                    300+<span>Integrations</span>
                  </h1>
                  <h1>
                    4,400+<span>Community Delegates</span>
                  </h1>
                </div>
              </div>
              <div className="col-12 col-md-8 flex justify-content-start">
                <div className="heading-wrap">
                  <div className="heading-img flex align-items-center">
                    <h3>Developer</h3>
                    <Image src={ExpandCircle} width={80} height={80} alt="Expand Circle" />
                  </div>
                  <h3>Documentation</h3>
                </div>
              </div>
              <div className="col-12 col-md-4 justify-content-end">
                <div className="fix-width-wrapper">
                  <h2>Welcome to GravitySwap Documentation</h2>
                  <p>
                    Your stellar guide through the universe of trading, staking, and building on our decentralized
                    platform, designed to empower users and developers alike
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
