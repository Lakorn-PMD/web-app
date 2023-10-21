import { Kanit } from 'next/font/google';
import './globals.css'

import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import Navbar from './components/Navbar';

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Lakorn PMD',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={kanit.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
