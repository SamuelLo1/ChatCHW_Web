const BlogPage = () => {
    return ( 
        <div>
            {/* Left */}
            <div className="border border-black w-[45%] ml-[10%] mt-[5%] text-[#505D68]">
                {/* Title Text */}
                <div>
                    <h1 className="font-bold text-4xl">
                        Why people love ChatCHW
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
                    <ul className="list-outside">
                        <li className="pt-2">Improve healthcare access and quality in underserved communities</li>
                        <li className="pt-2">Reduce health disparities and imrpove health equity</li>
                        <li className="pt-2">Enchance the overall well-being and health outcomes of individuals and families</li>
                        <li className="pt-2">Strengthen community resilience and self-sufficiency</li>
                    </ul>
                </div>
            </div>

            {/* Boxes (Right) */}
            <div>
                
            </div>

        </div>
     );
}
 
export default BlogPage;