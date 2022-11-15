import React from 'react'
import Popup from 'reactjs-popup';
import Discover from '../sections/Discover/Discover';
import Landing from '../sections/Landing/Landing';
import Nfts from '../sections/Nfts/Nfts';

const Home = () => {
  return (
    <div>
      <Landing />
      <Nfts />
      <Discover />
      <Popup />
    </div>
  )
}

export default Home