import './globals.css';
import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import NavigationBar from "@/components/navbar";

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
     
      <body className={inter.className}>
       <NavigationBar />
        {children}
      </body>
    </html>
  )
}