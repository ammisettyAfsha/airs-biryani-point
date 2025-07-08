'use client';
import React from 'react';

interface CartButtonProps {
  itemCount: number;
  onClick?: () => void;
}

export default function CartButton({ itemCount, onClick }: CartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800"
    >
      🛒 Cart
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-white text-yellow-700 text-xs font-bold px-2 py-0.5 rounded-full">
          {itemCount}
        </span>
      )}
    </button>
  );
}