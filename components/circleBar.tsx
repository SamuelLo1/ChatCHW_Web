"use client"
import Progress from 'react-circle-progress-bar'
import {useState, useEffect} from 'react'

const CircleBar = (maxVal) => {
    const [precent, setPrecent] = useState(0)
    useEffect(()=>{
      setPrecent(maxVal); 
    }, [])
  return (
      <div>
      <Progress progress={precent} reduction={0} strokeWidth={10} transitionDuration={0.8} transitionTimingFunction="linear" className="mb-20"/>
      </div>
    
  )
}

export default CircleBar