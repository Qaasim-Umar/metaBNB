import React from 'react'
import Card from '../components/Card/Card'
import Submenu from '../components/Submenu/Submenu'
import './Nft.css'

const nft = () => {
  return (
    <div>
      <Submenu/>
      <div className="locations">
      <Card image={require('../assets/tower.png')} />
      <Card image={require('../assets/clockcity.png')} />
      <Card image={require('../assets/treehut.png')} />
      <Card image={require('../assets/city.png')} />
      <Card image={require('../assets/localbrick.png')} />
      <Card image={require('../assets/tallhut.png')} />
      <Card image={require('../assets/ultramodern.png')} />
      <Card image={require('../assets/mordern.png')} />
      <Card image={require('../assets/market.png')} />
      <Card image={require('../assets/forest.png')} />
      <Card image={require('../assets/kitchenn.png')} />
      <Card image={require('../assets/snow.png')} />
      <Card image={require('../assets/party.png')} />
      <Card image={require('../assets/river.png')} />
      <Card image={require('../assets/mansion.png')} />
      <Card image={require('../assets/christmas.png')} />
      </div>
    </div>
  )
}

export default nft