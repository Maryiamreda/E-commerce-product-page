import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/navBar';
import SneakerPreview from './components/product/sneakerPreview';
import SneakerCard from './components/product/sneakerCard';
import { CartProvider } from './context/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <NavBar />
      <div className="content">
        <SneakerPreview />
        <SneakerCard />
      </div>
    </CartProvider>
  );
}

export default App;
