import Image from "next/image";

const DemoPage = () => {
    return ( 
        <div>
            {/* TITLE */}
            <h1 className="border border-black text-center mt-5 font-bold text-[#505D68] text-6xl leading-[64px]">
                How ChatCHW Works
            </h1>

            {/* IMAGE */}
            <div className="mt-5 mr-auto ml-auto border border-black w-[60%] h-[15rem] text-center">
                VIDEO PLACEHOLDER
            </div>

            {/* THREE POINTS */}
            <div className="mt-5 columns-3 text-center border border-black">
                <div className="border border-black">
                    <h3>Download</h3>
                    <p>Download the app for free</p>
                </div>
                <div className="border border-black">
                    <h3>Setup</h3>
                    <p>Takes no longer than 5 minutes</p>
                </div>
                <div className="border border-black">
                    <h3>Use</h3>
                    <p>Begin making a positive impact</p>
                </div>
            </div>

        </div>
     );
}
 
export default DemoPage;