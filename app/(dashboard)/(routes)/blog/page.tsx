import Image from "next/image";

const BlogPage = () => {
    return ( 
        <div>
            <div className="flex pl-10 pr-10 mt-[4%] justify-around ">
                {/* Left */}
                <div className="w-[45%] text-[#505D68]">
                    {/* Title Text */}
                    <div>
                        <h1 className="font-bold text-4xl">
                            Why people {/*<br />*/} love ChatCHW
                        </h1>
                    </div>

                    {/* Paragraph Text */}
                    <div className="pt-3">
                        <p className="">
                            At ChatCHW, we measure our success by the
                            positive outcomes achieved by CHWs and the
                            communities they serve. By equipping CHWs with
                            the resources and support they need, we aim to:
                        </p>
                    </div>

                    {/* Bullet points */}
                    <div className="pt-3">
                        <ul className="list-outside list-disc">
                            {/* TODO: Add number bullet points */}
                            <li className="pt-2">Improve healthcare access and quality in underserved communities</li>
                            <li className="pt-2">Reduce health disparities and imrpove health equity</li>
                            <li className="pt-2">Enchance the overall well-being and health outcomes of individuals and families</li>
                            <li className="pt-2">Strengthen community resilience and self-sufficiency</li>
                        </ul>
                    </div>
                </div>

                {/* Boxes (Right) */}
                <div className="w-[45%]">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Box 1 */}
                        <div className="bg-[#FFD6B9]">
                            {/* Div surrounding text */}
                            <div className="ml-2 mr-2 text-center mt-5 mb-3">
                                <div className="flex justify-center">
                                    <Image 
                                        src={"assets/quote.svg"}
                                        height={50}
                                        width={50}
                                        alt="quote"
                                    />
                                </div>
                                <p className="mt-2">
                                    Testimonial Text Testimonial Text 
                                </p>
                                <p className="mt-2 text-[#505D68]">
                                    Testimonial Name
                                </p>
                                <p className="mt-2 text-[#505D68] text-sm">
                                    Job title
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFD6B9]">
                            {/* Div surrounding text */}
                            <div className="ml-2 mr-2 text-center mt-5 mb-3">
                                <div className="flex justify-center">
                                    <Image 
                                        src={"assets/quote.svg"}
                                        height={50}
                                        width={50}
                                        alt="quote"
                                    />
                                </div>
                                <p className="mt-2">
                                    Testimonial Text
                                </p>
                                <p className="mt-2 text-[#505D68]">
                                    Testimonial Name
                                </p>
                                <p className="mt-2 text-[#505D68] text-sm">
                                    Job title
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFD6B9]">
                            {/* Div surrounding text */}
                            <div className="ml-2 mr-2 text-center mt-5 mb-3">
                                <div className="flex justify-center">
                                    <Image 
                                        src={"assets/quote.svg"}
                                        height={50}
                                        width={50}
                                        alt="quote"
                                    />
                                </div>
                                <p className="mt-2">
                                    Testimonial Text Testimonial Text Testimonial Text
                                </p>
                                <p className="mt-2 text-[#505D68]">
                                    Testimonial Name
                                </p>
                                <p className="mt-2 text-[#505D68] text-sm">
                                    Job title
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFD6B9]">
                            {/* Div surrounding text */}
                            <div className="ml-2 mr-2 text-center mt-5 mb-3">
                                <div className="flex justify-center">
                                    <Image 
                                        src={"assets/quote.svg"}
                                        height={50}
                                        width={50}
                                        alt="quote"
                                    />
                                </div>
                                <p className="mt-2">
                                    Testimonial Text Testimonial Text Testimonial Text Testimonial Text
                                </p>
                                <p className="mt-2 text-[#505D68]">
                                    Testimonial Name
                                </p>
                                <p className="mt-2 text-[#505D68] text-sm">
                                    Job title
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogPage;