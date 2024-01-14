/* RELEASE WHEN DEMO IS READY */

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
            <div className="mt-5 columns-3 flex justify-center">
                <div className="flex p-5 mr-10">
                    <div className="flex justify-center rounded-full h-[83px] w-[83px] bg-[#E1824A] ml-5">
                        <Image 
                            src={"assets/whiteDownload.svg"}
                            height={48}
                            width={48}
                            alt="download button"
                        />
                    </div>
                    <div>
                        <h3 className="ml-5 font-semibold">Download</h3>
                        <p className="ml-5">Download the app for free</p>
                    </div>
                </div>
                <div className="flex p-5 mr-10">
                    <div className="flex justify-center rounded-full h-[83px] w-[83px] bg-[#E1824A] ml-5">
                        <Image 
                            src={"assets/whiteTools.svg"}
                            height={48}
                            width={48}
                            alt="tools"
                        />
                    </div>
                    <div>
                        <h3 className="ml-5 font-semibold">Setup</h3>
                        <p className="ml-5">Takes no more than 5 minutes</p>
                    </div>
                </div>
                <div className="flex p-5">
                    <div className="flex justify-center rounded-full h-[83px] w-[83px] bg-[#E1824A] ml-5">
                        <Image 
                            src={"assets/whiteCheck.svg"}
                            height={48}
                            width={48}
                            alt="checkmark"
                        />
                    </div>
                    <div>
                        <h3 className="ml-5 font-semibold">Use</h3>
                        <p className="ml-5">Begin making a positive impact</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default DemoPage;