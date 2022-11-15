import React from 'react'
import './Landing.css'
import cards from '../../assets/Group1.svg'
import metamask from '../../assets/metamask.svg'
import mbtoken from '../../assets/mbtoken.svg'
import opensea from '../../assets/opensea.svg'

const Landing = () => {
    return (
        <div className="landing">
            <div className='landing-card'>
                <div className="landing-left">
                    <h1 className="landing-left-h1">
                        Rent a <span>Place</span> away from<span> Home</span> in the <span>Metaverse</span>
                    </h1>
                    <p className="landing-left-p">
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className="landing-left-search">
                        <input type="search" name="" id="landing-left-search" placeholder='search for location' />
                        <button type='submit' id='landing-left-submitbtn'>Search</button>
                    </div>
                </div>
                <div className="landing-right">
                    <img src={cards} alt="cards" />
                </div>
            </div>
            <div className="featured">
                <img src={mbtoken} alt="mbtoken-logo" />
                <img src={metamask} alt="metamask-logo" />
                <img src={opensea} alt="opensea" />
            </div>
        </div>
    )
}

export default Landing