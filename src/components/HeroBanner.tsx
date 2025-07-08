'use client';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-yellow-500 text-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide">
            AIRS <span className="text-yellow-200">Biryani Point</span>
          </h1>
          <p className="italic text-lg text-yellow-100 font-medium drop-shadow-sm">
            ✈️ Fly into <span className="font-bold">Biryani</span>
          </p>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right space-y-2 max-w-md">
          <h2 className="text-lg font-bold uppercase">🥗 We want to serve fresh food</h2>

          <p className="text-sm font-medium">
            🕗 <span className="underline">Taking orders:</span>{' '}
            <span className="font-bold">7am–12pm</span> & <span className="font-bold">2pm–5pm</span>
          </p>
          <p className="text-sm font-medium">
            🚚 <span className="underline">Delivery:</span>{' '}
            <span className="font-bold">1pm–3pm</span> & <span className="font-bold">6:30pm–7:30pm</span>
          </p>

          {/* Delivery Notices */}
          <div className="text-sm bg-yellow-700 p-3 rounded-md text-white font-semibold shadow-md space-y-2">
            <p className="flex items-start">
              ⚠️&nbsp;
              <span>
                <span className="underline font-bold">Orders after 12pm</span> will be delivered after <span className="font-bold">6:30pm</span>.
              </span>
            </p>
            <p className="flex items-start">
              ⚠️&nbsp;
              <span>
                <span className="underline font-bold">Orders after 6:30pm</span> will be delivered next day after <span className="font-bold">12pm</span>.
              </span>
            </p>
          </div>

          {/* Pickup Message */}
          <div className="mt-2 bg-yellow-700 text-white font-bold p-2 rounded shadow-md text-sm">
            🛍️ <span className="underline">No Delivery. Come and Pick It Up</span> from our location!
          </div>

          {/* Button */}
          <div className="mt-3 flex justify-center md:justify-end gap-3">
            <Link href="/order">
              <button className="bg-white text-yellow-700 font-semibold px-4 py-2 rounded hover:bg-yellow-100">
                Order Online
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
