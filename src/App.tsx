import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

const App: React.FC = () => {

  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductList/>
      <Cart/>
    </>
  )
}

export default App
