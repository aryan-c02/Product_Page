
import Image from "next/image"
import Appbar from "@/app/Components/Appbar"
import ProductCard from "@/app/Components/ProductCard"
import ProductDescriptionCard from "@/app/Components/ProductDescriptionCard"
import { ProductDescriptionDetails, ProductCardDetails } from "@/app/data/data"

const ProductPage = () => {

    return (
        <div className="grid grid-cols-10 gap-0 min-h-screen ">
            <div className="col-span-2 h-screen overflow-y-auto">
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







