import { Inter } from 'next/font/google'
import './globals.scss'
import StoreProvider from '@/components/redux/StoreProvider'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'iShop',
  description: 'power by w3codingclub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider children={children} />
      </body>
    </html>
  )
}
