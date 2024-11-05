import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar/navBar'
import SneakerPreview from './components/product/sneakerPreview'

function App() {

  return (
    <>
      <NavBar />
      <div className="content">
        <SneakerPreview />

      </div>
    </>
  )
}

export default App
