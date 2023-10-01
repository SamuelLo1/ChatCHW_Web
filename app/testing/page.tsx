"use client"
import Progress from 'react-circle-progress-bar'
import React from 'react'

const page = () => {
  const percentage = 66;
  return (
    
    <div>
      <div className="w-1/2">
      <Progress progress={45} transitionDuration/>
      </div>
    </div>
  )
}

export default page