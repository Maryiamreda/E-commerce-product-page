import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar/navBar'
import SneakerPreview from './components/product/sneakerPreview'
import SneakerCard from './components/product/sneakerCard'

function App() {

  return (
    <>
      <NavBar />
      <div className="content">
        <SneakerPreview />
        <SneakerCard />
      </div>
    </>
  )
}

export default App
