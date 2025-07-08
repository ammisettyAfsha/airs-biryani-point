// src/components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>AIRS Biryani Point</p>
          <p>17 Bonnie Blink Dr</p>
          <p>Charlottetown, PE C1C 1J9</p>
          <p>📧 airs.briyanipoint@gmail.com</p>
          <p className="text-green-400 text-sm mt-1 italic">
            ✅ Expect an immediate response to your email.
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-md overflow-hidden shadow-md">
          <iframe
            title="AIRS Biryani Point Location"
            src="https://www.google.com/maps?q=17+Bonnie+Blink+Dr,+Charlottetown,+PE+C1C+1J9&output=embed"
            width="100%"
            height="200"
            allowFullScreen
            loading="lazy"
            className="w-full h-48 border-0"
          ></iframe>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} AIRS Biryani Point. All rights reserved.</p>
        <p className="text-xs mt-2">Made with ❤️ by Afsha</p>
      </div>
    </footer>
  );
}
