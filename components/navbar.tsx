"use client"

/*
  Top navigation bar created by Timothy
  TODO: Fix hydration error: could do in another page
*/


import React from 'react'

import Link from 'next/link';   // React component to provide client side navigation between routes
import Image from 'next/image'; // Logo
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "About",
    href: "/about",
    color: "text-white-100",
  },
  {
    label: "Blog",
    href: "/blog",
    color: "text-white-100",
  },
  {
    label: "Demo",
    href: "/demo",
    color: "text-white-100",
  },
  {
    label: "Contact",
    href: "/contact",
    color: "text-white-100",
  },
]

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className="
    flex
    flex-col
    bg-[#2A8680]
    text-white
    w-full

    ">
      <div className="flex justify-between items-center w-[97%] mx-auto">
        {/* Image */}
        <Link href="/" className="flex w-[10%]">  
          <div className="relative w-14 h-14">
            <Image
              fill
              alt="Logo"
              src="/vercel.svg"
            />
          </div>
        </Link>

        {/* Routes */}
        <div className="pr-10 ml-auto ">
          <ul className="flex items-center gap-[4vw] ">
          {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn("text-sm group flex w-full", pathname === route.href ? "text-decoration-line: underline" : "")}
              >
                <li className="flex items-center flex-1">
                  <a className="hover:text-[#87acec] font-bold">{route.label}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      
        {/* Donate Button */}
        <div>
          <button className="bg-[#FFFFFF] text-[#2A8680] px-6 py-1 rounded-full hover:bg-[#87acec] font-bold">Donate</button>
        </div>

        
      </div>
    </div>
  )
}

export default NavigationBar;