
'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { useState } from 'react';


import {RxDotFilled, RxDot} from 'react-icons/rx'
import CircleBar from '@/components/circleBar';

const AboutPage = () => {
  

  const slides = [
    {
      url : "/assets/tech-doc.jpg"
    },
    {
      url : "/assets/tech.jpg"
    },
    {
      url : "/assets/nurse.svg"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  //traverse through from left side
  const prevSlide =() =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  //traverse from right side
  const nextSlide =() =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0: currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div>
      <div className ="flex items-center justify-evenly relative sm:pb-10"> 

        <div className="mt-24 flex justify-evenly items-center ">

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
              className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400"
            >
              Download
            </Link>
            
          </div>

          {/* Slides */}
          <div className ="group relative py-16 px-4">
            <Image
              src = {slides[currentIndex].url}
              height ={660}
              width = {800}
              alt = "image"
              className="rounded-md shadow-xl bg-cover duration-500"
            />
            {/* left arrow */}
            <div className='hidden group-hover:block -translate-x-0 absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-black/50 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>

            <div className="flex top-4 justify-center py-2">
              {slides.map((slide,slideIndex) => (
                <div 
                  key = {slideIndex}
                  onClick ={()=>goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  {currentIndex == slideIndex ? (
                  <>
                  <RxDot/>
                  </>
                  ):
                  (
                  <>
                  <RxDotFilled />
                  </>
                  )
                  }
                </div>
              ))}
            </div>
          </div> 
      </div> 

      </div>

      <div className ="flex items-center justify-evenly"> 
        <div className="ml-10 hidden md:flex">
          <Image
            src = "/assets/mask.svg"
            height ={424}
            width = {600}
            alt = "image"
            className="bg-center bg-cover px-5"
          />
        </div> 

        <div className = "font-ubuntu align-middle flex-wrap mr-10 w-1/2 overflow-wrap">
          <h1 className = "text-4xl text-gray-700 font-bold	mb-6">  Unique Attributes   </h1>
          <p className=" text-gray-500 mb-10">
            ChatCHW’s mission is to strengthen the impact of community
            health workers by providing comprehensive support services, 
            technology solutions, and educational resources. We believe 
            that empowered CHWs can drive positive change in healthcare 
            outcomes, reduce health disparities, and create healthier, 
            more resilient communities.
          </p>
          <div className="md:flex justify-evenly sm:grid sm:grid-cols-1">
            <div className="px-1/3">
              <Image
                src = "/assets/icons.svg"
                height ={50}
                width = {50}
                alt = "icon"
                className="mb-2"
              />
              <h1 className="flex-wrap px-4 w-48 mb-2 text-gray-700 text-lg font-medium">AI</h1>
              <p className="flex-wrap px-4 w-48 text-gray-500 font-light">
                Strengthens the diagnosis 
                and treatment path
              </p>

            </div>
            
            <div className="px-1/3">
              <Image
                src = "/assets/comIcon.svg"
                height ={50}
                width = {50}
                alt = "icon"
                className="mb-2"
              />
              <h1 className="flex-wrap px-4 w-48 mb-2 text-gray-700 text-lg font-medium">Community</h1>
              <p className="flex-wrap px-4 w-48 text-gray-500 font-light">
                Strengthens the diagnosis 
                and treatment path
              </p>
            </div>

            <div className="px-1/3">
              <Image
                src = "/assets/bulbIcon.svg"
                height ={50}
                width = {50}
                alt = "icon"
                className="mb-2"
              />
              <h1 className="flex-wrap px-4 w-48 mb-2 text-gray-700 text-lg font-medium">Up-to-date</h1>
              <p className="flex-wrap px-4 w-48 text-gray-500 font-light">
                Strengthens the diagnosis 
                and treatment path
              </p>
            </div>

          </div>
        </div>
      </div> 
        
        {/* TODO: Remove comments and replace with actual metrics when product is released and we collect proper data */}
        {/*
        <div className="text-center">           
          <h1 className="text-center mt-20 text-6xl font-bold text-gray-700	"> Our Impact</h1>
          <section className=" items-center mx-96 mt-5 text-gray-400 overflow-wrap ">
            <p>By harnessing the power of technology, we have unlocked a new era of accessible and personalized care.</p>
          </section>
          <div className="flex justify-evenly mt-10"> 
            <div className="group flex-center">
              <CircleBar maxVal={90}/>
              <label className="text-lg text-gray-700 font-semibold"> User Growth</label>
            </div>
            <div className="group flex-center ">
              <CircleBar maxVal={90}/>
              <label className="text-lg text-gray-700 font-semibold"> New Patients</label>
            </div>
            <div className="group flex-center ">
              <CircleBar maxVal={90}/>
              <label className="text-lg text-gray-700 font-semibold"> Using Countries</label>
            </div>
          </div>
          <div className="mt-20">
            <Link
              href ="/about"
              className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	"
            >
              Meet the team
            </Link>
          
          </div> 
        </div>
        */}
    </div>
    
  )
}

export default AboutPage;