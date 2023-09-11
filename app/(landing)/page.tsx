import Image from "next/image";

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
      <div className="flex items-center justify-evenly">
        {/*SlideShow*/ }

        <div className="max-w-[650px] h-[450px] py-16 px-4 "> 
        
            <Image
            src={slides[1].url}
            height={600}
            width={400}
            alt = "image"
            className=' border-8 border-orange-500 w-full h-full bg-center bg-cover duration-500 '

          />
  
        </div>


        <div className="align-middle flex-wrap ml-4 w-4/12 overflow-wrap " > 
           <h1 className="	text-7xl tracking-wide text-gray-800 ">Empowering community health workers</h1>
        </div> 

         
      </div>
      <div className ="w-full "> 
          <section className="text-center px-36 text-5xl font-bold text-gray-700">
            <h1> Facilitating Community</h1>
          </section>

          <section className="text-gray-600 text-center py-16 px-72 flex-wrap ">
            <p>Delivering innovative solutions and fostering collaboration to achieve lasting positive impact and sustainable growth. 
              We offer a comprehensive platform that equips CHWs with cutting-edge technology and training, enabling them to deliver 
              more efficient and effective care to their communities.</p>
          </section>
      </div> 
    </div>
    
  )
}

export default HomePage;