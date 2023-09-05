import NavigationBar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
    title: "ASHA & AI", 
    description: 'Medical AI to help CHWs'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <main className ="app">
              <NavigationBar />
              {children}
          </main>
        
      </body>
    </html>
  )
}