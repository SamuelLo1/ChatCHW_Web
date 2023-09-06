import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center">TITLE</h1>
        <Image 
          src="/assets/doctor.png"
          width={800}
          height={800}
          className="rounded-full"
        />
      </div>
    </div>

  )
}

export default HomePage;