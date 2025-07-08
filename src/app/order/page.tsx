'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SubmitButton from '@/src/components/SubmitButton';

const menuItems = [
  { id: 1, name: 'Veg Biryani', price: 9.99, image: '/veg.avif' },
  { id: 2, name: 'Chicken Biryani', price: 12.99, image: '/chicken.png' },
  { id: 3, name: 'Prawns Biryani', price: 14.99, image: '/prawns.png' },
];

export default function OrderPage() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  const addToCart = (itemId: number) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === itemId);
      if (existing) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: itemId, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemId: number, change: number) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => {
        const menuItem = menuItems.find(m => m.id === item.id);
        return total + (menuItem?.price || 0) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Order Online</h1>

        {/* Cart Button */}
        <button className="relative bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800">
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-yellow-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Product List */}
      <div className="grid gap-6 md:grid-cols-3">
        {menuItems.map(item => (
          <div key={item.id} className="border rounded-lg shadow p-4 text-center">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="h-40 w-full object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-4 rounded"
              onClick={() => addToCart(item.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map(item => {
              const menuItem = menuItems.find(m => m.id === item.id);
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{menuItem?.name}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-300 px-2 rounded"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-4 text-red-500 hover:underline text-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="font-medium">
                    ${(menuItem?.price ?? 0 * item.quantity).toFixed(2)}
                  </span>
                </li>
              );
            })}
            <li className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${getTotal()}</span>
            </li>
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <SubmitButton
        cart={cart}
        menuItems={menuItems}
        getTotal={getTotal}
        clearCart={() => setCart([])}
      />
    </div>
  );
}
