import React from 'react'

import Link from 'next/link';   // react component to provide client side navigation between routes
import Image from 'next/image'; // use for logo

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
  return (
    <div className="
    border-black
    border-solid
    border

    flex
    flex-col
    bg-[#2A8680]
    text-white
    w-full

    ">
      <div className="flex justify-between items-center w-[97%] mx-auto">
        {/* Image */}
        <Link href="/" className="flex w-[10%]">  
        {/* TODO: Add link? Current redirect to homepage */}
          <div className="relative w-14 h-14">
            <Image
              fill
              alt="Logo"
              src="/vercel.svg"
            />
          </div>
        </Link>

        {/* Routes */}
        <div className="">
          <ul className="flex items-center gap-[4vw] ">
          {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                // hover effects and active hover
                className="text-sm group flex w-full"
              >
                <li className="flex items-center flex-1">
                  <a className="hover:text-green-500">{route.label}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      
        {/* Donate Button */}
        <div>
          <button className="bg-[#FFFFFF] text-black px-5 py-2 rounded-full hover:bg-[#87acec]">Donate</button>
        </div>

        
      </div>
    </div>
  )
}

export default NavigationBar;