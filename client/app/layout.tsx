import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: '400' , subsets: ['latin'] })
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (        
    <ClerkProvider>
      <html lang="en" className={poppins.className}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}