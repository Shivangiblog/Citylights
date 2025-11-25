import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%20I%20want%20more%20details"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-xl hover:bg-green-600 transition"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
        </a>
      </body>
    </html>
  );
}
