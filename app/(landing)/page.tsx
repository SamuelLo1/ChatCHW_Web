import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

  return (
    <div>
      {/* Top Portion */}
      <div className="grid lg:grid-cols-2 mt-10">
        {/* SlideShow */ }
        <div className="flex justify-center"> 
          <Image
            src={"/assets/home.svg"}
            height={347}
            width={379}
            alt="Three doctors"
            className=""
          />
        </div>

        <div className="flex items-center text-center"> 
           <h1 className="sm:pt-5 md:pt-2 font-ubuntu text-7xl text-gray-600 ">
            Empowering community health workers
           </h1>
        </div> 
      </div>
      
      {/* Second Portion */}
      <div className="w-full mb-32"> 
          <section className="font-ubuntu text-center px-36 pt-6 text-5xl font-bold text-gray-600 mt-5">
            <h1> Facilitating Community</h1>
          </section>

          <section className="flex text-gray-400 font-ubuntu text-center items-center px-36">
            <p className="pt-8">
              Delivering innovative solutions and fostering collaboration to achieve lasting positive impact and sustainable growth. 
              We offer a comprehensive platform that equips CHWs with cutting-edge technology and training, enabling them to deliver 
              more efficient and effective care to their communities.
            </p>
          </section>
      </div> 

      {/* Third Portion */}
      <div className ="flex items-center justify-evenly"> 
        <div className ="hidden md:flex mr-20 ">
          <Image
            src = "/assets/nurse.svg"
            height ={547}
            width = {810}
            alt = "image"
            className="bg-center bg-cover"
          />
        </div> 
        <div className = "font-ubuntu align-middle flex flex-wrap w-1/2 overflow-wrap mb-10">
          <h1 className = "text-3xl text-gray-800 font-bold	mb-6"> 
            Who we are   
          </h1>
          <p className=" text-gray-500 mb-10">
            ChatCHW is dedicated to supporting and empowering community health workers (CHWs)
            in their crucial role within healthcare ecosystems by providing a platform to help
            diagnose and treat individuals. 
          </p>
          <Link
            href ="/about"
            className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded bg-emerald-400"
          >
            <p className="text-center ml-auto mr-auto">
              About Us
            </p>
          </Link>
          
        </div>
      </div>

      <div className = "flex items-center justify-evenly mb-32 md:ml-5 lg:ml-10">
        <div className="font-ubuntu align-middle flex flex-wrap w-1/2 overflow-wrap">
          <h1 className = "text-3xl text-gray-800 font-bold	mb-6 sm:pt-20">
            Problem we are solving
          </h1>
          <p className=" text-gray-500 mb-10">
            We understand that CHWs play a vital role in bridging the gap between 
            underserved communities and healthcare services, and we are
            committed to providing them with the tools, resources,
            and support they need to excel in their mission.
          </p>
          <Link
            href ="/about"
            className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded bg-emerald-400"
          >
            Learn More
          </Link>
        </div>
        <div className="hidden md:flex">
          <Image
            src = "/assets/lab.svg"
            height ={600}
            width = {870}
            alt = "image"
            className="bg-center bg-cover hidden md:flex"
          />
        </div> 
       
      </div>
      
      <div className="font-ubuntu align-middle mb-5">
        <h1 className="flex justify-center text-5xl font-bold mb-8 text-gray-700">
          Features
        </h1>
        {/* CHECK px-96, typo on text-gray-700 */}
        <section className="flex ml-auto mr-auto text-2xl font-bold text-center w-[75%] text-gray-700">
          ChatCHW envisions healthier, more vibrant communities where everyone has the opportunity to thrive.
        </section>
      </div>

      <div className="flex items-center justify-evenly mb-24"> 
        <div>
          {/* CONVERT TO TEXT */}
          <Image 
            src="assets/steps.svg"
            width={375}
            height={670}
            alt="deviceTest"
          />
          
        </div>
        <div className="">
          <Image 
            src="assets/device.svg"
            width={375}
            height={670}
            alt="device"
          />
          <div className="relative"> 
           <Image 
            src="assets/deviceTest.svg"
            width={300}
            height={670}
            alt="deviceTest"
            className="absolute bottom-96 ml-10 "
            />
            <Link
              href ="/about"
              className="absolute hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	left-24 bottom-80"
            >
              About Us
            </Link>
          </div>
          
        </div>
      </div> 
    </div>

    
    
  )
}
//add overlay on bottom images
export default HomePage;