import Image from "next/image";

const ContactPage = () => {
    return ( 
        <div className="p-5 pr-20 pl-20 font-ubuntu">
            <h1 className="text-center text-6xl font-bold text-[#505D68] mt-10">
                Contact us
            </h1>
            <div className="pb-10">
                <h2 className="text-center text-3xl font-bold text-[#505D68] mt-10">
                    We'd love to hear from you
                </h2>
                <p className="text-center text-[#A1AEB7] mt-5">
                ChatCHW looks forward to hearing from you. 
                </p>
                <div className="mt-3 pl-5 text-[#A1AEB7] w-[70%] lg:w-[50%] ml-auto mr-auto">
                    <ul className="list-disc text-lg">
                        <li className="pt-2">Improve healthcare access and quality in underserved communities</li>
                        <li className="pt-2">Reduce health disparities and imrpove health equity</li>
                        <li className="pt-2">Enchance the overall well-being and health outcomes of individuals and families</li>
                        <li className="pt-2">Strengthen community resilience and self-sufficiency</li>
                    </ul>
                </div>
            </div>

            <div className="text-[#A1AEB7]">
                <div className="flex items-center ml-auto mr-auto w-[70%] lg:w-[50%] pb-5">
                    <Image 
                        src={"/assets/phone.svg"}
                        height={30}
                        width={30}
                        alt="phone"
                    />
                    <p className="pl-3">935-255-7994</p>
                </div>
                <div className="flex items-center ml-auto mr-auto w-[70%] lg:w-[50%]">
                    <Image 
                        src={"/assets/email.svg"}
                        height={30}
                        width={30}
                        alt="phone"
                    />
                    <p className="pl-3">info@ChatCHW.com</p>
                </div>
            </div>
        </div>
     );
}

/*
    Note: Add if we decide to deep the half and half layout
    
    <div className="grid lg:grid-cols-2">
        
        <div className="border border-black">
            <h2 className="text-center text-3xl font-bold text-[#505D68] mt-10">
                We'd love to hear from you
            </h2>
            <p className="text-center text-[#A1AEB7] mt-5">
                ChatCHW looks forward to hearing from you. 
            </p>
            <div className="mt-3 pl-10 text-[#A1AEB7] pb-10">
                <ul className="list-disc text-lg">
                    <li className="pt-2">Improve healthcare access and quality in underserved communities</li>
                    <li className="pt-2">Reduce health disparities and imrpove health equity</li>
                    <li className="pt-2">Enchance the overall well-being and health outcomes of individuals and families</li>
                    <li className="pt-2">Strengthen community resilience and self-sufficiency</li>
                </ul>
            </div>

            <div className="text-[#A1AEB7] pl-10">
                <div className="flex items-center ml-auto mr-auto">
                    <Image 
                        src={"/assets/phone.svg"}
                        height={30}
                        width={30}
                        alt="phone"
                    />
                    <p className="pl-3">935-255-7994</p>
                </div>
                <div className="flex items-center ml-auto mr-auto">
                    <Image 
                        src={"/assets/email.svg"}
                        height={30}
                        width={30}
                        alt="phone"
                    />
                    <p className="pl-3">info@ChatCHW.com</p>
                </div>
            </div>
        </div>
        
        <div className="border border-black">

        </div>
    </div>
*/
 
export default ContactPage;