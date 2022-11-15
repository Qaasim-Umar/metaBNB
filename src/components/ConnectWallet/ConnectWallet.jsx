import React from 'react'
import './ConnectWallet.css'

const ConnectWallet = () => {
    return (
        <div className='connect-wallet'>
            <h3 className='connect-wallet-h3'>Connect Wallet</h3>
            <div className="wallets">
                <p className='connect-wallet-p'> Choose your preferred wallet:</p>
                <div className="metamask-wallet">
                    <div className='mm-flex'>
                        <img src={require('../../assets/metamask.png')} alt="metamask" /> <p>  Metamask   </p>
                    </div>
                    <div >
                        <p className="arrow"> <img src={require('../../assets/gt.png')} alt="" /></p>
                    </div>
                </div>
                <div className='walletconnect-wallet'>
                    <div className="wc-flex">
                        <img src={require('../../assets/walletconnect.png')} alt="wallectconnect" />  <p >   WalletConnect   </p>
                    </div>
                    <div>
                        <p className="arrow">  <img src={require('../../assets/gt.png')} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConnectWallet