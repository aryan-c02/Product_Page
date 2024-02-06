
import Image from "next/image"
import Appbar from "@/app/Components/Appbar"
import ProductCard from "@/app/Components/ProductCard"
import ProductDescriptionCard from "@/app/Components/ProductDescriptionCard"


const ProductDescriptionDetails = {
    description: "Extreme Sports, Outdoor Sport Activities, Bicycle, Car DVR, Diving, Home security etc",
    feature: ["080P Video Recording", "A water-resistant casing that allows you to film fascinating water sports; water-resistant up to 30 meters under water",
        "High definition screen that displays and replays fascinating videos recorded", "Detachable battery that is easy to replace and prolongs your camera`s service life",
        "Video recording while charging", "Video recording with battery..."],
    rating: 4,
    supplier: "Amy Wholesale Electronic Co.,Ltd",
}

const ProductCardDetails = {
    title: "Action Camera Ultra HD1080P Met Go Extreme Pro Cam Video Camcorder Waterproof DV Sports Cam Underwater 30m Camera Accessories",
    your_cost: 299.01,
    msrp: 399.01,
}

const ProductPage = () => {

    return (
        <div className="grid grid-cols-10 gap-0 min-h-screen ">
            <div className="col-span-2 h-screen">
                <Appbar />
            </div>
            <div className="col-span-8 bg-[#E3E6EC] pt-6 pb-4  pl-3 pr-4">
                <div>
                    <span className="text-[#ABB3BF] uppercase text-lg">Discover Products /</span>
                    <span className="text-[#667385] uppercase text-lg">Action Camera Ultra HD1080P...</span>
                </div>

                <div className="w-24">
                    <button className="flex bg-white rounded-lg  py-2 border shadow flex pl-2 gap-2 rounded bg-[#FAFAFB] mt-6 w-full h-[40px]">
                        <div className="w-6">
                            <Image src="/arrow-right-icon.svg" alt="arrow-icon" width={30} height={30} />
                        </div>
                        <div className="h-6 color-[#080C10B8] text-base">Back</div>
                    </button>
                </div>
                <div className="mt-6">
                    <ProductCard {...ProductCardDetails} />
                </div>
                <div className="mt-6">
                    <ProductDescriptionCard {...ProductDescriptionDetails} />
                </div>
            </div>

        </div>
    )

}

export default ProductPage







