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
  /*
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
  */
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
      fixed
      z-50
    ">
      <div className="flex justify-between items-center w-[97%] mx-auto">
        {/* Image */}
        <Link href="/" className="flex w-[10%]">  
          <div className="relative w-14 h-14 shrink-0">
            <Image
              fill
              alt="Logo"
              src="/assets/navIcon.svg"
            />
          </div>
          <div className="relative w-20 h-10 mt-[10px] shrink-0">
            <Image
                fill
                alt="LogoText"
                src="/assets/chatchw.svg"
                className="ml-[10px]"
              />
          </div>
        </Link>

        {/* Routes */}
        <div className="pr-10 ml-auto">
          <ul className="flex items-center gap-[2vw] ">
          {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn("text-sm group flex w-full", pathname === route.href ? "text-decoration-line: underline" : "")}
              >
                <li className="flex items-center flex-1 hover:text-[#87acec] font-bold">
                  {route.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      
        {/* Donate Button */}
        <div>
          <a href="https://give.berkeley.edu/giftdetails?fund1=FN1290000">
            <button className="bg-[#FFFFFF] text-[#2A8680] px-6 py-1 rounded-[3px] hover:bg-[#87acec] font-bold">Donate</button>
          </a>
        </div>

        
      </div>
    </div>
  )
}

export default NavigationBar;