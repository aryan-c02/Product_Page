
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
    your_cost: 300,
    msrp: 400,
}

const ProductPage = () => {

    return (
        <div className="grid grid-cols-10 gap-0 min-h-screen bg-green-600">
            <div className="col-span-2 h-screen ">
                <Appbar />
            </div>
            <div className="col-span-8 bg-[#E3E6EC] pt-6 pb-4 overflow-scroll pl-2 pr-1">
                <div>
                    <span>Discover Products /</span>
                    <span>Action Camera Ultra HD1080P...</span>
                </div>

                <div className="flex items-center justify-center gap-2  bg-[#FAFAFB] mt-6 w-[93px] h-[40px]">
                    <button className="flex bg-white  py-2 px-4 border shadow">
                        <div className="w-6">
                            <Image src="/arrow-right-icon.svg" alt="arrow-icon" width={24} height={24} />
                        </div>
                        <div className="h-6">Back</div>
                    </button>
                </div>
                <div>
                    <ProductCard {...ProductCardDetails} />
                </div>
                <div>
                    <ProductDescriptionCard {...ProductDescriptionDetails} />
                </div>
            </div>

        </div>
    )

}

export default ProductPage







