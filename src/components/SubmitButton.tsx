'use client';
import React, { useState } from 'react';

type CartItem = {
  id: number;
  quantity: number;
};

type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  cart: CartItem[];
  menuItems: MenuItem[];
  getTotal: () => string;
  clearCart: () => void;
};


export default function SubmitButton({ cart, menuItems, getTotal, clearCart }: Props) {
  const [loading, setLoading] = useState(false);

  // Function to generate order ID starting from "001"
  const getNextOrderId = (): string => {
    const lastId = localStorage.getItem('lastOrderId');
    const nextIdNumber = lastId ? parseInt(lastId, 10) + 1 : 1;
    localStorage.setItem('lastOrderId', nextIdNumber.toString());
    return nextIdNumber.toString().padStart(3, '0'); // Pads with zeros, e.g. "001"
  };

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert("❌ You didn't select any items to order.");
      return;
    }

    setLoading(true);

    const orderData = cart.map(item => {
      const menuItem = menuItems.find(m => m.id === item.id);
      return {
        name: menuItem?.name,
        quantity: item.quantity,
        price: menuItem?.price,
      };
    });

    const existing = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: getNextOrderId(),
      customer: 'Guest', // You can add customer details form later
      items: orderData,
      total: getTotal(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('orders', JSON.stringify([...existing, newOrder]));

    alert('✅ Order submitted successfully!');
    clearCart();
    setLoading(false);
  };

  return (
    <button
      className={`mt-4 py-2 px-6 rounded text-white ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
      }`}
      onClick={handleSubmit}
      disabled={loading}
    >
      {loading ? 'Submitting...' : 'Submit Order'}
    </button>
  );
}
