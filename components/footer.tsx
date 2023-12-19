{/* Make this component mobile-friendly, otherwise do not add feature. */}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
      <div className="flex justify-between h-[75px] items-center border border-slate-300">
        
        {/* Image */}
        <Link href="/" className="flex w-[10%] ml-8">  
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
                alt="footerText"
                src="/assets/footerText.svg"
                className="ml-[10px]"
              />
          </div>
        </Link>

        {/* Text */}
        <p className="pr-8">
          @2023 - Form | All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer