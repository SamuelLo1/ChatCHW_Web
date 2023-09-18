import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

  const slides = [
    {
      url: '/assets/doctors.jpg',
    },
    {
      url: '/assets/tech-doc.jpg',
    },
    {
      url: '/assets/tech.jpg',
    },
  ];


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
      <div className = "flex items-center justify-evenly">
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
    </div>

    
    
  )
}
//add overlay on bottom images
export default HomePage;