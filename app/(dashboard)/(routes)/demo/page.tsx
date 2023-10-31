import Image from "next/image";

const DemoPage = () => {
    return ( 
        <div>
            {/* TITLE */}
            <h1 className="border border-black text-center mt-5 font-bold text-[#505D68] text-2xl">
                How ChatCHW Works
            </h1>

            {/* IMAGE */}
            <div className="mt-5 mr-auto ml-auto border border-black w-[60%] h-[15rem] text-center">
                IMAGE PLACEHOLDER
            </div>

            {/* THREE POINTS */}
            <div className="mt-5 columns-3 text-center border border-black">
                <div className="border border-black">
                    Download
                </div>
                <div className="border border-black">
                    Setup
                </div>
                <div className="border border-black">
                    Use
                </div>
            </div>

        </div>
     );
}
 
export default DemoPage;