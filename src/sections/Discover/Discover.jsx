import React from 'react'
import Connect from '../../components/Connect/Connect'
import './Discover.css'

const Discover = () => {
    return (
        <div className='discover-card'>
            <div className="discover-left">
                <h1 className="discover-h1">Metabnb NFTs</h1>
                <p className="discover-p">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <Connect id='learn-more' />
            </div>
            <div className="discover-right">
                <img src={require('../../assets/threecards.png')} alt="" />
            </div>
        </div>
    )
}
export default Discover