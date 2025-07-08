'use client';
import React from 'react';
import Image from 'next/image';

const biryanis = [
  { name: 'Veg Biryani', price: '$9.99', image: '/veg.avif' },
  { name: 'Chicken Biryani', price: '$12.99', image: '/chicken.png' },
  { name: 'Prawns Biryani', price: '$14.99', image: '/prawns.png' },
];

export default function MenuPreview() {
  return (
    <section className="bg-white p-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Specialties</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {biryanis.map((item, i) => (
          <div key={i} className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={400} // ✅ Required
              height={250} // ✅ Required
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
