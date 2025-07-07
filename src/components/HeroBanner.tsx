// components/HeroBanner.tsx
import Link from 'next/link';
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white py-9 text-center">
      <h1 className="text-5xl font-bold">AIRS Biryani Point</h1>
      <p className="mt-4 text-2xl italic">Fly into Flavours</p>
      

        <Link href="/order">
            <button className="bg-yellow-600 text-white px-4 py-2 mt-6 rounded hover:bg-yellow-700">
                Order Online
            </button>
        </Link>

    </div>
  )
}
