import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <section>
                <div className='footer-logo'><span><img src={require('../../assets/logowhite.png')} alt='logo' /></span></div>
                <div className='footer-social'><span><img src={require('../../assets/facebook.png')} alt='logo' /></span><span><img src={require('../../assets/instagram.png')} alt='instagram-logo' /></span><span><img src={require('../../assets/twitter.png')} alt='twitter-logo' /></span></div>
                <p>&copy; 2022 Metabnb</p>
            </section>
            <section>
                <h4>Community</h4>
                <ul className='footer-ul'>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Lanlords</li>
                    <li>Discord</li>
                </ul>
            </section>
            <section>
                <h4>Places</h4>
                <ul className='footer-ul'>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
            </section>
            <section>
                <h4>About us</h4>
                <ul className='footer-ul'>
                    <li>Road map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </section>
        </div>
    )
}

export default Footer