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

        <div className="max-w-[800px] h-[600px] py-16 px-4"> 
        
            <Image
            src={slides[1].url}
            height={800}
            width={600}
            alt = "image"
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'

          />
  
        </div>


        <div className="align-middle flex-wrap ml-4 w-4/12 overflow-wrap " > 
           <h1 className="font-semibold	text-6xl tracking-wide">Empowering community health workers</h1>
        </div> 

      </div>
    </div>

  )
} 

export default HomePage;