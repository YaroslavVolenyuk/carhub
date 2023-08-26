import './globals.css';
import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover best cars in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
