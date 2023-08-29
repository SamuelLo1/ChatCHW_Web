import React from 'react'
import Link from 'next/link';   // react component to provide client side navigation between routes
import Image from 'next/image'; // use for logo

const routes = [
  {
    label: "About",
    // icon:
    href: "/about",
    color: "text-white-100",
  },
]

const NavigationBar = () => {
  return (
    <div className="">
      <h1>Navigation Bar</h1>
    </div>
  )
}

export default NavigationBar;