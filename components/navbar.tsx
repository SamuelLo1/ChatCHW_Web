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
      <div className="px-4 py-2 flex-1">
        <Link href="/" className="flex pl-3 border w-[10%]">  
        {/* TODO: Add Link Href? Current redirect to homepage */}
          <div className="relative w-10 h-10 mr-4">
            <Image
              fill
              alt="Logo"
              src="/vercel.svg"
            />
          </div>
        </Link>

        <div className="space-x-1 border w-[10%] ">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              // hover effects and active hover
              className="text-sm group flex w-full"
            >
              <div className="flex items-center flex-1">
                {route.label}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default NavigationBar;