"use client"
import Progress from 'react-circle-progress-bar'
import {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';


//import 'aos/dis/aos.css'


const page = () => {
  // I also want the percentage to change

  //Was able to figure out how to manage state and only animate when user is in viewport
  const { ref, inView} = useInView({
    threshold: 0,
  });
  const [precent, setPrecent] = useState(0)
  useEffect(() => {
    let currentPercent = 0;
    const targetPercent = 90; // The target percentage to reach
    const duration = 2000; // 2 seconds in milliseconds
    const interval = (duration / targetPercent) * 5; // Calculate the interval for each increment

    if (inView) {
      const intervalId = setInterval(() => {
        currentPercent += 5;
        if (currentPercent >= targetPercent) {
          currentPercent = targetPercent;
          clearInterval(intervalId);
        }
        setPrecent(currentPercent);
      }, interval);
    } else {
      setPrecent(0);
      
    }
    
 // Cleanup the interval on component unmount
  }, [inView]);

  
  return (
    <div className="flex-row justify-evenly items-center ">
      <div className="">
      <Progress progress={precent} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="linear" className="mb-20 font-bold" />
      <Progress progress={precent} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="linera" className="mb-20"/>
      <Progress progress={precent} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="linear" className="mb-20"/>
      <Progress progress={precent} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="linear" className="mb-20"/>
      <Progress progress={precent} background={"#a9a9a9"} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="ease" className="mb-20" />
      <Progress ref={ref} background={"#a9a9a9"} gradient={[
  { stop: 0.0, color: '#FFA500' }, // Orange color at the start
  { stop: 1, color: '#FF4500' },   // Darker shade of orange at the end
]} progress={precent} reduction={0} strokeWidth={10} transitionDuration={2} transitionTimingFunction="ease" className="mb-5 font-bold" />
      </div>
      
      <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
   
    </div>
  )
}

export default page