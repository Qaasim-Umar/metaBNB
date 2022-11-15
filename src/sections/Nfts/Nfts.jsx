import React from 'react'
import Card from '../../components/Card/Card'
import './Nfts.css'

const Nfts = () => {
  return (
    <div className='nfts-card'>
      <h1 className='nfts-h1'>Inspiration for your next adventure</h1>
      <div className="nfts-grid">
        <Card image={require('../../assets/localbrick.png')} />
        <Card image={require('../../assets/tallhut.png')} />
        <Card image={require('../../assets/ultramodern.png')} />
        <Card image={require('../../assets/mordern.png')} />
        <Card image={require('../../assets/tower.png')} />
        <Card image={require('../../assets/clockcity.png')} />
        <Card image={require('../../assets/treehut.png')} />
        <Card image={require('../../assets/city.png')} />
      </div>
    </div>
  )
}

export default Nfts