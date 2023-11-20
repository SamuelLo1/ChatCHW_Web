
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
    <hr className="border-y-1 border-slate-700"></hr>
      <div className="flex justify-between items-center w-[97%] mx-auto">
        {/* Image */}
        <Link href="/" className="flex w-[10%]">  
          <div className="relative w-14 h-14">
            <Image
              fill
              alt="Logo"
              src="/assets/navIcon.svg"
            />
          </div>
          <div className="relative w-20 h-10 mt-[10px]">
            <Image
                fill
                alt="footerText"
                src="/assets/footerText.svg"
                className="ml-[10px]"
              />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer