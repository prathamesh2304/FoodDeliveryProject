// Home.jsx
import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { useState } from 'react'


const Home = () => {
  const [category, setCatergory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCatergory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home