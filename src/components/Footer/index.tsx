// import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, InstagramIcon, MediumIcon, TwitterIcon } from 'app/components/Icon'
import LanguageSwitch from 'app/components/LanguageSwitch'
// import Typography from 'app/components/Typography'
// import { Feature } from 'app/enums'
// import { featureEnabled } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

// import globeIcon from '../../assets/globe.png'
// import Container from '../Container'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()

  return (
    <div className="z-10 footer">
      <div className="flex justify-content-between mx-5">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Ecosystem<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Governance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Developers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Jobs
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="https://twitter.com/sushiswap" target="_blank" rel="noreferrer">
            <TwitterIcon width={16} className="text-low-emphesis" />
          </a>
          <a href="https://instagram.com/instasushiswap" target="_blank" rel="noreferrer">
            <InstagramIcon width={16} className="text-low-emphesis" />
          </a>
          <a href="https://medium.com/sushiswap-org" target="_blank" rel="noreferrer">
            <MediumIcon width={16} className="text-low-emphesis" />
          </a>
          <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noreferrer">
            <DiscordIcon width={16} className="text-low-emphesis" />
          </a>
        </div>
      </div>
      <div className="flex justify-content-between align-items-center mx-5 mt-2">
        <h5>Powered by Blast network.</h5>
        <div className="flex">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  )
}

export default Footer
