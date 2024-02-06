
import Image from "next/image"
import AppbarButtonComponent from "./AppbarButtonComponent"
import { ButtonArray } from "../data/data"


const Appbar = () => {
    return (

        <div className="flex flex-col justify-center items-center  mt-10 ">
            <div className="mr-40">
                <Image src='/sellRaze-logo.png' alt="sellRaze-logo" width={56} height={56} />
            </div>
            <div className="mt-6 mr-20">
                <div className="text-lg font-medium text-[#667385]"> Welcome  Back,</div>
                <div className="text-2xl font-medium text-[#080C10]"> !HELP</div>
            </div>
            <div>

            </div>

            <div className="mt-6">
                <button type="button" className="w-52 flex items-center justify-between items-center gap-2 py-2.5 px-2.5  text-sm font-medium text-gray-900 focus:outline-none bg-[#E3E6EC] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">
                    <span >
                        <Image src="/store-icon.svg" alt="store-icon" width={24} height={24} />
                    </span>
                    <span className="text-[#667385] text-base font-normal">
                        Select Style
                    </span>
                    <span >
                        <Image src="/arrow-down-icon.svg" alt="company-icon" width={20} height={20} />
                    </span>
                </button>
            </div>


            <div className="mt-3">
                <button type="button" className="w-52 h-12 flex items-center pl-4 gap-5 text-gray-900 focus:outline-none bg-white rounded-lg border border-none hover:bg-[#199DFD14] hover:text-blue-700 focus:z-10 ">
                    <span >
                        <Image src={"/bell-icon.png"} alt="company-icon" width={20} height={20} />
                    </span>
                    <span className="text-[#667385] capitalize text-base font-normal">
                        Notifications
                    </span>
                </button>
            </div>
            <div className="mt-8 mr-40  font-semibold text-base text-[#667385]">
                Menu
            </div>

            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                {
                    ButtonArray.length > 0 && ButtonArray.map((data, index) => {
                        return (
                            <div key={index}>
                                <AppbarButtonComponent src={data.src} title={data.title} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="mr-16 mt-32 w-32">
                <button className="flex bg-white rounded-lg  py-2 border shadow flex pl-2 gap-2 rounded bg-[#FAFAFB] mt-6 w-full h-[40px]">
                    <div className="w-6">
                        <Image src="/log-out-icon.svg" alt="arrow-icon" width={30} height={30} />
                    </div>
                    <div className="h-6 color-[#080C10B8] text-base font-medium text-[#667385]">Log Out</div>
                </button>
            </div>
        </div>

    )

}

export default Appbar