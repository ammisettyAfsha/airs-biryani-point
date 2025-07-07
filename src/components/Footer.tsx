// src/components/Footer.tsx


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} AIRS Biryani Point. All rights reserved.</p>
        <p className="text-xs mt-2">Made with ❤️ by Afsha</p>
      </div>
    </footer>
  );
}
