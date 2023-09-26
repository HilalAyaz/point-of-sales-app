// src\Pages\Home.js
import React, { useState } from 'react'
import Header from '../Components/Header'
import Table from '../Components/Table'
import productsData from '../Data/products.json'
import CustomerForm from '../Components/CustomerForm';
import PaymentForm from '../Components/PaymentForm';

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomer(customerId);
  };

  const handleProductSelect = productId => {
    const selectedProduct = productsData.find(
      product => product.id === productId
    )
    setSelectedProducts([...selectedProducts, selectedProduct])
  }

  const handleDelete = productId => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
    setCart(updatedCart)
  }

  

  const handleClearCart = () => {
    setCart([])
  }

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === productId) {
        return { ...cartItem, quantity: parseInt(newQuantity) }
      }
      return cartItem
    })
    setCart(updatedCart)
  }
  const handleAddToCart = (selectedProduct, quantity) => {
    const existingCartItem = cart.find(item => item.id === selectedProduct.id);
    if (existingCartItem) {
      const updatedCart = cart.map(item => 
        item.id === selectedProduct.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...selectedProduct, quantity }]);
    }
  };
  

  return (
    <div className='container mt-4'>
      <h1>Welcome to the POS System</h1>
      <div className='container'>
        <Header
          selectedProducts={selectedProducts}
          handleProductSelect={handleProductSelect}
          cart={cart}
          handleAddToCart={handleAddToCart}
          clearCart={handleClearCart}
        />
        <Table
          selectedProducts={cart} // Pass the cart instead of selectedProducts
          handleDelete={handleDelete}
          handleQuantityChange={handleQuantityChange}
        />
        <CustomerForm
          selectedCustomer={selectedCustomer}
          selectCustomer={handleSelectCustomer}
        />
        <PaymentForm/>
      </div>
    </div>
  )
}

export default Home
