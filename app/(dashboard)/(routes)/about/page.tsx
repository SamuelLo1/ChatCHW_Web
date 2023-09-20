import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {


  return (
    <div className ="flex items-center justify-evenly "> 
      <div className="mt-24 flex justify-evenly items-center">
        <div className ="mr-20 ">
          <Image
            src = "/assets/nurse.svg"
            height ={660}
            width = {730}
            alt = "image"
            className="bg-center bg-cover"
          />
        </div> 
        <div className = "font-ubuntu align-middle flex-wrap px-36 w-3/5 overflow-wrap">
          <h1 className = "text-5xl text-gray-700 font-bold	mb-6">  ChatCHW   </h1>
          <p className=" text-gray-400 mb-10">
            We understand that CHWs play a vital role in bridging the gap between underserved 
            communities and healthcare services, and we are committed to
            providing them with the tools, resources, and support they 
            need to excel in their mission.
          </p>
             
          <p className=" text-gray-400 mb-10">
            At ChatCHW, we offer a comprehensive platform that equips 
            CHWs with cutting-edge technology and training, 
            enabling them to deliver more efficient and effective care 
            to their communities. 
          </p>
          <Link
            href ="/about"
            className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	"
          >
            Download
          </Link>
          
        </div>
      </div> 
    </div>
  )
}

export default AboutPage;