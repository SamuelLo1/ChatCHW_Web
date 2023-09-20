import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

  return (
    <div>
      <div className="flex items-center justify-evenly ">
        {/*SlideShow*/ }

        <div className="relative max-w-[650px] h-[480px] py-16 px-4 "> 
            
            <Image
            src={"/assets/home.svg"}
            height={347}
            width={379}
            alt = "image"
            className='bg-center bg-cover'

          />
  
        </div>


        <div className="align-middle flex-wrap ml-4 w-4/12 overflow-wrap " > 
           <h1 className="font-ubuntu text-7xl tracking-wide text-gray-600 ">Empowering community health workers</h1>
        </div> 

         
      </div>
      <div className ="w-full mb-32 "> 
          <section className="font-ubuntu text-center px-36 pt-6 text-5xl font-bold text-gray-600">
            <h1> Facilitating Community</h1>
          </section>

          <section className="text-gray-400 font-ubuntu text-center py-16 px-96 flex-wrap ">
            <p>Delivering innovative solutions and fostering collaboration to achieve lasting positive impact and sustainable growth. 
              We offer a comprehensive platform that equips CHWs with cutting-edge technology and training, enabling them to deliver 
              more efficient and effective care to their communities.</p>
          </section>
      </div> 

      <div className ="flex items-center justify-evenly"> 
        <div className ="mr-20 ">
          <Image
            src = "/assets/nurse.svg"
            height ={547}
            width = {810}
            alt = "image"
            className="bg-center bg-cover"
          />
        </div> 
        <div className = "font-ubuntu align-middle flex-wrap px-32 w-1/2 overflow-wrap">
          <h1 className = "text-3xl text-gray-800 font-bold	mb-6">  Who we are   </h1>
          <p className=" text-gray-500 mb-20">
            ChatCHW is dedicated to supporting and empowering community health workers (CHWs)
            in their crucial role within healthcare ecosystems by providing a platform to help
            diagnose and treat individuals. 
          </p>
          <Link
            href ="/about"
            className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	"
          >
            About Us
          </Link>
          
        </div>
      </div> 
      <div className = "flex items-center justify-evenly mb-32">
        <div className="font-ubuntu align-middle flex-wrap px-32 w-1/2 overflow-wrap">
          <h1 className = "text-3xl text-gray-800 font-bold	mb-6">Problem we are solving</h1>
          <p className=" text-gray-500 mb-20">We understand that CHWs play a vital role in bridging the gap between 
            underserved communities and healthcare services, and we are
             committed to providing them with the tools, resources,
              and support they need to excel in their mission.
          </p>
          <Link
            href ="/about"
            className="hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	"
          >
            Learn More
          </Link>
        </div>
        <div>
          <Image
            src = "/assets/lab.svg"
            height ={600}
            width = {870}
            alt = "image"
            className="bg-center bg-cover "
          />
        </div> 
       
      </div>

      <div className="font-ubuntu align-middle mb-5">
        <h1 className="flex justify-center text-5xl font-bold mb-8 text-gray-700"> Features </h1>
        <section className="flex justify-center text-2xl font-bold px-96 text=grau=700">
          ChatCHW envisions healthier, more vibrant communities where everyone has the opportunity to thrive.
        </section>
      </div>

      <div className="flex items-center justify-evenly mb-24"> 
        <div>
          <Image 
            src="assets/steps.svg"
            width={375}
            height={670}
            alt="deviceTest"
          />
          
        </div>
        <div>
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
            className=" absolute hover:bg-emerald-600 px-12 text-slate-50	py-3 rounded  bg-emerald-400	left-24 bottom-80"
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